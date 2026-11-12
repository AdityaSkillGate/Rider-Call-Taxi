import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { RealFleetCar } from '../../shared/models/taxi.model';

@Component({
  selector: 'app-fleet-showcase',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './fleet-showcase.component.html',
  styleUrls: ['./fleet-showcase.component.scss']
})
export class FleetShowcaseComponent implements OnInit, AfterViewInit, OnDestroy {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);

  @ViewChild('turntableCanvas', { static: false }) canvasRef?: ElementRef<HTMLCanvasElement>;
  @ViewChild('stageContainer', { static: false }) stageRef?: ElementRef<HTMLDivElement>;

  // Active vehicle from the 5 real fleet cars
  activeCarId = signal<string>('car-1');
  viewMode = signal<'exterior' | 'interior' | 'video'>('exterior');
  rotationAngle = signal<number>(0); // 0 to 360 degrees
  isRotatingAuto = signal<boolean>(true);
  hasUserInteracted = signal<boolean>(false);

  // Preloading & rendering state
  loadedFramesCount = signal<number>(0);
  isInitialFrameLoaded = signal<boolean>(false);

  // Video player state
  isVideoPlaying = signal<boolean>(true);
  isVideoMuted = signal<boolean>(true);

  // Drag interaction tracking
  private isDragging = false;
  private startX = 0;
  private startAngle = 0;
  private animationFrameId: any = null;
  private resizeObserver?: ResizeObserver;

  // In-memory image frame cache: key is `${carId}_${frameNum}`
  private frameCache = new Map<string, HTMLImageElement>();
  private currentDrawFrameNum = 1;

  ngOnInit(): void {
    this.startAutoRotationLoop();
    this.preloadCarFrames(this.activeCar);
  }

  ngAfterViewInit(): void {
    this.setupCanvasResizeObserver();
    setTimeout(() => {
      this.renderCurrentAngleFrame();
    }, 40);
  }

  ngOnDestroy(): void {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
    if (this.resizeObserver) {
      this.resizeObserver.disconnect();
    }
  }

  get cars(): RealFleetCar[] {
    return this.taxiData.realFleetCars;
  }

  get activeCar(): RealFleetCar {
    return this.taxiData.realFleetCars.find(c => c.id === this.activeCarId()) || this.taxiData.realFleetCars[0];
  }

  // Calculate current frame index (1 to 100) mapped from 0..360 degrees
  currentFrameNumber = computed<number>(() => {
    const deg = ((this.rotationAngle() % 360) + 360) % 360;
    const frame = Math.floor((deg / 360) * 100) + 1;
    return Math.min(100, Math.max(1, frame));
  });

  // Human-readable angle description in Tamil and English
  angleDescription = computed(() => {
    const deg = Math.round(this.rotationAngle());
    const isTa = this.i18n.isTamil();

    if (deg >= 340 || deg < 20) {
      return isTa ? `${deg}° • முன்பக்கம் (Front)` : `${deg}° • Front View`;
    } else if (deg >= 20 && deg < 70) {
      return isTa ? `${deg}° • வலது முக்கால் (3/4 View)` : `${deg}° • Front 3/4 View`;
    } else if (deg >= 70 && deg < 115) {
      return isTa ? `${deg}° • பக்கவாட்டு (Side Profile)` : `${deg}° • Side Profile`;
    } else if (deg >= 115 && deg < 160) {
      return isTa ? `${deg}° • பின் வலது முக்கால் (Rear 3/4)` : `${deg}° • Rear 3/4 View`;
    } else if (deg >= 160 && deg < 205) {
      return isTa ? `${deg}° • பின்பக்க டிக்கி (Rear & Boot)` : `${deg}° • Rear & Boot`;
    } else if (deg >= 205 && deg < 250) {
      return isTa ? `${deg}° • பின் இடது (Left Rear)` : `${deg}° • Left Rear View`;
    } else if (deg >= 250 && deg < 295) {
      return isTa ? `${deg}° • இடது பக்கவாட்டு (Left Side)` : `${deg}° • Left Side Profile`;
    } else {
      return isTa ? `${deg}° • முன் இடது (Left Front)` : `${deg}° • Left Front View`;
    }
  });

  selectCar(carId: string): void {
    if (this.activeCarId() === carId) return;
    this.activeCarId.set(carId);
    this.isInitialFrameLoaded.set(false);

    const car = this.activeCar;
    this.preloadCarFrames(car);

    if (this.viewMode() === 'video' && !car.videoUrl) {
      this.viewMode.set('exterior');
    }

    setTimeout(() => {
      this.renderCurrentAngleFrame();
    }, 20);
  }

  setViewMode(mode: 'exterior' | 'interior' | 'video'): void {
    this.viewMode.set(mode);
    if (mode === 'interior' || mode === 'video') {
      this.isRotatingAuto.set(false);
    } else {
      setTimeout(() => {
        this.renderCurrentAngleFrame();
      }, 40);
    }
  }

  readonly angleGalleries = [
    { deg: 0, frame: 1, nameEn: 'Front 0°', nameTa: 'முன்பக்கம் 0°', tag: 'Direct Front' },
    { deg: 45, frame: 14, nameEn: '3/4 View 45°', nameTa: 'முக்கால் 45°', tag: 'Right Front' },
    { deg: 90, frame: 25, nameEn: 'Side 90°', nameTa: 'பக்கவாட்டு 90°', tag: 'Side Profile' },
    { deg: 180, frame: 50, nameEn: 'Rear 180°', nameTa: 'பின்பக்கம் 180°', tag: 'Direct Rear' },
    { deg: 270, frame: 75, nameEn: 'Left Side 270°', nameTa: 'இடதுபுறம் 270°', tag: 'Left Profile' }
  ];

  getGalleryThumbUrl(frameNum: number): string {
    return this.getFrameUrl(this.activeCar, frameNum);
  }

  isGalleryThumbActive(deg: number): boolean {
    const current = this.rotationAngle();
    const diff = Math.abs(current - deg);
    return diff <= 18 || diff >= 342;
  }

  setPresetAngle(angle: number): void {
    this.rotationAngle.set(angle);
    this.isRotatingAuto.set(false);
    this.hasUserInteracted.set(true);
    this.renderCurrentAngleFrame();
  }

  toggleAutoRotation(): void {
    this.isRotatingAuto.update(v => !v);
    this.hasUserInteracted.set(true);
  }

  onAngleSliderChange(val: any): void {
    this.rotationAngle.set(Number(val));
    this.isRotatingAuto.set(false);
    this.hasUserInteracted.set(true);
    this.renderCurrentAngleFrame();
  }

  // --- PRELOADING & CANVAS RENDERING ENGINE ---
  private getFrameUrl(car: RealFleetCar, frameIndex: number): string {
    const padded = String(frameIndex).padStart(3, '0');
    return `/${car.framesFolder}/frame_${padded}.png`;
  }

  private preloadCarFrames(car: RealFleetCar): void {
    let count = 0;
    const carId = car.id;

    // Phase 1: Load hero frame 1 immediately
    const heroImg = new Image();
    heroImg.src = this.getFrameUrl(car, 1);
    heroImg.onload = () => {
      this.frameCache.set(`${carId}_1`, heroImg);
      this.isInitialFrameLoaded.set(true);
      count++;
      this.loadedFramesCount.set(count);
      this.renderCurrentAngleFrame();
    };

    // Phase 2: Load key cardinal frames for responsive scrubbing
    const priorityFrames = [10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90, 100];
    priorityFrames.forEach(idx => {
      const key = `${carId}_${idx}`;
      if (this.frameCache.has(key)) return;
      const img = new Image();
      img.src = this.getFrameUrl(car, idx);
      img.onload = () => {
        this.frameCache.set(key, img);
        count++;
        this.loadedFramesCount.set(count);
      };
    });

    // Phase 3: Background load remaining frames smoothly
    const loadRemaining = () => {
      for (let i = 1; i <= 100; i++) {
        const key = `${carId}_${i}`;
        if (!this.frameCache.has(key)) {
          const img = new Image();
          img.src = this.getFrameUrl(car, i);
          img.onload = () => {
            this.frameCache.set(key, img);
            count++;
            this.loadedFramesCount.set(count);
          };
        }
      }
    };

    if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
      (window as any).requestIdleCallback(loadRemaining, { timeout: 1500 });
    } else {
      setTimeout(loadRemaining, 200);
    }
  }

  renderCurrentAngleFrame(): void {
    if (!this.canvasRef || this.viewMode() !== 'exterior') return;
    const canvas = this.canvasRef.nativeElement;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Ensure canvas internal resolution matches CSS client size with DPR
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const targetW = Math.round(canvas.clientWidth * dpr);
    const targetH = Math.round(canvas.clientHeight * dpr);
    if (targetW > 0 && targetH > 0 && (canvas.width !== targetW || canvas.height !== targetH)) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    const car = this.activeCar;
    const targetFrame = this.currentFrameNumber();
    const carId = car.id;

    // Check if target frame is loaded
    let imgToDraw = this.frameCache.get(`${carId}_${targetFrame}`);

    // Fallback: If target frame is still downloading, find closest available frame in cache
    if (!imgToDraw || !imgToDraw.complete) {
      imgToDraw = this.findClosestLoadedFrame(carId, targetFrame);
    }

    if (imgToDraw && imgToDraw.complete) {
      this.drawCarToCanvas(ctx, canvas, imgToDraw);
      this.currentDrawFrameNum = targetFrame;
    }
  }

  private findClosestLoadedFrame(carId: string, targetFrame: number): HTMLImageElement | undefined {
    for (let offset = 1; offset <= 50; offset++) {
      let f1 = targetFrame - offset;
      if (f1 < 1) f1 += 100;
      const img1 = this.frameCache.get(`${carId}_${f1}`);
      if (img1 && img1.complete) return img1;

      let f2 = targetFrame + offset;
      if (f2 > 100) f2 -= 100;
      const img2 = this.frameCache.get(`${carId}_${f2}`);
      if (img2 && img2.complete) return img2;
    }
    return this.frameCache.get(`${carId}_1`);
  }

  private drawCarToCanvas(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, img: HTMLImageElement): void {
    const width = canvas.width;
    const height = canvas.height;

    ctx.clearRect(0, 0, width, height);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, 0, 0, width, height);
  }

  private setupCanvasResizeObserver(): void {
    if (!this.canvasRef || !this.stageRef) return;
    const canvas = this.canvasRef.nativeElement;
    const stage = this.stageRef.nativeElement;

    const updateSize = () => {
      const rect = stage.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const w = Math.round(rect.width * dpr);
      const h = Math.round(rect.height * dpr);

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        this.renderCurrentAngleFrame();
      }
    };

    updateSize();

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        updateSize();
      });
      this.resizeObserver.observe(stage);
    }
  }

  // --- MOUSE & TOUCH DRAG ROTATION ---
  onMouseDown(e: MouseEvent): void {
    if (this.viewMode() !== 'exterior') return;
    this.isDragging = true;
    this.hasUserInteracted.set(true);
    this.startX = e.clientX;
    this.startAngle = this.rotationAngle();
    this.isRotatingAuto.set(false);
  }

  onMouseMove(e: MouseEvent): void {
    if (!this.isDragging || this.viewMode() !== 'exterior') return;
    const deltaX = e.clientX - this.startX;
    let newAngle = (this.startAngle + deltaX * 0.65) % 360;
    if (newAngle < 0) newAngle += 360;
    this.rotationAngle.set(Math.round(newAngle));
    this.renderCurrentAngleFrame();
  }

  onMouseUp(): void {
    this.isDragging = false;
  }

  onTouchStart(e: TouchEvent): void {
    if (this.viewMode() !== 'exterior' || e.touches.length !== 1) return;
    this.isDragging = true;
    this.hasUserInteracted.set(true);
    this.startX = e.touches[0].clientX;
    this.startAngle = this.rotationAngle();
    this.isRotatingAuto.set(false);
  }

  onTouchMove(e: TouchEvent): void {
    if (!this.isDragging || this.viewMode() !== 'exterior' || e.touches.length !== 1) return;
    const deltaX = e.touches[0].clientX - this.startX;
    let newAngle = (this.startAngle + deltaX * 0.75) % 360;
    if (newAngle < 0) newAngle += 360;
    this.rotationAngle.set(Math.round(newAngle));
    this.renderCurrentAngleFrame();
  }

  onTouchEnd(): void {
    this.isDragging = false;
  }

  // Smooth auto-rotation loop
  private startAutoRotationLoop(): void {
    const loop = () => {
      if (this.isRotatingAuto() && !this.isDragging && this.viewMode() === 'exterior') {
        this.rotationAngle.update(a => (a + 0.35) % 360);
        this.renderCurrentAngleFrame();
      }
      this.animationFrameId = requestAnimationFrame(loop);
    };
    this.animationFrameId = requestAnimationFrame(loop);
  }

  // --- VIDEO CONTROLS ---
  toggleVideoPlay(video: HTMLVideoElement): void {
    if (!video) return;
    if (video.paused) {
      video.play();
      this.isVideoPlaying.set(true);
    } else {
      video.pause();
      this.isVideoPlaying.set(false);
    }
  }

  toggleVideoMute(video: HTMLVideoElement): void {
    if (!video) return;
    video.muted = !video.muted;
    this.isVideoMuted.set(video.muted);
  }

  toggleFullscreen(video: HTMLVideoElement): void {
    if (!video) return;
    if (!document.fullscreenElement) {
      video.requestFullscreen().catch(() => {});
    } else {
      document.exitFullscreen().catch(() => {});
    }
  }

  // WhatsApp Booking with Real Car Model & Yellow Plate Registration
  bookCurrentCar(): void {
    const car = this.activeCar;
    const isTa = this.i18n.isTamil();
    const msg = isTa
      ? `வணக்கம், 3D கேலரியில் பார்த்த உங்கள் அசல் ${car.name} (${car.regNumber}) வாகனத்தை ₹${car.ratePerKm}/கி.மீ கட்டணத்தில் புக் செய்ய விரும்புகிறேன்.`
      : `Hello Rider Call Taxi, I would like to book your original ${car.name} (${car.regNumber}) seen on the 360 Studio at ₹${car.ratePerKm}/KM.`;
    const url = this.taxiData.getWhatsAppEnquiryUrl({
      vehicle: `${car.name} (${car.regNumber})`,
      message: msg
    });
    window.open(url, '_blank');
  }
}
