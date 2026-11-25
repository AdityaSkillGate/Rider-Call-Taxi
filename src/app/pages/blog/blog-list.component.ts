import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TaxiDataService } from '../../shared/services/taxi-data.service';
import { TranslationService } from '../../shared/services/translation.service';
import { BLOG_POSTS, BlogPost } from './blog-data';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  public taxiData = inject(TaxiDataService);
  public i18n = inject(TranslationService);
  public posts: BlogPost[] = BLOG_POSTS;

  bookWhatsApp(): void {
    const message = 'Hello Rider Call Taxi, I was reading your travel blog and would like to enquire about taxi booking.';
    const url = `https://wa.me/${this.taxiData.company.rawPhone1}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
}
