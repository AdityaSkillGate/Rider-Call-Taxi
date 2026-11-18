import{$ as nm$1,A as Ol$1,B as aw,C as Js$1,E as Ml$1,F as Ua$1,G as gm$1,H as dm$1,I as Wv$1,J as im,K as h,L as Xs$1,M as RS,N as Rl$1,O as Nl$1,P as SI,S as GI,T as MI,U as ea$1,W as ft,X as m,Y as lm,Z as mC,_ as Al$1,_t as yp$1,at as rp$1,b as EI,c as Nn$1,ct as uw,d as Xt$1,dt as vp$1,et as np$1,f as bn,ft as wl$1,g as zt$1,gt as ye$1,h as wn$1,ht as yI,i as Ft,it as rm,k as O,l as Te,lt as vI,mt as xm$1,nt as pm$1,o as Kt,ot as tT,p as ot,pt as xl$1,q as hm$1,r as Fn$1,rt as qv$1,s as Mt,st as um$1,tt as og,v as CI,vt as z,w as Kv$1,x as Fs$1,y as DI,z as am}from"./main-ELRKV5WA.js";import{n as We$1,t as Le$1}from"./chunk-DhKHneQu.js";import{t as W}from"./chunk-5eWA3BWV.js";var Dd=0;var Kl=1;var Ld=2;var Nr=1;var Fd=2;var ws=3;var ur=0;var Cn=1;var Si=2;var Ci=0;var Ts=1;var Zl=2;var Jl=3;var Ql=4;var Nd=5;var Ur=100;var Ud=101;var kd=102;var zd=103;var Gd=104;var Vd=200;var Hd=201;var Wd=202;var Xd=203;var jl=204;var tu=205;var qd=206;var Yd=207;var $d=208;var Kd=209;var Zd=210;var Jd=211;var Qd=212;var jd=213;var tf=214;var _o=0;var xo=1;var vo=2;var ps=3;var yo=4;var Mo=5;var bo=6;var So=7;var eu=0;var ef=1;var nf=2;var hi=0;var nu=1;var iu=2;var ru=3;var su=4;var au=5;var ou=6;var cu=7;var Ul=300;var hr=301;var kr=302;var Xo=303;var qo=304;var _a=306;var Dr=1e3;var vi=1001;var Co=1002;var cn=1003;var rf=1004;var xa=1005;var ln=1006;var Yo=1007;var dr=1008;var Ln=1009;var lu=1010;var uu=1011;var As=1012;var $o=1013;var di=1014;var fi=1015;var pi=1016;var Ko=1017;var Zo=1018;var Ps=1020;var hu=35902;var du=35899;var fu=1021;var pu=1022;var ti=1023;var yi=1026;var fr=1027;var mu=1028;var Jo=1029;var pr=1030;var Qo=1031;var jo=1033;var va=33776;var ya=33777;var Ma=33778;var ba=33779;var tc=35840;var ec=35841;var nc=35842;var ic=35843;var rc=36196;var sc=37492;var ac=37496;var oc=37488;var cc=37489;var Sa=37490;var lc=37491;var uc=37808;var hc=37809;var dc=37810;var fc=37811;var pc=37812;var mc=37813;var gc=37814;var _c=37815;var xc=37816;var vc=37817;var yc=37818;var Mc=37819;var bc=37820;var Sc=37821;var Cc=36492;var Ec=36494;var wc=36495;var Tc=36283;var Ac=36284;var Ca=36285;var Pc=36286;var Ks=2300;var Eo=2301;var mo=2302;var kl=2303;var zl=2400;var Gl=2401;var Vl=2402;var sf=3200;var Rc=0;var af=1;var Gi=``;var Hn=`srgb`;var Zs=`srgb-linear`;var Js=`linear`;var fe=`srgb`;var go=7680;var of=519;var cf=512;var lf=513;var uf=514;var Oc=515;var hf=516;var df=517;var Ic=518;var ff=519;var pf=35044;var gu=`300 es`;var ui=2e3;var ms=2001;function um(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function hm(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qs(r){return document.createElementNS(`http://www.w3.org/1999/xhtml`,r)}function mf(){let r=Qs(`canvas`);return r.style.display=`block`,r}var hd={};var gs=null;function _u(...r){let t=`THREE.`+r.shift();gs?gs(`log`,t,...r):console.log(t,...r)}function gf(r){let t=r[0];if(typeof t==`string`&&t.startsWith(`TSL:`)){let e=r[1];e&&e.isStackTrace?r[0]+=` `+e.getLocation():r[1]=`Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.`}return r}function kt(...r){r=gf(r);let t=`THREE.`+r.shift();if(gs)gs(`warn`,t,...r);else{let e=r[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...r)}}function zt(...r){r=gf(r);let t=`THREE.`+r.shift();if(gs)gs(`error`,t,...r);else{let e=r[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...r)}}function Br(...r){let t=r.join(` `);t in hd||(hd[t]=!0,kt(...r))}function _f(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var xf={[_o]:xo,[vo]:bo,[yo]:So,[ps]:Mo,[xo]:_o,[bo]:vo,[So]:yo,[Mo]:ps};var Mi=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,t);t.target=null}}};var pn=[`00`,`01`,`02`,`03`,`04`,`05`,`06`,`07`,`08`,`09`,`0a`,`0b`,`0c`,`0d`,`0e`,`0f`,`10`,`11`,`12`,`13`,`14`,`15`,`16`,`17`,`18`,`19`,`1a`,`1b`,`1c`,`1d`,`1e`,`1f`,`20`,`21`,`22`,`23`,`24`,`25`,`26`,`27`,`28`,`29`,`2a`,`2b`,`2c`,`2d`,`2e`,`2f`,`30`,`31`,`32`,`33`,`34`,`35`,`36`,`37`,`38`,`39`,`3a`,`3b`,`3c`,`3d`,`3e`,`3f`,`40`,`41`,`42`,`43`,`44`,`45`,`46`,`47`,`48`,`49`,`4a`,`4b`,`4c`,`4d`,`4e`,`4f`,`50`,`51`,`52`,`53`,`54`,`55`,`56`,`57`,`58`,`59`,`5a`,`5b`,`5c`,`5d`,`5e`,`5f`,`60`,`61`,`62`,`63`,`64`,`65`,`66`,`67`,`68`,`69`,`6a`,`6b`,`6c`,`6d`,`6e`,`6f`,`70`,`71`,`72`,`73`,`74`,`75`,`76`,`77`,`78`,`79`,`7a`,`7b`,`7c`,`7d`,`7e`,`7f`,`80`,`81`,`82`,`83`,`84`,`85`,`86`,`87`,`88`,`89`,`8a`,`8b`,`8c`,`8d`,`8e`,`8f`,`90`,`91`,`92`,`93`,`94`,`95`,`96`,`97`,`98`,`99`,`9a`,`9b`,`9c`,`9d`,`9e`,`9f`,`a0`,`a1`,`a2`,`a3`,`a4`,`a5`,`a6`,`a7`,`a8`,`a9`,`aa`,`ab`,`ac`,`ad`,`ae`,`af`,`b0`,`b1`,`b2`,`b3`,`b4`,`b5`,`b6`,`b7`,`b8`,`b9`,`ba`,`bb`,`bc`,`bd`,`be`,`bf`,`c0`,`c1`,`c2`,`c3`,`c4`,`c5`,`c6`,`c7`,`c8`,`c9`,`ca`,`cb`,`cc`,`cd`,`ce`,`cf`,`d0`,`d1`,`d2`,`d3`,`d4`,`d5`,`d6`,`d7`,`d8`,`d9`,`da`,`db`,`dc`,`dd`,`de`,`df`,`e0`,`e1`,`e2`,`e3`,`e4`,`e5`,`e6`,`e7`,`e8`,`e9`,`ea`,`eb`,`ec`,`ed`,`ee`,`ef`,`f0`,`f1`,`f2`,`f3`,`f4`,`f5`,`f6`,`f7`,`f8`,`f9`,`fa`,`fb`,`fc`,`fd`,`fe`,`ff`];var ml=Math.PI/180;var js=180/Math.PI;function Ea(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(pn[r&255]+pn[r>>8&255]+pn[r>>16&255]+pn[r>>24&255]+`-`+pn[t&255]+pn[t>>8&255]+`-`+pn[t>>16&15|64]+pn[t>>24&255]+`-`+pn[e&63|128]+pn[e>>8&255]+`-`+pn[e>>16&255]+pn[e>>24&255]+pn[n&255]+pn[n>>8&255]+pn[n>>16&255]+pn[n>>24&255]).toLowerCase()}function re(r,t,e){return Math.max(t,Math.min(e,r))}function dm(r,t){return(r%t+t)%t}function gl(r,t,e){return(1-e)*r+e*t}function Ws(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}function On(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error(`THREE.MathUtils: Invalid component type.`)}}var Qt=class r{static{r.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error(`THREE.Vector2: index is out of range: `+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error(`THREE.Vector2: index is out of range: `+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*i+t.x,this.y=s*i+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};var bi=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,a,o){let c=n[i+0],l=n[i+1],u=n[i+2],d=n[i+3],h=s[a+0],f=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||c!==h||l!==f||u!==g){let m=c*h+l*f+u*g+d*_;m<0&&(h=-h,f=-f,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+_*o}else{c=c*p+h*o,l=l*p+f*o,u=u*p+g*o,d=d*p+_*o;let b=1/Math.sqrt(c*c+l*l+u*u+d*d);c*=b,l*=b,u*=b,d*=b}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,s,a){let o=n[i],c=n[i+1],l=n[i+2],u=n[i+3],d=s[a],h=s[a+1],f=s[a+2],g=s[a+3];return t[e]=o*g+u*d+c*f-l*h,t[e+1]=c*g+u*h+l*d-o*f,t[e+2]=l*g+u*f+o*h-c*d,t[e+3]=u*g-o*d-c*h-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,a=t._order,o=Math.cos,c=Math.sin,l=o(n/2),u=o(i/2),d=o(s/2),h=c(n/2),f=c(i/2),g=c(s/2);switch(a){case`XYZ`:this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case`YXZ`:this._x=h*u*d+l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case`ZXY`:this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d-h*f*g;break;case`ZYX`:this._x=h*u*d-l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d+h*f*g;break;case`YZX`:this._x=h*u*d+l*f*g,this._y=l*f*d+h*u*g,this._z=l*u*g-h*f*d,this._w=l*u*d-h*f*g;break;case`XZY`:this._x=h*u*d-l*f*g,this._y=l*f*d-h*u*g,this._z=l*u*g+h*f*d,this._w=l*u*d+h*f*g;break;default:kt(`Quaternion: .setFromEuler() encountered an unknown order: `+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],a=e[1],o=e[5],c=e[9],l=e[2],u=e[6],d=e[10],h=n+o+d;if(h>0){let f=.5/Math.sqrt(h+1);this._w=.25/f,this._x=(u-c)*f,this._y=(s-l)*f,this._z=(a-i)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(u-c)/f,this._x=.25*f,this._y=(i+a)/f,this._z=(s+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(s-l)/f,this._x=(i+a)/f,this._y=.25*f,this._z=(c+u)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-i)/f,this._x=(s+l)/f,this._y=(c+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(re(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+a*o+i*l-s*c,this._y=i*u+a*c+s*o-n*l,this._z=s*u+a*l+n*c-i*o,this._w=a*u-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,s=t._z,a=t._w,o=this.dot(t);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-e;if(o<.9995){let l=Math.acos(o),u=Math.sin(l);c=Math.sin(c*l)/u,e=Math.sin(e*l)/u,this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this._onChangeCallback()}else this._x=this._x*c+n*e,this._y=this._y*c+i*e,this._z=this._z*c+s*e,this._w=this._w*c+a*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};var V=class r{static{r.prototype.isVector3=!0}constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error(`THREE.Vector3: index is out of range: `+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error(`THREE.Vector3: index is out of range: `+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(dd.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(dd.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,a=t.y,o=t.z,c=t.w,l=2*(a*i-o*n),u=2*(o*e-s*i),d=2*(s*n-a*e);return this.x=e+c*l+a*d-o*u,this.y=n+c*u+o*l-s*d,this.z=i+c*d+s*u-a*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,a=e.x,o=e.y,c=e.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return _l.copy(this).projectOnVector(t),this.sub(_l)}reflect(t){return this.sub(_l.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(re(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};var _l=new V;var dd=new bi;var Ht=class r{static{r.prototype.isMatrix3=!0}constructor(t,e,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l)}set(t,e,n,i,s,a,o,c,l){let u=this.elements;return u[0]=t,u[1]=i,u[2]=o,u[3]=e,u[4]=s,u[5]=c,u[6]=n,u[7]=a,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],u=n[4],d=n[7],h=n[2],f=n[5],g=n[8],_=i[0],m=i[3],p=i[6],b=i[1],w=i[4],y=i[7],M=i[2],E=i[5],T=i[8];return s[0]=a*_+o*b+c*M,s[3]=a*m+o*w+c*E,s[6]=a*p+o*y+c*T,s[1]=l*_+u*b+d*M,s[4]=l*m+u*w+d*E,s[7]=l*p+u*y+d*T,s[2]=h*_+f*b+g*M,s[5]=h*m+f*w+g*E,s[8]=h*p+f*y+g*T,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8];return e*a*u-e*o*l-n*s*u+n*o*c+i*s*l-i*a*c}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=u*a-o*l,h=o*c-u*s,f=l*s-a*c,g=e*d+n*h+i*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return t[0]=d*_,t[1]=(i*l-u*n)*_,t[2]=(o*n-i*a)*_,t[3]=h*_,t[4]=(u*e-i*c)*_,t[5]=(i*s-o*e)*_,t[6]=f*_,t[7]=(n*c-l*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,a,o){let c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+t,-i*l,i*c,-i*(-l*a+c*o)+o+e,0,0,1),this}scale(t,e){return Br(`Matrix3: .scale() is deprecated. Use .makeScale() instead.`),this.premultiply(xl.makeScale(t,e)),this}rotate(t){return Br(`Matrix3: .rotate() is deprecated. Use .makeRotation() instead.`),this.premultiply(xl.makeRotation(-t)),this}translate(t,e){return Br(`Matrix3: .translate() is deprecated. Use .makeTranslation() instead.`),this.premultiply(xl.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};var xl=new Ht;var fd=new Ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322);var pd=new Ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function fm(){let r={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===fe&&(i.r=Ni(i.r),i.g=Ni(i.g),i.b=Ni(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===fe&&(i.r=fs(i.r),i.g=fs(i.g),i.b=fs(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Gi?Js:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||`standard`},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Br(`ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().`),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Br(`ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().`),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Zs]:{primaries:t,whitePoint:n,transfer:Js,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Hn},outputColorSpaceConfig:{drawingBufferColorSpace:Hn}},[Hn]:{primaries:t,whitePoint:n,transfer:fe,toXYZ:fd,fromXYZ:pd,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Hn}}}),r}var ie=fm();function Ni(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function fs(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var ts;var wo=class{static getDataURL(t,e=`image/png`){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>`u`)return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ts===void 0&&(ts=Qs(`canvas`)),ts.width=t.width,ts.height=t.height;let i=ts.getContext(`2d`);t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ts}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<`u`&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&t instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&t instanceof ImageBitmap){let e=Qs(`canvas`);e.width=t.width,e.height=t.height;let n=e.getContext(`2d`);n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Ni(s[a]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Ni(e[n]/255)*255):e[n]=Ni(e[n]);return{data:e,width:t.width,height:t.height}}else return kt(`ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.`),t}};var pm=0;var _s=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:pm++}),this.uuid=Ea(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<`u`&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<`u`&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t==`string`;if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:``},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(vl(i[a].image)):s.push(vl(i[a]))}else s=vl(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function vl(r){return typeof HTMLImageElement<`u`&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&r instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&r instanceof ImageBitmap?wo.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(kt(`Texture: Unable to serialize Texture.`),{})}var mm=0;var yl=new V;var Ei=(()=>{class r extends Mi{constructor(e=r.DEFAULT_IMAGE,n=r.DEFAULT_MAPPING,i=vi,s=vi,a=ln,o=dr,c=ti,l=Ln,u=r.DEFAULT_ANISOTROPY,d=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=Ea(),this.name=``,this.source=new _s(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=o,this.anisotropy=u,this.format=c,this.internalFormat=null,this.type=l,this.offset=new Qt(0,0),this.repeat=new Qt(1,1),this.center=new Qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(yl).x}get height(){return this.source.getSize(yl).y}get depth(){return this.source.getSize(yl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){kt(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){kt(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e==`string`;if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:`Texture`,generator:`Texture.toJSON`},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:`dispose`})}transformUv(e){if(this.mapping!==Ul)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Dr:e.x=e.x-Math.floor(e.x);break;case vi:e.x=e.x<0?0:1;break;case Co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Dr:e.y=e.y-Math.floor(e.y);break;case vi:e.y=e.y<0?0:1;break;case Co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}return r.DEFAULT_IMAGE=null,r.DEFAULT_MAPPING=Ul,r.DEFAULT_ANISOTROPY=1,r})();var Re=class r{static{r.prototype.isVector4=!0}constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error(`THREE.Vector4: index is out of range: `+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error(`THREE.Vector4: index is out of range: `+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*i+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,c=t.elements,l=c[0],u=c[4],d=c[8],h=c[1],f=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(u-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(l+1)/2,y=(f+1)/2,M=(p+1)/2,E=(u+h)/4,T=(d+_)/4,x=(g+m)/4;return w>y&&w>M?w<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(w),i=E/n,s=T/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=x/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=T/s,i=x/s),this.set(n,i,s,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-u)*(h-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-_)/b,this.z=(h-u)/b,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=re(this.x,t.x,e.x),this.y=re(this.y,t.y,e.y),this.z=re(this.z,t.z,e.z),this.w=re(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=re(this.x,t,e),this.y=re(this.y,t,e),this.z=re(this.z,t,e),this.w=re(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(re(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};var To=class extends Mi{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ln,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e),this.textures=[];let s=new Ei({width:t,height:e,depth:n.depth}),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:ln,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new _s(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:`dispose`})}};var Bn=class extends To{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}};var ta=class extends Ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ao=class extends Ei{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=cn,this.minFilter=cn,this.wrapR=vi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Pe=class r{static{r.prototype.isMatrix4=!0}constructor(t,e,n,i,s,a,o,c,l,u,d,h,f,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,a,o,c,l,u,d,h,f,g,_,m)}set(t,e,n,i,s,a,o,c,l,u,d,h,f,g,_,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=u,p[10]=d,p[14]=h,p[3]=f,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/es.setFromMatrixColumn(t,0).length(),s=1/es.setFromMatrixColumn(t,1).length(),a=1/es.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(s),d=Math.sin(s);if(t.order===`XYZ`){let h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=-c*d,e[8]=l,e[1]=f+g*l,e[5]=h-_*l,e[9]=-o*c,e[2]=_-h*l,e[6]=g+f*l,e[10]=a*c}else if(t.order===`YXZ`){let h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h+_*o,e[4]=g*o-f,e[8]=a*l,e[1]=a*d,e[5]=a*u,e[9]=-o,e[2]=f*o-g,e[6]=_+h*o,e[10]=a*c}else if(t.order===`ZXY`){let h=c*u,f=c*d,g=l*u,_=l*d;e[0]=h-_*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*u,e[9]=_-h*o,e[2]=-a*l,e[6]=o,e[10]=a*c}else if(t.order===`ZYX`){let h=a*u,f=a*d,g=o*u,_=o*d;e[0]=c*u,e[4]=g*l-f,e[8]=h*l+_,e[1]=c*d,e[5]=_*l+h,e[9]=f*l-g,e[2]=-l,e[6]=o*c,e[10]=a*c}else if(t.order===`YZX`){let h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=_-h*d,e[8]=g*d+f,e[1]=d,e[5]=a*u,e[9]=-o*u,e[2]=-l*u,e[6]=f*d+g,e[10]=h-_*d}else if(t.order===`XZY`){let h=a*c,f=a*l,g=o*c,_=o*l;e[0]=c*u,e[4]=-d,e[8]=l*u,e[1]=h*d+_,e[5]=a*u,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*u,e[10]=_*d+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gm,t,_m)}lookAt(t,e,n){let i=this.elements;return Gn.subVectors(t,e),Gn.lengthSq()===0&&(Gn.z=1),Gn.normalize(),Qi.crossVectors(n,Gn),Qi.lengthSq()===0&&(Math.abs(n.z)===1?Gn.x+=1e-4:Gn.z+=1e-4,Gn.normalize(),Qi.crossVectors(n,Gn)),Qi.normalize(),Ya.crossVectors(Gn,Qi),i[0]=Qi.x,i[4]=Ya.x,i[8]=Gn.x,i[1]=Qi.y,i[5]=Ya.y,i[9]=Gn.y,i[2]=Qi.z,i[6]=Ya.z,i[10]=Gn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],u=n[1],d=n[5],h=n[9],f=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],w=n[7],y=n[11],M=n[15],E=i[0],T=i[4],x=i[8],C=i[12],P=i[1],B=i[5],L=i[9],k=i[13],I=i[2],G=i[6],Y=i[10],$=i[14],rt=i[3],Z=i[7],tt=i[11],ot=i[15];return s[0]=a*E+o*P+c*I+l*rt,s[4]=a*T+o*B+c*G+l*Z,s[8]=a*x+o*L+c*Y+l*tt,s[12]=a*C+o*k+c*$+l*ot,s[1]=u*E+d*P+h*I+f*rt,s[5]=u*T+d*B+h*G+f*Z,s[9]=u*x+d*L+h*Y+f*tt,s[13]=u*C+d*k+h*$+f*ot,s[2]=g*E+_*P+m*I+p*rt,s[6]=g*T+_*B+m*G+p*Z,s[10]=g*x+_*L+m*Y+p*tt,s[14]=g*C+_*k+m*$+p*ot,s[3]=b*E+w*P+y*I+M*rt,s[7]=b*T+w*B+y*G+M*Z,s[11]=b*x+w*L+y*Y+M*tt,s[15]=b*C+w*k+y*$+M*ot,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],a=t[1],o=t[5],c=t[9],l=t[13],u=t[2],d=t[6],h=t[10],f=t[14],g=t[3],_=t[7],m=t[11],p=t[15],b=c*f-l*h,w=o*f-l*d,y=o*h-c*d,M=a*f-l*u,E=a*h-c*u,T=a*d-o*u;return e*(_*b-m*w+p*y)-n*(g*b-m*M+p*E)+i*(g*w-_*M+p*T)-s*(g*y-_*E+m*T)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[1],a=t[5],o=t[9],c=t[2],l=t[6],u=t[10];return e*(a*u-o*l)-n*(s*u-o*c)+i*(s*l-a*c)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],a=t[4],o=t[5],c=t[6],l=t[7],u=t[8],d=t[9],h=t[10],f=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=e*o-n*a,w=e*c-i*a,y=e*l-s*a,M=n*c-i*o,E=n*l-s*o,T=i*l-s*c,x=u*_-d*g,C=u*m-h*g,P=u*p-f*g,B=d*m-h*_,L=d*p-f*_,k=h*p-f*m,I=b*k-w*L+y*B+M*P-E*C+T*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/I;return t[0]=(o*k-c*L+l*B)*G,t[1]=(i*L-n*k-s*B)*G,t[2]=(_*T-m*E+p*M)*G,t[3]=(h*E-d*T-f*M)*G,t[4]=(c*P-a*k-l*C)*G,t[5]=(e*k-i*P+s*C)*G,t[6]=(m*y-g*T-p*w)*G,t[7]=(u*T-h*y+f*w)*G,t[8]=(a*L-o*P+l*x)*G,t[9]=(n*P-e*L-s*x)*G,t[10]=(g*E-_*y+p*b)*G,t[11]=(d*y-u*E-f*b)*G,t[12]=(o*C-a*B-c*x)*G,t[13]=(e*B-n*C+i*x)*G,t[14]=(_*w-g*M-m*b)*G,t[15]=(u*M-d*w+h*b)*G,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,a=t.x,o=t.y,c=t.z,l=s*a,u=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,u*o+n,u*c-i*a,0,l*c-i*o,u*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,a){return this.set(1,n,s,0,t,1,a,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,a=e._y,o=e._z,c=e._w,l=s+s,u=a+a,d=o+o,h=s*l,f=s*u,g=s*d,_=a*u,m=a*d,p=o*d,b=c*l,w=c*u,y=c*d,M=n.x,E=n.y,T=n.z;return i[0]=(1-(_+p))*M,i[1]=(f+y)*M,i[2]=(g-w)*M,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(h+p))*E,i[6]=(m+b)*E,i[7]=0,i[8]=(g+w)*T,i[9]=(m-b)*T,i[10]=(1-(h+_))*T,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let s=this.determinantAffine();if(s===0)return n.set(1,1,1),e.identity(),this;let a=es.set(i[0],i[1],i[2]).length(),o=es.set(i[4],i[5],i[6]).length(),c=es.set(i[8],i[9],i[10]).length();s<0&&(a=-a),ai.copy(this);let l=1/a,u=1/o,d=1/c;return ai.elements[0]*=l,ai.elements[1]*=l,ai.elements[2]*=l,ai.elements[4]*=u,ai.elements[5]*=u,ai.elements[6]*=u,ai.elements[8]*=d,ai.elements[9]*=d,ai.elements[10]*=d,e.setFromRotationMatrix(ai),n.x=a,n.y=o,n.z=c,this}makePerspective(t,e,n,i,s,a,o=ui,c=!1){let l=this.elements,u=2*s/(e-t),d=2*s/(n-i),h=(e+t)/(e-t),f=(n+i)/(n-i),g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===ui)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===ms)g=-a/(a-s),_=-a*s/(a-s);else throw new Error(`THREE.Matrix4.makePerspective(): Invalid coordinate system: `+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,i,s,a,o=ui,c=!1){let l=this.elements,u=2/(e-t),d=2/(n-i),h=-(e+t)/(e-t),f=-(n+i)/(n-i),g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===ui)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===ms)g=-1/(a-s),_=-s/(a-s);else throw new Error(`THREE.Matrix4.makeOrthographic(): Invalid coordinate system: `+o);return l[0]=u,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};var es=new V;var ai=new Pe;var gm=new V(0,0,0);var _m=new V(1,1,1);var Qi=new V;var Ya=new V;var Gn=new V;var md=new Pe;var gd=new bi;var xs=(()=>{class r{constructor(e=0,n=0,i=0,s=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,a=s[0],o=s[4],c=s[8],l=s[1],u=s[5],d=s[9],h=s[2],f=s[6],g=s[10];switch(n){case`XYZ`:this._y=Math.asin(re(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,a)):(this._x=Math.atan2(f,u),this._z=0);break;case`YXZ`:this._x=Math.asin(-re(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(c,g),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,a),this._z=0);break;case`ZXY`:this._x=Math.asin(re(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,a));break;case`ZYX`:this._y=Math.asin(-re(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-o,u));break;case`YZX`:this._z=Math.asin(re(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,u),this._y=Math.atan2(-h,a)):(this._x=0,this._y=Math.atan2(c,g));break;case`XZY`:this._z=Math.asin(-re(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,u),this._y=Math.atan2(c,a)):(this._x=Math.atan2(-d,g),this._y=0);break;default:kt(`Euler: .setFromRotationMatrix() encountered an unknown order: `+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return md.makeRotationFromQuaternion(e),this.setFromRotationMatrix(md,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return gd.setFromEuler(this),this.setFromQuaternion(gd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}return r.DEFAULT_ORDER=`XYZ`,r})();var ea=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}};var xm=0;var _d=new V;var ns=new bi;var Ii=new Pe;var $a=new V;var Xs=new V;var vm=new V;var ym=new bi;var xd=new V(1,0,0);var vd=new V(0,1,0);var yd=new V(0,0,1);var Md={type:`added`};var Mm={type:`removed`};var is={type:`childadded`,child:null};var Ml={type:`childremoved`,child:null};var Dn=(()=>{class r extends Mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Ea(),this.name=``,this.type=`Object3D`,this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new V,n=new xs,i=new bi,s=new V(1,1,1);function a(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(a),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Ht}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ea,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.multiply(ns),this}rotateOnWorldAxis(e,n){return ns.setFromAxisAngle(e,n),this.quaternion.premultiply(ns),this}rotateX(e){return this.rotateOnAxis(xd,e)}rotateY(e){return this.rotateOnAxis(vd,e)}rotateZ(e){return this.rotateOnAxis(yd,e)}translateOnAxis(e,n){return _d.copy(e).applyQuaternion(this.quaternion),this.position.add(_d.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(xd,e)}translateY(e){return this.translateOnAxis(vd,e)}translateZ(e){return this.translateOnAxis(yd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?$a.copy(e):$a.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Xs,$a,this.up):Ii.lookAt($a,Xs,this.up),this.quaternion.setFromRotationMatrix(Ii),s&&(Ii.extractRotation(s.matrixWorld),ns.setFromRotationMatrix(Ii),this.quaternion.premultiply(ns.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(zt(`Object3D.add: object can't be added as a child of itself.`,e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Md),is.child=e,this.dispatchEvent(is),is.child=null):zt(`Object3D.add: object not an instance of THREE.Object3D.`,e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Mm),Ml.child=e,this.dispatchEvent(Ml),Ml.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Md),is.child=e,this.dispatchEvent(is),is.child=null,this}getObjectById(e){return this.getObjectByProperty(`id`,e)}getObjectByName(e){return this.getObjectByProperty(`name`,e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,e,vm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xs,ym,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,a=this.matrix.elements;a[12]+=n-a[0]*n-a[4]*i-a[8]*s,a[13]+=i-a[1]*n-a[5]*i-a[9]*s,a[14]+=s-a[2]*n-a[6]*i-a[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e==`string`,i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:`Object`,generator:`Object3D.toJSON`});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type=`InstancedMesh`,s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type=`BatchedMesh`,s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(c=>O(m({},c),{boundingBox:c.boundingBox?c.boundingBox.toJSON():void 0,boundingSphere:c.boundingSphere?c.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(c=>m({},c)),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(c,l){return c[l.uuid]===void 0&&(c[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);let c=this.geometry.parameters;if(c!==void 0&&c.shapes!==void 0){let l=c.shapes;if(Array.isArray(l))for(let u=0,d=l.length;u<d;u++){let h=l[u];a(e.shapes,h)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let c=[];for(let l=0,u=this.material.length;l<u;l++)c.push(a(e.materials,this.material[l]));s.material=c}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let c=0;c<this.children.length;c++)s.children.push(this.children[c].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let c=0;c<this.animations.length;c++){let l=this.animations[c];s.animations.push(a(e.animations,l))}}if(n){let c=o(e.geometries),l=o(e.materials),u=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),_=o(e.nodes);c.length>0&&(i.geometries=c),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),_.length>0&&(i.nodes=_)}return i.object=s,i;function o(c){let l=[];for(let u in c){let d=c[u];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:`dispose`})}}return r.DEFAULT_UP=new V(0,1,0),r.DEFAULT_MATRIX_AUTO_UPDATE=!0,r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0,r})();var Ie=class extends Dn{constructor(){super(),this.isGroup=!0,this.type=`Group`}};var bm={type:`move`};var vs=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ie,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ie,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ie,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:`connected`,data:t}),this}disconnect(t){return this.dispatchEvent({type:`disconnected`,data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!==`visible-blurred`){if(l&&t.hand){a=!0;for(let _ of t.hand.values()){let m=e.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let u=l.joints[`index-finger-tip`],d=l.joints[`thumb-tip`],h=u.position.distanceTo(d.position);l.inputState.pinching&&h>.025?(l.inputState.pinching=!1,this.dispatchEvent({type:`pinchend`,handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=.015&&(l.inputState.pinching=!0,this.dispatchEvent({type:`pinchstart`,handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:`gripUpdated`,data:t,target:this})));o!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(bm)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new Ie;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var vf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};var ji={h:0,s:0,l:0};var Ka={h:0,s:0,l:0};function bl(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var Xt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i==`number`?this.setHex(i):typeof i==`string`&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Hn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ie.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ie.workingColorSpace){return this.r=t,this.g=e,this.b=n,ie.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ie.workingColorSpace){if(t=dm(t,1),e=re(e,0,1),n=re(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=bl(a,s,t+1/3),this.g=bl(a,s,t),this.b=bl(a,s,t-1/3)}return ie.colorSpaceToWorking(this,i),this}setStyle(t,e=Hn){function n(s){s!==void 0&&parseFloat(s)<1&&kt(`Color: Alpha component of `+t+` will be ignored.`)}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,a=i[1],o=i[2];switch(a){case`rgb`:case`rgba`:if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case`hsl`:case`hsla`:if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:kt(`Color: Unknown color model `+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);kt(`Color: Invalid hex color `+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Hn){let n=vf[t.toLowerCase()];return n!==void 0?this.setHex(n,e):kt(`Color: Unknown color `+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Ni(t.r),this.g=Ni(t.g),this.b=Ni(t.b),this}copyLinearToSRGB(t){return this.r=fs(t.r),this.g=fs(t.g),this.b=fs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Hn){return ie.workingToColorSpace(mn.copy(this),t),Math.round(re(mn.r*255,0,255))*65536+Math.round(re(mn.g*255,0,255))*256+Math.round(re(mn.b*255,0,255))}getHexString(t=Hn){return(`000000`+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ie.workingColorSpace){ie.workingToColorSpace(mn.copy(this),e);let n=mn.r,i=mn.g,s=mn.b,a=Math.max(n,i,s),o=Math.min(n,i,s),c,l,u=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=u<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=ie.workingColorSpace){return ie.workingToColorSpace(mn.copy(this),e),t.r=mn.r,t.g=mn.g,t.b=mn.b,t}getStyle(t=Hn){ie.workingToColorSpace(mn.copy(this),t);let e=mn.r,n=mn.g,i=mn.b;return t!==Hn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(ji),this.setHSL(ji.h+t,ji.s+e,ji.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ji),t.getHSL(Ka);let n=gl(ji.h,Ka.h,e),i=gl(ji.s,Ka.s,e),s=gl(ji.l,Ka.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};var mn=new Xt;Xt.NAMES=vf;var Lr=class r{constructor(t,e=25e-5){this.isFogExp2=!0,this.name=``,this.color=new Xt(t),this.density=e}clone(){return new r(this.color,this.density)}toJSON(){return{type:`FogExp2`,name:this.name,color:this.color.getHex(),density:this.density}}};var na=class extends Dn{constructor(){super(),this.isScene=!0,this.type=`Scene`,this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xs,this.environmentIntensity=1,this.environmentRotation=new xs,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}};var oi=new V;var Bi=new V;var Sl=new V;var Di=new V;var rs=new V;var ss=new V;var bd=new V;var Cl=new V;var El=new V;var wl=new V;var Tl=new Re;var Al=new Re;var Pl=new Re;var ir=class r{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),oi.subVectors(t,e),i.cross(oi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){oi.subVectors(i,e),Bi.subVectors(n,e),Sl.subVectors(t,e);let a=oi.dot(oi),o=oi.dot(Bi),c=oi.dot(Sl),l=Bi.dot(Bi),u=Bi.dot(Sl),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;let h=1/d,f=(l*c-o*u)*h,g=(a*u-o*c)*h;return s.set(1-f-g,g,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Di)===null?!1:Di.x>=0&&Di.y>=0&&Di.x+Di.y<=1}static getInterpolation(t,e,n,i,s,a,o,c){return this.getBarycoord(t,e,n,i,Di)===null?(c.x=0,c.y=0,`z`in c&&(c.z=0),`w`in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Di.x),c.addScaledVector(a,Di.y),c.addScaledVector(o,Di.z),c)}static getInterpolatedAttribute(t,e,n,i,s,a){return Tl.setScalar(0),Al.setScalar(0),Pl.setScalar(0),Tl.fromBufferAttribute(t,e),Al.fromBufferAttribute(t,n),Pl.fromBufferAttribute(t,i),a.setScalar(0),a.addScaledVector(Tl,s.x),a.addScaledVector(Al,s.y),a.addScaledVector(Pl,s.z),a}static isFrontFacing(t,e,n,i){return oi.subVectors(n,e),Bi.subVectors(t,e),oi.cross(Bi).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return oi.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),oi.cross(Bi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,a,o;rs.subVectors(i,n),ss.subVectors(s,n),Cl.subVectors(t,n);let c=rs.dot(Cl),l=ss.dot(Cl);if(c<=0&&l<=0)return e.copy(n);El.subVectors(t,i);let u=rs.dot(El),d=ss.dot(El);if(u>=0&&d<=u)return e.copy(i);let h=c*d-u*l;if(h<=0&&c>=0&&u<=0)return a=c/(c-u),e.copy(n).addScaledVector(rs,a);wl.subVectors(t,s);let f=rs.dot(wl),g=ss.dot(wl);if(g>=0&&f<=g)return e.copy(s);let _=f*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),e.copy(n).addScaledVector(ss,o);let m=u*g-f*d;if(m<=0&&d-u>=0&&f-g>=0)return bd.subVectors(s,i),o=(d-u)/(d-u+(f-g)),e.copy(i).addScaledVector(bd,o);let p=1/(m+_+h);return a=_*p,o=h*p,e.copy(n).addScaledVector(rs,a).addScaledVector(ss,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}};var rr=class{constructor(t=new V(Infinity,Infinity,Infinity),e=new V(-Infinity,-Infinity,-Infinity)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ci.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ci.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ci.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=Infinity,this.max.x=this.max.y=this.max.z=-Infinity,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute(`position`);if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,ci):ci.fromBufferAttribute(s,a),ci.applyMatrix4(t.matrixWorld),this.expandByPoint(ci);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Za.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Za.copy(n.boundingBox)),Za.applyMatrix4(t.matrixWorld),this.union(Za)}let i=t.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ci),ci.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(qs),Ja.subVectors(this.max,qs),as.subVectors(t.a,qs),os.subVectors(t.b,qs),cs.subVectors(t.c,qs),tr.subVectors(os,as),er.subVectors(cs,os),Pr.subVectors(as,cs);let e=[0,-tr.z,tr.y,0,-er.z,er.y,0,-Pr.z,Pr.y,tr.z,0,-tr.x,er.z,0,-er.x,Pr.z,0,-Pr.x,-tr.y,tr.x,0,-er.y,er.x,0,-Pr.y,Pr.x,0];return!Rl(e,as,os,cs,Ja)||(e=[1,0,0,0,1,0,0,0,1],!Rl(e,as,os,cs,Ja))?!1:(Qa.crossVectors(tr,er),e=[Qa.x,Qa.y,Qa.z],Rl(e,as,os,cs,Ja))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ci).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ci).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}};var Li=[new V,new V,new V,new V,new V,new V,new V,new V];var ci=new V;var Za=new rr;var as=new V;var os=new V;var cs=new V;var tr=new V;var er=new V;var Pr=new V;var qs=new V;var Ja=new V;var Qa=new V;var Rr=new V;function Rl(r,t,e,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){Rr.fromArray(r,s);let o=i.x*Math.abs(Rr.x)+i.y*Math.abs(Rr.y)+i.z*Math.abs(Rr.z),c=t.dot(Rr),l=e.dot(Rr),u=n.dot(Rr);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>o)return!1}return!0}var je=new V;var ja=new Qt;var Sm=0;var In=class extends Mi{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError(`THREE.BufferAttribute: array should be a Typed Array.`);this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Sm++}),this.name=``,this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=pf,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ja.fromBufferAttribute(this,e),ja.applyMatrix3(t),this.setXY(e,ja.x,ja.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ws(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=On(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ws(e,this.array)),e}setX(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ws(e,this.array)),e}setY(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ws(e,this.array)),e}setZ(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ws(e,this.array)),e}setW(t,e){return this.normalized&&(e=On(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),n=On(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),n=On(n,this.array),i=On(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=On(e,this.array),n=On(n,this.array),i=On(i,this.array),s=On(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:`dispose`})}};var ia=class extends In{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var ra=class extends In{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var He=class extends In{constructor(t,e,n){super(new Float32Array(t),e,n)}};var Cm=new rr;var Ys=new V;var Ol=new V;var Fr=class{constructor(t=new V,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):Cm.setFromPoints(t).getCenter(n);let i=0;for(let s=0,a=t.length;s<a;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ys.subVectors(t,this.center);let e=Ys.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ys,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Ol.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ys.copy(t.center).add(Ol)),this.expandByPoint(Ys.copy(t.center).sub(Ol))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}};var Em=0;var Jn=new Pe;var Il=new Dn;var ls=new V;var Vn=new rr;var $s=new rr;var an=new V;var gn=class r extends Mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Em++}),this.uuid=Ea(),this.name=``,this.type=`BufferGeometry`,this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:Infinity},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(um(t)?ra:ia)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Ht().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Jn.makeRotationFromQuaternion(t),this.applyMatrix4(Jn),this}rotateX(t){return Jn.makeRotationX(t),this.applyMatrix4(Jn),this}rotateY(t){return Jn.makeRotationY(t),this.applyMatrix4(Jn),this}rotateZ(t){return Jn.makeRotationZ(t),this.applyMatrix4(Jn),this}translate(t,e,n){return Jn.makeTranslation(t,e,n),this.applyMatrix4(Jn),this}scale(t,e,n){return Jn.makeScale(t,e,n),this.applyMatrix4(Jn),this}lookAt(t){return Il.lookAt(t),Il.updateMatrix(),this.applyMatrix4(Il.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ls).negate(),this.translate(ls.x,ls.y,ls.z),this}setFromPoints(t){let e=this.getAttribute(`position`);if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let a=t[i];n.push(a.x,a.y,a.z||0)}this.setAttribute(`position`,new He(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&kt(`BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.`),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt(`BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.`,this),this.boundingBox.set(new V(-Infinity,-Infinity,-Infinity),new V(Infinity,Infinity,Infinity));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];Vn.setFromBufferAttribute(s),this.morphTargetsRelative?(an.addVectors(this.boundingBox.min,Vn.min),this.boundingBox.expandByPoint(an),an.addVectors(this.boundingBox.max,Vn.max),this.boundingBox.expandByPoint(an)):(this.boundingBox.expandByPoint(Vn.min),this.boundingBox.expandByPoint(Vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt(`BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.`,this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){zt(`BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.`,this),this.boundingSphere.set(new V,Infinity);return}if(t){let n=this.boundingSphere.center;if(Vn.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){let o=e[s];$s.setFromBufferAttribute(o),this.morphTargetsRelative?(an.addVectors(Vn.min,$s.min),Vn.expandByPoint(an),an.addVectors(Vn.max,$s.max),Vn.expandByPoint(an)):(Vn.expandByPoint($s.min),Vn.expandByPoint($s.max))}Vn.getCenter(n);let i=0;for(let s=0,a=t.count;s<a;s++)an.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(an));if(e)for(let s=0,a=e.length;s<a;s++){let o=e[s],c=this.morphTargetsRelative;for(let l=0,u=o.count;l<u;l++)an.fromBufferAttribute(o,l),c&&(ls.fromBufferAttribute(t,l),an.add(ls)),i=Math.max(i,n.distanceToSquared(an))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&zt(`BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.`,this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){zt(`BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)`);return}let n=e.position,i=e.normal,s=e.uv,a=this.getAttribute(`tangent`);(a===void 0||a.count!==n.count)&&(a=new In(new Float32Array(4*n.count),4),this.setAttribute(`tangent`,a));let o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new V,c[x]=new V;let l=new V,u=new V,d=new V,h=new Qt,f=new Qt,g=new Qt,_=new V,m=new V;function p(x,C,P){l.fromBufferAttribute(n,x),u.fromBufferAttribute(n,C),d.fromBufferAttribute(n,P),h.fromBufferAttribute(s,x),f.fromBufferAttribute(s,C),g.fromBufferAttribute(s,P),u.sub(l),d.sub(l),f.sub(h),g.sub(h);let B=1/(f.x*g.y-g.x*f.y);isFinite(B)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(B),m.copy(d).multiplyScalar(f.x).addScaledVector(u,-g.x).multiplyScalar(B),o[x].add(_),o[C].add(_),o[P].add(_),c[x].add(m),c[C].add(m),c[P].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,C=b.length;x<C;++x){let P=b[x],B=P.start,L=P.count;for(let k=B,I=B+L;k<I;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let w=new V,y=new V,M=new V,E=new V;function T(x){M.fromBufferAttribute(i,x),E.copy(M);let C=o[x];w.copy(C),w.sub(M.multiplyScalar(M.dot(C))).normalize(),y.crossVectors(E,C);let B=y.dot(c[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,B)}for(let x=0,C=b.length;x<C;++x){let P=b[x],B=P.start,L=P.count;for(let k=B,I=B+L;k<I;k+=3)T(t.getX(k+0)),T(t.getX(k+1)),T(t.getX(k+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute(`position`);if(e!==void 0){let n=this.getAttribute(`normal`);if(n===void 0||n.count!==e.count)n=new In(new Float32Array(e.count*3),3),this.setAttribute(`normal`,n);else for(let h=0,f=n.count;h<f;h++)n.setXYZ(h,0,0,0);let i=new V,s=new V,a=new V,o=new V,c=new V,l=new V,u=new V,d=new V;if(t)for(let h=0,f=t.count;h<f;h+=3){let g=t.getX(h+0),_=t.getX(h+1),m=t.getX(h+2);i.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(u),c.add(u),l.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,f=e.count;h<f;h+=3)i.fromBufferAttribute(e,h+0),s.fromBufferAttribute(e,h+1),a.fromBufferAttribute(e,h+2),u.subVectors(a,s),d.subVectors(i,s),u.cross(d),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)an.fromBufferAttribute(t,e),an.normalize(),t.setXYZ(e,an.x,an.y,an.z)}toNonIndexed(){function t(o,c){let l=o.array,u=o.itemSize,d=o.normalized,h=new l.constructor(c.length*u),f=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?f=c[_]*o.data.stride+o.offset:f=c[_]*u;for(let p=0;p<u;p++)h[g++]=l[f++]}return new In(h,u,d)}if(this.index===null)return kt(`BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.`),this;let e=new r,n=this.index.array,i=this.attributes;for(let o in i){let c=i[o],l=t(c,n);e.setAttribute(o,l)}let s=this.morphAttributes;for(let o in s){let c=[],l=s[o];for(let u=0,d=l.length;u<d;u++){let h=l[u],f=t(h,n);c.push(f)}e.morphAttributes[o]=c}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:`BufferGeometry`,generator:`BufferGeometry.toJSON`}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?`BufferGeometry`:this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let c in n){let l=n[c];t.data.attributes[c]=l.toJSON(t.data)}let i={},s=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],u=[];for(let d=0,h=l.length;d<h;d++){let f=l[d];u.push(f.toJSON(t.data))}u.length>0&&(i[c]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let l in i){let u=i[l];this.setAttribute(l,u.clone(e))}let s=t.morphAttributes;for(let l in s){let u=[],d=s[l];for(let h=0,f=d.length;h<f;h++)u.push(d[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let l=0,u=a.length;l<u;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:`dispose`})}};var Bl=new V;var wm=new V;var Tm=new Ht;var li=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Bl.subVectors(n,e).cross(wm.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(Bl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(i,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Tm.getNormalMatrix(t),i=this.coplanarPoint(Bl).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}};var Am=0;var Ui=class extends Mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Am++}),this.uuid=Ea(),this.name=``,this.type=`Material`,this.blending=Ts,this.side=ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=jl,this.blendDst=tu,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xt(0,0,0),this.blendAlpha=0,this.depthFunc=ps,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=of,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=go,this.stencilZFail=go,this.stencilZPass=go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){kt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){kt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t==`string`;e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:`Material`,generator:`Material.toJSON`}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let a=[];for(let o in s){let c=s[o];delete c.metadata,a.push(c)}return a}if(e){let s=i(t.textures),a=i(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Xt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new li().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors==`number`?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Qt().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Qt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:`dispose`})}set needsUpdate(t){t===!0&&this.version++}};var Fi=new V;var Dl=new V;var to=new V;var eo=new V;var sa=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Fi.copy(this.origin).addScaledVector(this.direction,e),Fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Dl.copy(t).add(e).multiplyScalar(.5),to.copy(e).sub(t).normalize(),eo.copy(this.origin).sub(Dl);let s=t.distanceTo(e)*.5,a=-this.direction.dot(to),o=eo.dot(this.direction),c=-eo.dot(to),l=eo.lengthSq(),u=Math.abs(1-a*a),d,h,f,g;if(u>0)if(d=a*c-o,h=a*o-c,g=s*u,d>=0)if(h>=-g)if(h<=g){let _=1/u;d*=_,h*=_,f=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),f=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),f=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),f=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Dl).addScaledVector(to,h),f}intersectSphere(t,e){if(t.radius<0)return null;Fi.subVectors(t.center,this.origin);let n=Fi.dot(this.direction),i=Fi.dot(Fi)-n*n,s=t.radius*t.radius;if(i>s)return null;let a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,a,o,c,l=1/this.direction.x,u=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(s=(t.min.y-h.y)*u,a=(t.max.y-h.y)*u):(s=(t.max.y-h.y)*u,a=(t.min.y-h.y)*u),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(t.min.z-h.z)*d,c=(t.max.z-h.z)*d):(o=(t.max.z-h.z)*d,c=(t.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Fi)!==null}intersectTriangle(t,e,n,i,s){let a=this.origin,o=this.direction,c=o.x,l=o.y,u=o.z,d=t.x-a.x,h=t.y-a.y,f=t.z-a.z,g=e.x-a.x,_=e.y-a.y,m=e.z-a.z,p=n.x-a.x,b=n.y-a.y,w=n.z-a.z,y=Math.abs(c),M=Math.abs(l),E=Math.abs(u),T,x,C,P,B,L,k,I,G,Y,$,rt;if(y>=M&&y>=E?(C=c,L=d,G=g,rt=p,c>=0?(T=l,x=u,P=h,B=f,k=_,I=m,Y=b,$=w):(T=u,x=l,P=f,B=h,k=m,I=_,Y=w,$=b)):M>=E?(C=l,L=h,G=_,rt=b,l>=0?(T=u,x=c,P=f,B=d,k=m,I=g,Y=w,$=p):(T=c,x=u,P=d,B=f,k=g,I=m,Y=p,$=w)):(C=u,L=f,G=m,rt=w,u>=0?(T=c,x=l,P=d,B=h,k=g,I=_,Y=p,$=b):(T=l,x=c,P=h,B=d,k=_,I=g,Y=b,$=p)),C===0)return null;let Z=T/C,tt=x/C,ot=1/C,wt=P-Z*L,Pt=B-tt*L,$t=k-Z*G,Wt=I-tt*G,ae=Y-Z*rt,j=$-tt*rt,st=ae*Wt-j*$t,St=wt*j-Pt*ae,Gt=$t*Pt-Wt*wt;if(i){if(st<0||St<0||Gt<0)return null}else if((st<0||St<0||Gt<0)&&(st>0||St>0||Gt>0))return null;let Mt=st+St+Gt;if(Mt===0)return null;let Yt=ot*(st*L+St*G+Gt*rt);return(Mt>0?Yt<0:Yt>0)?null:this.at(Yt/Mt,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};var ki=class extends Ui{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type=`MeshBasicMaterial`,this.color=new Xt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.combine=eu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var Sd=new Pe;var Or=new sa;var no=new Fr;var Cd=new V;var io=new V;var ro=new V;var so=new V;var Ll=new V;var ao=new V;var Ed=new V;var oo=new V;var Et=class extends Dn{constructor(t=new gn,e=new ki){super(),this.isMesh=!0,this.type=`Mesh`,this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let o=this.morphTargetInfluences;if(s&&o){ao.set(0,0,0);for(let c=0,l=s.length;c<l;c++){let u=o[c],d=s[c];u!==0&&(Ll.fromBufferAttribute(d,t),a?ao.addScaledVector(Ll,u):ao.addScaledVector(Ll.sub(e),u))}e.add(ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(s),Or.copy(t.ray).recast(t.near),!(no.containsPoint(Or.origin)===!1&&(Or.intersectSphere(no,Cd)===null||Or.origin.distanceToSquared(Cd)>(t.far-t.near)**2))&&(Sd.copy(s).invert(),Or.copy(t.ray).applyMatrix4(Sd),!(n.boundingBox!==null&&Or.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Or)))}_computeIntersections(t,e,n){let i,s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,u=s.attributes.uv1,d=s.attributes.normal,h=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,M=w;y<M;y+=3){let E=o.getX(y),T=o.getX(y+1),x=o.getX(y+2);i=co(this,p,t,n,l,u,d,E,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);i=co(this,a,t,n,l,u,d,b,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){let m=h[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let y=b,M=w;y<M;y+=3){let E=y,T=y+1,x=y+2;i=co(this,p,t,n,l,u,d,E,T,x),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let g=Math.max(0,f.start),_=Math.min(c.count,f.start+f.count);for(let m=g,p=_;m<p;m+=3){let b=m,w=m+1,y=m+2;i=co(this,a,t,n,l,u,d,b,w,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function Pm(r,t,e,n,i,s,a,o){let c;if(t.side===Cn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,t.side===ur,o),c===null)return null;oo.copy(o),oo.applyMatrix4(r.matrixWorld);let l=e.ray.origin.distanceTo(oo);return l<e.near||l>e.far?null:{distance:l,point:oo.clone(),object:r}}function co(r,t,e,n,i,s,a,o,c,l){r.getVertexPosition(o,io),r.getVertexPosition(c,ro),r.getVertexPosition(l,so);let u=Pm(r,t,e,n,io,ro,so,Ed);if(u){let d=new V;ir.getBarycoord(Ed,io,ro,so,d),i&&(u.uv=ir.getInterpolatedAttribute(i,o,c,l,d,new Qt)),s&&(u.uv1=ir.getInterpolatedAttribute(s,o,c,l,d,new Qt)),a&&(u.normal=ir.getInterpolatedAttribute(a,o,c,l,d,new V),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let h={a:o,b:c,c:l,normal:new V,materialIndex:0};ir.getNormal(io,ro,so,h.normal),u.face=h,u.barycoord=d}return u}var Po=class extends Ei{constructor(t=null,e=1,n=1,i,s,a,o,c,l=cn,u=cn,d,h){super(null,a,o,c,l,u,i,s,d,h),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Ir=new Fr;var Rm=new Qt(.5,.5);var lo=new V;var ys=class{constructor(t=new li,e=new li,n=new li,i=new li,s=new li,a=new li){this.planes=[t,e,n,i,s,a]}set(t,e,n,i,s,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=ui,n=!1){let i=this.planes,s=t.elements,a=s[0],o=s[1],c=s[2],l=s[3],u=s[4],d=s[5],h=s[6],f=s[7],g=s[8],_=s[9],m=s[10],p=s[11],b=s[12],w=s[13],y=s[14],M=s[15];if(i[0].setComponents(l-a,f-u,p-g,M-b).normalize(),i[1].setComponents(l+a,f+u,p+g,M+b).normalize(),i[2].setComponents(l+o,f+d,p+_,M+w).normalize(),i[3].setComponents(l-o,f-d,p-_,M-w).normalize(),n)i[4].setComponents(c,h,m,y).normalize(),i[5].setComponents(l-c,f-h,p-m,M-y).normalize();else if(i[4].setComponents(l-c,f-h,p-m,M-y).normalize(),e===ui)i[5].setComponents(l+c,f+h,p+m,M+y).normalize();else if(e===ms)i[5].setComponents(c,h,m,y).normalize();else throw new Error(`THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: `+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ir.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ir.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ir)}intersectsSprite(t){Ir.center.set(0,0,0);return Ir.radius=.7071067811865476+Rm.distanceTo(t.center),Ir.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ir)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(lo.x=i.normal.x>0?t.max.x:t.min.x,lo.y=i.normal.y>0?t.max.y:t.min.y,lo.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ms=class extends Ui{constructor(t){super(),this.isPointsMaterial=!0,this.type=`PointsMaterial`,this.color=new Xt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}};var wd=new Pe;var Hl=new sa;var uo=new Fr;var ho=new V;var aa=class extends Dn{constructor(t=new gn,e=new Ms){super(),this.isPoints=!0,this.type=`Points`,this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(i),uo.radius+=s,t.ray.intersectsSphere(uo)===!1)return;wd.copy(i).invert(),Hl.copy(t.ray).applyMatrix4(wd);let o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){let h=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=h,_=f;g<_;g++){let m=l.getX(g);ho.fromBufferAttribute(d,m),Td(ho,m,c,i,t,e,this)}}else{let h=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=h,_=f;g<_;g++)ho.fromBufferAttribute(d,g),Td(ho,g,c,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){let o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}};function Td(r,t,e,n,i,s,a){let o=Hl.distanceSqToPoint(r);if(o<e){let c=new V;Hl.closestPointToPoint(r,c),c.applyMatrix4(n);let l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}var oa=class extends Ei{constructor(t=[],e=hr,n,i,s,a,o,c,l,u){super(t,e,n,i,s,a,o,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}};var zi=class extends Ei{constructor(t,e,n,i,s,a,o,c,l){super(t,e,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var sr=class extends Ei{constructor(t,e,n=di,i,s,a,o=cn,c=cn,l,u=yi,d=1){if(u!==yi&&u!==fr)throw new Error(`THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat`);super({width:t,height:e,depth:d},i,s,a,o,c,u,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new _s(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}};var Ro=class extends sr{constructor(t,e=di,n=hr,i,s,a=cn,o=cn,c,l=yi){let u={width:t,height:t,depth:1},d=[u,u,u,u,u,u];super(t,t,e,n,i,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}};var ca=class extends Ei{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var jt=class r extends gn{constructor(t=1,e=1,n=1,i=1,s=1,a=1){super(),this.type=`BoxGeometry`,this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};let o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);let c=[],l=[],u=[],d=[],h=0,f=0;g(`z`,`y`,`x`,-1,-1,n,e,t,a,s,0),g(`z`,`y`,`x`,1,-1,n,e,-t,a,s,1),g(`x`,`z`,`y`,1,1,t,n,e,i,a,2),g(`x`,`z`,`y`,1,-1,t,n,-e,i,a,3),g(`x`,`y`,`z`,1,-1,t,e,n,i,s,4),g(`x`,`y`,`z`,-1,-1,t,e,-n,i,s,5),this.setIndex(c),this.setAttribute(`position`,new He(l,3)),this.setAttribute(`normal`,new He(u,3)),this.setAttribute(`uv`,new He(d,2));function g(_,m,p,b,w,y,M,E,T,x,C){let P=y/T,B=M/x,L=y/2,k=M/2,I=E/2,G=T+1,Y=x+1,$=0,rt=0,Z=new V;for(let tt=0;tt<Y;tt++){let ot=tt*B-k;for(let wt=0;wt<G;wt++)Z[_]=(wt*P-L)*b,Z[m]=ot*w,Z[p]=I,l.push(Z.x,Z.y,Z.z),Z[_]=0,Z[m]=0,Z[p]=E>0?1:-1,u.push(Z.x,Z.y,Z.z),d.push(wt/T),d.push(1-tt/x),$+=1}for(let tt=0;tt<x;tt++)for(let ot=0;ot<T;ot++){let wt=h+ot+G*tt,Pt=h+ot+G*(tt+1),$t=h+(ot+1)+G*(tt+1),Wt=h+(ot+1)+G*tt;c.push(wt,Pt,Wt),c.push(Pt,$t,Wt),rt+=6}o.addGroup(f,rt,C),f+=rt,h+=$}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Qn=class r extends gn{constructor(t=1,e=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type=`CylinderGeometry`,this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};let l=this;i=Math.floor(i),s=Math.floor(s);let u=[],d=[],h=[],f=[],g=0,_=[],m=n/2,p=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute(`position`,new He(d,3)),this.setAttribute(`normal`,new He(h,3)),this.setAttribute(`uv`,new He(f,2));function b(){let y=new V,M=new V,E=0,T=(e-t)/n;for(let x=0;x<=s;x++){let C=[],P=x/s,B=P*(e-t)+t;for(let L=0;L<=i;L++){let k=L/i,I=k*c+o,G=Math.sin(I),Y=Math.cos(I);M.x=B*G,M.y=-P*n+m,M.z=B*Y,d.push(M.x,M.y,M.z),y.set(G,T,Y).normalize(),h.push(y.x,y.y,y.z),f.push(k,1-P),C.push(g++)}_.push(C)}for(let x=0;x<i;x++)for(let C=0;C<s;C++){let P=_[C][x],B=_[C+1][x],L=_[C+1][x+1],k=_[C][x+1];(t>0||C!==0)&&(u.push(P,B,k),E+=3),(e>0||C!==s-1)&&(u.push(B,L,k),E+=3)}l.addGroup(p,E,0),p+=E}function w(y){let M=g,E=new Qt,T=new V,x=0,C=y===!0?t:e,P=y===!0?1:-1;for(let L=1;L<=i;L++)d.push(0,m*P,0),h.push(0,P,0),f.push(.5,.5),g++;let B=g;for(let L=0;L<=i;L++){let I=L/i*c+o,G=Math.cos(I),Y=Math.sin(I);T.x=C*Y,T.y=m*P,T.z=C*G,d.push(T.x,T.y,T.z),h.push(0,P,0),E.x=G*.5+.5,E.y=Y*.5*P+.5,f.push(E.x,E.y),g++}for(let L=0;L<i;L++){let k=M+L,I=B+L;y===!0?u.push(I,I+1,k):u.push(I+1,I,k),x+=3}l.addGroup(p,x,y===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var bs=class r extends Qn{constructor(t=1,e=1,n=32,i=1,s=!1,a=0,o=Math.PI*2){super(0,t,e,n,i,s,a,o),this.type=`ConeGeometry`,this.parameters={radius:t,height:e,radialSegments:n,heightSegments:i,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(t){return new r(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Oo=class r extends gn{constructor(t=[],e=[],n=1,i=0){super(),this.type=`PolyhedronGeometry`,this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],a=[];o(i),l(n),u(),this.setAttribute(`position`,new He(s,3)),this.setAttribute(`normal`,new He(s.slice(),3)),this.setAttribute(`uv`,new He(a,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new V,y=new V,M=new V;for(let E=0;E<e.length;E+=3)f(e[E+0],w),f(e[E+1],y),f(e[E+2],M),c(w,y,M,b)}function c(b,w,y,M){let E=M+1,T=[];for(let x=0;x<=E;x++){T[x]=[];let C=b.clone().lerp(y,x/E),P=w.clone().lerp(y,x/E),B=E-x;for(let L=0;L<=B;L++)L===0&&x===E?T[x][L]=C:T[x][L]=C.clone().lerp(P,L/B)}for(let x=0;x<E;x++)for(let C=0;C<2*(E-x)-1;C++){let P=Math.floor(C/2);C%2===0?(h(T[x][P+1]),h(T[x+1][P]),h(T[x][P])):(h(T[x][P+1]),h(T[x+1][P+1]),h(T[x+1][P]))}}function l(b){let w=new V;for(let y=0;y<s.length;y+=3)w.x=s[y+0],w.y=s[y+1],w.z=s[y+2],w.normalize().multiplyScalar(b),s[y+0]=w.x,s[y+1]=w.y,s[y+2]=w.z}function u(){let b=new V;for(let w=0;w<s.length;w+=3){b.x=s[w+0],b.y=s[w+1],b.z=s[w+2];let y=m(b)/2/Math.PI+.5,M=p(b)/Math.PI+.5;a.push(y,1-M)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let w=a[b+0],y=a[b+2],M=a[b+4];Math.max(w,y,M)>.9&&Math.min(w,y,M)<.1&&(w<.2&&(a[b+0]+=1),y<.2&&(a[b+2]+=1),M<.2&&(a[b+4]+=1))}}function h(b){s.push(b.x,b.y,b.z)}function f(b,w){let y=b*3;w.x=t[y+0],w.y=t[y+1],w.z=t[y+2]}function g(){let b=new V,w=new V,y=new V,M=new V,E=new Qt,T=new Qt,x=new Qt;for(let C=0,P=0;C<s.length;C+=9,P+=6){b.set(s[C+0],s[C+1],s[C+2]),w.set(s[C+3],s[C+4],s[C+5]),y.set(s[C+6],s[C+7],s[C+8]),E.set(a[P+0],a[P+1]),T.set(a[P+2],a[P+3]),x.set(a[P+4],a[P+5]),M.copy(b).add(w).add(y).divideScalar(3);let B=m(M);_(E,P+0,b,B),_(T,P+2,w,B),_(x,P+4,y,B)}}function _(b,w,y,M){M<0&&b.x===1&&(a[w]=b.x-1),y.x===0&&y.z===0&&(a[w]=M/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var la=class r extends Oo{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-i,-n,0,-i,n,0,i,-n,0,i,n,-i,-n,0,-i,n,0,i,-n,0,i,n,0,-n,0,-i,n,0,-i,-n,0,i,n,0,i];super(s,[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9],t,e),this.type=`DodecahedronGeometry`,this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var jn=class r extends gn{constructor(t=1,e=1,n=1,i=1){super(),this.type=`PlaneGeometry`,this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,a=e/2,o=Math.floor(n),c=Math.floor(i),l=o+1,u=c+1,d=t/o,h=e/c,f=[],g=[],_=[],m=[];for(let p=0;p<u;p++){let b=p*h-a;for(let w=0;w<l;w++){let y=w*d-s;g.push(y,-b,0),_.push(0,0,1),m.push(w/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let b=0;b<o;b++){let w=b+l*p,y=b+l*(p+1),M=b+1+l*(p+1),E=b+1+l*p;f.push(w,y,E),f.push(y,M,E)}this.setIndex(f),this.setAttribute(`position`,new He(g,3)),this.setAttribute(`normal`,new He(_,3)),this.setAttribute(`uv`,new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var ua=class r extends gn{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type=`SphereGeometry`,this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let c=Math.min(a+o,Math.PI),l=0,u=[],d=new V,h=new V,f=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){let b=[],w=p/n,y=a+w*o,M=t*Math.cos(y),E=Math.sqrt(t*t-M*M),T=0;p===0&&a===0?T=.5/e:p===n&&c===Math.PI&&(T=-.5/e);for(let x=0;x<=e;x++){let C=x/e,P=i+C*s;d.x=-E*Math.cos(P),d.y=M,d.z=E*Math.sin(P),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(C+T,1-w),b.push(l++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){let w=u[p][b+1],y=u[p][b],M=u[p+1][b],E=u[p+1][b+1];(p!==0||a>0)&&f.push(w,y,E),(p!==n-1||c<Math.PI)&&f.push(y,M,E)}this.setIndex(f),this.setAttribute(`position`,new He(g,3)),this.setAttribute(`normal`,new He(_,3)),this.setAttribute(`uv`,new He(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};function zr(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];if(Ad(i))i.isRenderTargetTexture?(kt(`UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().`),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Ad(i[0])){let s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();t[e][n]=s}else t[e][n]=i.slice();else t[e][n]=i}}return t}function _n(r){let t={};for(let e=0;e<r.length;e++){let n=zr(r[e]);for(let i in n)t[i]=n[i]}return t}function Ad(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Om(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function xu(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ie.workingColorSpace}var yf={clone:zr,merge:_n};var Im=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`;var Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;var Wn=class extends Ui{constructor(t){super(),this.isShaderMaterial=!0,this.type=`ShaderMaterial`,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Im,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zr(t.uniforms),this.uniformsGroups=Om(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let a=this.uniforms[i].value;a&&a.isTexture?e.uniforms[i]={type:`t`,value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[i]={type:`c`,value:a.getHex()}:a&&a.isVector2?e.uniforms[i]={type:`v2`,value:a.toArray()}:a&&a.isVector3?e.uniforms[i]={type:`v3`,value:a.toArray()}:a&&a.isVector4?e.uniforms[i]={type:`v4`,value:a.toArray()}:a&&a.isMatrix3?e.uniforms[i]={type:`m3`,value:a.toArray()}:a&&a.isMatrix4?e.uniforms[i]={type:`m4`,value:a.toArray()}:e.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case`t`:this.uniforms[n].value=e[i.value]||null;break;case`c`:this.uniforms[n].value=new Xt().setHex(i.value);break;case`v2`:this.uniforms[n].value=new Qt().fromArray(i.value);break;case`v3`:this.uniforms[n].value=new V().fromArray(i.value);break;case`v4`:this.uniforms[n].value=new Re().fromArray(i.value);break;case`m3`:this.uniforms[n].value=new Ht().fromArray(i.value);break;case`m4`:this.uniforms[n].value=new Pe().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}};var Io=class extends Wn{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type=`RawShaderMaterial`}};var pe=class extends Ui{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type=`MeshStandardMaterial`,this.defines={STANDARD:``},this.color=new Xt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Rc,this.normalScale=new Qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xs,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap=`round`,this.wireframeLinejoin=`round`,this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:``},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}};var Bo=class extends Ui{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type=`MeshDepthMaterial`,this.depthPacking=sf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}};var Do=class extends Ui{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type=`MeshDistanceMaterial`,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function us(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT==`number`?new t(r):Array.prototype.slice.call(r)}function Fl(r){return r!==void 0&&r.inTangents!==void 0&&r.outTangents!==void 0}var ar=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let a;e:{i:if(!(t<i)){for(let o=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=i,i=e[++n],t<i)break t}a=e.length;break e}if(!(t>=s)){let o=e[1];t<o&&(n=2,s=o);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=s,s=e[--n-1],t>=s)break t}a=n,n=0;break e}break n}for(;n<a;){let o=n+a>>>1;t<e[o]?a=o:n=o+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let a=0;a!==i;++a)e[a]=n[s+a];return e}interpolate_(){throw new Error(`THREE.Interpolant: Call to abstract method.`)}intervalChanged_(){}};var Lo=class extends ar{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:zl,endingEnd:zl}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,a=t+1,o=i[s],c=i[a];if(o===void 0)switch(this.getSettings_().endingStart){case Gl:s=t,o=2*e-n;break;case Vl:s=i.length-2,o=e+i[s]-i[s+1];break;default:s=t,o=n}if(c===void 0)switch(this.getSettings_().endingEnd){case Gl:a=t,c=2*n-e;break;case Vl:a=1,c=n+i[1]-i[0];break;default:a=t-1,c=e}let l=(n-e)*.5,u=this.valueSize;this._weightPrev=l/(e-o),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this._offsetPrev,d=this._offsetNext,h=this._weightPrev,f=this._weightNext,g=(n-e)/(i-e),_=g*g,m=_*g,p=-h*m+2*h*_-h*g,b=(1+h)*m+(-1.5-2*h)*_+(-.5+h)*g+1,w=(-1-f)*m+(1.5+f)*_+.5*g,y=f*m-f*_;for(let M=0;M!==o;++M)s[M]=p*a[u+M]+b*a[l+M]+w*a[c+M]+y*a[d+M];return s}};var Fo=class extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=(n-e)/(i-e),d=1-u;for(let h=0;h!==o;++h)s[h]=a[l+h]*d+a[c+h]*u;return s}};var No=class extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}};var Uo=class extends ar{interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=t*o,l=c-o,u=this.inTangents,d=this.outTangents;if(!u||!d){let g=(n-e)/(i-e),_=1-g;for(let m=0;m!==o;++m)s[m]=a[l+m]*_+a[c+m]*g;return s}let h=o*2,f=t-1;for(let g=0;g!==o;++g){let _=a[l+g],m=a[c+g],p=f*h+g*2,b=d[p],w=d[p+1],y=t*h+g*2,M=u[y],E=u[y+1];s[g]=Mf(Lm(n,e,b,M,i),_,w,E,m)}return s}};function Mf(r,t,e,n,i){let s=1-r;return s*s*s*t+3*s*s*r*e+3*s*r*r*n+r*r*r*i}function Dm(r,t,e,n,i){let s=1-r;return 3*s*s*(e-t)+6*s*r*(n-e)+3*r*r*(i-n)}function Lm(r,t,e,n,i){let s=(r-t)/(i-t);for(let a=0;a<8;a++){let o=Mf(s,t,e,n,i)-r;if(Math.abs(o)<1e-10)break;let c=Dm(s,t,e,n,i);if(Math.abs(c)<1e-10)break;s=Math.max(0,Math.min(1,s-o/c))}return s}var Xn=class{constructor(t,e,n,i){if(t===void 0)throw new Error(`THREE.KeyframeTrack: track name is undefined`);if(e===void 0||e.length===0)throw new Error(`THREE.KeyframeTrack: no keyframes in track named `+t);this.name=t,this.times=us(e,this.TimeBufferType),this.values=us(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:us(t.times,Array),values:us(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),Fl(t.settings)&&(n.settings={inTangents:us(t.settings.inTangents,Array),outTangents:us(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new No(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Lo(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new Uo(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ks:e=this.InterpolantFactoryMethodDiscrete;break;case Eo:e=this.InterpolantFactoryMethodLinear;break;case mo:e=this.InterpolantFactoryMethodSmooth;break;case kl:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n=`unsupported interpolation for `+this.ValueTypeName+` keyframe track named `+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return kt(`KeyframeTrack:`,n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ks;case this.InterpolantFactoryMethodLinear:return Eo;case this.InterpolantFactoryMethodSmooth:return mo;case this.InterpolantFactoryMethodBezier:return kl}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;Fl(this.settings)&&(Pd(this.settings.inTangents,t),Pd(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,s=0,a=i-1;for(;s!==i&&n[s]<t;)++s;for(;a!==-1&&n[a]>e;)--a;if(++a,s!==0||a!==i){s>=a&&(a=Math.max(a,1),s=a-1);let o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(zt(`KeyframeTrack: Invalid value size in track.`,this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(zt(`KeyframeTrack: Track is empty.`,this),t=!1);let a=null;for(let o=0;o!==s;o++){let c=n[o];if(typeof c==`number`&&isNaN(c)){zt(`KeyframeTrack: Time is not a valid number.`,this,o,c),t=!1;break}if(a!==null&&a>c){zt(`KeyframeTrack: Out of order keys.`,this,o,c,a),t=!1;break}a=c}if(i!==void 0&&hm(i))for(let o=0,c=i.length;o!==c;++o){let l=i[o];if(isNaN(l)){zt(`KeyframeTrack: Value is not a valid number.`,this,o,l),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===mo,s=t.length-1,a=1;for(let o=1;o<s;++o){let c=!1,l=t[o];if(l!==t[o+1]&&(o!==1||l!==t[0]))if(i)c=!0;else{let d=o*n,h=d-n,f=d+n;for(let g=0;g!==n;++g){let _=e[d+g];if(_!==e[h+g]||_!==e[f+g]){c=!0;break}}}if(c){if(o!==a){t[a]=t[o];let d=o*n,h=a*n;for(let f=0;f!==n;++f)e[h+f]=e[d+f]}++a}}if(s>0){t[a]=t[s];for(let o=s*n,c=a*n,l=0;l!==n;++l)e[c+l]=e[o+l];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,Fl(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Pd(r,t){for(let e=0,n=r.length;e!==n;e+=2)r[e]*=t}Xn.prototype.ValueTypeName=``;Xn.prototype.TimeBufferType=Float32Array;Xn.prototype.ValueBufferType=Float32Array;Xn.prototype.DefaultInterpolation=Eo;var or=class extends Xn{constructor(t,e,n){super(t,e,n)}};or.prototype.ValueTypeName=`bool`;or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Ks;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var ko=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};ko.prototype.ValueTypeName=`color`;var zo=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};zo.prototype.ValueTypeName=`number`;var Go=class extends ar{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(n-e)/(i-e),l=t*o;for(let u=l+o;l!==u;l+=4)bi.slerpFlat(s,0,a,l-o,a,l,c);return s}};var ha=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Go(this.times,this.values,this.getValueSize(),t)}};ha.prototype.ValueTypeName=`quaternion`;ha.prototype.InterpolantFactoryMethodSmooth=void 0;var cr=class extends Xn{constructor(t,e,n){super(t,e,n)}};cr.prototype.ValueTypeName=`string`;cr.prototype.ValueBufferType=Array;cr.prototype.DefaultInterpolation=Ks;cr.prototype.InterpolantFactoryMethodLinear=void 0;cr.prototype.InterpolantFactoryMethodSmooth=void 0;var Vo=class extends Xn{constructor(t,e,n,i){super(t,e,n,i)}};Vo.prototype.ValueTypeName=`vector`;var lr=class extends Dn{constructor(t,e=1){super(),this.isLight=!0,this.type=`Light`,this.color=new Xt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var da=class extends lr{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type=`HemisphereLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}};var Nl=new Pe;var Rd=new V;var Od=new V;var Ss=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Qt(512,512),this.mapType=Ln,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ys,this._frameExtents=new Qt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Rd.setFromMatrixPosition(t.matrixWorld),e.position.copy(Rd),Od.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Od),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,n,i){Nl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),n.setFromProjectionMatrix(Nl,t.coordinateSystem,t.reversedDepth);let s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;t.coordinateSystem===ms||t.reversedDepth?e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),e.multiply(Nl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var fo=new V;var po=new bi;var xi=new V;var fa=class extends Dn{constructor(){super(),this.isCamera=!0,this.type=`Camera`,this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=ui,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(fo,po,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,xi.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(fo,po,xi),xi.x===1&&xi.y===1&&xi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(fo,po,xi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}};var nr=new V;var Id=new Qt;var Bd=new Qt;var on=class extends fa{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type=`PerspectiveCamera`,this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=js*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ml*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return js*2*Math.atan(Math.tan(ml*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){nr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(nr.x,nr.y).multiplyScalar(-t/nr.z),nr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(nr.x,nr.y).multiplyScalar(-t/nr.z)}getViewSize(t,e){return this.getViewBounds(t,Id,Bd),e.subVectors(Bd,Id)}setViewOffset(t,e,n,i,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ml*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,e-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}let o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var Wl=class extends Ss{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(t){let e=this.camera,n=js*2*t.angle*this.focus,i=this.mapSize.width/this.mapSize.height*this.aspect,s=t.distance||e.far;(n!==e.fov||i!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=i,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this.aspect=t.aspect,this}toJSON(){let t=super.toJSON();return t.focus=this.focus,t.aspect=this.aspect,t}};var Cs=class extends lr{constructor(t,e,n=0,i=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type=`SpotLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.distance=n,this.angle=i,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Wl}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.map=t.map,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.angle=this.angle,e.object.decay=this.decay,e.object.penumbra=this.penumbra,e.object.target=this.target.uuid,this.map&&this.map.isTexture&&(e.object.map=this.map.toJSON(t).uuid),e.object.shadow=this.shadow.toJSON(),e}};var Xl=class extends Ss{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0}};var pa=class extends lr{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type=`PointLight`,this.distance=n,this.decay=i,this.shadow=new Xl}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}};var Es=class extends fa{constructor(t=-1,e=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type=`OrthographicCamera`,this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,a=n+t,o=i+e,c=i-e;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=u*this.view.offsetY,c=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var ql=class extends Ss{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}};var ma=class extends lr{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type=`DirectionalLight`,this.position.copy(Dn.DEFAULT_UP),this.updateMatrix(),this.target=new Dn,this.shadow=new ql}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}};var ga=class extends lr{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type=`AmbientLight`}};var hs=-90;var ds=1;var Ho=class extends Dn{constructor(t,e,n){super(),this.type=`CubeCamera`,this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new on(hs,ds,t,e);i.layers=this.layers,this.add(i);let s=new on(hs,ds,t,e);s.layers=this.layers,this.add(s);let a=new on(hs,ds,t,e);a.layers=this.layers,this.add(a);let o=new on(hs,ds,t,e);o.layers=this.layers,this.add(o);let c=new on(hs,ds,t,e);c.layers=this.layers,this.add(c);let l=new on(hs,ds,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,a,o,c]=e;for(let l of e)this.remove(l);if(t===ui)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(t===ms)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error(`THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: `+t);for(let l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,a,o,c,l,u]=this.children,d=t.getRenderTarget(),h=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,s),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,u),t.setRenderTarget(d,h,f),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}};var Wo=class extends on{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var vu=`\\[\\]\\.:\\/`;var Fm=new RegExp(`[`+vu+`]`,`g`);var yu=`[^`+vu+`]`;var Nm=`[^`+vu.replace(`\\.`,``)+`]`;var Um=/((?:WC+[\/:])*)/.source.replace(`WC`,yu);var km=/(WCOD+)?/.source.replace(`WCOD`,Nm);var zm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace(`WC`,yu);var Gm=/\.(WC+)(?:\[(.+)\])?/.source.replace(`WC`,yu);var Vm=new RegExp(`^`+Um+km+zm+Gm+`$`);var Hm=[`material`,`materials`,`bones`,`map`];var Yl=class{constructor(t,e,n){let i=n||Ne.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}};var Ne=(()=>{class r{constructor(e,n,i){this.path=n,this.parsedPath=i||r.parseTrackName(n),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new r.Composite(e,n,i):new r(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,`_`).replace(Fm,``)}static parseTrackName(e){let n=Vm.exec(e);if(n===null)throw new Error(`THREE.PropertyBinding: Cannot parse trackName: `+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(`.`);if(s!==void 0&&s!==-1){let a=i.nodeName.substring(s+1);Hm.indexOf(a)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=a)}if(i.propertyName===null||i.propertyName.length===0)throw new Error(`THREE.PropertyBinding: can not parse propertyName from trackName: `+e);return i}static findNode(e,n){if(n===void 0||n===``||n===`.`||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(a){for(let o=0;o<a.length;o++){let c=a[o];if(c.name===n||c.uuid===n)return c;let l=i(c.children);if(l)return l}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,a=i.length;s!==a;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,a=n.propertyIndex;if(e||(e=r.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){kt(`PropertyBinding: No target node found for track: `+this.path+`.`);return}if(i){let u=n.objectIndex;switch(i){case`materials`:if(!e.material){zt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.materials){zt(`PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.`,this);return}e=e.material.materials;break;case`bones`:if(!e.skeleton){zt(`PropertyBinding: Can not bind to bones as node does not have a skeleton.`,this);return}e=e.skeleton.bones;for(let d=0;d<e.length;d++)if(e[d].name===u){u=d;break}break;case`map`:if(`map`in e){e=e.map;break}if(!e.material){zt(`PropertyBinding: Can not bind to material as node does not have a material.`,this);return}if(!e.material.map){zt(`PropertyBinding: Can not bind to material.map as node.material does not have a map.`,this);return}e=e.material.map;break;default:if(e[i]===void 0){zt(`PropertyBinding: Can not bind to objectName of node undefined.`,this);return}e=e[i]}if(u!==void 0){if(e[u]===void 0){zt(`PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.`,this,e);return}e=e[u]}}let o=e[s];if(o===void 0){let u=n.nodeName;zt(`PropertyBinding: Trying to update property for track: `+u+`.`+s+` but it wasn't found.`,e);return}let c=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?c=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(c=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(a!==void 0){if(s===`morphTargetInfluences`){if(!e.geometry){zt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.`,this);return}if(!e.geometry.morphAttributes){zt(`PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.`,this);return}e.morphTargetDictionary[a]!==void 0&&(a=e.morphTargetDictionary[a])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=a}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][c]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}return r.Composite=Yl,r})();Ne.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ne.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ne.prototype.GetterByBindingType=[Ne.prototype._getValue_direct,Ne.prototype._getValue_array,Ne.prototype._getValue_arrayElement,Ne.prototype._getValue_toArray];Ne.prototype.SetterByBindingTypeAndVersioning=[[Ne.prototype._setValue_direct,Ne.prototype._setValue_direct_setNeedsUpdate,Ne.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_array,Ne.prototype._setValue_array_setNeedsUpdate,Ne.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_arrayElement,Ne.prototype._setValue_arrayElement_setNeedsUpdate,Ne.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ne.prototype._setValue_fromArray,Ne.prototype._setValue_fromArray_setNeedsUpdate,Ne.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];(class r{static{r.prototype.isMatrix2=!0}constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let s=this.elements;return s[0]=t,s[2]=e,s[1]=n,s[3]=i,this}});function Mu(r,t,e,n){let i=Wm(n);switch(e){case fu:return r*t;case mu:return r*t/i.components*i.byteLength;case Jo:return r*t/i.components*i.byteLength;case pr:return r*t*2/i.components*i.byteLength;case Qo:return r*t*2/i.components*i.byteLength;case pu:return r*t*3/i.components*i.byteLength;case ti:return r*t*4/i.components*i.byteLength;case jo:return r*t*4/i.components*i.byteLength;case va:case ya:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Ma:case ba:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ec:case ic:return Math.max(r,16)*Math.max(t,8)/4;case tc:case nc:return Math.max(r,8)*Math.max(t,8)/2;case rc:case sc:case oc:case cc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case ac:case Sa:case lc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case uc:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hc:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case dc:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case fc:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case pc:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case mc:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case gc:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case _c:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case xc:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case vc:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case yc:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Mc:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case bc:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Sc:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Cc:case Ec:case wc:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Tc:case Ac:return Math.ceil(r/4)*Math.ceil(t/4)*8;case Ca:case Pc:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Wm(r){switch(r){case Ln:case lu:return{byteLength:1,components:1};case As:case uu:case pi:return{byteLength:2,components:1};case Ko:case Zo:return{byteLength:2,components:4};case di:case $o:case fi:return{byteLength:4,components:1};case hu:case du:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`register`,{detail:{revision:`186`}}));typeof window<`u`&&(window.__THREE__?kt(`WARNING: Multiple instances of Three.js being imported.`):window.__THREE__=`186`);function Hf(){let r=null,t=!1,e=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),e(s,a)}return{start:function(){t!==!0&&e!==null&&r!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function qm(r){let t=new WeakMap;function e(o,c){let l=o.array,u=o.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,u),o.onUploadCallback();let f;if(l instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<`u`&&l instanceof Float16Array)f=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=r.SHORT;else if(l instanceof Uint32Array)f=r.UNSIGNED_INT;else if(l instanceof Int32Array)f=r.INT;else if(l instanceof Int8Array)f=r.BYTE;else if(l instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error(`THREE.WebGLAttributes: Unsupported buffer data format: `+l);return{buffer:h,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){let u=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,u);else{d.sort((f,g)=>f.start-g.start);let h=0;for(let f=1;f<d.length;f++){let g=d[h],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];r.bufferSubData(l,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=t.get(o);c&&(r.deleteBuffer(c.buffer),t.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let u=t.get(o);(!u||u.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=t.get(o);if(l===void 0)t.set(o,e(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error(`THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.`);n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var Jt={alphahash_fragment:`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,alphahash_pars_fragment:`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,alphamap_fragment:`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,alphamap_pars_fragment:`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,alphatest_fragment:`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,alphatest_pars_fragment:`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aomap_fragment:`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aomap_pars_fragment:`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,batching_pars_vertex:`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,batching_vertex:`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,begin_vertex:`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,beginnormal_vertex:`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bsdfs:`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,iridescence_fragment:`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,bumpmap_pars_fragment:`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,clipping_planes_fragment:`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,clipping_planes_pars_fragment:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,clipping_planes_pars_vertex:`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,clipping_planes_vertex:`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,color_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,color_pars_fragment:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,color_pars_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,color_vertex:`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,common:`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cube_uv_reflection_fragment:`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,defaultnormal_vertex:`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,displacementmap_pars_vertex:`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,displacementmap_vertex:`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,emissivemap_fragment:`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,emissivemap_pars_fragment:`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,colorspace_fragment:`gl_FragColor = linearToOutputTexel( gl_FragColor );`,colorspace_pars_fragment:`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,envmap_fragment:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,envmap_common_pars_fragment:`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,envmap_pars_fragment:`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,envmap_pars_vertex:`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,envmap_physical_pars_fragment:`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,envmap_vertex:`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,fog_vertex:`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fog_pars_vertex:`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,fog_fragment:`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fog_pars_fragment:`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gradientmap_pars_fragment:`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lightmap_pars_fragment:`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lights_lambert_fragment:`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,lights_lambert_pars_fragment:`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,lights_pars_begin:`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,lights_toon_fragment:`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,lights_toon_pars_fragment:`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,lights_phong_fragment:`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lights_phong_pars_fragment:`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,lights_physical_fragment:`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,lights_physical_pars_fragment:`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,lights_fragment_begin:`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lights_fragment_maps:`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,lights_fragment_end:`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lightprobes_pars_fragment:`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,logdepthbuf_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,logdepthbuf_pars_fragment:`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_pars_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,logdepthbuf_vertex:`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,map_fragment:`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,map_pars_fragment:`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,map_particle_fragment:`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,map_particle_pars_fragment:`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,metalnessmap_fragment:`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,metalnessmap_pars_fragment:`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,morphinstance_vertex:`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,morphcolor_vertex:`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,morphnormal_vertex:`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,morphtarget_pars_vertex:`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,morphtarget_vertex:`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,normal_fragment_begin:`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,normal_fragment_maps:`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,normal_pars_fragment:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_pars_vertex:`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,normal_vertex:`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,normalmap_pars_fragment:`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,clearcoat_normal_fragment_begin:`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,clearcoat_normal_fragment_maps:`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,clearcoat_pars_fragment:`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,iridescence_pars_fragment:`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,opaque_fragment:`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,packing:`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,premultiplied_alpha_fragment:`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,project_vertex:`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,dithering_fragment:`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dithering_pars_fragment:`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,roughnessmap_fragment:`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,roughnessmap_pars_fragment:`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,shadowmap_pars_fragment:`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,shadowmap_pars_vertex:`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,shadowmap_vertex:`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,shadowmask_pars_fragment:`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,skinbase_vertex:`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,skinning_pars_vertex:`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,skinning_vertex:`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,skinnormal_vertex:`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,specularmap_fragment:`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,specularmap_pars_fragment:`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tonemapping_fragment:`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tonemapping_pars_fragment:`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,transmission_fragment:`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,transmission_pars_fragment:`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,uv_pars_fragment:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_pars_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv_vertex:`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,worldpos_vertex:`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distance_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distance_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`};var _t={common:{diffuse:{value:new Xt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ht}},envmap:{envMap:{value:null},envMapRotation:{value:new Ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ht},normalScale:{value:new Qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new V},probesMax:{value:new V},probesResolution:{value:new V}},points:{diffuse:{value:new Xt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0},uvTransform:{value:new Ht}},sprite:{diffuse:{value:new Xt(16777215)},opacity:{value:1},center:{value:new Qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ht},alphaMap:{value:null},alphaMapTransform:{value:new Ht},alphaTest:{value:0}}};var Ti={basic:{uniforms:_n([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:Jt.meshbasic_vert,fragmentShader:Jt.meshbasic_frag},lambert:{uniforms:_n([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},envMapIntensity:{value:1}}]),vertexShader:Jt.meshlambert_vert,fragmentShader:Jt.meshlambert_frag},phong:{uniforms:_n([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},specular:{value:new Xt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphong_vert,fragmentShader:Jt.meshphong_frag},standard:{uniforms:_n([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag},toon:{uniforms:_n([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new Xt(0)}}]),vertexShader:Jt.meshtoon_vert,fragmentShader:Jt.meshtoon_frag},matcap:{uniforms:_n([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:Jt.meshmatcap_vert,fragmentShader:Jt.meshmatcap_frag},points:{uniforms:_n([_t.points,_t.fog]),vertexShader:Jt.points_vert,fragmentShader:Jt.points_frag},dashed:{uniforms:_n([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Jt.linedashed_vert,fragmentShader:Jt.linedashed_frag},depth:{uniforms:_n([_t.common,_t.displacementmap]),vertexShader:Jt.depth_vert,fragmentShader:Jt.depth_frag},normal:{uniforms:_n([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:Jt.meshnormal_vert,fragmentShader:Jt.meshnormal_frag},sprite:{uniforms:_n([_t.sprite,_t.fog]),vertexShader:Jt.sprite_vert,fragmentShader:Jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Jt.background_vert,fragmentShader:Jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ht}},vertexShader:Jt.backgroundCube_vert,fragmentShader:Jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Jt.cube_vert,fragmentShader:Jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Jt.equirect_vert,fragmentShader:Jt.equirect_frag},distance:{uniforms:_n([_t.common,_t.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Jt.distance_vert,fragmentShader:Jt.distance_frag},shadow:{uniforms:_n([_t.lights,_t.fog,{color:{value:new Xt(0)},opacity:{value:1}}]),vertexShader:Jt.shadow_vert,fragmentShader:Jt.shadow_frag}};Ti.physical={uniforms:_n([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ht},clearcoatNormalScale:{value:new Qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ht},sheen:{value:0},sheenColor:{value:new Xt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ht},transmissionSamplerSize:{value:new Qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ht},attenuationDistance:{value:0},attenuationColor:{value:new Xt(0)},specularColor:{value:new Xt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ht},anisotropyVector:{value:new Qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ht}}]),vertexShader:Jt.meshphysical_vert,fragmentShader:Jt.meshphysical_frag};var Bc={r:0,b:0,g:0};var T_=new Pe;var Wf=new Ht;Wf.set(-1,0,0,0,1,0,0,0,1);function A_(r,t,e,n,i,s){let a=new Xt(0),o=i===!0?0:1,c,l,u=null,d=0,h=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let y=b.backgroundBlurriness>0;w=t.get(w,y)}return w}function g(b){let w=!1,y=f(b);y===null?m(a,o):y&&y.isColor&&(m(y,1),w=!0);let M=r.xr.getEnvironmentBlendMode();M===`additive`?e.buffers.color.setClear(0,0,0,1,s):M===`alpha-blend`&&e.buffers.color.setClear(0,0,0,0,s),(r.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(b,w){let y=f(w);y&&(y.isCubeTexture||y.mapping===_a)?(l===void 0&&(l=new Et(new jt(1,1,1),new Wn({name:`BackgroundCubeMaterial`,uniforms:zr(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute(`normal`),l.geometry.deleteAttribute(`uv`),l.onBeforeRender=function(M,E,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=y,l.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(T_.makeRotationFromEuler(w.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(Wf),l.material.toneMapped=ie.getTransfer(y.colorSpace)!==fe,(u!==y||d!==y.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new Et(new jn(2,2),new Wn({name:`BackgroundMaterial`,uniforms:zr(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute(`normal`),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.toneMapped=ie.getTransfer(y.colorSpace)!==fe,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(u!==y||d!==y.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,u=y,d=y.version,h=r.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function m(b,w){b.getRGB(Bc,xu(r)),e.buffers.color.setClear(Bc.r,Bc.g,Bc.b,w,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:_,dispose:p}}function P_(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null),s=i,a=!1;function o(B,L,k,I,G){let Y=!1,$=d(B,I,k,L);s!==$&&(s=$,l(s.object)),Y=f(B,I,k,G),Y&&g(B,I,k,G),G!==null&&t.update(G,r.ELEMENT_ARRAY_BUFFER),(Y||a)&&(a=!1,y(B,L,k,I),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function c(){return r.createVertexArray()}function l(B){return r.bindVertexArray(B)}function u(B){return r.deleteVertexArray(B)}function d(B,L,k,I){let G=I.wireframe===!0,Y=n[L.id];Y===void 0&&(Y={},n[L.id]=Y);let $=B.isInstancedMesh===!0?B.id:0,rt=Y[$];rt===void 0&&(rt={},Y[$]=rt);let Z=rt[k.id];Z===void 0&&(Z={},rt[k.id]=Z);let tt=Z[G];return tt===void 0&&(tt=h(c()),Z[G]=tt),tt}function h(B){let L=[],k=[],I=[];for(let G=0;G<e;G++)L[G]=0,k[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:k,attributeDivisors:I,object:B,attributes:{},index:null}}function f(B,L,k,I){let G=s.attributes,Y=L.attributes,$=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let ot=G[Z],wt=Y[Z];if(wt===void 0&&(Z===`instanceMatrix`&&B.instanceMatrix&&(wt=B.instanceMatrix),Z===`instanceColor`&&B.instanceColor&&(wt=B.instanceColor)),ot===void 0||ot.attribute!==wt||wt&&ot.data!==wt.data)return!0;$++}return s.attributesNum!==$||s.index!==I}function g(B,L,k,I){let G={},Y=L.attributes,$=0,rt=k.getAttributes();for(let Z in rt)if(rt[Z].location>=0){let ot=Y[Z];ot===void 0&&(Z===`instanceMatrix`&&B.instanceMatrix&&(ot=B.instanceMatrix),Z===`instanceColor`&&B.instanceColor&&(ot=B.instanceColor));let wt={};wt.attribute=ot,ot&&ot.data&&(wt.data=ot.data),G[Z]=wt,$++}s.attributes=G,s.attributesNum=$,s.index=I}function _(){let B=s.newAttributes;for(let L=0,k=B.length;L<k;L++)B[L]=0}function m(B){p(B,0)}function p(B,L){let k=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;k[B]=1,I[B]===0&&(r.enableVertexAttribArray(B),I[B]=1),G[B]!==L&&(r.vertexAttribDivisor(B,L),G[B]=L)}function b(){let B=s.newAttributes,L=s.enabledAttributes;for(let k=0,I=L.length;k<I;k++)L[k]!==B[k]&&(r.disableVertexAttribArray(k),L[k]=0)}function w(B,L,k,I,G,Y,$){$===!0?r.vertexAttribIPointer(B,L,k,G,Y):r.vertexAttribPointer(B,L,k,I,G,Y)}function y(B,L,k,I){_();let G=I.attributes,Y=k.getAttributes(),$=L.defaultAttributeValues;for(let rt in Y){let Z=Y[rt];if(Z.location>=0){let tt=G[rt];if(tt===void 0&&(rt===`instanceMatrix`&&B.instanceMatrix&&(tt=B.instanceMatrix),rt===`instanceColor`&&B.instanceColor&&(tt=B.instanceColor)),tt!==void 0){let ot=tt.normalized,wt=tt.itemSize,Pt=t.get(tt);if(Pt===void 0)continue;let $t=Pt.buffer,Wt=Pt.type,ae=Pt.bytesPerElement,j=Wt===r.INT||Wt===r.UNSIGNED_INT||tt.gpuType===$o;if(tt.isInterleavedBufferAttribute){let st=tt.data,St=st.stride,Gt=tt.offset;if(st.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Z.locationSize;Mt++)p(Z.location+Mt,st.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Mt=0;Mt<Z.locationSize;Mt++)m(Z.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let Mt=0;Mt<Z.locationSize;Mt++)w(Z.location+Mt,wt/Z.locationSize,Wt,ot,St*ae,(Gt+wt/Z.locationSize*Mt)*ae,j)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<Z.locationSize;st++)p(Z.location+st,tt.meshPerAttribute);B.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<Z.locationSize;st++)m(Z.location+st);r.bindBuffer(r.ARRAY_BUFFER,$t);for(let st=0;st<Z.locationSize;st++)w(Z.location+st,wt/Z.locationSize,Wt,ot,wt*ae,wt/Z.locationSize*st*ae,j)}}else if($!==void 0){let ot=$[rt];if(ot!==void 0)switch(ot.length){case 2:r.vertexAttrib2fv(Z.location,ot);break;case 3:r.vertexAttrib3fv(Z.location,ot);break;case 4:r.vertexAttrib4fv(Z.location,ot);break;default:r.vertexAttrib1fv(Z.location,ot)}}}}b()}function M(){C();for(let B in n){let L=n[B];for(let k in L){let I=L[k];for(let G in I){let Y=I[G];for(let $ in Y)u(Y[$].object),delete Y[$];delete I[G]}}delete n[B]}}function E(B){if(n[B.id]===void 0)return;let L=n[B.id];for(let k in L){let I=L[k];for(let G in I){let Y=I[G];for(let $ in Y)u(Y[$].object),delete Y[$];delete I[G]}}delete n[B.id]}function T(B){for(let L in n){let k=n[L];for(let I in k){let G=k[I];if(G[B.id]===void 0)continue;let Y=G[B.id];for(let $ in Y)u(Y[$].object),delete Y[$];delete G[B.id]}}}function x(B){for(let L in n){let k=n[L],I=B.isInstancedMesh===!0?B.id:0,G=k[I];if(G!==void 0){for(let Y in G){let $=G[Y];for(let rt in $)u($[rt].object),delete $[rt];delete G[Y]}delete k[I],Object.keys(k).length===0&&delete n[L]}}}function C(){P(),a=!0,s!==i&&(s=i,l(s.object))}function P(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:C,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:E,releaseStatesOfObject:x,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function R_(r,t,e){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),e.update(l,n,1)}function a(c,l,u){u!==0&&(r.drawArraysInstanced(n,c,l,u),e.update(l,n,u))}function o(c,l,u){if(u===0)return;t.get(`WEBGL_multi_draw`).multiDrawArraysWEBGL(n,c,0,l,0,u);let h=0;for(let f=0;f<u;f++)h+=l[f];e.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function O_(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has(`EXT_texture_filter_anisotropic`)===!0){let T=t.get(`EXT_texture_filter_anisotropic`);i=r.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(T){return!(T!==ti&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){let x=T===pi&&(t.has(`EXT_color_buffer_half_float`)||t.has(`EXT_color_buffer_float`));return!(T!==Ln&&T!==fi&&!x&&n.convert(T)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(T){if(T===`highp`){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return`highp`;T=`mediump`}return T===`mediump`&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?`mediump`:`lowp`}let l=e.precision!==void 0?e.precision:`highp`,u=c(l);u!==l&&(kt(`WebGLRenderer:`,l,`not supported, using`,u,`instead.`),l=u);let d=e.logarithmicDepthBuffer===!0,h=e.reversedDepthBuffer===!0&&t.has(`EXT_clip_control`);e.reversedDepthBuffer===!0&&h===!1&&kt(`WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.`);let f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),b=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),w=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:y,maxSamples:M,samples:E}}function I_(r){let t=this,e=null,n=0,i=!1,s=!1,a=new li,o=new Ht,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){let f=d.length!==0||h||n!==0||i;return i=h,n=d.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){e=u(d,h,0)},this.setState=function(d,h,f){let g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?u(null):l();else{let b=s?0:n,w=b*4,y=p.clippingState||null;c.value=y,y=u(g,h,w,f);for(let M=0;M!==w;++M)y[M]=e[M];p.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(d,h,f,g){let _=d!==null?d.length:0,m=null;if(_!==0){if(m=c.value,g!==!0||m===null){let p=f+_*4,b=h.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,y=f;w!==_;++w,y+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,y),m[y+3]=a.constant}c.value=m,c.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}var Os=4;var B_=6;var D_=20;var L_=256;var wa=new Es;var bf=new Xt;var bu=null;var Su=0;var Cu=0;var Eu=!1;var F_=new V;var Gr=new V;var Lc=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:a=256,position:o=F_}=s;bu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(t,n,i,c,o),e>0&&this._blur(c,0,0,e),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ef(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(bu,Su,Cu),this._renderer.xr.enabled=Eu,t.scissorTest=!1,Rs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===hr||t.mapping===kr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bu=this._renderer.getRenderTarget(),Su=this._renderer.getActiveCubeFace(),Cu=this._renderer.getActiveMipmapLevel(),Eu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:ln,minFilter:ln,generateMipmaps:!1,type:pi,format:ti,colorSpace:Zs,depthBuffer:!1},i=Sf(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Sf(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=N_(s)),this._blurMaterial=k_(s,t,e),this._ggxMaterial=U_(s,t,e)}return i}_compileMaterial(t){let e=new Et(new gn,t);this._renderer.compile(e,wa)}_sceneToCubeUV(t,e,n,i,s){let c=new on(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(bf),d.toneMapping=hi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Et(new jt,new ki({name:`PMREM.Background`,side:Cn,depthWrite:!1,depthTest:!1})));let _=this._backgroundBox,m=_.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(bf),p=!0);for(let w=0;w<6;w++){let y=w%3;y===0?(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+u[w],s.y,s.z)):y===1?(c.up.set(0,0,l[w]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+u[w],s.z)):(c.up.set(0,l[w],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+u[w]));let M=this._cubeSize;Rs(i,y*M,w>2?M:0,M,M),d.setRenderTarget(i),p&&d.render(_,c),d.render(t,c)}d.toneMapping=f,d.autoClear=h,t.background=b}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===hr||t.mapping===kr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ef()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cf());let s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;let o=s.uniforms;o.envMap.value=t;let c=this._cubeSize;Rs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(a,wa)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;let c=a.uniforms,l=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),f=Math.sqrt(l*l-u*u)*(l*1.25),{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Os?n-g+Os:0),p=4*(this._cubeSize-_);c.envMap.value=t.texture,c.roughness.value=f,c.mipInt.value=g-e,Rs(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,wa),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Rs(t,m,p,3*_,2*_),i.setRenderTarget(t),i.render(o,wa)}_blur(t,e,n,i){let s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(t,s,e,n,a),this._blurPass(s,t,n,n,a)}_blurPass(t,e,n,i,s){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;let l=o.uniforms;l.envMap.value=t.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;let u=this._sizeLods[i];Rs(e,3*u*(i>this._lodMax-Os?i-this._lodMax+Os:0),4*(this._cubeSize-u),3*u,2*u),a.setRenderTarget(e),a.render(c,wa)}};function N_(r){let t=[],e=[],n=r,i=r-Os+1+B_;for(let s=0;s<i;s++){let a=Math.pow(2,n);t.push(a);let o=1/(a-2),c=-o,l=1+o,u=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,f=3,g=new Float32Array(f*h*d),_=new Float32Array(f*h*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,y=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(y,f*h*p);for(let M=0;M<h;M++){let E=u[M*2]*2-1,T=u[M*2+1]*2-1;p===0?Gr.set(1,T,E):p===1?Gr.set(-E,1,-T):p===2?Gr.set(-E,T,1):p===3?Gr.set(-1,T,-E):p===4?Gr.set(-E,-1,T):Gr.set(E,T,-1),Gr.toArray(_,(p*h+M)*f)}}let m=new gn;m.setAttribute(`position`,new In(g,f)),m.setAttribute(`outputDirection`,new In(_,f)),e.push(new Et(m,null)),n>Os&&n--}return{lodMeshes:e,sizeLods:t}}function Sf(r,t,e){let n=new Bn(r,t,e);return n.texture.mapping=_a,n.texture.name=`PMREM.cubeUv`,n.scissorTest=!0,n}function Rs(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function U_(r,t,e){return new Wn({name:`PMREMGGXConvolution`,defines:{GGX_SAMPLES:L_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function k_(r,t,e){return new Wn({name:`SphericalGaussianBlur`,defines:{SAMPLES:D_,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Uc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Cf(){return new Wn({name:`EquirectangularToCubeUV`,uniforms:{envMap:{value:null}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Ef(){return new Wn({name:`CubemapToCubeUV`,uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Uc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ci,depthTest:!1,depthWrite:!1})}function Uc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var Fc=class extends Bn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new oa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new jt(5,5,5),s=new Wn({name:`CubemapFromEquirect`,uniforms:zr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:Ci});s.uniforms.tEquirect.value=e;let a=new Et(i,s),o=e.minFilter;return e.minFilter===dr&&(e.minFilter=ln),new Ho(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,i);t.setRenderTarget(s)}};function z_(r){let t=new WeakMap,e=new WeakMap,n=null;function i(h,f=!1){return h==null?null:f?a(h):s(h)}function s(h){if(h&&h.isTexture){let f=h.mapping;if(f===Xo||f===qo)if(t.has(h)){let g=t.get(h).texture;return o(g,h.mapping)}else{let g=h.image;if(g&&g.height>0){let _=new Fc(g.height);return _.fromEquirectangularTexture(r,h),t.set(h,_),h.addEventListener(`dispose`,l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){let f=h.mapping,g=f===Xo||f===qo,_=f===hr||f===kr;if(g||_){let m=e.get(h),p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Lc(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),m.texture;if(m!==void 0)return m.texture;{let b=h.image;return g&&b&&b.height>0||_&&b&&c(b)?(n===null&&(n=new Lc(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,e.set(h,m),h.addEventListener(`dispose`,u),m.texture):null}}}return h}function o(h,f){return f===Xo?h.mapping=hr:f===qo&&(h.mapping=kr),h}function c(h){let f=0,g=6;for(let _=0;_<g;_++)h[_]!==void 0&&f++;return f===g}function l(h){let f=h.target;f.removeEventListener(`dispose`,l);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(h){let f=h.target;f.removeEventListener(`dispose`,u);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function G_(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e(`EXT_color_buffer_float`),e(`WEBGL_clip_cull_distance`),e(`OES_texture_float_linear`),e(`EXT_color_buffer_half_float`),e(`WEBGL_multisampled_render_to_texture`),e(`WEBGL_render_shared_exponent`)},get:function(n){let i=e(n);return i===null&&Br(`WebGLRenderer: `+n+` extension not supported.`),i}}}function V_(r,t,e,n){let i={},s=new WeakMap;function a(d){let h=d.target;h.index!==null&&t.remove(h.index);for(let g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener(`dispose`,a),delete i[h.id];let f=s.get(h);f&&(t.remove(f),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener(`dispose`,a),i[h.id]=!0,e.memory.geometries++),h}function c(d){let h=d.attributes;for(let f in h)t.update(h[f],r.ARRAY_BUFFER)}function l(d){let h=[],f=d.index,g=d.attributes.position,_=0;if(g===void 0)return;if(f!==null){let b=f.array;_=f.version;for(let w=0,y=b.length;w<y;w+=3){let M=b[w+0],E=b[w+1],T=b[w+2];h.push(M,E,E,T,T,M)}}else{let b=g.array;_=g.version;for(let w=0,y=b.length/3-1;w<y;w+=3){let M=w+0,E=w+1,T=w+2;h.push(M,E,E,T,T,M)}}let m=new(g.count>=65535?ra:ia)(h,1);m.version=_;let p=s.get(d);p&&t.remove(p),s.set(d,m)}function u(d){let h=s.get(d);if(h){let f=d.index;f!==null&&h.version<f.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:u}}function H_(r,t,e){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*a),e.update(h,n,1)}function l(d,h,f){f!==0&&(r.drawElementsInstanced(n,h,s,d*a,f),e.update(h,n,f))}function u(d,h,f){if(f===0)return;t.get(`WEBGL_multi_draw`).multiDrawElementsWEBGL(n,h,0,s,d,0,f);let _=0;for(let m=0;m<f;m++)_+=h[m];e.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=u}function W_(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case r.TRIANGLES:e.triangles+=o*(s/3);break;case r.LINES:e.lines+=o*(s/2);break;case r.LINE_STRIP:e.lines+=o*(s-1);break;case r.LINE_LOOP:e.lines+=o*s;break;case r.POINTS:e.points+=o*s;break;default:zt(`WebGLInfo: Unknown draw mode:`,a);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function X_(r,t,e){let n=new WeakMap,i=new Re;function s(a,o,c){let l=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=u!==void 0?u.length:0,h=n.get(o);if(h===void 0||h.count!==d){let C=function(){T.dispose(),n.delete(o),o.removeEventListener(`dispose`,C)};h!==void 0&&h.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),_===!0&&(w=3);let y=o.attributes.position.count*w,M=1;y>t.maxTextureSize&&(M=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*M*4*d),T=new ta(E,y,M,d);T.type=fi,T.needsUpdate=!0;let x=w*4;for(let P=0;P<d;P++){let B=m[P],L=p[P],k=b[P],I=y*M*4*P;for(let G=0;G<B.count;G++){let Y=G*x;f===!0&&(i.fromBufferAttribute(B,G),E[I+Y+0]=i.x,E[I+Y+1]=i.y,E[I+Y+2]=i.z,E[I+Y+3]=0),g===!0&&(i.fromBufferAttribute(L,G),E[I+Y+4]=i.x,E[I+Y+5]=i.y,E[I+Y+6]=i.z,E[I+Y+7]=0),_===!0&&(i.fromBufferAttribute(k,G),E[I+Y+8]=i.x,E[I+Y+9]=i.y,E[I+Y+10]=i.z,E[I+Y+11]=k.itemSize===4?i.w:1)}}h={count:d,texture:T,size:new Qt(y,M)},n.set(o,h),o.addEventListener(`dispose`,C)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,`morphTexture`,a.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(r,`morphTargetBaseInfluence`,g),c.getUniforms().setValue(r,`morphTargetInfluences`,l)}c.getUniforms().setValue(r,`morphTargetsTexture`,h.texture,e),c.getUniforms().setValue(r,`morphTargetsTextureSize`,h.size)}return{update:s}}function q_(r,t,e,n,i){let s=new WeakMap;function a(l){let u=i.render.frame,d=l.geometry,h=t.get(l,d);if(s.get(h)!==u&&(t.update(h),s.set(h,u)),l.isInstancedMesh&&(l.hasEventListener(`dispose`,c)===!1&&l.addEventListener(`dispose`,c),s.get(l)!==u&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==u&&(f.update(),s.set(f,u))}return h}function o(){s=new WeakMap}function c(l){let u=l.target;u.removeEventListener(`dispose`,c),n.releaseStatesOfObject(u),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:a,dispose:o}}var Y_={[nu]:`LINEAR_TONE_MAPPING`,[iu]:`REINHARD_TONE_MAPPING`,[ru]:`CINEON_TONE_MAPPING`,[su]:`ACES_FILMIC_TONE_MAPPING`,[ou]:`AGX_TONE_MAPPING`,[cu]:`NEUTRAL_TONE_MAPPING`,[au]:`CUSTOM_TONE_MAPPING`};function $_(r,t,e,n,i,s){let a=new Bn(t,e,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new gn;l.setAttribute(`position`,new He([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute(`uv`,new He([0,2,0,0,2,0],2));let u=new Io({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new Et(l,u),h=new Es(-1,1,1,-1,0,1),f=null,g=null,_=!1,m,p=null,b=[],w=!1;this.setSize=function(y,M){a.setSize(y,M),o!==null&&o.setSize(y,M),c!==null&&c.setSize(y,M);for(let E=0;E<b.length;E++){let T=b[E];T.setSize&&T.setSize(y,M)}},this.setEffects=function(y){b=y,w=b.length>0&&b[0].isRenderPass===!0;let M=a.width,E=a.height;b.length>0&&o===null&&(o=new Bn(M,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}),c=new Bn(M,E,{type:pi,depthBuffer:!1,stencilBuffer:!1}));for(let T=0;T<b.length;T++){let x=b[T];x.setSize&&x.setSize(M,E)}},this.begin=function(y,M){if(_||y.toneMapping===hi&&b.length===0)return!1;if(p=M,M!==null){let E=M.width,T=M.height;(a.width!==E||a.height!==T)&&this.setSize(E,T)}return w===!1&&y.setRenderTarget(a),m=y.toneMapping,y.toneMapping=hi,!0},this.hasRenderPass=function(){return w},this.end=function(y,M){y.toneMapping=m,_=!0;let E=a,T=o;for(let x=0;x<b.length;x++){let C=b[x];C.enabled!==!1&&(C.render(y,T,E,M),C.needsSwap!==!1&&(E=T,T=T===o?c:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,u.defines={},ie.getTransfer(f)===fe&&(u.defines.SRGB_TRANSFER=``);let x=Y_[g];x&&(u.defines[x]=``),u.needsUpdate=!0}u.uniforms.tDiffuse.value=E.texture,y.setRenderTarget(p),y.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),u.dispose()}}var Xf=new Ei;var Au=new sr(1,1);var qf=new ta;var Yf=new Ao;var $f=new oa;var wf=[];var Tf=[];var Af=new Float32Array(16);var Pf=new Float32Array(9);var Rf=new Float32Array(4);function Bs(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=wf[i];if(s===void 0&&(s=new Float32Array(i),wf[i]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,r[a].toArray(s,o)}return s}function en(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function nn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function kc(r,t){let e=Tf[t];e===void 0&&(e=new Int32Array(t),Tf[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function K_(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function Z_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2fv(this.addr,t),nn(e,t)}}function J_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(en(e,t))return;r.uniform3fv(this.addr,t),nn(e,t)}}function Q_(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4fv(this.addr,t),nn(e,t)}}function j_(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Rf.set(n),r.uniformMatrix2fv(this.addr,!1,Rf),nn(e,n)}}function tx(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Pf.set(n),r.uniformMatrix3fv(this.addr,!1,Pf),nn(e,n)}}function ex(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(en(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),nn(e,t)}else{if(en(e,n))return;Af.set(n),r.uniformMatrix4fv(this.addr,!1,Af),nn(e,n)}}function nx(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function ix(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2iv(this.addr,t),nn(e,t)}}function rx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3iv(this.addr,t),nn(e,t)}}function sx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4iv(this.addr,t),nn(e,t)}}function ax(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function ox(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(en(e,t))return;r.uniform2uiv(this.addr,t),nn(e,t)}}function cx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(en(e,t))return;r.uniform3uiv(this.addr,t),nn(e,t)}}function lx(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(en(e,t))return;r.uniform4uiv(this.addr,t),nn(e,t)}}function ux(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Au.compareFunction=e.isReversedDepthBuffer()?Ic:Oc,s=Au):s=Xf,e.setTexture2D(t||s,i)}function hx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||Yf,i)}function dx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||$f,i)}function fx(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||qf,i)}function px(r){switch(r){case 5126:return K_;case 35664:return Z_;case 35665:return J_;case 35666:return Q_;case 35674:return j_;case 35675:return tx;case 35676:return ex;case 5124:case 35670:return nx;case 35667:case 35671:return ix;case 35668:case 35672:return rx;case 35669:case 35673:return sx;case 5125:return ax;case 36294:return ox;case 36295:return cx;case 36296:return lx;case 35678:case 36198:case 36298:case 36306:case 35682:return ux;case 35679:case 36299:case 36307:return hx;case 35680:case 36300:case 36308:case 36293:return dx;case 36289:case 36303:case 36311:case 36292:return fx}}function mx(r,t){r.uniform1fv(this.addr,t)}function gx(r,t){let e=Bs(t,this.size,2);r.uniform2fv(this.addr,e)}function _x(r,t){let e=Bs(t,this.size,3);r.uniform3fv(this.addr,e)}function xx(r,t){let e=Bs(t,this.size,4);r.uniform4fv(this.addr,e)}function vx(r,t){let e=Bs(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function yx(r,t){let e=Bs(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Mx(r,t){let e=Bs(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function bx(r,t){r.uniform1iv(this.addr,t)}function Sx(r,t){r.uniform2iv(this.addr,t)}function Cx(r,t){r.uniform3iv(this.addr,t)}function Ex(r,t){r.uniform4iv(this.addr,t)}function wx(r,t){r.uniform1uiv(this.addr,t)}function Tx(r,t){r.uniform2uiv(this.addr,t)}function Ax(r,t){r.uniform3uiv(this.addr,t)}function Px(r,t){r.uniform4uiv(this.addr,t)}function Rx(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=Au:a=Xf;for(let o=0;o!==i;++o)e.setTexture2D(t[o]||a,s[o])}function Ox(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)e.setTexture3D(t[a]||Yf,s[a])}function Ix(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)e.setTextureCube(t[a]||$f,s[a])}function Bx(r,t,e){let n=this.cache,i=t.length,s=kc(e,i);en(n,s)||(r.uniform1iv(this.addr,s),nn(n,s));for(let a=0;a!==i;++a)e.setTexture2DArray(t[a]||qf,s[a])}function Dx(r){switch(r){case 5126:return mx;case 35664:return gx;case 35665:return _x;case 35666:return xx;case 35674:return vx;case 35675:return yx;case 35676:return Mx;case 5124:case 35670:return bx;case 35667:case 35671:return Sx;case 35668:case 35672:return Cx;case 35669:case 35673:return Ex;case 5125:return wx;case 36294:return Tx;case 36295:return Ax;case 36296:return Px;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Ox;case 35680:case 36300:case 36308:case 36293:return Ix;case 36289:case 36303:case 36311:case 36292:return Bx}}var Pu=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=px(e.type)}};var Ru=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Dx(e.type)}};var Ou=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,a=i.length;s!==a;++s){let o=i[s];o.setValue(t,e[o.id],n)}}};var wu=/(\w+)(\])?(\[|\.)?/g;function Of(r,t){r.seq.push(t),r.map[t.id]=t}function Lx(r,t,e){let n=r.name,i=n.length;for(wu.lastIndex=0;;){let s=wu.exec(n),a=wu.lastIndex,o=s[1],c=s[2]===`]`,l=s[3];if(c&&(o=o|0),l===void 0||l===`[`&&a+2===i){Of(e,l===void 0?new Pu(o,r,t):new Ru(o,r,t));break}else{let d=e.map[o];d===void 0&&(d=new Ou(o),Of(e,d)),e=d}}}var Is=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=t.getActiveUniform(e,a);Lx(o,t.getUniformLocation(e,o.name),this)}let i=[],s=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,a=e.length;s!==a;++s){let o=e[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(t,c.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let a=t[i];a.id in e&&n.push(a)}return n}};function If(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Fx=37297;var Nx=0;function Ux(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=i;a<s;a++){let o=a+1;n.push(`${o===t?`>`:` `} ${o}: ${e[a]}`)}return n.join(`
`)}var Bf=new Ht;function kx(r){ie._getMatrix(Bf,ie.workingColorSpace,r);let t=`mat3( ${Bf.elements.map(e=>e.toFixed(4))} )`;switch(ie.getTransfer(r)){case Js:return[t,`LinearTransferOETF`];case fe:return[t,`sRGBTransferOETF`];default:return kt(`WebGLProgram: Unsupported color space: `,r),[t,`LinearTransferOETF`]}}function Df(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||``).trim();if(n&&s===``)return``;let a=/ERROR: 0:(\d+)/.exec(s);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+s+`

`+Ux(r.getShaderSource(t),o)}else return s}function zx(r,t){let e=kx(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,`}`].join(`
`)}var Gx={[nu]:`Linear`,[iu]:`Reinhard`,[ru]:`Cineon`,[su]:`ACESFilmic`,[ou]:`AgX`,[cu]:`Neutral`,[au]:`Custom`};function Vx(r,t){let e=Gx[t];return e===void 0?(kt(`WebGLProgram: Unsupported toneMapping:`,t),`vec3 `+r+`( vec3 color ) { return LinearToneMapping( color ); }`):`vec3 `+r+`( vec3 color ) { return `+e+`ToneMapping( color ); }`}var Dc=new V;function Hx(){ie.getLuminanceCoefficients(Dc);return[`float luminance( const in vec3 rgb ) {`,`	const vec3 weights = vec3( ${Dc.x.toFixed(4)}, ${Dc.y.toFixed(4)}, ${Dc.z.toFixed(4)} );`,`	return dot( weights, rgb );`,`}`].join(`
`)}function Wx(r){return[r.extensionClipCullDistance?`#extension GL_ANGLE_clip_cull_distance : require`:``,r.extensionMultiDraw?`#extension GL_ANGLE_multi_draw : require`:``].filter(Aa).join(`
`)}function Xx(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push(`#define `+e+` `+n)}return t.join(`
`)}function qx(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),a=s.name,o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:r.getAttribLocation(t,a),locationSize:o}}return e}function Aa(r){return r!==``}function Lf(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Ff(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Yx=/^[ \t]*#include +<([\w\d./]+)>/gm;function Iu(r){return r.replace(Yx,Kx)}var $x=new Map;function Kx(r,t){let e=Jt[t];if(e===void 0){let n=$x.get(t);if(n!==void 0)e=Jt[n],kt(`WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.`,t,n);else throw new Error(`THREE.WebGLProgram: Can not resolve #include <`+t+`>`)}return Iu(e)}var Zx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Nf(r){return r.replace(Zx,Jx)}function Jx(r,t,e,n){let i=``;for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,`[ `+s+` ]`).replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Uf(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision===`highp`?t+=`
#define HIGH_PRECISION`:r.precision===`mediump`?t+=`
#define MEDIUM_PRECISION`:r.precision===`lowp`&&(t+=`
#define LOW_PRECISION`),t}var Qx={[Nr]:`SHADOWMAP_TYPE_PCF`,[ws]:`SHADOWMAP_TYPE_VSM`};function jx(r){return Qx[r.shadowMapType]||`SHADOWMAP_TYPE_BASIC`}var tv={[hr]:`ENVMAP_TYPE_CUBE`,[kr]:`ENVMAP_TYPE_CUBE`,[_a]:`ENVMAP_TYPE_CUBE_UV`};function ev(r){return r.envMap===!1?`ENVMAP_TYPE_CUBE`:tv[r.envMapMode]||`ENVMAP_TYPE_CUBE`}var nv={[kr]:`ENVMAP_MODE_REFRACTION`};function iv(r){return r.envMap===!1?`ENVMAP_MODE_REFLECTION`:nv[r.envMapMode]||`ENVMAP_MODE_REFLECTION`}var rv={[eu]:`ENVMAP_BLENDING_MULTIPLY`,[ef]:`ENVMAP_BLENDING_MIX`,[nf]:`ENVMAP_BLENDING_ADD`};function sv(r){return r.envMap===!1?`ENVMAP_BLENDING_NONE`:rv[r.combine]||`ENVMAP_BLENDING_NONE`}function av(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ov(r,t,e,n){let i=r.getContext(),s=e.defines,a=e.vertexShader,o=e.fragmentShader,c=jx(e),l=ev(e),u=iv(e),d=sv(e),h=av(e),f=Wx(e),g=Xx(s),_=i.createProgram(),m,p,b=e.glslVersion?`#version `+e.glslVersion+`
`:``;e.isRawShaderMaterial?(m=[`#define SHADER_TYPE `+e.shaderType,`#define SHADER_NAME `+e.shaderName,g].filter(Aa).join(`
`),m.length>0&&(m+=`
`),p=[`#define SHADER_TYPE `+e.shaderType,`#define SHADER_NAME `+e.shaderName,g].filter(Aa).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(e),`#define SHADER_TYPE `+e.shaderType,`#define SHADER_NAME `+e.shaderName,g,e.extensionClipCullDistance?`#define USE_CLIP_DISTANCE`:``,e.batching?`#define USE_BATCHING`:``,e.batchingColor?`#define USE_BATCHING_COLOR`:``,e.instancing?`#define USE_INSTANCING`:``,e.instancingColor?`#define USE_INSTANCING_COLOR`:``,e.instancingMorph?`#define USE_INSTANCING_MORPH`:``,e.useFog&&e.fog?`#define USE_FOG`:``,e.useFog&&e.fogExp2?`#define FOG_EXP2`:``,e.map?`#define USE_MAP`:``,e.envMap?`#define USE_ENVMAP`:``,e.envMap?`#define `+u:``,e.lightMap?`#define USE_LIGHTMAP`:``,e.aoMap?`#define USE_AOMAP`:``,e.bumpMap?`#define USE_BUMPMAP`:``,e.normalMap?`#define USE_NORMALMAP`:``,e.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,e.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,e.displacementMap?`#define USE_DISPLACEMENTMAP`:``,e.emissiveMap?`#define USE_EMISSIVEMAP`:``,e.anisotropy?`#define USE_ANISOTROPY`:``,e.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,e.clearcoatMap?`#define USE_CLEARCOATMAP`:``,e.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,e.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,e.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,e.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,e.specularMap?`#define USE_SPECULARMAP`:``,e.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,e.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,e.roughnessMap?`#define USE_ROUGHNESSMAP`:``,e.metalnessMap?`#define USE_METALNESSMAP`:``,e.alphaMap?`#define USE_ALPHAMAP`:``,e.alphaHash?`#define USE_ALPHAHASH`:``,e.transmission?`#define USE_TRANSMISSION`:``,e.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,e.thicknessMap?`#define USE_THICKNESSMAP`:``,e.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,e.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,e.mapUv?`#define MAP_UV `+e.mapUv:``,e.alphaMapUv?`#define ALPHAMAP_UV `+e.alphaMapUv:``,e.lightMapUv?`#define LIGHTMAP_UV `+e.lightMapUv:``,e.aoMapUv?`#define AOMAP_UV `+e.aoMapUv:``,e.emissiveMapUv?`#define EMISSIVEMAP_UV `+e.emissiveMapUv:``,e.bumpMapUv?`#define BUMPMAP_UV `+e.bumpMapUv:``,e.normalMapUv?`#define NORMALMAP_UV `+e.normalMapUv:``,e.displacementMapUv?`#define DISPLACEMENTMAP_UV `+e.displacementMapUv:``,e.metalnessMapUv?`#define METALNESSMAP_UV `+e.metalnessMapUv:``,e.roughnessMapUv?`#define ROUGHNESSMAP_UV `+e.roughnessMapUv:``,e.anisotropyMapUv?`#define ANISOTROPYMAP_UV `+e.anisotropyMapUv:``,e.clearcoatMapUv?`#define CLEARCOATMAP_UV `+e.clearcoatMapUv:``,e.clearcoatNormalMapUv?`#define CLEARCOAT_NORMALMAP_UV `+e.clearcoatNormalMapUv:``,e.clearcoatRoughnessMapUv?`#define CLEARCOAT_ROUGHNESSMAP_UV `+e.clearcoatRoughnessMapUv:``,e.iridescenceMapUv?`#define IRIDESCENCEMAP_UV `+e.iridescenceMapUv:``,e.iridescenceThicknessMapUv?`#define IRIDESCENCE_THICKNESSMAP_UV `+e.iridescenceThicknessMapUv:``,e.sheenColorMapUv?`#define SHEEN_COLORMAP_UV `+e.sheenColorMapUv:``,e.sheenRoughnessMapUv?`#define SHEEN_ROUGHNESSMAP_UV `+e.sheenRoughnessMapUv:``,e.specularMapUv?`#define SPECULARMAP_UV `+e.specularMapUv:``,e.specularColorMapUv?`#define SPECULAR_COLORMAP_UV `+e.specularColorMapUv:``,e.specularIntensityMapUv?`#define SPECULAR_INTENSITYMAP_UV `+e.specularIntensityMapUv:``,e.transmissionMapUv?`#define TRANSMISSIONMAP_UV `+e.transmissionMapUv:``,e.thicknessMapUv?`#define THICKNESSMAP_UV `+e.thicknessMapUv:``,e.vertexTangents&&e.flatShading===!1?`#define USE_TANGENT`:``,e.vertexNormals?`#define HAS_NORMAL`:``,e.vertexColors?`#define USE_COLOR`:``,e.vertexAlphas?`#define USE_COLOR_ALPHA`:``,e.vertexUv1s?`#define USE_UV1`:``,e.vertexUv2s?`#define USE_UV2`:``,e.vertexUv3s?`#define USE_UV3`:``,e.pointsUvs?`#define USE_POINTS_UV`:``,e.flatShading?`#define FLAT_SHADED`:``,e.skinning?`#define USE_SKINNING`:``,e.morphTargets?`#define USE_MORPHTARGETS`:``,e.morphNormals&&e.flatShading===!1?`#define USE_MORPHNORMALS`:``,e.morphColors?`#define USE_MORPHCOLORS`:``,e.morphTargetsCount>0?`#define MORPHTARGETS_TEXTURE_STRIDE `+e.morphTextureStride:``,e.morphTargetsCount>0?`#define MORPHTARGETS_COUNT `+e.morphTargetsCount:``,e.doubleSided?`#define DOUBLE_SIDED`:``,e.flipSided?`#define FLIP_SIDED`:``,e.shadowMapEnabled?`#define USE_SHADOWMAP`:``,e.shadowMapEnabled?`#define `+c:``,e.sizeAttenuation?`#define USE_SIZEATTENUATION`:``,e.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,e.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,e.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 modelMatrix;`,`uniform mat4 modelViewMatrix;`,`uniform mat4 projectionMatrix;`,`uniform mat4 viewMatrix;`,`uniform mat3 normalMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,`#ifdef USE_INSTANCING`,`	attribute mat4 instanceMatrix;`,`#endif`,`#ifdef USE_INSTANCING_COLOR`,`	attribute vec3 instanceColor;`,`#endif`,`#ifdef USE_INSTANCING_MORPH`,`	uniform sampler2D morphTexture;`,`#endif`,`attribute vec3 position;`,`attribute vec3 normal;`,`attribute vec2 uv;`,`#ifdef USE_UV1`,`	attribute vec2 uv1;`,`#endif`,`#ifdef USE_UV2`,`	attribute vec2 uv2;`,`#endif`,`#ifdef USE_UV3`,`	attribute vec2 uv3;`,`#endif`,`#ifdef USE_TANGENT`,`	attribute vec4 tangent;`,`#endif`,`#if defined( USE_COLOR_ALPHA )`,`	attribute vec4 color;`,`#elif defined( USE_COLOR )`,`	attribute vec3 color;`,`#endif`,`#ifdef USE_SKINNING`,`	attribute vec4 skinIndex;`,`	attribute vec4 skinWeight;`,`#endif`,`
`].filter(Aa).join(`
`),p=[Uf(e),`#define SHADER_TYPE `+e.shaderType,`#define SHADER_NAME `+e.shaderName,g,e.useFog&&e.fog?`#define USE_FOG`:``,e.useFog&&e.fogExp2?`#define FOG_EXP2`:``,e.alphaToCoverage?`#define ALPHA_TO_COVERAGE`:``,e.map?`#define USE_MAP`:``,e.matcap?`#define USE_MATCAP`:``,e.envMap?`#define USE_ENVMAP`:``,e.envMap?`#define `+l:``,e.envMap?`#define `+u:``,e.envMap?`#define `+d:``,h?`#define CUBEUV_TEXEL_WIDTH `+h.texelWidth:``,h?`#define CUBEUV_TEXEL_HEIGHT `+h.texelHeight:``,h?`#define CUBEUV_MAX_MIP `+h.maxMip+`.0`:``,e.lightMap?`#define USE_LIGHTMAP`:``,e.aoMap?`#define USE_AOMAP`:``,e.bumpMap?`#define USE_BUMPMAP`:``,e.normalMap?`#define USE_NORMALMAP`:``,e.normalMapObjectSpace?`#define USE_NORMALMAP_OBJECTSPACE`:``,e.normalMapTangentSpace?`#define USE_NORMALMAP_TANGENTSPACE`:``,e.packedNormalMap?`#define USE_PACKED_NORMALMAP`:``,e.emissiveMap?`#define USE_EMISSIVEMAP`:``,e.anisotropy?`#define USE_ANISOTROPY`:``,e.anisotropyMap?`#define USE_ANISOTROPYMAP`:``,e.clearcoat?`#define USE_CLEARCOAT`:``,e.clearcoatMap?`#define USE_CLEARCOATMAP`:``,e.clearcoatRoughnessMap?`#define USE_CLEARCOAT_ROUGHNESSMAP`:``,e.clearcoatNormalMap?`#define USE_CLEARCOAT_NORMALMAP`:``,e.dispersion?`#define USE_DISPERSION`:``,e.retroreflection?`#define USE_RETROREFLECTION`:``,e.iridescence?`#define USE_IRIDESCENCE`:``,e.iridescenceMap?`#define USE_IRIDESCENCEMAP`:``,e.iridescenceThicknessMap?`#define USE_IRIDESCENCE_THICKNESSMAP`:``,e.specularMap?`#define USE_SPECULARMAP`:``,e.specularColorMap?`#define USE_SPECULAR_COLORMAP`:``,e.specularIntensityMap?`#define USE_SPECULAR_INTENSITYMAP`:``,e.roughnessMap?`#define USE_ROUGHNESSMAP`:``,e.metalnessMap?`#define USE_METALNESSMAP`:``,e.alphaMap?`#define USE_ALPHAMAP`:``,e.alphaTest?`#define USE_ALPHATEST`:``,e.alphaHash?`#define USE_ALPHAHASH`:``,e.sheen?`#define USE_SHEEN`:``,e.sheenColorMap?`#define USE_SHEEN_COLORMAP`:``,e.sheenRoughnessMap?`#define USE_SHEEN_ROUGHNESSMAP`:``,e.transmission?`#define USE_TRANSMISSION`:``,e.transmissionMap?`#define USE_TRANSMISSIONMAP`:``,e.thicknessMap?`#define USE_THICKNESSMAP`:``,e.vertexTangents&&e.flatShading===!1?`#define USE_TANGENT`:``,e.vertexColors||e.instancingColor?`#define USE_COLOR`:``,e.vertexAlphas||e.batchingColor?`#define USE_COLOR_ALPHA`:``,e.vertexUv1s?`#define USE_UV1`:``,e.vertexUv2s?`#define USE_UV2`:``,e.vertexUv3s?`#define USE_UV3`:``,e.pointsUvs?`#define USE_POINTS_UV`:``,e.gradientMap?`#define USE_GRADIENTMAP`:``,e.flatShading?`#define FLAT_SHADED`:``,e.doubleSided?`#define DOUBLE_SIDED`:``,e.flipSided?`#define FLIP_SIDED`:``,e.shadowMapEnabled?`#define USE_SHADOWMAP`:``,e.shadowMapEnabled?`#define `+c:``,e.premultipliedAlpha?`#define PREMULTIPLIED_ALPHA`:``,e.numLightProbes>0?`#define USE_LIGHT_PROBES`:``,e.numLightProbeGrids>0?`#define USE_LIGHT_PROBES_GRID`:``,e.decodeVideoTexture?`#define DECODE_VIDEO_TEXTURE`:``,e.decodeVideoTextureEmissive?`#define DECODE_VIDEO_TEXTURE_EMISSIVE`:``,e.logarithmicDepthBuffer?`#define USE_LOGARITHMIC_DEPTH_BUFFER`:``,e.reversedDepthBuffer?`#define USE_REVERSED_DEPTH_BUFFER`:``,`uniform mat4 viewMatrix;`,`uniform vec3 cameraPosition;`,`uniform bool isOrthographic;`,e.toneMapping!==hi?`#define TONE_MAPPING`:``,e.toneMapping!==hi?Jt.tonemapping_pars_fragment:``,e.toneMapping!==hi?Vx(`toneMapping`,e.toneMapping):``,e.dithering?`#define DITHERING`:``,e.opaque?`#define OPAQUE`:``,Jt.colorspace_pars_fragment,zx(`linearToOutputTexel`,e.outputColorSpace),Hx(),e.useDepthPacking?`#define DEPTH_PACKING `+e.depthPacking:``,`
`].filter(Aa).join(`
`)),a=Iu(a),a=Lf(a,e),a=Ff(a,e),o=Iu(o),o=Lf(o,e),o=Ff(o,e),a=Nf(a),o=Nf(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,`#define attribute in`,`#define varying out`,`#define texture2D texture`].join(`
`)+`
`+m,p=[`#define varying in`,e.glslVersion===gu?``:`layout(location = 0) out highp vec4 pc_fragColor;`,e.glslVersion===gu?``:`#define gl_FragColor pc_fragColor`,`#define gl_FragDepthEXT gl_FragDepth`,`#define texture2D texture`,`#define textureCube texture`,`#define texture2DProj textureProj`,`#define texture2DLodEXT textureLod`,`#define texture2DProjLodEXT textureProjLod`,`#define textureCubeLodEXT textureLod`,`#define texture2DGradEXT textureGrad`,`#define texture2DProjGradEXT textureProjGrad`,`#define textureCubeGradEXT textureGrad`].join(`
`)+`
`+p);let w=b+m+a,y=b+p+o,M=If(i,i.VERTEX_SHADER,w),E=If(i,i.FRAGMENT_SHADER,y);i.attachShader(_,M),i.attachShader(_,E),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,`position`),i.linkProgram(_);function T(B){if(r.debug.checkShaderErrors){let L=i.getProgramInfoLog(_)||``,k=i.getShaderInfoLog(M)||``,I=i.getShaderInfoLog(E)||``,G=L.trim(),Y=k.trim(),$=I.trim(),rt=!0,Z=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(rt=!1,typeof r.debug.onShaderError==`function`)r.debug.onShaderError(i,_,M,E);else{let tt=Df(i,M,`vertex`),ot=Df(i,E,`fragment`);zt(`WebGLProgram: Shader Error `+i.getError()+` - VALIDATE_STATUS `+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+G+`
`+tt+`
`+ot)}else G!==``?kt(`WebGLProgram: Program Info Log:`,G):(Y===``||$===``)&&(Z=!1);Z&&(B.diagnostics={runnable:rt,programLog:G,vertexShader:{log:Y,prefix:m},fragmentShader:{log:$,prefix:p}})}i.deleteShader(M),i.deleteShader(E),x=new Is(i,_),C=qx(i,_)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let C;this.getAttributes=function(){return C===void 0&&T(this),C};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(_,Fx)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Nx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=M,this.fragmentShader=E,this}var cv=0;var Bu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new Du(t),e.set(t,n)),n}};var Du=class{constructor(t){this.id=cv++,this.code=t,this.usedTimes=0}};function lv(r){return r===pr||r===Sa||r===Ca}function uv(r,t,e,n,i,s){let a=new ea,o=new Bu,c=new Set,l=[],u=new Map,d=n.logarithmicDepthBuffer,h=n.precision,f={MeshDepthMaterial:`depth`,MeshDistanceMaterial:`distance`,MeshNormalMaterial:`normal`,MeshBasicMaterial:`basic`,MeshLambertMaterial:`lambert`,MeshPhongMaterial:`phong`,MeshToonMaterial:`toon`,MeshStandardMaterial:`physical`,MeshPhysicalMaterial:`physical`,MeshMatcapMaterial:`matcap`,LineBasicMaterial:`basic`,LineDashedMaterial:`dashed`,PointsMaterial:`points`,ShadowMaterial:`shadow`,SpriteMaterial:`sprite`};function g(x){return c.add(x),x===0?`uv`:`uv${x}`}function _(x,C,P,B,L,k){let I=B.fog,G=L.geometry,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?B.environment:null,$=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,rt=t.get(x.envMap||Y,$),Z=rt&&rt.mapping===_a?rt.image.height:null,tt=f[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&kt(`WebGLProgram.getParameters:`,x.precision,`not supported, using`,h,`instead.`));let ot=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,wt=ot!==void 0?ot.length:0,Pt=0;G.morphAttributes.position!==void 0&&(Pt=1),G.morphAttributes.normal!==void 0&&(Pt=2),G.morphAttributes.color!==void 0&&(Pt=3);let $t,Wt,ae,j;if(tt){let be=Ti[tt];$t=be.vertexShader,Wt=be.fragmentShader}else{$t=x.vertexShader,Wt=x.fragmentShader;let be=o.getVertexShaderStage(x),he=o.getFragmentShaderStage(x);o.update(x,be,he),ae=be.id,j=he.id}let st=r.getRenderTarget(),St=r.state.buffers.depth.getReversed(),Gt=L.isInstancedMesh===!0,Mt=L.isBatchedMesh===!0,Yt=!!x.map,ze=!!x.matcap,Kt=!!rt,oe=!!x.aoMap,ue=!!x.lightMap,te=!!x.bumpMap&&x.wireframe===!1,Me=!!x.normalMap,Fe=!!x.displacementMap,dn=!!x.emissiveMap,Bt=!!x.metalnessMap,Vt=!!x.roughnessMap,D=x.anisotropy>0,Ae=x.clearcoat>0,ne=x.dispersion>0,A=x.retroreflectivity>0,v=x.iridescence>0,z=x.sheen>0,q=x.transmission>0,J=D&&!!x.anisotropyMap,ut=Ae&&!!x.clearcoatMap,ht=Ae&&!!x.clearcoatNormalMap,Q=Ae&&!!x.clearcoatRoughnessMap,et=v&&!!x.iridescenceMap,dt=v&&!!x.iridescenceThicknessMap,Rt=z&&!!x.sheenColorMap,gt=z&&!!x.sheenRoughnessMap,ft=!!x.specularMap,Dt=!!x.specularColorMap,Ut=!!x.specularIntensityMap,qt=q&&!!x.transmissionMap,N=q&&!!x.thicknessMap,pt=!!x.gradientMap,nt=!!x.alphaMap,mt=x.alphaTest>0,yt=!!x.alphaHash,lt=!!x.extensions,Ft=hi;x.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(Ft=r.toneMapping);let Ot={shaderID:tt,shaderType:x.type,shaderName:x.name,vertexShader:$t,fragmentShader:Wt,defines:x.defines,customVertexShaderID:ae,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:Mt,batchingColor:Mt&&L._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&L.instanceColor!==null,instancingMorph:Gt&&L.morphTexture!==null,outputColorSpace:st===null?r.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:ie.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Yt,matcap:ze,envMap:Kt,envMapMode:Kt&&rt.mapping,envMapCubeUVHeight:Z,aoMap:oe,lightMap:ue,bumpMap:te,normalMap:Me,displacementMap:Fe,emissiveMap:dn,normalMapObjectSpace:Me&&x.normalMapType===af,normalMapTangentSpace:Me&&x.normalMapType===Rc,packedNormalMap:Me&&x.normalMapType===Rc&&lv(x.normalMap.format),metalnessMap:Bt,roughnessMap:Vt,anisotropy:D,anisotropyMap:J,clearcoat:Ae,clearcoatMap:ut,clearcoatNormalMap:ht,clearcoatRoughnessMap:Q,dispersion:ne,retroreflection:A,iridescence:v,iridescenceMap:et,iridescenceThicknessMap:dt,sheen:z,sheenColorMap:Rt,sheenRoughnessMap:gt,specularMap:ft,specularColorMap:Dt,specularIntensityMap:Ut,transmission:q,transmissionMap:qt,thicknessMap:N,gradientMap:pt,opaque:x.transparent===!1&&x.blending===Ts&&x.alphaToCoverage===!1,alphaMap:nt,alphaTest:mt,alphaHash:yt,combine:x.combine,mapUv:Yt&&g(x.map.channel),aoMapUv:oe&&g(x.aoMap.channel),lightMapUv:ue&&g(x.lightMap.channel),bumpMapUv:te&&g(x.bumpMap.channel),normalMapUv:Me&&g(x.normalMap.channel),displacementMapUv:Fe&&g(x.displacementMap.channel),emissiveMapUv:dn&&g(x.emissiveMap.channel),metalnessMapUv:Bt&&g(x.metalnessMap.channel),roughnessMapUv:Vt&&g(x.roughnessMap.channel),anisotropyMapUv:J&&g(x.anisotropyMap.channel),clearcoatMapUv:ut&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ht&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:dt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&g(x.sheenRoughnessMap.channel),specularMapUv:ft&&g(x.specularMap.channel),specularColorMapUv:Dt&&g(x.specularColorMap.channel),specularIntensityMapUv:Ut&&g(x.specularIntensityMap.channel),transmissionMapUv:qt&&g(x.transmissionMap.channel),thicknessMapUv:N&&g(x.thicknessMap.channel),alphaMapUv:nt&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Me||D),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(Yt||nt),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Me===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:St,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:wt,morphTextureStride:Pt,numSunLights:C.sun.length,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numSunLightShadows:C.sunShadowMap.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numLightProbeGrids:k.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Yt&&x.map.isVideoTexture===!0&&ie.getTransfer(x.map.colorSpace)===fe,decodeVideoTextureEmissive:dn&&x.emissiveMap.isVideoTexture===!0&&ie.getTransfer(x.emissiveMap.colorSpace)===fe,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:lt&&x.extensions.clipCullDistance===!0&&e.has(`WEBGL_clip_cull_distance`),extensionMultiDraw:(lt&&x.extensions.multiDraw===!0||Mt)&&e.has(`WEBGL_multi_draw`),rendererExtensionParallelShaderCompile:e.has(`KHR_parallel_shader_compile`),customProgramCacheKey:x.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function m(x){let C=[];if(x.shaderID?C.push(x.shaderID):(C.push(x.customVertexShaderID),C.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)C.push(P),C.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(p(C,x),b(C,x),C.push(r.outputColorSpace)),C.push(x.customProgramCacheKey),C.join()}function p(x,C){x.push(C.precision),x.push(C.outputColorSpace),x.push(C.envMapMode),x.push(C.envMapCubeUVHeight),x.push(C.mapUv),x.push(C.alphaMapUv),x.push(C.lightMapUv),x.push(C.aoMapUv),x.push(C.bumpMapUv),x.push(C.normalMapUv),x.push(C.displacementMapUv),x.push(C.emissiveMapUv),x.push(C.metalnessMapUv),x.push(C.roughnessMapUv),x.push(C.anisotropyMapUv),x.push(C.clearcoatMapUv),x.push(C.clearcoatNormalMapUv),x.push(C.clearcoatRoughnessMapUv),x.push(C.iridescenceMapUv),x.push(C.iridescenceThicknessMapUv),x.push(C.sheenColorMapUv),x.push(C.sheenRoughnessMapUv),x.push(C.specularMapUv),x.push(C.specularColorMapUv),x.push(C.specularIntensityMapUv),x.push(C.transmissionMapUv),x.push(C.thicknessMapUv),x.push(C.combine),x.push(C.fogExp2),x.push(C.sizeAttenuation),x.push(C.morphTargetsCount),x.push(C.morphAttributeCount),x.push(C.numSunLights),x.push(C.numDirLights),x.push(C.numPointLights),x.push(C.numSpotLights),x.push(C.numSpotLightMaps),x.push(C.numHemiLights),x.push(C.numRectAreaLights),x.push(C.numSunLightShadows),x.push(C.numDirLightShadows),x.push(C.numPointLightShadows),x.push(C.numSpotLightShadows),x.push(C.numSpotLightShadowsWithMaps),x.push(C.numLightProbes),x.push(C.shadowMapType),x.push(C.toneMapping),x.push(C.numClippingPlanes),x.push(C.numClipIntersection),x.push(C.depthPacking)}function b(x,C){a.disableAll(),C.instancing&&a.enable(0),C.instancingColor&&a.enable(1),C.instancingMorph&&a.enable(2),C.matcap&&a.enable(3),C.envMap&&a.enable(4),C.normalMapObjectSpace&&a.enable(5),C.normalMapTangentSpace&&a.enable(6),C.clearcoat&&a.enable(7),C.iridescence&&a.enable(8),C.alphaTest&&a.enable(9),C.vertexColors&&a.enable(10),C.vertexAlphas&&a.enable(11),C.vertexUv1s&&a.enable(12),C.vertexUv2s&&a.enable(13),C.vertexUv3s&&a.enable(14),C.vertexTangents&&a.enable(15),C.anisotropy&&a.enable(16),C.alphaHash&&a.enable(17),C.batching&&a.enable(18),C.dispersion&&a.enable(19),C.retroreflection&&a.enable(24),C.batchingColor&&a.enable(20),C.gradientMap&&a.enable(21),C.packedNormalMap&&a.enable(22),C.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),C.fog&&a.enable(0),C.useFog&&a.enable(1),C.flatShading&&a.enable(2),C.logarithmicDepthBuffer&&a.enable(3),C.reversedDepthBuffer&&a.enable(4),C.skinning&&a.enable(5),C.morphTargets&&a.enable(6),C.morphNormals&&a.enable(7),C.morphColors&&a.enable(8),C.premultipliedAlpha&&a.enable(9),C.shadowMapEnabled&&a.enable(10),C.doubleSided&&a.enable(11),C.flipSided&&a.enable(12),C.useDepthPacking&&a.enable(13),C.dithering&&a.enable(14),C.transmission&&a.enable(15),C.sheen&&a.enable(16),C.opaque&&a.enable(17),C.pointsUvs&&a.enable(18),C.decodeVideoTexture&&a.enable(19),C.decodeVideoTextureEmissive&&a.enable(20),C.alphaToCoverage&&a.enable(21),C.numLightProbeGrids>0&&a.enable(22),C.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let C=f[x.type],P;if(C){let B=Ti[C];P=yf.clone(B.uniforms)}else P=x.uniforms;return P}function y(x,C){let P=u.get(C);return P!==void 0?++P.usedTimes:(P=new ov(r,C,x,i),l.push(P),u.set(C,P)),P}function M(x){if(--x.usedTimes===0){let C=l.indexOf(x);l[C]=l[l.length-1],l.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){o.remove(x)}function T(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:w,acquireProgram:y,releaseProgram:M,releaseShaderCache:E,programs:l,dispose:T}}function hv(){let r=new WeakMap;function t(a){return r.has(a)}function e(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function dv(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.materialVariant!==t.materialVariant?r.materialVariant-t.materialVariant:r.z!==t.z?r.z-t.z:r.id-t.id}function kf(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function zf(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function a(h){let f=0;return h.isInstancedMesh&&(f+=2),h.isSkinnedMesh&&(f+=1),f}function o(h,f,g,_,m,p){let b=r[t];return b===void 0?(b={id:h.id,object:h,geometry:f,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},r[t]=b):(b.id=h.id,b.object=h,b.geometry=f,b.material=g,b.materialVariant=a(h),b.groupOrder=_,b.renderOrder=h.renderOrder,b.z=m,b.group=p),t++,b}function c(h,f,g,_,m,p,b){b.reversedDepth===!0&&(m=-m);let w=o(h,f,g,_,m,p);g.transmission>0?n.push(w):g.transparent===!0?i.push(w):e.push(w)}function l(h,f,g,_,m,p){let b=o(h,f,g,_,m,p);g.transmission>0?n.unshift(b):g.transparent===!0?i.unshift(b):e.unshift(b)}function u(h,f){e.length>1&&e.sort(h||dv),n.length>1&&n.sort(f||kf),i.length>1&&i.sort(f||kf)}function d(){for(let h=t,f=r.length;h<f;h++){let g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:u}}function fv(){let r=new WeakMap;function t(n,i){let s=r.get(n),a;return s===void 0?(a=new zf,r.set(n,[a])):i>=s.length?(a=new zf,s.push(a)):a=s[i],a}function e(){r=new WeakMap}return{get:t,dispose:e}}function pv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case`SunLight`:case`DirectionalLight`:e={direction:new V,color:new Xt};break;case`SpotLight`:e={position:new V,direction:new V,color:new Xt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case`PointLight`:e={position:new V,color:new Xt,distance:0,decay:0};break;case`HemisphereLight`:e={direction:new V,skyColor:new Xt,groundColor:new Xt};break;case`RectAreaLight`:e={color:new Xt,position:new V,halfWidth:new V,halfHeight:new V};break}return r[t.id]=e,e}}}function mv(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case`SunLight`:case`DirectionalLight`:e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case`SpotLight`:e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt};break;case`PointLight`:e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var gv=0;function _v(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function xv(r){let t=new pv,e=mv(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new V);let i=new V,s=new Pe,a=new Pe;function o(l){let u=0,d=0,h=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,m=0,p=0,b=0,w=0,y=0,M=0,E=0,T=0,x=0,C=0,P=0;l.sort(_v);for(let L=0,k=l.length;L<k;L++){let I=l[L],G=I.color,Y=I.intensity,$=I.distance,rt=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===pr?rt=I.shadow.map.texture:rt=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)u+=G.r*Y,d+=G.g*Y,h+=G.b*Y;else if(I.isLightProbe){for(let Z=0;Z<9;Z++)n.probe[Z].addScaledVector(I.sh.coefficients[Z],Y);P++}else if(I.isSunLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,ot=e.get(I);ot.shadowIntensity=tt.intensity,ot.shadowBias=tt.bias,ot.shadowNormalBias=tt.normalBias,ot.shadowRadius=tt.radius,ot.shadowMapSize.copy(tt.mapSize).multiply(tt.getFrameExtents()),n.sunShadow[g]=ot,n.sunShadowMap[g]=rt;let wt=tt.getViewportCount();for(let Pt=0;Pt<wt;Pt++)n.sunShadowMatrix[_+Pt]=tt.getMatrix(Pt),n.sunShadowCascade[_+Pt]=tt._cascadeData[Pt];_+=wt,g++}n.sun[f]=Z,f++}else if(I.isDirectionalLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let tt=I.shadow,ot=e.get(I);ot.shadowIntensity=tt.intensity,ot.shadowBias=tt.bias,ot.shadowNormalBias=tt.normalBias,ot.shadowRadius=tt.radius,ot.shadowMapSize=tt.mapSize,n.directionalShadow[m]=ot,n.directionalShadowMap[m]=rt,n.directionalShadowMatrix[m]=I.shadow.matrix,M++}n.directional[m]=Z,m++}else if(I.isSpotLight){let Z=t.get(I);Z.position.setFromMatrixPosition(I.matrixWorld),Z.color.copy(G).multiplyScalar(Y),Z.distance=$,Z.coneCos=Math.cos(I.angle),Z.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Z.decay=I.decay,n.spot[b]=Z;let tt=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,tt.updateMatrices(I),I.castShadow&&C++),n.spotLightMatrix[b]=tt.matrix,I.castShadow){let ot=e.get(I);ot.shadowIntensity=tt.intensity,ot.shadowBias=tt.bias,ot.shadowNormalBias=tt.normalBias,ot.shadowRadius=tt.radius,ot.shadowMapSize=tt.mapSize,n.spotShadow[b]=ot,n.spotShadowMap[b]=rt,T++}b++}else if(I.isRectAreaLight){let Z=t.get(I);Z.color.copy(G).multiplyScalar(Y),Z.halfWidth.set(I.width*.5,0,0),Z.halfHeight.set(0,I.height*.5,0),n.rectArea[w]=Z,w++}else if(I.isPointLight){let Z=t.get(I);if(Z.color.copy(I.color).multiplyScalar(I.intensity),Z.distance=I.distance,Z.decay=I.decay,I.castShadow){let tt=I.shadow,ot=e.get(I);ot.shadowIntensity=tt.intensity,ot.shadowBias=tt.bias,ot.shadowNormalBias=tt.normalBias,ot.shadowRadius=tt.radius,ot.shadowMapSize=tt.mapSize,ot.shadowCameraNear=tt.camera.near,ot.shadowCameraFar=tt.camera.far,n.pointShadow[p]=ot,n.pointShadowMap[p]=rt,n.pointShadowMatrix[p]=I.shadow.matrix,E++}n.point[p]=Z,p++}else if(I.isHemisphereLight){let Z=t.get(I);Z.skyColor.copy(I.color).multiplyScalar(Y),Z.groundColor.copy(I.groundColor).multiplyScalar(Y),n.hemi[y]=Z,y++}}w>0&&(r.has(`OES_texture_float_linear`)===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=d,n.ambient[2]=h;let B=n.hash;(B.sunLength!==f||B.directionalLength!==m||B.pointLength!==p||B.spotLength!==b||B.rectAreaLength!==w||B.hemiLength!==y||B.numSunShadows!==g||B.numDirectionalShadows!==M||B.numPointShadows!==E||B.numSpotShadows!==T||B.numSpotMaps!==x||B.numLightProbes!==P)&&(n.sun.length=f,n.directional.length=m,n.spot.length=b,n.rectArea.length=w,n.point.length=p,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=T,n.spotShadowMap.length=T,n.spotLightMatrix.length=T+x-C,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=C,n.numLightProbes=P,B.sunLength=f,B.directionalLength=m,B.pointLength=p,B.spotLength=b,B.rectAreaLength=w,B.hemiLength=y,B.numSunShadows=g,B.numDirectionalShadows=M,B.numPointShadows=E,B.numSpotShadows=T,B.numSpotMaps=x,B.numLightProbes=P,n.version=gv++)}function c(l,u){let d=0,h=0,f=0,g=0,_=0,m=0,p=u.matrixWorldInverse;for(let b=0,w=l.length;b<w;b++){let y=l[b];if(y.isSunLight){let M=n.sun[d];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),d++}else if(y.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),h++}else if(y.isSpotLight){let M=n.spot[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(p),g++}else if(y.isRectAreaLight){let M=n.rectArea[_];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),a.identity(),s.copy(y.matrixWorld),s.premultiply(p),a.extractRotation(s),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(p),f++}else if(y.isHemisphereLight){let M=n.hemi[m];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Gf(r){let t=new xv(r),e=[],n=[],i=[];function s(h){d.camera=h,e.length=0,n.length=0,i.length=0}function a(h){e.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){t.setup(e)}function u(h){t.setupView(e,h)}let d={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:u,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function vv(r){let t=new WeakMap;function e(i,s=0){let a=t.get(i),o;return a===void 0?(o=new Gf(r),t.set(i,[o])):s>=a.length?(o=new Gf(r),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}var yv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`;var Mv=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`;var bv=[new V(1,0,0),new V(-1,0,0),new V(0,1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1)];var Sv=[new V(0,-1,0),new V(0,-1,0),new V(0,0,1),new V(0,0,-1),new V(0,-1,0),new V(0,-1,0)];var Vf=new Pe;var Ta=new V;var Tu=new V;function Cv(r,t,e){let n=new ys,i=new Qt,s=new Qt,a=new Re,o=new Bo,c=new Do,l={},u=e.maxTextureSize,d={[ur]:Cn,[Cn]:ur,[Si]:Si},h=new Wn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Qt},radius:{value:4}},vertexShader:yv,fragmentShader:Mv}),f=h.clone();f.defines.HORIZONTAL_PASS=1;let g=new gn;g.setAttribute(`position`,new In(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new Et(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nr;let p=this.type;this.render=function(E,T,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Fd&&(kt(`WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead.`),this.type=Nr);let C=r.getRenderTarget(),P=r.getActiveCubeFace(),B=r.getActiveMipmapLevel(),L=r.state;L.setBlending(Ci),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let k=p!==this.type;k&&T.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=E.length;I<G;I++){let Y=E[I],$=Y.shadow;if($===void 0){kt(`WebGLShadowMap:`,Y,`has no shadow.`);continue}if($.autoUpdate===!1&&$.needsUpdate===!1)continue;i.copy($.mapSize);let rt=$.getFrameExtents();i.multiply(rt),s.copy($.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/rt.x),i.x=s.x*rt.x,$.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/rt.y),i.y=s.y*rt.y,$.mapSize.y=s.y));let Z=r.state.buffers.depth.getReversed();if($.camera._reversedDepth=Z,$.map===null||k===!0){if($.map!==null&&($.map.depthTexture!==null&&($.map.depthTexture.dispose(),$.map.depthTexture=null),$.map.dispose()),this.type===ws){if(Y.isPointLight){kt(`WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.`);continue}$.map=new Bn(i.x,i.y,{format:pr,type:pi,minFilter:ln,magFilter:ln,generateMipmaps:!1}),$.map.texture.name=Y.name+`.shadowMap`,$.map.depthTexture=new sr(i.x,i.y,fi),$.map.depthTexture.name=Y.name+`.shadowMapDepth`,$.map.depthTexture.format=yi,$.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=cn,$.map.depthTexture.magFilter=cn}else Y.isPointLight?($.map=new Fc(i.x),$.map.depthTexture=new Ro(i.x,di)):($.map=new Bn(i.x,i.y),$.map.depthTexture=new sr(i.x,i.y,di)),$.map.depthTexture.name=Y.name+`.shadowMap`,$.map.depthTexture.format=yi,this.type===Nr?($.map.depthTexture.compareFunction=Z?Ic:Oc,$.map.depthTexture.minFilter=ln,$.map.depthTexture.magFilter=ln):($.map.depthTexture.compareFunction=null,$.map.depthTexture.minFilter=cn,$.map.depthTexture.magFilter=cn);$.camera.updateProjectionMatrix()}$.map.isWebGLCubeRenderTarget!==!0&&($.map.width!==i.x||$.map.height!==i.y)&&$.map.setSize(i.x,i.y);let tt=$.map.isWebGLCubeRenderTarget?6:$.getViewportCount();Y.isPointLight!==!0&&$.updateMatrices(Y,x);for(let ot=0;ot<tt;ot++){let wt=$.getCamera(ot);if(Y.isPointLight){let Pt=$.camera,$t=$.matrix,Wt=Y.distance||Pt.far;Wt!==Pt.far&&(Pt.far=Wt,Pt.updateProjectionMatrix()),Ta.setFromMatrixPosition(Y.matrixWorld),Pt.position.copy(Ta),Tu.copy(Pt.position),Tu.add(bv[ot]),Pt.up.copy(Sv[ot]),Pt.lookAt(Tu),Pt.updateMatrixWorld(),$t.makeTranslation(-Ta.x,-Ta.y,-Ta.z),Vf.multiplyMatrices(Pt.projectionMatrix,Pt.matrixWorldInverse),$._frustum.setFromProjectionMatrix(Vf,Pt.coordinateSystem,Pt.reversedDepth)}if($.map.isWebGLCubeRenderTarget)r.setRenderTarget($.map,ot),r.clear();else{ot===0&&(r.setRenderTarget($.map),r.clear());let Pt=$.getViewport(ot);a.set(s.x*Pt.x,s.y*Pt.y,s.x*Pt.z,s.y*Pt.w),L.viewport(a)}n=$.getFrustum(ot),y(T,x,wt,Y,this.type)}$.isPointLightShadow!==!0&&this.type===ws&&b($,x),$.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(C,P,B)};function b(E,T){let x=t.update(_);h.defines.VSM_SAMPLES!==E.blurSamples&&(h.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,h.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new Bn(i.x,i.y,{format:pr,type:pi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),h.uniforms.shadow_pass.value=E.map.depthTexture,h.uniforms.resolution.value.set(E.map.width,E.map.height),h.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(T,null,x,h,_,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(T,null,x,f,_,null)}function w(E,T,x,C){let P=null,B=x.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(B!==void 0)P=B;else if(P=x.isPointLight===!0?c:o,r.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0||T.alphaToCoverage===!0){let L=P.uuid,k=T.uuid,I=l[L];I===void 0&&(I={},l[L]=I);let G=I[k];G===void 0&&(G=P.clone(),I[k]=G,T.addEventListener(`dispose`,M)),P=G}if(P.visible=T.visible,P.wireframe=T.wireframe,C===ws?P.side=T.shadowSide!==null?T.shadowSide:T.side:P.side=T.shadowSide!==null?T.shadowSide:d[T.side],P.alphaMap=T.alphaMap,P.alphaTest=T.alphaToCoverage===!0?.5:T.alphaTest,P.map=T.map,P.clipShadows=T.clipShadows,P.clippingPlanes=T.clippingPlanes,P.clipIntersection=T.clipIntersection,P.displacementMap=T.displacementMap,P.displacementScale=T.displacementScale,P.displacementBias=T.displacementBias,P.wireframeLinewidth=T.wireframeLinewidth,P.linewidth=T.linewidth,x.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let L=r.properties.get(P);L.light=x}return P}function y(E,T,x,C,P){if(E.visible===!1)return;if(E.layers.test(T.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&P===ws)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,E.matrixWorld);let k=t.update(E),I=E.material;if(Array.isArray(I)){let G=k.groups;for(let Y=0,$=G.length;Y<$;Y++){let rt=G[Y],Z=I[rt.materialIndex];if(Z&&Z.visible){let tt=w(E,Z,C,P);E.onBeforeShadow(r,E,T,x,k,tt,rt),r.renderBufferDirect(x,null,k,tt,E,rt),E.onAfterShadow(r,E,T,x,k,tt,rt)}}}else if(I.visible){let G=w(E,I,C,P);E.onBeforeShadow(r,E,T,x,k,G,null),r.renderBufferDirect(x,null,k,G,E,null),E.onAfterShadow(r,E,T,x,k,G,null)}}let L=E.children;for(let k=0,I=L.length;k<I;k++)y(L[k],T,x,C,P)}function M(E){E.target.removeEventListener(`dispose`,M);for(let x in l){let C=l[x],P=E.target.uuid;P in C&&(C[P].dispose(),delete C[P])}}}function Ev(r,t){function e(){let N=!1,pt=new Re,nt=null,mt=new Re(0,0,0,0);return{setMask:function(yt){nt!==yt&&!N&&(r.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){N=yt},setClear:function(yt,lt,Ft,Ot,be){be===!0&&(yt*=Ot,lt*=Ot,Ft*=Ot),pt.set(yt,lt,Ft,Ot),mt.equals(pt)===!1&&(r.clearColor(yt,lt,Ft,Ot),mt.copy(pt))},reset:function(){N=!1,nt=null,mt.set(-1,0,0,0)}}}function n(){let N=!1,pt=!1,nt=null,mt=null,yt=null;return{setReversed:function(lt){if(pt!==lt){let Ft=t.get(`EXT_clip_control`);lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT),pt=lt;let Ot=yt;yt=null,this.setClear(Ot)}},getReversed:function(){return pt},setTest:function(lt){lt?st(r.DEPTH_TEST):St(r.DEPTH_TEST)},setMask:function(lt){nt!==lt&&!N&&(r.depthMask(lt),nt=lt)},setFunc:function(lt){if(pt&&(lt=xf[lt]),mt!==lt){switch(lt){case _o:r.depthFunc(r.NEVER);break;case xo:r.depthFunc(r.ALWAYS);break;case vo:r.depthFunc(r.LESS);break;case ps:r.depthFunc(r.LEQUAL);break;case yo:r.depthFunc(r.EQUAL);break;case Mo:r.depthFunc(r.GEQUAL);break;case bo:r.depthFunc(r.GREATER);break;case So:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=lt}},setLocked:function(lt){N=lt},setClear:function(lt){yt!==lt&&(yt=lt,pt&&(lt=1-lt),r.clearDepth(lt))},reset:function(){N=!1,nt=null,mt=null,yt=null,pt=!1}}}function i(){let N=!1,pt=null,nt=null,mt=null,yt=null,lt=null,Ft=null,Ot=null,be=null;return{setTest:function(he){N||(he?st(r.STENCIL_TEST):St(r.STENCIL_TEST))},setMask:function(he){pt!==he&&!N&&(r.stencilMask(he),pt=he)},setFunc:function(he,ri,mi){(nt!==he||mt!==ri||yt!==mi)&&(r.stencilFunc(he,ri,mi),nt=he,mt=ri,yt=mi)},setOp:function(he,ri,mi){(lt!==he||Ft!==ri||Ot!==mi)&&(r.stencilOp(he,ri,mi),lt=he,Ft=ri,Ot=mi)},setLocked:function(he){N=he},setClear:function(he){be!==he&&(r.clearStencil(he),be=he)},reset:function(){N=!1,pt=null,nt=null,mt=null,yt=null,lt=null,Ft=null,Ot=null,be=null}}}let s=new e,a=new n,o=new i,c=new WeakMap,l=new WeakMap,u={},d={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,w=null,y=null,M=null,E=null,T=null,x=new Xt(0,0,0),C=0,P=!1,B=null,L=null,k=null,I=null,G=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),$=!1,rt=0,Z=r.getParameter(r.VERSION);Z.indexOf(`WebGL`)!==-1?(rt=parseFloat(/^WebGL (\d)/.exec(Z)[1]),$=rt>=1):Z.indexOf(`OpenGL ES`)!==-1&&(rt=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),$=rt>=2);let tt=null,ot={},wt=r.getParameter(r.SCISSOR_BOX),Pt=r.getParameter(r.VIEWPORT),$t=new Re().fromArray(wt),Wt=new Re().fromArray(Pt);function ae(N,pt,nt,mt){let yt=new Uint8Array(4),lt=r.createTexture();r.bindTexture(N,lt),r.texParameteri(N,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(N,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ft=0;Ft<nt;Ft++)N===r.TEXTURE_3D||N===r.TEXTURE_2D_ARRAY?r.texImage3D(pt,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,yt):r.texImage2D(pt+Ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,yt);return lt}let j={};j[r.TEXTURE_2D]=ae(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=ae(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=ae(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=ae(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(r.DEPTH_TEST),a.setFunc(ps),te(!1),Me(Kl),st(r.CULL_FACE),oe(Ci);function st(N){u[N]!==!0&&(r.enable(N),u[N]=!0)}function St(N){u[N]!==!1&&(r.disable(N),u[N]=!1)}function Gt(N,pt){return h[N]!==pt?(r.bindFramebuffer(N,pt),h[N]=pt,N===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=pt),N===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=pt),!0):!1}function Mt(N,pt){let nt=g,mt=!1;if(N){nt=f.get(pt),nt===void 0&&(nt=[],f.set(pt,nt));let yt=N.textures;if(nt.length!==yt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let lt=0,Ft=yt.length;lt<Ft;lt++)nt[lt]=r.COLOR_ATTACHMENT0+lt;nt.length=yt.length,mt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,mt=!0);mt&&r.drawBuffers(nt)}function Yt(N){return _!==N?(r.useProgram(N),_=N,!0):!1}let ze={[Ur]:r.FUNC_ADD,[Ud]:r.FUNC_SUBTRACT,[kd]:r.FUNC_REVERSE_SUBTRACT};ze[zd]=r.MIN,ze[Gd]=r.MAX;let Kt={[Vd]:r.ZERO,[Hd]:r.ONE,[Wd]:r.SRC_COLOR,[jl]:r.SRC_ALPHA,[Zd]:r.SRC_ALPHA_SATURATE,[$d]:r.DST_COLOR,[qd]:r.DST_ALPHA,[Xd]:r.ONE_MINUS_SRC_COLOR,[tu]:r.ONE_MINUS_SRC_ALPHA,[Kd]:r.ONE_MINUS_DST_COLOR,[Yd]:r.ONE_MINUS_DST_ALPHA,[Jd]:r.CONSTANT_COLOR,[Qd]:r.ONE_MINUS_CONSTANT_COLOR,[jd]:r.CONSTANT_ALPHA,[tf]:r.ONE_MINUS_CONSTANT_ALPHA};function oe(N,pt,nt,mt,yt,lt,Ft,Ot,be,he){if(N===Ci){m===!0&&(St(r.BLEND),m=!1);return}if(m===!1&&(st(r.BLEND),m=!0),N!==Nd){if(N!==p||he!==P){if((b!==Ur||M!==Ur)&&(r.blendEquation(r.FUNC_ADD),b=Ur,M=Ur),he)switch(N){case Ts:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zl:r.blendFunc(r.ONE,r.ONE);break;case Jl:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ql:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:zt(`WebGLState: Invalid blending: `,N);break}else switch(N){case Ts:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Zl:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Jl:zt(`WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true`);break;case Ql:zt(`WebGLState: MultiplyBlending requires material.premultipliedAlpha = true`);break;default:zt(`WebGLState: Invalid blending: `,N);break}w=null,y=null,E=null,T=null,x.set(0,0,0),C=0,p=N,P=he}return}yt=yt||pt,lt=lt||nt,Ft=Ft||mt,(pt!==b||yt!==M)&&(r.blendEquationSeparate(ze[pt],ze[yt]),b=pt,M=yt),(nt!==w||mt!==y||lt!==E||Ft!==T)&&(r.blendFuncSeparate(Kt[nt],Kt[mt],Kt[lt],Kt[Ft]),w=nt,y=mt,E=lt,T=Ft),(Ot.equals(x)===!1||be!==C)&&(r.blendColor(Ot.r,Ot.g,Ot.b,be),x.copy(Ot),C=be),p=N,P=!1}function ue(N,pt){N.side===Si?St(r.CULL_FACE):st(r.CULL_FACE);let nt=N.side===Cn;pt&&(nt=!nt),te(nt),N.blending===Ts&&N.transparent===!1?oe(Ci):oe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),s.setMask(N.colorWrite);let mt=N.stencilWrite;o.setTest(mt),mt&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),dn(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?st(r.SAMPLE_ALPHA_TO_COVERAGE):St(r.SAMPLE_ALPHA_TO_COVERAGE)}function te(N){B!==N&&(N?r.frontFace(r.CW):r.frontFace(r.CCW),B=N)}function Me(N){N!==Dd?(st(r.CULL_FACE),N!==L&&(N===Kl?r.cullFace(r.BACK):N===Ld?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):St(r.CULL_FACE),L=N}function Fe(N){N!==k&&($&&r.lineWidth(N),k=N)}function dn(N,pt,nt){N?(st(r.POLYGON_OFFSET_FILL),(I!==pt||G!==nt)&&(I=pt,G=nt,a.getReversed()&&(pt=-pt),r.polygonOffset(pt,nt))):St(r.POLYGON_OFFSET_FILL)}function Bt(N){N?st(r.SCISSOR_TEST):St(r.SCISSOR_TEST)}function Vt(N){N===void 0&&(N=r.TEXTURE0+Y-1),tt!==N&&(r.activeTexture(N),tt=N)}function D(N,pt,nt){nt===void 0&&(tt===null?nt=r.TEXTURE0+Y-1:nt=tt);let mt=ot[nt];mt===void 0&&(mt={type:void 0,texture:void 0},ot[nt]=mt),(mt.type!==N||mt.texture!==pt)&&(tt!==nt&&(r.activeTexture(nt),tt=nt),r.bindTexture(N,pt||j[N]),mt.type=N,mt.texture=pt)}function Ae(){let N=ot[tt];N!==void 0&&N.type!==void 0&&(r.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function ne(){try{r.compressedTexImage2D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function A(){try{r.compressedTexImage3D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function v(){try{r.texSubImage2D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function z(){try{r.texSubImage3D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function q(){try{r.compressedTexSubImage2D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function J(){try{r.compressedTexSubImage3D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function ut(){try{r.texStorage2D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function ht(){try{r.texStorage3D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function Q(){try{r.texImage2D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function et(){try{r.texImage3D(...arguments)}catch(N){zt(`WebGLState:`,N)}}function dt(N){return d[N]!==void 0?d[N]:r.getParameter(N)}function Rt(N,pt){d[N]!==pt&&(r.pixelStorei(N,pt),d[N]=pt)}function gt(N){$t.equals(N)===!1&&(r.scissor(N.x,N.y,N.z,N.w),$t.copy(N))}function ft(N){Wt.equals(N)===!1&&(r.viewport(N.x,N.y,N.z,N.w),Wt.copy(N))}function Dt(N,pt){let nt=l.get(pt);nt===void 0&&(nt=new WeakMap,l.set(pt,nt));let mt=nt.get(N);mt===void 0&&(mt=r.getUniformBlockIndex(pt,N.name),nt.set(N,mt))}function Ut(N,pt){let mt=l.get(pt).get(N);c.get(pt)!==mt&&(r.uniformBlockBinding(pt,mt,N.__bindingPointIndex),c.set(pt,mt))}function qt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),u={},d={},tt=null,ot={},h={},f=new WeakMap,g=[],_=null,m=!1,p=null,b=null,w=null,y=null,M=null,E=null,T=null,x=new Xt(0,0,0),C=0,P=!1,B=null,L=null,k=null,I=null,G=null,$t.set(0,0,r.canvas.width,r.canvas.height),Wt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:St,bindFramebuffer:Gt,drawBuffers:Mt,useProgram:Yt,setBlending:oe,setMaterial:ue,setFlipSided:te,setCullFace:Me,setLineWidth:Fe,setPolygonOffset:dn,setScissorTest:Bt,activeTexture:Vt,bindTexture:D,unbindTexture:Ae,compressedTexImage2D:ne,compressedTexImage3D:A,texImage2D:Q,texImage3D:et,pixelStorei:Rt,getParameter:dt,updateUBOMapping:Dt,uniformBlockBinding:Ut,texStorage2D:ut,texStorage3D:ht,texSubImage2D:v,texSubImage3D:z,compressedTexSubImage2D:q,compressedTexSubImage3D:J,scissor:gt,viewport:ft,reset:qt}}function wv(r,t,e,n,i,s,a){let o=t.has(`WEBGL_multisampled_render_to_texture`)?t.get(`WEBGL_multisampled_render_to_texture`):null,c=typeof navigator>`u`?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Qt,u=new WeakMap,d=new Set,h,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<`u`&&new OffscreenCanvas(1,1).getContext(`2d`)!==null}catch{}function _(A,v){return g?new OffscreenCanvas(A,v):Qs(`canvas`)}function m(A,v,z){let q=1,J=ne(A);if((J.width>z||J.height>z)&&(q=z/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<`u`&&A instanceof HTMLCanvasElement||typeof ImageBitmap<`u`&&A instanceof ImageBitmap||typeof VideoFrame<`u`&&A instanceof VideoFrame){let ut=Math.floor(q*J.width),ht=Math.floor(q*J.height);h===void 0&&(h=_(ut,ht));let Q=v?_(ut,ht):h;return Q.width=ut,Q.height=ht,Q.getContext(`2d`).drawImage(A,0,0,ut,ht),kt(`WebGLRenderer: Texture has been resized from (`+J.width+`x`+J.height+`) to (`+ut+`x`+ht+`).`),Q}else return`data`in A&&kt(`WebGLRenderer: Image in DataTexture is too big (`+J.width+`x`+J.height+`).`),A;return A}function p(A){return A.generateMipmaps}function b(A){r.generateMipmap(A)}function w(A){return A.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?r.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function y(A,v,z,q,J,ut=!1){if(A!==null){if(r[A]!==void 0)return r[A];kt(`WebGLRenderer: Attempt to use non-existing WebGL internal format '`+A+`'`)}let ht;q&&(ht=t.get(`EXT_texture_norm16`),ht||kt(`WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension`));let Q=v;if(v===r.RED&&(z===r.FLOAT&&(Q=r.R32F),z===r.HALF_FLOAT&&(Q=r.R16F),z===r.UNSIGNED_BYTE&&(Q=r.R8),z===r.UNSIGNED_SHORT&&ht&&(Q=ht.R16_EXT),z===r.SHORT&&ht&&(Q=ht.R16_SNORM_EXT)),v===r.RED_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.R8UI),z===r.UNSIGNED_SHORT&&(Q=r.R16UI),z===r.UNSIGNED_INT&&(Q=r.R32UI),z===r.BYTE&&(Q=r.R8I),z===r.SHORT&&(Q=r.R16I),z===r.INT&&(Q=r.R32I)),v===r.RG&&(z===r.FLOAT&&(Q=r.RG32F),z===r.HALF_FLOAT&&(Q=r.RG16F),z===r.UNSIGNED_BYTE&&(Q=r.RG8),z===r.UNSIGNED_SHORT&&ht&&(Q=ht.RG16_EXT),z===r.SHORT&&ht&&(Q=ht.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RG8UI),z===r.UNSIGNED_SHORT&&(Q=r.RG16UI),z===r.UNSIGNED_INT&&(Q=r.RG32UI),z===r.BYTE&&(Q=r.RG8I),z===r.SHORT&&(Q=r.RG16I),z===r.INT&&(Q=r.RG32I)),v===r.RGB_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGB8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGB16UI),z===r.UNSIGNED_INT&&(Q=r.RGB32UI),z===r.BYTE&&(Q=r.RGB8I),z===r.SHORT&&(Q=r.RGB16I),z===r.INT&&(Q=r.RGB32I)),v===r.RGBA_INTEGER&&(z===r.UNSIGNED_BYTE&&(Q=r.RGBA8UI),z===r.UNSIGNED_SHORT&&(Q=r.RGBA16UI),z===r.UNSIGNED_INT&&(Q=r.RGBA32UI),z===r.BYTE&&(Q=r.RGBA8I),z===r.SHORT&&(Q=r.RGBA16I),z===r.INT&&(Q=r.RGBA32I)),v===r.RGB&&(z===r.UNSIGNED_SHORT&&ht&&(Q=ht.RGB16_EXT),z===r.SHORT&&ht&&(Q=ht.RGB16_SNORM_EXT),z===r.UNSIGNED_INT_5_9_9_9_REV&&(Q=r.RGB9_E5),z===r.UNSIGNED_INT_10F_11F_11F_REV&&(Q=r.R11F_G11F_B10F)),v===r.RGBA){let et=ut?Js:ie.getTransfer(J);z===r.FLOAT&&(Q=r.RGBA32F),z===r.HALF_FLOAT&&(Q=r.RGBA16F),z===r.UNSIGNED_BYTE&&(Q=et===fe?r.SRGB8_ALPHA8:r.RGBA8),z===r.UNSIGNED_SHORT&&ht&&(Q=ht.RGBA16_EXT),z===r.SHORT&&ht&&(Q=ht.RGBA16_SNORM_EXT),z===r.UNSIGNED_SHORT_4_4_4_4&&(Q=r.RGBA4),z===r.UNSIGNED_SHORT_5_5_5_1&&(Q=r.RGB5_A1)}return(Q===r.R16F||Q===r.R32F||Q===r.RG16F||Q===r.RG32F||Q===r.RGBA16F||Q===r.RGBA32F)&&t.get(`EXT_color_buffer_float`),Q}function M(A,v){let z;return A?v===null||v===di||v===Ps?z=r.DEPTH24_STENCIL8:v===fi?z=r.DEPTH32F_STENCIL8:v===As&&(z=r.DEPTH24_STENCIL8,kt(`DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.`)):v===null||v===di||v===Ps?z=r.DEPTH_COMPONENT24:v===fi?z=r.DEPTH_COMPONENT32F:v===As&&(z=r.DEPTH_COMPONENT16),z}function E(A,v){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==cn&&A.minFilter!==ln?Math.log2(Math.max(v.width,v.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?v.mipmaps.length:1}function T(A){let v=A.target;v.removeEventListener(`dispose`,T),C(v),v.isVideoTexture&&u.delete(v),v.isHTMLTexture&&d.delete(v)}function x(A){let v=A.target;v.removeEventListener(`dispose`,x),B(v)}function C(A){let v=n.get(A);if(v.__webglInit===void 0)return;let z=A.source,q=f.get(z);if(q){let J=q[v.__cacheKey];J.usedTimes--,J.usedTimes===0&&P(A),Object.keys(q).length===0&&f.delete(z)}n.remove(A)}function P(A){let v=n.get(A);r.deleteTexture(v.__webglTexture);let z=A.source,q=f.get(z);delete q[v.__cacheKey],a.memory.textures--}function B(A){let v=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(v.__webglFramebuffer[q]))for(let J=0;J<v.__webglFramebuffer[q].length;J++)r.deleteFramebuffer(v.__webglFramebuffer[q][J]);else r.deleteFramebuffer(v.__webglFramebuffer[q]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[q])}else{if(Array.isArray(v.__webglFramebuffer))for(let q=0;q<v.__webglFramebuffer.length;q++)r.deleteFramebuffer(v.__webglFramebuffer[q]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let q=0;q<v.__webglColorRenderbuffer.length;q++)v.__webglColorRenderbuffer[q]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[q]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let z=A.textures;for(let q=0,J=z.length;q<J;q++){let ut=n.get(z[q]);ut.__webglTexture&&(r.deleteTexture(ut.__webglTexture),a.memory.textures--),n.remove(z[q])}n.remove(A)}let L=0;function k(){L=0}function I(){return L}function G(A){L=A}function Y(){let A=L;return A>=i.maxTextures&&kt(`WebGLTextures: Trying to use `+(A+1)+` texture units while this GPU supports only `+i.maxTextures),L+=1,A}function $(A){let v=[];return v.push(A.wrapS),v.push(A.wrapT),v.push(A.wrapR||0),v.push(A.magFilter),v.push(A.minFilter),v.push(A.anisotropy),v.push(A.internalFormat),v.push(A.format),v.push(A.type),v.push(A.generateMipmaps),v.push(A.premultiplyAlpha),v.push(A.flipY),v.push(A.unpackAlignment),v.push(A.colorSpace),v.join()}function rt(A,v){let z=n.get(A);if(A.isVideoTexture&&D(A),A.isRenderTargetTexture===!1&&A.isExternalTexture!==!0&&A.version>0&&z.__version!==A.version){let q=A.image;if(q===null)kt(`WebGLRenderer: Texture marked for update but no image data found.`);else if(q.complete===!1)kt(`WebGLRenderer: Texture marked for update but image is incomplete`);else{St(z,A,v);return}}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,z.__webglTexture,r.TEXTURE0+v)}function Z(A,v){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){St(z,A,v);return}else A.isExternalTexture&&(z.__webglTexture=A.sourceTexture?A.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,z.__webglTexture,r.TEXTURE0+v)}function tt(A,v){let z=n.get(A);if(A.isRenderTargetTexture===!1&&A.version>0&&z.__version!==A.version){St(z,A,v);return}e.bindTexture(r.TEXTURE_3D,z.__webglTexture,r.TEXTURE0+v)}function ot(A,v){let z=n.get(A);if(A.isCubeDepthTexture!==!0&&A.version>0&&z.__version!==A.version){Gt(z,A,v);return}e.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture,r.TEXTURE0+v)}let wt={[Dr]:r.REPEAT,[vi]:r.CLAMP_TO_EDGE,[Co]:r.MIRRORED_REPEAT},Pt={[cn]:r.NEAREST,[rf]:r.NEAREST_MIPMAP_NEAREST,[xa]:r.NEAREST_MIPMAP_LINEAR,[ln]:r.LINEAR,[Yo]:r.LINEAR_MIPMAP_NEAREST,[dr]:r.LINEAR_MIPMAP_LINEAR},$t={[cf]:r.NEVER,[ff]:r.ALWAYS,[lf]:r.LESS,[Oc]:r.LEQUAL,[uf]:r.EQUAL,[Ic]:r.GEQUAL,[hf]:r.GREATER,[df]:r.NOTEQUAL};function Wt(A,v){if(v.type===fi&&t.has(`OES_texture_float_linear`)===!1&&(v.magFilter===ln||v.magFilter===Yo||v.magFilter===xa||v.magFilter===dr||v.minFilter===ln||v.minFilter===Yo||v.minFilter===xa||v.minFilter===dr)&&kt(`WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.`),r.texParameteri(A,r.TEXTURE_WRAP_S,wt[v.wrapS]),r.texParameteri(A,r.TEXTURE_WRAP_T,wt[v.wrapT]),(A===r.TEXTURE_3D||A===r.TEXTURE_2D_ARRAY)&&r.texParameteri(A,r.TEXTURE_WRAP_R,wt[v.wrapR]),r.texParameteri(A,r.TEXTURE_MAG_FILTER,Pt[v.magFilter]),r.texParameteri(A,r.TEXTURE_MIN_FILTER,Pt[v.minFilter]),v.compareFunction&&(r.texParameteri(A,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(A,r.TEXTURE_COMPARE_FUNC,$t[v.compareFunction])),t.has(`EXT_texture_filter_anisotropic`)===!0){if(v.magFilter===cn||v.minFilter!==xa&&v.minFilter!==dr||v.type===fi&&t.has(`OES_texture_float_linear`)===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let z=t.get(`EXT_texture_filter_anisotropic`);r.texParameterf(A,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function ae(A,v){let z=!1;A.__webglInit===void 0&&(A.__webglInit=!0,v.addEventListener(`dispose`,T));let q=v.source,J=f.get(q);J===void 0&&(J={},f.set(q,J));let ut=$(v);if(ut!==A.__cacheKey){J[ut]===void 0&&(J[ut]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,z=!0),J[ut].usedTimes++;let ht=J[A.__cacheKey];ht!==void 0&&(J[A.__cacheKey].usedTimes--,ht.usedTimes===0&&P(v)),A.__cacheKey=ut,A.__webglTexture=J[ut].texture}return z}function j(A,v,z){return Math.floor(Math.floor(A/z)/v)}function st(A,v,z,q){let ut=A.updateRanges;if(ut.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,z,q,v.data);else{ut.sort((Rt,gt)=>Rt.start-gt.start);let ht=0;for(let Rt=1;Rt<ut.length;Rt++){let gt=ut[ht],ft=ut[Rt],Dt=gt.start+gt.count,Ut=j(ft.start,v.width,4),qt=j(gt.start,v.width,4);ft.start<=Dt+1&&Ut===qt&&j(ft.start+ft.count-1,v.width,4)===Ut?gt.count=Math.max(gt.count,ft.start+ft.count-gt.start):(++ht,ut[ht]=ft)}ut.length=ht+1;let Q=e.getParameter(r.UNPACK_ROW_LENGTH),et=e.getParameter(r.UNPACK_SKIP_PIXELS),dt=e.getParameter(r.UNPACK_SKIP_ROWS);e.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Rt=0,gt=ut.length;Rt<gt;Rt++){let ft=ut[Rt],Dt=Math.floor(ft.start/4),Ut=Math.ceil(ft.count/4),qt=Dt%v.width,N=Math.floor(Dt/v.width),pt=Ut;e.pixelStorei(r.UNPACK_SKIP_PIXELS,qt),e.pixelStorei(r.UNPACK_SKIP_ROWS,N),e.texSubImage2D(r.TEXTURE_2D,0,qt,N,pt,1,z,q,v.data)}A.clearUpdateRanges(),e.pixelStorei(r.UNPACK_ROW_LENGTH,Q),e.pixelStorei(r.UNPACK_SKIP_PIXELS,et),e.pixelStorei(r.UNPACK_SKIP_ROWS,dt)}}function St(A,v,z){let q=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(q=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(q=r.TEXTURE_3D);let J=ae(A,v),ut=v.source;e.bindTexture(q,A.__webglTexture,r.TEXTURE0+z);let ht=n.get(ut);if(ut.version!==ht.__version||J===!0){if(e.activeTexture(r.TEXTURE0+z),(typeof ImageBitmap<`u`&&v.image instanceof ImageBitmap)===!1){let nt=ie.getPrimaries(ie.workingColorSpace),mt=v.colorSpace===Gi?null:ie.getPrimaries(v.colorSpace),yt=v.colorSpace===Gi||nt===mt?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let et=m(v.image,!1,i.maxTextureSize);et=Ae(v,et);let dt=s.convert(v.format,v.colorSpace),Rt=s.convert(v.type),gt=y(v.internalFormat,dt,Rt,v.normalized,v.colorSpace,v.isVideoTexture);Wt(q,v);let ft,Dt=v.mipmaps,Ut=v.isVideoTexture!==!0,qt=ht.__version===void 0||J===!0,N=ut.dataReady,pt=E(v,et);if(v.isDepthTexture)gt=M(v.format===fr,v.type),qt&&(Ut?e.texStorage2D(r.TEXTURE_2D,1,gt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,gt,et.width,et.height,0,dt,Rt,null));else if(v.isDataTexture)if(Dt.length>0){Ut&&qt&&e.texStorage2D(r.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let nt=0,mt=Dt.length;nt<mt;nt++)ft=Dt[nt],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(r.TEXTURE_2D,nt,gt,ft.width,ft.height,0,dt,Rt,ft.data);v.generateMipmaps=!1}else Ut?(qt&&e.texStorage2D(r.TEXTURE_2D,pt,gt,et.width,et.height),N&&st(v,et,dt,Rt)):e.texImage2D(r.TEXTURE_2D,0,gt,et.width,et.height,0,dt,Rt,et.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){Ut&&qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,gt,Dt[0].width,Dt[0].height,et.depth);for(let nt=0,mt=Dt.length;nt<mt;nt++)if(ft=Dt[nt],v.format!==ti)if(dt!==null)if(Ut){if(N)if(v.layerUpdates.size>0){let yt=Mu(ft.width,ft.height,v.format,v.type);for(let lt of v.layerUpdates){let Ft=ft.data.subarray(lt*yt/ft.data.BYTES_PER_ELEMENT,(lt+1)*yt/ft.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,lt,ft.width,ft.height,1,dt,Ft)}}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,et.depth,dt,ft.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,nt,gt,ft.width,ft.height,et.depth,0,ft.data,0,0);else kt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`);else Ut?N&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,nt,0,0,0,ft.width,ft.height,et.depth,dt,Rt,ft.data):e.texImage3D(r.TEXTURE_2D_ARRAY,nt,gt,ft.width,ft.height,et.depth,0,dt,Rt,ft.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{Ut&&qt&&e.texStorage2D(r.TEXTURE_2D,pt,gt,Dt[0].width,Dt[0].height);for(let nt=0,mt=Dt.length;nt<mt;nt++)ft=Dt[nt],v.format!==ti?dt!==null?Ut?N&&e.compressedTexSubImage2D(r.TEXTURE_2D,nt,0,0,ft.width,ft.height,dt,ft.data):e.compressedTexImage2D(r.TEXTURE_2D,nt,gt,ft.width,ft.height,0,ft.data):kt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()`):Ut?N&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,ft.width,ft.height,dt,Rt,ft.data):e.texImage2D(r.TEXTURE_2D,nt,gt,ft.width,ft.height,0,dt,Rt,ft.data)}else if(v.isDataArrayTexture)if(Ut){if(qt&&e.texStorage3D(r.TEXTURE_2D_ARRAY,pt,gt,et.width,et.height,et.depth),N)if(v.layerUpdates.size>0){let nt=Mu(et.width,et.height,v.format,v.type);for(let mt of v.layerUpdates){let yt=et.data.subarray(mt*nt/et.data.BYTES_PER_ELEMENT,(mt+1)*nt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,mt,et.width,et.height,1,dt,Rt,yt)}v.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,dt,Rt,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,gt,et.width,et.height,et.depth,0,dt,Rt,et.data);else if(v.isData3DTexture)Ut?(qt&&e.texStorage3D(r.TEXTURE_3D,pt,gt,et.width,et.height,et.depth),N&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,dt,Rt,et.data)):e.texImage3D(r.TEXTURE_3D,0,gt,et.width,et.height,et.depth,0,dt,Rt,et.data);else if(v.isFramebufferTexture){if(qt)if(Ut)e.texStorage2D(r.TEXTURE_2D,pt,gt,et.width,et.height);else{let nt=et.width,mt=et.height;for(let yt=0;yt<pt;yt++)e.texImage2D(r.TEXTURE_2D,yt,gt,nt,mt,0,dt,Rt,null),nt>>=1,mt>>=1}}else if(v.isHTMLTexture){if(`texElementImage2D`in r){let nt=r.canvas;if(nt.hasAttribute(`layoutsubtree`)||nt.setAttribute(`layoutsubtree`,`true`),et.parentNode!==nt){nt.appendChild(et),d.add(v),nt.onpaint=mt=>{let yt=mt.changedElements;for(let lt of d)yt.includes(lt.image)&&(lt.needsUpdate=!0)},nt.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,et);else{let yt=r.RGBA,lt=r.RGBA,Ft=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,yt,lt,Ft,et)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Dt.length>0){if(Ut&&qt){let nt=ne(Dt[0]);e.texStorage2D(r.TEXTURE_2D,pt,gt,nt.width,nt.height)}for(let nt=0,mt=Dt.length;nt<mt;nt++)ft=Dt[nt],Ut?N&&e.texSubImage2D(r.TEXTURE_2D,nt,0,0,dt,Rt,ft):e.texImage2D(r.TEXTURE_2D,nt,gt,dt,Rt,ft);v.generateMipmaps=!1}else if(Ut){if(qt){let nt=ne(et);e.texStorage2D(r.TEXTURE_2D,pt,gt,nt.width,nt.height)}N&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,dt,Rt,et)}else e.texImage2D(r.TEXTURE_2D,0,gt,dt,Rt,et);p(v)&&b(q),ht.__version=ut.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Gt(A,v,z){if(v.image.length!==6)return;let q=ae(A,v),J=v.source;e.bindTexture(r.TEXTURE_CUBE_MAP,A.__webglTexture,r.TEXTURE0+z);let ut=n.get(J);if(J.version!==ut.__version||q===!0){e.activeTexture(r.TEXTURE0+z);let ht=ie.getPrimaries(ie.workingColorSpace),Q=v.colorSpace===Gi?null:ie.getPrimaries(v.colorSpace),et=v.colorSpace===Gi||ht===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;e.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),e.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),e.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),e.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let dt=v.isCompressedTexture||v.image[0].isCompressedTexture,Rt=v.image[0]&&v.image[0].isDataTexture,gt=[];for(let lt=0;lt<6;lt++)!dt&&!Rt?gt[lt]=m(v.image[lt],!0,i.maxCubemapSize):gt[lt]=Rt?v.image[lt].image:v.image[lt],gt[lt]=Ae(v,gt[lt]);let ft=gt[0],Dt=s.convert(v.format,v.colorSpace),Ut=s.convert(v.type),qt=y(v.internalFormat,Dt,Ut,v.normalized,v.colorSpace),N=v.isVideoTexture!==!0,pt=ut.__version===void 0||q===!0,nt=J.dataReady,mt=E(v,ft);Wt(r.TEXTURE_CUBE_MAP,v);let yt;if(dt){N&&pt&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,qt,ft.width,ft.height);for(let lt=0;lt<6;lt++){yt=gt[lt].mipmaps;for(let Ft=0;Ft<yt.length;Ft++){let Ot=yt[Ft];v.format!==ti?Dt!==null?N?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Ot.width,Ot.height,Dt,Ot.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,qt,Ot.width,Ot.height,0,Ot.data):kt(`WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()`):N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,0,0,Ot.width,Ot.height,Dt,Ut,Ot.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft,qt,Ot.width,Ot.height,0,Dt,Ut,Ot.data)}}}else{if(yt=v.mipmaps,N&&pt){yt.length>0&&mt++;let lt=ne(gt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,qt,lt.width,lt.height)}for(let lt=0;lt<6;lt++)if(Rt){N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,gt[lt].width,gt[lt].height,Dt,Ut,gt[lt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,gt[lt].width,gt[lt].height,0,Dt,Ut,gt[lt].data);for(let Ft=0;Ft<yt.length;Ft++){let be=yt[Ft].image[lt].image;N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,be.width,be.height,Dt,Ut,be.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,qt,be.width,be.height,0,Dt,Ut,be.data)}}else{N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,0,0,Dt,Ut,gt[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,0,qt,Dt,Ut,gt[lt]);for(let Ft=0;Ft<yt.length;Ft++){let Ot=yt[Ft];N?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,0,0,Dt,Ut,Ot.image[lt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+lt,Ft+1,qt,Dt,Ut,Ot.image[lt])}}}p(v)&&b(r.TEXTURE_CUBE_MAP),ut.__version=J.version,v.onUpdate&&v.onUpdate(v)}A.__version=v.version}function Mt(A,v,z,q,J,ut){let ht=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),et=y(z.internalFormat,ht,Q,z.normalized,z.colorSpace),dt=n.get(v),Rt=n.get(z);if(Rt.__renderTarget=v,!dt.__hasExternalTextures){let gt=Math.max(1,v.width>>ut),ft=Math.max(1,v.height>>ut);J===r.TEXTURE_3D||J===r.TEXTURE_2D_ARRAY?e.texImage3D(J,ut,et,gt,ft,v.depth,0,ht,Q,null):e.texImage2D(J,ut,et,gt,ft,0,ht,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,A),Vt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,q,J,Rt.__webglTexture,0,Bt(v)):(J===r.TEXTURE_2D||J>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,q,J,Rt.__webglTexture,ut),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Yt(A,v,z){if(r.bindRenderbuffer(r.RENDERBUFFER,A),v.depthBuffer){let q=v.depthTexture,J=q&&q.isDepthTexture?q.type:null,ut=M(v.stencilBuffer,J),ht=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Vt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt(v),ut,v.width,v.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt(v),ut,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ut,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ht,r.RENDERBUFFER,A)}else{let q=v.textures;for(let J=0;J<q.length;J++){let ut=q[J],ht=s.convert(ut.format,ut.colorSpace),Q=s.convert(ut.type),et=y(ut.internalFormat,ht,Q,ut.normalized,ut.colorSpace);Vt(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Bt(v),et,v.width,v.height):z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Bt(v),et,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,et,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ze(A,v,z){let q=v.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,A),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error(`THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.`);let J=n.get(v.depthTexture);if(J.__renderTarget=v,(!J.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),q){if(J.__webglInit===void 0&&(J.__webglInit=!0,v.depthTexture.addEventListener(`dispose`,T)),J.__webglTexture===void 0){J.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Wt(r.TEXTURE_CUBE_MAP,v.depthTexture);let dt=s.convert(v.depthTexture.format),Rt=s.convert(v.depthTexture.type),gt;v.depthTexture.format===yi?gt=r.DEPTH_COMPONENT24:v.depthTexture.format===fr&&(gt=r.DEPTH24_STENCIL8);for(let ft=0;ft<6;ft++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0,gt,v.width,v.height,0,dt,Rt,null)}}else rt(v.depthTexture,0);let ut=J.__webglTexture,ht=Bt(v),Q=q?r.TEXTURE_CUBE_MAP_POSITIVE_X+z:r.TEXTURE_2D,et=v.depthTexture.format===fr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===yi)Vt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,Q,ut,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,et,Q,ut,0);else if(v.depthTexture.format===fr)Vt(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,et,Q,ut,0,ht):r.framebufferTexture2D(r.FRAMEBUFFER,et,Q,ut,0);else throw new Error(`THREE.WebGLTextures: Unknown depthTexture format.`)}function Kt(A){let v=n.get(A),z=A.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==A.depthTexture){let q=A.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),q){let J=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,q.removeEventListener(`dispose`,J)};q.addEventListener(`dispose`,J),v.__depthDisposeCallback=J}v.__boundDepthTexture=q}if(A.depthTexture&&!v.__autoAllocateDepthBuffer)if(z)for(let q=0;q<6;q++)ze(v.__webglFramebuffer[q],A,q);else{let q=A.texture.mipmaps;q&&q.length>0?ze(v.__webglFramebuffer[0],A,0):ze(v.__webglFramebuffer,A,0)}else if(z){v.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[q]),v.__webglDepthbuffer[q]===void 0)v.__webglDepthbuffer[q]=r.createRenderbuffer(),Yt(v.__webglDepthbuffer[q],A,!1);else{let J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer[q];r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ut)}}else{let q=A.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Yt(v.__webglDepthbuffer,A,!1);else{let J=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ut=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ut),r.framebufferRenderbuffer(r.FRAMEBUFFER,J,r.RENDERBUFFER,ut)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(A,v,z){let q=n.get(A);v!==void 0&&Mt(q.__webglFramebuffer,A,A.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),z!==void 0&&Kt(A)}function ue(A){let v=A.texture,z=n.get(A),q=n.get(v);A.addEventListener(`dispose`,x);let J=A.textures,ut=A.isWebGLCubeRenderTarget===!0,ht=J.length>1;if(ht||(q.__webglTexture===void 0&&(q.__webglTexture=r.createTexture()),q.__version=v.version,a.memory.textures++),ut){z.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer[Q]=[];for(let et=0;et<v.mipmaps.length;et++)z.__webglFramebuffer[Q][et]=r.createFramebuffer()}else z.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){z.__webglFramebuffer=[];for(let Q=0;Q<v.mipmaps.length;Q++)z.__webglFramebuffer[Q]=r.createFramebuffer()}else z.__webglFramebuffer=r.createFramebuffer();if(ht)for(let Q=0,et=J.length;Q<et;Q++){let dt=n.get(J[Q]);dt.__webglTexture===void 0&&(dt.__webglTexture=r.createTexture(),a.memory.textures++)}if(A.samples>0&&Vt(A)===!1){z.__webglMultisampledFramebuffer=r.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let Q=0;Q<J.length;Q++){let et=J[Q];z.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,z.__webglColorRenderbuffer[Q]);let dt=s.convert(et.format,et.colorSpace),Rt=s.convert(et.type),gt=y(et.internalFormat,dt,Rt,et.normalized,et.colorSpace,A.isXRRenderTarget===!0),ft=Bt(A);r.renderbufferStorageMultisample(r.RENDERBUFFER,ft,gt,A.width,A.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,z.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),A.depthBuffer&&(z.__webglDepthRenderbuffer=r.createRenderbuffer(),Yt(z.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ut){e.bindTexture(r.TEXTURE_CUBE_MAP,q.__webglTexture),Wt(r.TEXTURE_CUBE_MAP,v);for(let Q=0;Q<6;Q++)if(v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)Mt(z.__webglFramebuffer[Q][et],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,et);else Mt(z.__webglFramebuffer[Q],A,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);p(v)&&b(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let Q=0,et=J.length;Q<et;Q++){let dt=J[Q],Rt=n.get(dt),gt=r.TEXTURE_2D;(A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(gt=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(gt,Rt.__webglTexture),Wt(gt,dt),Mt(z.__webglFramebuffer,A,dt,r.COLOR_ATTACHMENT0+Q,gt,0),p(dt)&&b(gt)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(Q=A.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,q.__webglTexture),Wt(Q,v),v.mipmaps&&v.mipmaps.length>0)for(let et=0;et<v.mipmaps.length;et++)Mt(z.__webglFramebuffer[et],A,v,r.COLOR_ATTACHMENT0,Q,et);else Mt(z.__webglFramebuffer,A,v,r.COLOR_ATTACHMENT0,Q,0);p(v)&&b(Q),e.unbindTexture()}A.depthBuffer&&Kt(A)}function te(A){let v=A.textures;for(let z=0,q=v.length;z<q;z++){let J=v[z];if(p(J)){let ut=w(A),ht=n.get(J).__webglTexture;e.bindTexture(ut,ht),b(ut),e.unbindTexture()}}}let Me=[],Fe=[];function dn(A){if(A.samples>0){if(Vt(A)===!1){let v=A.textures,z=A.width,q=A.height,J=r.COLOR_BUFFER_BIT,ut=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ht=n.get(A),Q=v.length>1;if(Q)for(let dt=0;dt<v.length;dt++)e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer);let et=A.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let dt=0;dt<v.length;dt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=r.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Rt=n.get(v[dt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Rt,0)}r.blitFramebuffer(0,0,z,q,0,0,z,q,J,r.NEAREST),c===!0&&(Me.length=0,Fe.length=0,Me.push(r.COLOR_ATTACHMENT0+dt),A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&(Me.push(ut),Fe.push(ut),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Fe)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Me))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let dt=0;dt<v.length;dt++){e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.RENDERBUFFER,ht.__webglColorRenderbuffer[dt]);let Rt=n.get(v[dt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,ht.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+dt,r.TEXTURE_2D,Rt,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.storeMultisampledDepthBuffer===!1&&c){let v=A.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function Bt(A){return Math.min(i.maxSamples,A.samples)}function Vt(A){let v=n.get(A);return A.samples>0&&t.has(`WEBGL_multisampled_render_to_texture`)===!0&&v.__useRenderToTexture!==!1}function D(A){let v=a.render.frame;u.get(A)!==v&&(u.set(A,v),A.update())}function Ae(A,v){let z=A.colorSpace,q=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||z!==Zs&&z!==Gi&&(ie.getTransfer(z)===fe?(q!==ti||J!==Ln)&&kt(`WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.`):zt(`WebGLTextures: Unsupported texture color space:`,z)),v}function ne(A){return typeof HTMLImageElement<`u`&&A instanceof HTMLImageElement?(l.width=A.naturalWidth||A.width,l.height=A.naturalHeight||A.height):typeof VideoFrame<`u`&&A instanceof VideoFrame?(l.width=A.displayWidth,l.height=A.displayHeight):(l.width=A.width,l.height=A.height),l}this.allocateTextureUnit=Y,this.resetTextureUnits=k,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=rt,this.setTexture2DArray=Z,this.setTexture3D=tt,this.setTextureCube=ot,this.rebindTextures=oe,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=te,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=Kt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Vt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Tv(r,t){function e(n,i=Gi){let s,a=ie.getTransfer(i);if(n===Ln)return r.UNSIGNED_BYTE;if(n===Ko)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Zo)return r.UNSIGNED_SHORT_5_5_5_1;if(n===hu)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===du)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===lu)return r.BYTE;if(n===uu)return r.SHORT;if(n===As)return r.UNSIGNED_SHORT;if(n===$o)return r.INT;if(n===di)return r.UNSIGNED_INT;if(n===fi)return r.FLOAT;if(n===pi)return r.HALF_FLOAT;if(n===fu)return r.ALPHA;if(n===pu)return r.RGB;if(n===ti)return r.RGBA;if(n===yi)return r.DEPTH_COMPONENT;if(n===fr)return r.DEPTH_STENCIL;if(n===mu)return r.RED;if(n===Jo)return r.RED_INTEGER;if(n===pr)return r.RG;if(n===Qo)return r.RG_INTEGER;if(n===jo)return r.RGBA_INTEGER;if(n===va||n===ya||n===Ma||n===ba)if(a===fe)if(s=t.get(`WEBGL_compressed_texture_s3tc_srgb`),s!==null){if(n===va)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get(`WEBGL_compressed_texture_s3tc`),s!==null){if(n===va)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ma)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ba)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===tc||n===ec||n===nc||n===ic)if(s=t.get(`WEBGL_compressed_texture_pvrtc`),s!==null){if(n===tc)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ec)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===nc)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ic)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===rc||n===sc||n===ac||n===oc||n===cc||n===Sa||n===lc)if(s=t.get(`WEBGL_compressed_texture_etc`),s!==null){if(n===rc||n===sc)return a===fe?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===ac)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===oc)return s.COMPRESSED_R11_EAC;if(n===cc)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Sa)return s.COMPRESSED_RG11_EAC;if(n===lc)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===bc||n===Sc)if(s=t.get(`WEBGL_compressed_texture_astc`),s!==null){if(n===uc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===hc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===dc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===fc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===pc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===mc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===gc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===_c)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===xc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===yc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Mc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return a===fe?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Cc||n===Ec||n===wc)if(s=t.get(`EXT_texture_compression_bptc`),s!==null){if(n===Cc)return a===fe?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ec)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===wc)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Tc||n===Ac||n===Ca||n===Pc)if(s=t.get(`EXT_texture_compression_rgtc`),s!==null){if(n===Tc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ac)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ca)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Pc)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ps?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var Av=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`;var Pv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;var Lu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new ca(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Wn({vertexShader:Av,fragmentShader:Pv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Et(new jn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}};var Fu=class extends Mi{constructor(t,e){super();let n=this,i=null,s=1,a=null,o=`local-floor`,c=1,l=null,u=null,d=null,h=null,f=null,g=null,_=typeof XRWebGLBinding<`u`,m=new Lu,p={},b=e.getContextAttributes(),w=null,y=null,M=[],E=[],T=new Qt,x=null,C=null,P=new on;P.viewport=new Re;let B=new on;B.viewport=new Re;let L=[P,B],k=new Wo,I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let st=M[j];return st===void 0&&(st=new vs,M[j]=st),st.getTargetRaySpace()},this.getControllerGrip=function(j){let st=M[j];return st===void 0&&(st=new vs,M[j]=st),st.getGripSpace()},this.getHand=function(j){let st=M[j];return st===void 0&&(st=new vs,M[j]=st),st.getHandSpace()};function Y(j){let st=E.indexOf(j.inputSource);if(st===-1)return;let St=M[st];St!==void 0&&(St.update(j.inputSource,j.frame,l||a),St.dispatchEvent({type:j.type,data:j.inputSource}))}function $(){i.removeEventListener(`select`,Y),i.removeEventListener(`selectstart`,Y),i.removeEventListener(`selectend`,Y),i.removeEventListener(`squeeze`,Y),i.removeEventListener(`squeezestart`,Y),i.removeEventListener(`squeezeend`,Y),i.removeEventListener(`end`,$),i.removeEventListener(`inputsourceschange`,rt);for(let j=0;j<M.length;j++){let st=E[j];st!==null&&(E[j]=null,M[j].disconnect(st))}I=null,G=null,m.reset();for(let j in p)delete p[j];if(t.setRenderTarget(w),f=null,h=null,d=null,i=null,y=null,ae.stop(),n.isPresenting=!1,t.setPixelRatio(x),t.setSize(T.width,T.height,!1),C!==null){let j=C.camera;j.fov=C.fov,j.zoom=C.zoom,j.updateProjectionMatrix(),C=null}n.dispatchEvent({type:`sessionend`})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&kt(`WebXRManager: Cannot change framebuffer scale while presenting.`)},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&kt(`WebXRManager: Cannot change reference space type while presenting.`)},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(w=t.getRenderTarget(),i.addEventListener(`select`,Y),i.addEventListener(`selectstart`,Y),i.addEventListener(`selectend`,Y),i.addEventListener(`squeeze`,Y),i.addEventListener(`squeezestart`,Y),i.addEventListener(`squeezeend`,Y),i.addEventListener(`end`,$),i.addEventListener(`inputsourceschange`,rt),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(T),_&&`createProjectionLayer`in XRWebGLBinding.prototype){let St=null,Gt=null,Mt=null;b.depth&&(Mt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,St=b.stencil?fr:yi,Gt=b.stencil?Ps:di);let Yt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Yt),i.updateRenderState({layers:[h]}),t.setPixelRatio(1),t.setSize(h.textureWidth,h.textureHeight,!1),y=new Bn(h.textureWidth,h.textureHeight,{format:ti,type:Ln,depthTexture:new sr(h.textureWidth,h.textureHeight,Gt,void 0,void 0,void 0,void 0,void 0,void 0,St),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{let St={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,St),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bn(f.framebufferWidth,f.framebufferHeight,{format:ti,type:Ln,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),ae.setContext(i),ae.start(),n.isPresenting=!0,n.dispatchEvent({type:`sessionstart`})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function rt(j){for(let st=0;st<j.removed.length;st++){let St=j.removed[st],Gt=E.indexOf(St);Gt>=0&&(E[Gt]=null,M[Gt].disconnect(St))}for(let st=0;st<j.added.length;st++){let St=j.added[st],Gt=E.indexOf(St);if(Gt===-1){for(let Yt=0;Yt<M.length;Yt++)if(Yt>=E.length){E.push(St),Gt=Yt;break}else if(E[Yt]===null){E[Yt]=St,Gt=Yt;break}if(Gt===-1)break}let Mt=M[Gt];Mt&&Mt.connect(St)}}let Z=new V,tt=new V;function ot(j,st,St){Z.setFromMatrixPosition(st.matrixWorld),tt.setFromMatrixPosition(St.matrixWorld);let Gt=Z.distanceTo(tt),Mt=st.projectionMatrix.elements,Yt=St.projectionMatrix.elements,ze=Mt[14]/(Mt[10]-1),Kt=Mt[14]/(Mt[10]+1),oe=(Mt[9]+1)/Mt[5],ue=(Mt[9]-1)/Mt[5],te=(Mt[8]-1)/Mt[0],Me=(Yt[8]+1)/Yt[0],Fe=ze*te,dn=ze*Me,Bt=Gt/(-te+Me),Vt=Bt*-te;if(st.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Vt),j.translateZ(Bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Mt[10]===-1)j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse);else{let D=ze+Bt,Ae=Kt+Bt,ne=Fe-Vt,A=dn+(Gt-Vt),v=oe*Kt/Ae*D,z=ue*Kt/Ae*D;j.projectionMatrix.makePerspective(ne,A,v,z,D,Ae),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function wt(j,st){st===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(st.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let st=j.near,St=j.far;m.texture!==null&&(m.depthNear>0&&(st=m.depthNear),m.depthFar>0&&(St=m.depthFar)),k.near=B.near=P.near=st,k.far=B.far=P.far=St,(I!==k.near||G!==k.far)&&(i.updateRenderState({depthNear:k.near,depthFar:k.far}),I=k.near,G=k.far),k.layers.mask=j.layers.mask|6,P.layers.mask=k.layers.mask&-5,B.layers.mask=k.layers.mask&-3;let Gt=j.parent,Mt=k.cameras;wt(k,Gt);for(let Yt=0;Yt<Mt.length;Yt++)wt(Mt[Yt],Gt);Mt.length===2?ot(k,P,B):k.projectionMatrix.copy(P.projectionMatrix),C===null&&j.isPerspectiveCamera&&(C={camera:j,fov:j.fov,zoom:j.zoom}),Pt(j,k,Gt)};function Pt(j,st,St){St===null?j.matrix.copy(st.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(st.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(st.projectionMatrix),j.projectionMatrixInverse.copy(st.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=js*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return k},this.getFoveation=function(){if(!(h===null&&f===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(k)},this.getCameraTexture=function(j){return p[j]};let $t=null;function Wt(j,st){if(u=st.getViewerPose(l||a),g=st,u!==null){let St=u.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Gt=!1;St.length!==k.cameras.length&&(k.cameras.length=0,Gt=!0);for(let Kt=0;Kt<St.length;Kt++){let oe=St[Kt],ue=null;if(f!==null)ue=f.getViewport(oe);else{let Me=d.getViewSubImage(h,oe);ue=Me.viewport,Kt===0&&(t.setRenderTargetTextures(y,Me.colorTexture,Me.depthStencilTexture),t.setRenderTarget(y))}let te=L[Kt];te===void 0&&(te=new on,te.layers.enable(Kt),te.viewport=new Re,L[Kt]=te),te.matrix.fromArray(oe.transform.matrix),te.matrix.decompose(te.position,te.quaternion,te.scale),te.projectionMatrix.fromArray(oe.projectionMatrix),te.projectionMatrixInverse.copy(te.projectionMatrix).invert(),te.viewport.set(ue.x,ue.y,ue.width,ue.height),Kt===0&&(k.matrix.copy(te.matrix),k.matrix.decompose(k.position,k.quaternion,k.scale)),Gt===!0&&k.cameras.push(te)}let Mt=i.enabledFeatures;if(Mt&&Mt.includes(`depth-sensing`)&&i.depthUsage==`gpu-optimized`&&_){d=n.getBinding();let Kt=d.getDepthInformation(St[0]);Kt&&Kt.isValid&&Kt.texture&&m.init(Kt,i.renderState)}if(Mt&&Mt.includes(`camera-access`)&&_){t.state.unbindTexture(),d=n.getBinding();for(let Kt=0;Kt<St.length;Kt++){let oe=St[Kt].camera;if(oe){let ue=p[oe];ue||(ue=new ca,p[oe]=ue);let te=d.getCameraImage(oe);ue.sourceTexture=te}}}}for(let St=0;St<M.length;St++){let Gt=E[St],Mt=M[St];Gt!==null&&Mt!==void 0&&Mt.update(Gt,st,l||a)}$t&&$t(j,st),st.detectedPlanes&&n.dispatchEvent({type:`planesdetected`,data:st}),g=null}let ae=new Hf;ae.setAnimationLoop(Wt),this.setAnimationLoop=function(j){$t=j},this.dispose=function(){}}};var Rv=new Pe;var Kf=new Ht;Kf.set(-1,0,0,0,1,0,0,0,1);function Ov(r,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,xu(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,b,w,y){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&f(m,p,y)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,b,w):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Cn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Cn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),w=b.envMap,y=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(y)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Kf),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Iv(r,t,e,n){let i={},s={},a=[],o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(y,M){let E=M.program;n.uniformBlockBinding(y,E)}function l(y,M){let E=i[y.id];E===void 0&&(m(y),E=u(y),i[y.id]=E,y.addEventListener(`dispose`,b));let T=M.program;n.updateUBOMapping(y,T);let x=t.render.frame;s[y.id]!==x&&(h(y),s[y.id]=x)}function u(y){let M=d();y.__bindingPointIndex=M;let E=r.createBuffer(),T=y.__size,x=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,E),r.bufferData(r.UNIFORM_BUFFER,T,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,E),E}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return zt(`WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.`),0}function h(y){let M=i[y.id],E=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let x=0,C=E.length;x<C;x++){let P=E[x];if(Array.isArray(P))for(let B=0,L=P.length;B<L;B++)f(P[B],x,B,T);else f(P,x,0,T)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(y,M,E,T){if(_(y,M,E,T)===!0){let x=y.__offset,C=y.value;if(Array.isArray(C)){let P=0;for(let B=0;B<C.length;B++){let L=C[B],k=p(L);g(L,y.__data,P),typeof L!=`number`&&typeof L!=`boolean`&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=k.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(C,y.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,y.__data)}}function g(y,M,E){typeof y==`number`||typeof y==`boolean`?M[0]=y:y.isMatrix3?(M[0]=y.elements[0],M[1]=y.elements[1],M[2]=y.elements[2],M[3]=0,M[4]=y.elements[3],M[5]=y.elements[4],M[6]=y.elements[5],M[7]=0,M[8]=y.elements[6],M[9]=y.elements[7],M[10]=y.elements[8],M[11]=0):ArrayBuffer.isView(y)?M.set(new y.constructor(y.buffer,y.byteOffset,M.length)):y.toArray(M,E)}function _(y,M,E,T){let x=y.value,C=M+`_`+E;if(T[C]===void 0)return typeof x==`number`||typeof x==`boolean`?T[C]=x:ArrayBuffer.isView(x)?T[C]=x.slice():T[C]=x.clone(),!0;{let P=T[C];if(typeof x==`number`||typeof x==`boolean`){if(P!==x)return T[C]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(P.equals(x)===!1)return P.copy(x),!0}}return!1}function m(y){let M=y.uniforms,E=0,T=16;for(let C=0,P=M.length;C<P;C++){let B=Array.isArray(M[C])?M[C]:[M[C]];for(let L=0,k=B.length;L<k;L++){let I=B[L],G=Array.isArray(I.value)?I.value:[I.value];for(let Y=0,$=G.length;Y<$;Y++){let rt=G[Y],Z=p(rt),tt=E%T,ot=tt%Z.boundary,wt=tt+ot;E+=ot,wt!==0&&T-wt<Z.storage&&(E+=T-wt),I.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=E,E+=Z.storage}}}let x=E%T;return x>0&&(E+=T-x),y.__size=E,y.__cache={},this}function p(y){let M={boundary:0,storage:0};return typeof y==`number`||typeof y==`boolean`?(M.boundary=4,M.storage=4):y.isVector2?(M.boundary=8,M.storage=8):y.isVector3||y.isColor?(M.boundary=16,M.storage=12):y.isVector4?(M.boundary=16,M.storage=16):y.isMatrix3?(M.boundary=48,M.storage=48):y.isMatrix4?(M.boundary=64,M.storage=64):y.isTexture?kt(`WebGLRenderer: Texture samplers can not be part of an uniforms group.`):ArrayBuffer.isView(y)?(M.boundary=16,M.storage=y.byteLength):kt(`WebGLRenderer: Unsupported uniform value type.`,y),M}function b(y){let M=y.target;M.removeEventListener(`dispose`,b);let E=a.indexOf(M.__bindingPointIndex);a.splice(E,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function w(){for(let y in i)r.deleteBuffer(i[y]);a=[],i={},s={}}return{bind:c,update:l,dispose:w}}var Bv=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);var wi=null;function Dv(){return wi===null&&(wi=new Po(Bv,16,16,pr,pi),wi.name=`DFG_LUT`,wi.minFilter=ln,wi.magFilter=ln,wi.wrapS=vi,wi.wrapT=vi,wi.generateMipmaps=!1,wi.needsUpdate=!0),wi}var Nc=class{constructor(t={}){let{canvas:e=mf(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u=`default`,failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:f=Ln}=t;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<`u`&&n instanceof WebGLRenderingContext)throw new Error(`THREE.WebGLRenderer: WebGL 1 is not supported since r163.`);g=n.getContextAttributes().alpha}else g=a;let _=f,m=new Set([jo,Qo,Jo]),p=new Set([Ln,di,As,Ps,Ko,Zo]),b=new Uint32Array(4),w=new Int32Array(4),y=new V,M=null,E=null,T=[],x=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,B=!1,L=null,k=null,I=null,G=null;this._outputColorSpace=Hn;let Y=0,$=0,rt=null,Z=-1,tt=null,ot=new Re,wt=new Re,Pt=null,$t=new Xt(0),Wt=0,ae=e.width,j=e.height,st=1,St=null,Gt=null,Mt=new Re(0,0,ae,j),Yt=new Re(0,0,ae,j),ze=!1,Kt=new ys,oe=!1,ue=!1,te=new Pe,Me=new V,Fe=new Re,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Bt=!1;function Vt(){return rt===null?st:1}let D=n;function Ae(S,F){return e.getContext(S,F)}let ne,A,v,z,q,J,ut,ht,Q,et,dt,Rt,gt,ft,Dt,Ut,qt,N,pt,nt,mt,yt,lt;try{let S={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:d};if(`setAttribute`in e&&e.setAttribute(`data-engine`,`three.js r186`),e.addEventListener(`webglcontextlost`,be,!1),e.addEventListener(`webglcontextrestored`,he,!1),e.addEventListener(`webglcontextcreationerror`,ri,!1),D===null){let F=`webgl2`;if(D=Ae(F,S),D===null)throw Ae(F)?new Error(`THREE.WebGLRenderer: Error creating WebGL context with your selected attributes.`):new Error(`THREE.WebGLRenderer: Error creating WebGL context.`)}Ft()}catch(S){throw e.removeEventListener(`webglcontextlost`,be,!1),e.removeEventListener(`webglcontextrestored`,he,!1),e.removeEventListener(`webglcontextcreationerror`,ri,!1),zt(`WebGLRenderer: `+S.message),S}function Ft(){ne=new G_(D),ne.init(),mt=new Tv(D,ne),A=new O_(D,ne,t,mt),v=new Ev(D,ne),A.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),k=D.createFramebuffer(),I=D.createFramebuffer(),G=D.createFramebuffer(),z=new W_(D),q=new hv,J=new wv(D,ne,v,q,A,mt,z),ut=new z_(P),ht=new qm(D),yt=new P_(D,ht),Q=new V_(D,ht,z,yt),et=new q_(D,Q,ht,yt,z),N=new X_(D,A,J),Dt=new I_(q),dt=new uv(P,ut,ne,A,yt,Dt),Rt=new Ov(P,q),gt=new fv,ft=new vv(ne),qt=new A_(P,ut,v,et,g,c),Ut=new Cv(P,et,A),lt=new Iv(D,z,A,v),pt=new R_(D,ne,z),nt=new H_(D,ne,z),z.programs=dt.programs,P.capabilities=A,P.extensions=ne,P.properties=q,P.renderLists=gt,P.shadowMap=Ut,P.state=v,P.info=z}_!==Ln&&(C=new $_(_,e.width,e.height,o,i,s));let Ot=new Fu(P,D);this.xr=Ot,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let S=ne.get(`WEBGL_lose_context`);S&&S.loseContext()},this.forceContextRestore=function(){let S=ne.get(`WEBGL_lose_context`);S&&S.restoreContext()},this.getPixelRatio=function(){return st},this.setPixelRatio=function(S){S!==void 0&&(st=S,this.setSize(ae,j,!1))},this.getSize=function(S){return S.set(ae,j)},this.setSize=function(S,F,K=!0){if(Ot.isPresenting){kt(`WebGLRenderer: Can't change size while VR device is presenting.`);return}ae=S,j=F,e.width=Math.floor(S*st),e.height=Math.floor(F*st),K===!0&&(e.style.width=S+`px`,e.style.height=F+`px`),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,S,F)},this.getDrawingBufferSize=function(S){return S.set(ae*st,j*st).floor()},this.setDrawingBufferSize=function(S,F,K){ae=S,j=F,st=K,e.width=Math.floor(S*K),e.height=Math.floor(F*K),this.setViewport(0,0,S,F)},this.setEffects=function(S){if(_===Ln){zt(`WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.`);return}if(S){for(let F=0;F<S.length;F++)if(S[F].isOutputPass===!0){kt(`WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.`);break}}C.setEffects(S||[])},this.getCurrentViewport=function(S){return S.copy(ot)},this.getViewport=function(S){return S.copy(Mt)},this.setViewport=function(S,F,K,H){S.isVector4?Mt.set(S.x,S.y,S.z,S.w):Mt.set(S,F,K,H),v.viewport(ot.copy(Mt).multiplyScalar(st).round())},this.getScissor=function(S){return S.copy(Yt)},this.setScissor=function(S,F,K,H){S.isVector4?Yt.set(S.x,S.y,S.z,S.w):Yt.set(S,F,K,H),v.scissor(wt.copy(Yt).multiplyScalar(st).round())},this.getScissorTest=function(){return ze},this.setScissorTest=function(S){v.setScissorTest(ze=S)},this.setOpaqueSort=function(S){St=S},this.setTransparentSort=function(S){Gt=S},this.getClearColor=function(S){return S.copy(qt.getClearColor())},this.setClearColor=function(){qt.setClearColor(...arguments)},this.getClearAlpha=function(){return qt.getClearAlpha()},this.setClearAlpha=function(){qt.setClearAlpha(...arguments)},this.clear=function(S=!0,F=!0,K=!0){let H=0;if(S){let W=!1;if(rt!==null){let vt=rt.texture.format;W=m.has(vt)}if(W){let vt=rt.texture.type,Ct=p.has(vt),xt=qt.getClearColor(),Tt=qt.getClearAlpha(),It=xt.r,Zt=xt.g,ee=xt.b;Ct?(b[0]=It,b[1]=Zt,b[2]=ee,b[3]=Tt,D.clearBufferuiv(D.COLOR,0,b)):(w[0]=It,w[1]=Zt,w[2]=ee,w[3]=Tt,D.clearBufferiv(D.COLOR,0,w))}else H|=D.COLOR_BUFFER_BIT}F&&(H|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),K&&(H|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H!==0&&D.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(S){S.setRenderer(this),L=S},this.dispose=function(){e.removeEventListener(`webglcontextlost`,be,!1),e.removeEventListener(`webglcontextrestored`,he,!1),e.removeEventListener(`webglcontextcreationerror`,ri,!1),qt.dispose(),gt.dispose(),ft.dispose(),q.dispose(),ut.dispose(),et.dispose(),yt.dispose(),lt.dispose(),dt.dispose(),Ot.dispose(),Ot.removeEventListener(`sessionstart`,Ih),Ot.removeEventListener(`sessionend`,Bh),Cr.stop()};function be(S){S.preventDefault(),_u(`WebGLRenderer: Context Lost.`),B=!0}function he(){_u(`WebGLRenderer: Context Restored.`),B=!1;let S=z.autoReset,F=Ut.enabled,K=Ut.autoUpdate,H=Ut.needsUpdate,W=Ut.type;Ft(),z.autoReset=S,Ut.enabled=F,Ut.autoUpdate=K,Ut.needsUpdate=H,Ut.type=W}function ri(S){zt(`WebGLRenderer: A WebGL context could not be created. Reason: `,S.statusMessage)}function mi(S){let F=S.target;F.removeEventListener(`dispose`,mi),im(F)}function im(S){rm(S),q.remove(S)}function rm(S){let F=q.get(S).programs;F!==void 0&&(F.forEach(function(K){dt.releaseProgram(K)}),S.isShaderMaterial&&dt.releaseShaderCache(S))}this.renderBufferDirect=function(S,F,K,H,W,vt){F===null&&(F=dn);let Ct=W.isMesh&&W.matrixWorld.determinantAffine()<0,xt=om(S,F,K,H,W);v.setMaterial(H,Ct);let Tt=K.index,It=1;if(H.wireframe===!0){if(Tt=Q.getWireframeAttribute(K),Tt===void 0)return;It=2}let Zt=K.drawRange,ee=K.attributes.position,At=Zt.start*It,de=(Zt.start+Zt.count)*It;vt!==null&&(At=Math.max(At,vt.start*It),de=Math.min(de,(vt.start+vt.count)*It)),Tt!==null?(At=Math.max(At,0),de=Math.min(de,Tt.count)):ee!=null&&(At=Math.max(At,0),de=Math.min(de,ee.count));let Xe=de-At;if(Xe<0||Xe===Infinity)return;yt.setup(W,H,xt,K,Tt);let we,ge=pt;if(Tt!==null&&(we=ht.get(Tt),ge=nt,ge.setIndex(we)),W.isMesh)H.wireframe===!0?(v.setLineWidth(H.wireframeLinewidth*Vt()),ge.setMode(D.LINES)):ge.setMode(D.TRIANGLES);else if(W.isLine){let fn=H.linewidth;fn===void 0&&(fn=1),v.setLineWidth(fn*Vt()),W.isLineSegments?ge.setMode(D.LINES):W.isLineLoop?ge.setMode(D.LINE_LOOP):ge.setMode(D.LINE_STRIP)}else W.isPoints?ge.setMode(D.POINTS):W.isSprite&&ge.setMode(D.TRIANGLES);if(W.isBatchedMesh)if(ne.get(`WEBGL_multi_draw`))ge.renderMultiDraw(W._multiDrawStarts,W._multiDrawCounts,W._multiDrawCount);else{let fn=W._multiDrawStarts,bt=W._multiDrawCounts,Mn=W._multiDrawCount,ce=Tt?ht.get(Tt).bytesPerElement:1,Zn=q.get(H).currentProgram.getUniforms();for(let gi=0;gi<Mn;gi++)Zn.setValue(D,`_gl_DrawID`,gi),ge.render(fn[gi]/ce,bt[gi])}else if(W.isInstancedMesh)ge.renderInstances(At,Xe,W.count);else if(K.isInstancedBufferGeometry){let fn=K._maxInstanceCount!==void 0?K._maxInstanceCount:Infinity,bt=Math.min(K.instanceCount,fn);ge.renderInstances(At,Xe,bt)}else ge.render(At,Xe)};function Oh(S,F,K,H){L!==null&&S.isNodeMaterial&&L.setObject(H,S),oe===!0&&Dt.setState(S,K,!1),S.transparent===!0&&S.side===Si&&S.forceSinglePass===!1?(S.side=Cn,S.needsUpdate=!0,Wa(S,F,H),S.side=ur,S.needsUpdate=!0,Wa(S,F,H),S.side=Si):Wa(S,F,H)}this.compile=function(S,F,K=null){K===null&&(K=S),L!==null&&L.renderStart(S,F,K),E=ft.get(K),E.init(F),x.push(E),K.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),S!==K&&S.traverseVisible(function(W){W.isLight&&W.layers.test(F.layers)&&(E.pushLight(W),W.castShadow&&E.pushShadow(W))}),E.setupLights(),L!==null&&L.updateLights(E.state.lightsArray),ue=this.localClippingEnabled,oe=Dt.init(this.clippingPlanes,ue),oe===!0&&Dt.setGlobalState(this.clippingPlanes,F),L!==null&&Ut.render(E.state.shadowsArray,K,F);let H=new Set;return S.traverse(function(W){if(!(W.isMesh||W.isPoints||W.isLine||W.isSprite))return;let vt=W.material;if(vt)if(Array.isArray(vt))for(let Ct=0;Ct<vt.length;Ct++){let xt=vt[Ct];Oh(xt,K,F,W),H.add(xt)}else Oh(vt,K,F,W),H.add(vt)}),E=x.pop(),L!==null&&L.renderEnd(),H},this.compileAsync=function(S,F,K=null){let H=this.compile(S,F,K);return new Promise(W=>{function vt(){if(H.forEach(function(Ct){let Tt=q.get(Ct).currentProgram;(Tt===void 0||Tt.isReady())&&H.delete(Ct)}),H.size===0){W(S);return}setTimeout(vt,10)}ne.get(`KHR_parallel_shader_compile`)!==null?vt():setTimeout(vt,10)})};let dl=null;function sm(S){dl&&dl(S)}function Ih(){Cr.stop()}function Bh(){Cr.start()}let Cr=new Hf;Cr.setAnimationLoop(sm),typeof self<`u`&&Cr.setContext(self),this.setAnimationLoop=function(S){dl=S,Ot.setAnimationLoop(S),S===null?Cr.stop():Cr.start()},Ot.addEventListener(`sessionstart`,Ih),Ot.addEventListener(`sessionend`,Bh),this.render=function(S,F){if(F!==void 0&&F.isCamera!==!0){zt(`WebGLRenderer.render: camera is not an instance of THREE.Camera.`);return}if(B===!0)return;L!==null&&L.renderStart(S,F);let K=Ot.enabled===!0&&Ot.isPresenting===!0,H=C!==null&&(rt===null||K)&&C.begin(P,rt);if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ot.enabled===!0&&Ot.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ot.cameraAutoUpdate===!0&&Ot.updateCamera(F),F=Ot.getCamera()),S.isScene===!0&&S.onBeforeRender(P,S,F,rt),E=ft.get(S,x.length),E.init(F),E.state.textureUnits=J.getTextureUnits(),x.push(E),te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Kt.setFromProjectionMatrix(te,ui,F.reversedDepth),ue=this.localClippingEnabled,oe=Dt.init(this.clippingPlanes,ue),M=gt.get(S,T.length),M.init(),T.push(M),Ot.enabled===!0&&Ot.isPresenting===!0){let Ct=P.xr.getDepthSensingMesh();Ct!==null&&fl(Ct,F,-Infinity,P.sortObjects)}fl(S,F,0,P.sortObjects),M.finish(),L!==null&&L.updateLights(E.state.lightsArray),P.sortObjects===!0&&M.sort(St,Gt),Bt=Ot.enabled===!1||Ot.isPresenting===!1||Ot.hasDepthSensing()===!1,Bt&&qt.addToRenderList(M,S),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),oe===!0&&Dt.beginShadows();let W=E.state.shadowsArray;if(Ut.render(W,S,F),oe===!0&&Dt.endShadows(),(H&&C.hasRenderPass())===!1){let Ct=M.opaque,xt=M.transmissive;if(E.setupLights(),F.isArrayCamera){let Tt=F.cameras;if(xt.length>0)for(let It=0,Zt=Tt.length;It<Zt;It++){let ee=Tt[It];Lh(Ct,xt,S,ee)}Bt&&qt.render(S);for(let It=0,Zt=Tt.length;It<Zt;It++){let ee=Tt[It];Dh(M,S,ee,ee.viewport)}}else xt.length>0&&Lh(Ct,xt,S,F),Bt&&qt.render(S),Dh(M,S,F)}rt!==null&&$===0&&(J.updateMultisampleRenderTarget(rt),J.updateRenderTargetMipmap(rt)),H&&C.end(P),S.isScene===!0&&S.onAfterRender(P,S,F),yt.resetDefaultState(),Z=-1,tt=null,x.pop(),x.length>0?(E=x[x.length-1],J.setTextureUnits(E.state.textureUnits),oe===!0&&Dt.setGlobalState(P.clippingPlanes,E.state.camera)):E=null,T.pop(),T.length>0?M=T[T.length-1]:M=null,L!==null&&L.renderEnd()};function fl(S,F,K,H){if(S.visible===!1)return;if(S.layers.test(F.layers)){if(S.isGroup)K=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(F);else if(S.isLightProbeGrid)E.pushLightProbeGrid(S);else if(S.isLight)E.pushLight(S),S.castShadow&&E.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||S.intersectsFrustum(Kt)){H&&Fe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(te);let Ct=et.update(S),xt=S.material;xt.visible&&M.push(S,Ct,xt,K,Fe.z,null,F)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||S.intersectsFrustum(Kt))){let Ct=et.update(S),xt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Fe.copy(S.boundingSphere.center)):(Ct.boundingSphere===null&&Ct.computeBoundingSphere(),Fe.copy(Ct.boundingSphere.center)),Fe.applyMatrix4(S.matrixWorld).applyMatrix4(te)),Array.isArray(xt)){let Tt=Ct.groups;for(let It=0,Zt=Tt.length;It<Zt;It++){let ee=Tt[It],At=xt[ee.materialIndex];At&&At.visible&&M.push(S,Ct,At,K,Fe.z,ee,F)}}else xt.visible&&M.push(S,Ct,xt,K,Fe.z,null,F)}}let vt=S.children;for(let Ct=0,xt=vt.length;Ct<xt;Ct++)fl(vt[Ct],F,K,H)}function Dh(S,F,K,H){let{opaque:W,transmissive:vt,transparent:Ct}=S;E.setupLightsView(K),oe===!0&&Dt.setGlobalState(P.clippingPlanes,K),H&&v.viewport(ot.copy(H)),W.length>0&&Ha(W,F,K),vt.length>0&&Ha(vt,F,K),Ct.length>0&&Ha(Ct,F,K),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function Lh(S,F,K,H){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[H.id]===void 0){let At=ne.has(`EXT_color_buffer_half_float`)||ne.has(`EXT_color_buffer_float`);E.state.transmissionRenderTarget[H.id]=new Bn(1,1,{generateMipmaps:!0,type:At?pi:Ln,minFilter:dr,samples:Math.max(4,A.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ie.workingColorSpace})}let vt=E.state.transmissionRenderTarget[H.id],Ct=H.viewport||ot;vt.setSize(Ct.z*P.transmissionResolutionScale,Ct.w*P.transmissionResolutionScale);let xt=P.getRenderTarget(),Tt=P.getActiveCubeFace(),It=P.getActiveMipmapLevel();P.setRenderTarget(vt),P.getClearColor($t),Wt=P.getClearAlpha(),Wt<1&&P.setClearColor(16777215,.5),P.clear(),Bt&&qt.render(K);let Zt=P.toneMapping;P.toneMapping=hi;let ee=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),E.setupLightsView(H),oe===!0&&Dt.setGlobalState(P.clippingPlanes,H),Ha(S,K,H),J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt),ne.has(`WEBGL_multisampled_render_to_texture`)===!1){let At=!1;for(let de=0,Xe=F.length;de<Xe;de++){let{object:ge,geometry:fn,material:bt,group:Mn}=F[de];if(bt.side===Si&&ge.layers.test(H.layers)){let ce=bt.side;bt.side=Cn,bt.needsUpdate=!0,Fh(ge,K,H,fn,bt,Mn),bt.side=ce,bt.needsUpdate=!0,At=!0}}At===!0&&(J.updateMultisampleRenderTarget(vt),J.updateRenderTargetMipmap(vt))}P.setRenderTarget(xt,Tt,It),P.setClearColor($t,Wt),ee!==void 0&&(H.viewport=ee),P.toneMapping=Zt}function Ha(S,F,K){let H=F.isScene===!0?F.overrideMaterial:null;for(let W=0,vt=S.length;W<vt;W++){let Ct=S[W],{object:xt,geometry:Tt,group:It}=Ct,Zt=Ct.material;Zt.allowOverride===!0&&H!==null&&(Zt=H),xt.layers.test(K.layers)&&Fh(xt,F,K,Tt,Zt,It)}}function Fh(S,F,K,H,W,vt){L!==null&&W.isNodeMaterial&&L.setObject(S,W),S.onBeforeRender(P,F,K,H,W,vt),S.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),W.onBeforeRender(P,F,K,H,S,vt),W.transparent===!0&&W.side===Si&&W.forceSinglePass===!1?(W.side=Cn,W.needsUpdate=!0,P.renderBufferDirect(K,F,H,W,S,vt),W.side=ur,W.needsUpdate=!0,P.renderBufferDirect(K,F,H,W,S,vt),W.side=Si):P.renderBufferDirect(K,F,H,W,S,vt),S.onAfterRender(P,F,K,H,W,vt)}function Wa(S,F,K){F.isScene!==!0&&(F=dn);let H=q.get(S),W=E.state.lights,vt=E.state.shadowsArray,Ct=W.state.version,xt=dt.getParameters(S,W.state,vt,F,K,E.state.lightProbeGridArray),Tt=dt.getProgramCacheKey(xt),It=H.programs;H.environment=S.isMeshStandardMaterial||S.isMeshLambertMaterial||S.isMeshPhongMaterial?F.environment:null,H.fog=F.fog;let Zt=S.isMeshStandardMaterial||S.isMeshLambertMaterial&&!S.envMap||S.isMeshPhongMaterial&&!S.envMap;H.envMap=ut.get(S.envMap||H.environment,Zt),H.envMapRotation=H.environment!==null&&S.envMap===null?F.environmentRotation:S.envMapRotation,It===void 0&&(S.addEventListener(`dispose`,mi),It=new Map,H.programs=It);let ee=It.get(Tt);if(ee!==void 0){if(H.currentProgram===ee&&H.lightsStateVersion===Ct)return Uh(S,xt),ee}else xt.uniforms=dt.getUniforms(S),L!==null&&S.isNodeMaterial&&L.build(S,K,xt),S.onBeforeCompile(xt,P),ee=dt.acquireProgram(xt,Tt),It.set(Tt,ee),H.uniforms=xt.uniforms;let At=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(At.clippingPlanes=Dt.uniform),Uh(S,xt),H.needsLights=lm(S),H.lightsStateVersion=Ct,H.needsLights&&(At.ambientLightColor.value=W.state.ambient,At.lightProbe.value=W.state.probe,At.sunLights.value=W.state.sun,At.sunLightShadows.value=W.state.sunShadow,At.directionalLights.value=W.state.directional,At.directionalLightShadows.value=W.state.directionalShadow,At.spotLights.value=W.state.spot,At.spotLightShadows.value=W.state.spotShadow,At.rectAreaLights.value=W.state.rectArea,At.ltc_1.value=W.state.rectAreaLTC1,At.ltc_2.value=W.state.rectAreaLTC2,At.pointLights.value=W.state.point,At.pointLightShadows.value=W.state.pointShadow,At.hemisphereLights.value=W.state.hemi,At.sunShadowMatrix.value=W.state.sunShadowMatrix,At.sunShadowCascade.value=W.state.sunShadowCascade,At.directionalShadowMatrix.value=W.state.directionalShadowMatrix,At.spotLightMatrix.value=W.state.spotLightMatrix,At.spotLightMap.value=W.state.spotLightMap,At.pointShadowMatrix.value=W.state.pointShadowMatrix),H.lightProbeGrid=E.state.lightProbeGridArray.length>0,H.currentProgram=ee,H.uniformsList=null,ee}function Nh(S){if(S.uniformsList===null){let F=S.currentProgram.getUniforms();S.uniformsList=Is.seqWithValue(F.seq,S.uniforms)}return S.uniformsList}function Uh(S,F){let K=q.get(S);K.outputColorSpace=F.outputColorSpace,K.batching=F.batching,K.batchingColor=F.batchingColor,K.instancing=F.instancing,K.instancingColor=F.instancingColor,K.instancingMorph=F.instancingMorph,K.skinning=F.skinning,K.morphTargets=F.morphTargets,K.morphNormals=F.morphNormals,K.morphColors=F.morphColors,K.morphTargetsCount=F.morphTargetsCount,K.numClippingPlanes=F.numClippingPlanes,K.numIntersection=F.numClipIntersection,K.vertexAlphas=F.vertexAlphas,K.vertexTangents=F.vertexTangents,K.toneMapping=F.toneMapping}function am(S,F){if(S.length===0)return null;if(S.length===1)return S[0].texture!==null?S[0]:null;y.setFromMatrixPosition(F.matrixWorld);for(let K=0,H=S.length;K<H;K++){let W=S[K];if(W.texture!==null&&W.boundingBox.containsPoint(y))return W}return null}function om(S,F,K,H,W){F.isScene!==!0&&(F=dn),J.resetTextureUnits();let vt=F.fog,Ct=H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial?F.environment:null,xt=rt===null?P.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ie.workingColorSpace,Tt=H.isMeshStandardMaterial||H.isMeshLambertMaterial&&!H.envMap||H.isMeshPhongMaterial&&!H.envMap,It=ut.get(H.envMap||Ct,Tt),Zt=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,ee=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),At=!!K.morphAttributes.position,de=!!K.morphAttributes.normal,Xe=!!K.morphAttributes.color,we=hi;H.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(we=P.toneMapping);let ge=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,fn=ge!==void 0?ge.length:0,bt=q.get(H),Mn=E.state.lights;if(oe===!0&&(ue===!0||S!==tt)){let Se=S===tt&&H.id===Z;Dt.setState(H,S,Se)}let ce=!1;H.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Mn.state.version||bt.outputColorSpace!==xt||W.isBatchedMesh&&bt.batching===!1||!W.isBatchedMesh&&bt.batching===!0||W.isBatchedMesh&&bt.batchingColor===!0&&W._colorsTexture===null||W.isBatchedMesh&&bt.batchingColor===!1&&W._colorsTexture!==null||W.isInstancedMesh&&bt.instancing===!1||!W.isInstancedMesh&&bt.instancing===!0||W.isSkinnedMesh&&bt.skinning===!1||!W.isSkinnedMesh&&bt.skinning===!0||W.isInstancedMesh&&bt.instancingColor===!0&&W.instanceColor===null||W.isInstancedMesh&&bt.instancingColor===!1&&W.instanceColor!==null||W.isInstancedMesh&&bt.instancingMorph===!0&&W.morphTexture===null||W.isInstancedMesh&&bt.instancingMorph===!1&&W.morphTexture!==null||bt.envMap!==It||H.fog===!0&&bt.fog!==vt||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Dt.numPlanes||bt.numIntersection!==Dt.numIntersection)||bt.vertexAlphas!==Zt||bt.vertexTangents!==ee||bt.morphTargets!==At||bt.morphNormals!==de||bt.morphColors!==Xe||bt.toneMapping!==we||bt.morphTargetsCount!==fn||!!bt.lightProbeGrid!=E.state.lightProbeGridArray.length>0)&&(ce=!0):(ce=!0,bt.__version=H.version);let Zn=bt.currentProgram;ce===!0&&(Zn=Wa(H,F,W),L&&H.isNodeMaterial&&L.onUpdateProgram(H,Zn,bt));let gi=!1,Ki=!1,Qr=!1,me=Zn.getUniforms(),Ge=bt.uniforms;if(v.useProgram(Zn.program)&&(gi=!0,Ki=!0,Qr=!0),H.id!==Z&&(Z=H.id,Ki=!0),bt.needsLights){let Se=am(E.state.lightProbeGridArray,W);bt.lightProbeGrid!==Se&&(bt.lightProbeGrid=Se,Ki=!0)}if(gi||tt!==S){v.buffers.depth.getReversed()&&S.reversedDepth!==!0&&(S._reversedDepth=!0,S.updateProjectionMatrix()),me.setValue(D,`projectionMatrix`,S.projectionMatrix),me.setValue(D,`viewMatrix`,S.matrixWorldInverse);let Ji=me.map.cameraPosition;Ji!==void 0&&Ji.setValue(D,Me.setFromMatrixPosition(S.matrixWorld)),A.logarithmicDepthBuffer&&me.setValue(D,`logDepthBufFC`,2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&me.setValue(D,`isOrthographic`,S.isOrthographicCamera===!0),tt!==S&&(tt=S,Ki=!0,Qr=!0)}if(bt.needsLights&&(Mn.state.sunShadowMap.length>0&&me.setValue(D,`sunShadowMap`,Mn.state.sunShadowMap,J),Mn.state.directionalShadowMap.length>0&&me.setValue(D,`directionalShadowMap`,Mn.state.directionalShadowMap,J),Mn.state.spotShadowMap.length>0&&me.setValue(D,`spotShadowMap`,Mn.state.spotShadowMap,J),Mn.state.pointShadowMap.length>0&&me.setValue(D,`pointShadowMap`,Mn.state.pointShadowMap,J)),W.isSkinnedMesh){me.setOptional(D,W,`bindMatrix`),me.setOptional(D,W,`bindMatrixInverse`);let Se=W.skeleton;Se&&(Se.boneTexture===null&&Se.computeBoneTexture(),me.setValue(D,`boneTexture`,Se.boneTexture,J))}W.isBatchedMesh&&(me.setOptional(D,W,`batchingTexture`),me.setValue(D,`batchingTexture`,W._matricesTexture,J),me.setOptional(D,W,`batchingIdTexture`),me.setValue(D,`batchingIdTexture`,W._indirectTexture,J),me.setOptional(D,W,`batchingColorTexture`),W._colorsTexture!==null&&me.setValue(D,`batchingColorTexture`,W._colorsTexture,J));let Zi=K.morphAttributes;if((Zi.position!==void 0||Zi.normal!==void 0||Zi.color!==void 0)&&N.update(W,K,Zn),(Ki||bt.receiveShadow!==W.receiveShadow)&&(bt.receiveShadow=W.receiveShadow,me.setValue(D,`receiveShadow`,W.receiveShadow)),(H.isMeshStandardMaterial||H.isMeshLambertMaterial||H.isMeshPhongMaterial)&&H.envMap===null&&F.environment!==null&&(Ge.envMapIntensity.value=F.environmentIntensity),Ge.dfgLUT!==void 0&&(Ge.dfgLUT.value=Dv()),Ki){if(me.setValue(D,`toneMappingExposure`,P.toneMappingExposure),bt.needsLights&&cm(Ge,Qr),vt&&H.fog===!0&&Rt.refreshFogUniforms(Ge,vt),Rt.refreshMaterialUniforms(Ge,H,st,j,E.state.transmissionRenderTarget[S.id]),bt.needsLights&&bt.lightProbeGrid){let Se=bt.lightProbeGrid;Ge.probesSH.value=Se.texture,Ge.probesMin.value.copy(Se.boundingBox.min),Ge.probesMax.value.copy(Se.boundingBox.max),Ge.probesResolution.value.copy(Se.resolution)}Is.upload(D,Nh(bt),Ge,J)}if(H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(Is.upload(D,Nh(bt),Ge,J),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&me.setValue(D,`center`,W.center),me.setValue(D,`modelViewMatrix`,W.modelViewMatrix),me.setValue(D,`normalMatrix`,W.normalMatrix),me.setValue(D,`modelMatrix`,W.matrixWorld),H.uniformsGroups!==void 0){let Se=H.uniformsGroups;for(let Ji=0,jr=Se.length;Ji<jr;Ji++){let zh=Se[Ji];lt.update(zh,Zn),lt.bind(zh,Zn)}}return Zn}function cm(S,F){S.ambientLightColor.needsUpdate=F,S.lightProbe.needsUpdate=F,S.sunLights.needsUpdate=F,S.sunLightShadows.needsUpdate=F,S.directionalLights.needsUpdate=F,S.directionalLightShadows.needsUpdate=F,S.pointLights.needsUpdate=F,S.pointLightShadows.needsUpdate=F,S.spotLights.needsUpdate=F,S.spotLightShadows.needsUpdate=F,S.rectAreaLights.needsUpdate=F,S.hemisphereLights.needsUpdate=F}function lm(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return Y},this.getActiveMipmapLevel=function(){return $},this.getRenderTarget=function(){return rt},this.setRenderTargetTextures=function(S,F,K){let H=q.get(S);H.__autoAllocateDepthBuffer=S.resolveDepthBuffer===!1,H.__autoAllocateDepthBuffer===!1&&(H.__useRenderToTexture=!1),q.get(S.texture).__webglTexture=F,q.get(S.depthTexture).__webglTexture=H.__autoAllocateDepthBuffer?void 0:K,H.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(S,F){let K=q.get(S);K.__webglFramebuffer=F,K.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(S,F=0,K=0){rt=S,Y=F,$=K;let H=null,W=!1,vt=!1;if(S){let xt=q.get(S);if(xt.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(D.FRAMEBUFFER,xt.__webglFramebuffer),ot.copy(S.viewport),wt.copy(S.scissor),Pt=S.scissorTest,v.viewport(ot),v.scissor(wt),v.setScissorTest(Pt),Z=-1;return}else if(xt.__webglFramebuffer===void 0)J.setupRenderTarget(S);else if(xt.__hasExternalTextures)J.rebindTextures(S,q.get(S.texture).__webglTexture,q.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Zt=S.depthTexture;if(xt.__boundDepthTexture!==Zt){if(Zt!==null&&q.has(Zt)&&(S.width!==Zt.image.width||S.height!==Zt.image.height))throw new Error(`THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.`);J.setupDepthRenderbuffer(S)}}let Tt=S.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(vt=!0);let It=q.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(It[F])?H=It[F][K]:H=It[F],W=!0):S.samples>0&&J.useMultisampledRTT(S)===!1?H=q.get(S).__webglMultisampledFramebuffer:Array.isArray(It)?H=It[K]:H=It,ot.copy(S.viewport),wt.copy(S.scissor),Pt=S.scissorTest}else ot.copy(Mt).multiplyScalar(st).floor(),wt.copy(Yt).multiplyScalar(st).floor(),Pt=ze;if(K!==0&&(H=k),v.bindFramebuffer(D.FRAMEBUFFER,H)&&v.drawBuffers(S,H),v.viewport(ot),v.scissor(wt),v.setScissorTest(Pt),W){let xt=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,xt.__webglTexture,K)}else if(vt){let xt=F;for(let Tt=0;Tt<S.textures.length;Tt++){let It=q.get(S.textures[Tt]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Tt,It.__webglTexture,K,xt)}}else if(S!==null&&K!==0){let xt=q.get(S.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,xt.__webglTexture,K)}Z=-1};function kh(S){let F=q.get(S);return(F.__readFormat!==S.format||F.__readType!==S.type)&&(F.__readFormat=S.format,F.__readType=S.type,F.__formatReadable=A.textureFormatReadable(S.format),F.__typeReadable=A.textureTypeReadable(S.type)),F}this.readRenderTargetPixels=function(S,F,K,H,W,vt,Ct,xt=0){if(!(S&&S.isWebGLRenderTarget)){zt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);return}let Tt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ct!==void 0&&(Tt=Tt[Ct]),Tt){v.bindFramebuffer(D.FRAMEBUFFER,Tt);try{let It=S.textures[xt],Zt=It.format,ee=It.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xt);let At=kh(It);if(At.__formatReadable===!1){zt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.`);return}if(At.__typeReadable===!1){zt(`WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.`);return}F>=0&&F<=S.width-H&&K>=0&&K<=S.height-W&&D.readPixels(F,K,H,W,mt.convert(Zt),mt.convert(ee),vt)}finally{let It=rt!==null?q.get(rt).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,It)}}},this.readRenderTargetPixelsAsync=async function(S,F,K,H,W,vt,Ct,xt=0){if(!(S&&S.isWebGLRenderTarget))throw new Error(`THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.`);let Tt=q.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&Ct!==void 0&&(Tt=Tt[Ct]),Tt)if(F>=0&&F<=S.width-H&&K>=0&&K<=S.height-W){v.bindFramebuffer(D.FRAMEBUFFER,Tt);let It=S.textures[xt],Zt=It.format,ee=It.type;S.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+xt);let At=kh(It);if(At.__formatReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.`);if(At.__typeReadable===!1)throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.`);let de=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.bufferData(D.PIXEL_PACK_BUFFER,vt.byteLength,D.STREAM_READ),D.readPixels(F,K,H,W,mt.convert(Zt),mt.convert(ee),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let Xe=rt!==null?q.get(rt).__webglFramebuffer:null;v.bindFramebuffer(D.FRAMEBUFFER,Xe);let we=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await _f(D,we,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,de),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,vt),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(de),D.deleteSync(we),vt}else throw new Error(`THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.`)},this.copyFramebufferToTexture=function(S,F=null,K=0){let H=Math.pow(2,-K),W=Math.floor(S.image.width*H),vt=Math.floor(S.image.height*H),Ct=F!==null?F.x:0,xt=F!==null?F.y:0;J.setTexture2D(S,0),D.copyTexSubImage2D(D.TEXTURE_2D,K,0,0,Ct,xt,W,vt),v.unbindTexture()},this.copyTextureToTexture=function(S,F,K=null,H=null,W=0,vt=0){let Ct,xt,Tt,It,Zt,ee,At,de,Xe,we=S.isCompressedTexture?S.mipmaps[vt]:S.image;if(K!==null)Ct=K.max.x-K.min.x,xt=K.max.y-K.min.y,Tt=K.isBox3?K.max.z-K.min.z:1,It=K.min.x,Zt=K.min.y,ee=K.isBox3?K.min.z:0;else{let Ge=Math.pow(2,-W);Ct=Math.floor(we.width*Ge),xt=Math.floor(we.height*Ge),S.isDataArrayTexture?Tt=we.depth:S.isData3DTexture?Tt=Math.floor(we.depth*Ge):Tt=1,It=0,Zt=0,ee=0}H!==null?(At=H.x,de=H.y,Xe=H.z):(At=0,de=0,Xe=0);let ge=mt.convert(F.format),fn=mt.convert(F.type),bt;F.isData3DTexture?(J.setTexture3D(F,0),bt=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(J.setTexture2DArray(F,0),bt=D.TEXTURE_2D_ARRAY):(J.setTexture2D(F,0),bt=D.TEXTURE_2D),v.activeTexture(D.TEXTURE0),v.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),v.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),v.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);let Mn=v.getParameter(D.UNPACK_ROW_LENGTH),ce=v.getParameter(D.UNPACK_IMAGE_HEIGHT),Zn=v.getParameter(D.UNPACK_SKIP_PIXELS),gi=v.getParameter(D.UNPACK_SKIP_ROWS),Ki=v.getParameter(D.UNPACK_SKIP_IMAGES);v.pixelStorei(D.UNPACK_ROW_LENGTH,we.width),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,we.height),v.pixelStorei(D.UNPACK_SKIP_PIXELS,It),v.pixelStorei(D.UNPACK_SKIP_ROWS,Zt),v.pixelStorei(D.UNPACK_SKIP_IMAGES,ee);let Qr=S.isDataArrayTexture||S.isData3DTexture,me=F.isDataArrayTexture||F.isData3DTexture;if(S.isDepthTexture){let Ge=q.get(S),Zi=q.get(F),Se=q.get(Ge.__renderTarget),Ji=q.get(Zi.__renderTarget);v.bindFramebuffer(D.READ_FRAMEBUFFER,Se.__webglFramebuffer),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ji.__webglFramebuffer);for(let jr=0;jr<Tt;jr++)Qr&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(S).__webglTexture,W,ee+jr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,q.get(F).__webglTexture,vt,Xe+jr)),D.blitFramebuffer(It,Zt,Ct,xt,At,de,Ct,xt,D.DEPTH_BUFFER_BIT,D.NEAREST);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(W!==0||S.isRenderTargetTexture||q.has(S)){let Ge=q.get(S),Zi=q.get(F);v.bindFramebuffer(D.READ_FRAMEBUFFER,I),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,G);for(let Se=0;Se<Tt;Se++)Qr?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Ge.__webglTexture,W,ee+Se):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Ge.__webglTexture,W),me?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Zi.__webglTexture,vt,Xe+Se):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Zi.__webglTexture,vt),W!==0?D.blitFramebuffer(It,Zt,Ct,xt,At,de,Ct,xt,D.COLOR_BUFFER_BIT,D.NEAREST):me?D.copyTexSubImage3D(bt,vt,At,de,Xe+Se,It,Zt,Ct,xt):D.copyTexSubImage2D(bt,vt,At,de,It,Zt,Ct,xt);v.bindFramebuffer(D.READ_FRAMEBUFFER,null),v.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else me?S.isDataTexture||S.isData3DTexture?D.texSubImage3D(bt,vt,At,de,Xe,Ct,xt,Tt,ge,fn,we.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(bt,vt,At,de,Xe,Ct,xt,Tt,ge,we.data):D.texSubImage3D(bt,vt,At,de,Xe,Ct,xt,Tt,ge,fn,we):S.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,vt,At,de,Ct,xt,ge,fn,we.data):S.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,vt,At,de,we.width,we.height,ge,we.data):D.texSubImage2D(D.TEXTURE_2D,vt,At,de,Ct,xt,ge,fn,we);v.pixelStorei(D.UNPACK_ROW_LENGTH,Mn),v.pixelStorei(D.UNPACK_IMAGE_HEIGHT,ce),v.pixelStorei(D.UNPACK_SKIP_PIXELS,Zn),v.pixelStorei(D.UNPACK_SKIP_ROWS,gi),v.pixelStorei(D.UNPACK_SKIP_IMAGES,Ki),vt===0&&F.generateMipmaps&&D.generateMipmap(bt),v.unbindTexture()},this.initRenderTarget=function(S){q.get(S).__webglFramebuffer===void 0&&J.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?J.setTextureCube(S,0):S.isData3DTexture?J.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?J.setTexture2DArray(S,0):J.setTexture2D(S,0),v.unbindTexture()},this.resetState=function(){Y=0,$=0,rt=null,v.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<`u`&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent(`observe`,{detail:this}))}get coordinateSystem(){return ui}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ie._getDrawingBufferColorSpace(t),e.unpackColorSpace=ie._getUnpackColorSpace()}};var Fv=[`threeCanvasContainer`];var Nu=(r,t)=>t.id;function Nv(r,t){if(r&1&&(Fs$1(0,`span`,67),GI(1),Ml$1()),r&2){let e=MI(2);mC(),Ol$1(`🚀 `,e.i18n.t(`calc.comingSoon`))}}function Uv(r,t){if(r&1&&(Fs$1(0,`span`,68),GI(1),Ml$1()),r&2){let e=MI().$implicit,n=MI();mC(),Ol$1(`₹`,n.isAc()?e.rateAcPerKm||e.ratePerKm:e.rateNonAcPerKm||e.ratePerKm,`/KM`)}}function kv(r,t){if(r&1){let e=SI();Fs$1(0,`button`,65),ea$1(`click`,function(){let i=np$1(e).$implicit;return rp$1(MI().setVehicle(i.id))}),Fs$1(1,`span`,66),GI(2),Ml$1(),vI(3,Nv,2,1,`span`,67)(4,Uv,2,1,`span`,68),Ml$1()}if(r&2){let e=t.$implicit;dm$1(`selected`,MI().selectedVehicleId()===e.id)(`coming-soon-pill`,e.isComingSoon),mC(2),pm$1(e.name),mC(),yI(e.isComingSoon?3:4)}}function zv(r,t){if(r&1&&(Fs$1(0,`option`,48),GI(1),Ml$1()),r&2){let e=t.$implicit,n=MI();nm$1(`value`,e.id),mC(),Ol$1(` `,n.i18n.isTamil()?e.nameTa:e.nameEn,` `)}}function Gv(r,t){if(r&1){let e=SI();Fs$1(0,`input`,69),ea$1(`ngModelChange`,function(i){np$1(e);return rp$1(MI().customPickupText.set(i))}),Ml$1(),aw()}if(r&2){let e=MI();nm$1(`ngModel`,e.customPickupText())(`placeholder`,e.i18n.isTamil()?`ஊர் பெயர் தட்டச்சு செய்யவும்...`:`Type your pickup town / location...`),uw()}}function Vv(r,t){if(r&1&&(Fs$1(0,`option`,48),GI(1),Ml$1()),r&2){let e=t.$implicit,n=MI();nm$1(`value`,e.id),mC(),Ol$1(` `,n.i18n.isTamil()?e.nameTa:e.nameEn,` `)}}function Hv(r,t){if(r&1){let e=SI();Fs$1(0,`input`,69),ea$1(`ngModelChange`,function(i){np$1(e);return rp$1(MI().customDropText.set(i))}),Ml$1(),aw()}if(r&2){let e=MI();nm$1(`ngModel`,e.customDropText())(`placeholder`,e.i18n.isTamil()?`ஊர் பெயர் தட்டச்சு செய்யவும்...`:`Type your destination town / location...`),uw()}}function Wv(r,t){if(r&1&&(Fs$1(0,`span`,56),GI(1),Ml$1()),r&2){let e=MI();mC(),Ol$1(`(`,e.i18n.isTamil()?`இரு வழி பயண தூரம்`:`Round Trip Distance`,`)`)}}function Xv(r,t){if(r&1&&(Fs$1(0,`span`,56),GI(1),Ml$1()),r&2){let e=MI();mC(),Ol$1(`(`,e.i18n.isTamil()?`ஒரு வழி பயண தூரம்`:`One Way Distance`,`)`)}}function qv(r,t){if(r&1){let e=SI();Fs$1(0,`div`,62)(1,`div`,70)(2,`div`,71),GI(3,`⏱️`),Ml$1(),Fs$1(4,`div`,72)(5,`span`,73),GI(6),Ml$1(),Fs$1(7,`strong`,74),GI(8),Ml$1()(),Fs$1(9,`span`,75),GI(10),Ml$1()(),Fs$1(11,`div`,76)(12,`div`,77)(13,`span`,78),GI(14),Ml$1(),Fs$1(15,`span`,79),GI(16),Ml$1()(),Fs$1(17,`div`,80)(18,`button`,81),ea$1(`click`,function(){np$1(e);return rp$1(MI().decrementExtraHours())}),GI(19,`−`),Ml$1(),Fs$1(20,`span`,82),GI(21),Ml$1(),Fs$1(22,`button`,83),ea$1(`click`,function(){np$1(e);return rp$1(MI().incrementExtraHours())}),GI(23,`+`),Ml$1()()()()}if(r&2){let e=MI();mC(6),pm$1(e.i18n.t(`calc.includedTime`)),mC(2),pm$1(e.calculatedFare.includedTimeFormatted),mC(2),pm$1(e.i18n.isTamil()?`இலவசம்`:`Free`),mC(4),pm$1(e.i18n.t(`calc.extraHours`)),mC(2),hm$1(` `,e.selectedVehicleId()===`suv`?`SUV ₹100/hr`:`Sedan ₹80/hr`,` `,e.i18n.isTamil()?`(இலவச நேரத்திற்கு மேல்)`:`(after free time)`,` `),mC(2),nm$1(`disabled`,e.extraHours()===0),mC(3),hm$1(``,e.extraHours(),` `,e.i18n.t(`calc.hoursUnit`))}}function Yv(r,t){if(r&1){let e=SI();Fs$1(0,`div`,64)(1,`div`,84)(2,`span`,85),GI(3),Ml$1(),Fs$1(4,`h4`),GI(5),Ml$1()(),Fs$1(6,`p`,86),GI(7),Ml$1(),Fs$1(8,`button`,87),ea$1(`click`,function(){np$1(e);return rp$1(MI().dispatchWhatsAppBooking())}),Fs$1(9,`span`),GI(10),Ml$1(),vp$1(),Fs$1(11,`svg`,88),Xs$1(12,`path`,89),Ml$1()()()}if(r&2){let e=MI();mC(3),Ol$1(`🚀 `,e.i18n.t(`calc.comingSoon`)),mC(2),pm$1(e.i18n.isTamil()?`டெம்போ டிராவலர் 14-சீட்டர் விரைவில்!`:`Tempo Traveller 14-Seater Coming Soon!`),mC(2),Ol$1(` `,e.i18n.t(`calc.comingSoonDesc`),` `),mC(3),pm$1(e.i18n.t(`calc.preBookBtn`))}}function $v(r,t){if(r&1&&(Fs$1(0,`span`,96),GI(1),Ml$1()),r&2){let e=MI(2);mC(),hm$1(` + `,e.calculatedFare.extraHours,` hrs extra waiting (₹`,e.calculatedFare.waitingFare,`) `)}}function Kv(r,t){if(r&1){let e=SI();Fs$1(0,`div`,90)(1,`div`,91)(2,`div`,92)(3,`span`,93),GI(4),Ml$1(),Fs$1(5,`span`,94),GI(6),Ml$1(),Fs$1(7,`span`,95),GI(8),Ml$1()(),vI(9,$v,2,2,`span`,96),Ml$1(),Fs$1(10,`div`,97)(11,`span`,98),GI(12,`₹`),Ml$1(),Fs$1(13,`span`,99),GI(14),Ml$1()(),Fs$1(15,`span`,100),GI(16),Ml$1()(),Fs$1(17,`button`,101),ea$1(`click`,function(){np$1(e);return rp$1(MI().dispatchWhatsAppBooking())}),Fs$1(18,`span`),GI(19),Ml$1(),vp$1(),Fs$1(20,`svg`,88),Xs$1(21,`path`,89),Ml$1()()}if(r&2){let e=MI();mC(4),Ol$1(` `,e.tripType()===`round`?e.i18n.isTamil()?`இரு வழி பயணம்`:`Round Trip`:e.i18n.isTamil()?`ஒரு வழி பயணம்`:`One Way Drop`,` `),mC(),dm$1(`ac`,e.isAc()),mC(),Ol$1(` `,e.isAc()?`❄️ AC`:`🍃 Non-AC`,` `),mC(2),Ol$1(` `,e.calculatedFare.distanceKm,` KM `),mC(),yI(e.calculatedFare.extraHours&&e.calculatedFare.extraHours>0?9:-1),mC(5),pm$1(e.calculatedFare.estimatedTotal),mC(2),pm$1(e.i18n.t(`calc.includes`)),mC(3),pm$1(e.i18n.t(`calc.whatsappBtn`))}}var zc=class r{canvasContainer;taxiData=h(Wv$1);i18n=h(qv$1);locations=[{id:`sankarankovil`,nameEn:`Sankarankovil`,nameTa:`சங்கரன்கோவில்`},{id:`tirunelveli`,nameEn:`Tirunelveli`,nameTa:`திருநெல்வேலி`},{id:`kovilpatti`,nameEn:`Kovilpatti`,nameTa:`கோவில்பட்டி`},{id:`karivalam`,nameEn:`Karivalam`,nameTa:`கரிவலம்`},{id:`tenkasi`,nameEn:`Tenkasi`,nameTa:`தென்காசி`},{id:`courtallam`,nameEn:`Courtallam`,nameTa:`குற்றாலம்`},{id:`kanniyakumari`,nameEn:`Kanniyakumari`,nameTa:`கன்னியாகுமரி`},{id:`madurai`,nameEn:`Madurai`,nameTa:`மதுரை`},{id:`thiruvananthapuram`,nameEn:`Thiruvananthapuram`,nameTa:`திருவனந்தபுரம்`},{id:`chennai`,nameEn:`Chennai`,nameTa:`சென்னை`},{id:`others`,nameEn:`Others (Custom)`,nameTa:`மற்றவை (விருப்ப இடம்)`}];distanceMatrix={sankarankovil:{sankarankovil:15,karivalam:12,kovilpatti:40,tenkasi:42,courtallam:48,tirunelveli:56,madurai:120,kanniyakumari:140,thiruvananthapuram:145,chennai:615},tirunelveli:{sankarankovil:56,karivalam:65,kovilpatti:58,tenkasi:53,courtallam:58,tirunelveli:15,madurai:160,kanniyakumari:85,thiruvananthapuram:140,chennai:625},kovilpatti:{sankarankovil:40,karivalam:48,kovilpatti:15,tenkasi:78,courtallam:84,tirunelveli:58,madurai:100,kanniyakumari:145,thiruvananthapuram:175,chennai:580},karivalam:{sankarankovil:12,karivalam:15,kovilpatti:48,tenkasi:52,courtallam:58,tirunelveli:65,madurai:115,kanniyakumari:150,thiruvananthapuram:155,chennai:610},tenkasi:{sankarankovil:42,karivalam:52,kovilpatti:78,tenkasi:15,courtallam:8,tirunelveli:53,madurai:160,kanniyakumari:130,thiruvananthapuram:105,chennai:650},courtallam:{sankarankovil:48,karivalam:58,kovilpatti:84,tenkasi:8,courtallam:15,tirunelveli:58,madurai:165,kanniyakumari:135,thiruvananthapuram:110,chennai:655},kanniyakumari:{sankarankovil:140,karivalam:150,kovilpatti:145,tenkasi:130,courtallam:135,tirunelveli:85,kanniyakumari:15,madurai:245,thiruvananthapuram:90,chennai:710},madurai:{sankarankovil:120,karivalam:115,kovilpatti:100,tenkasi:160,courtallam:165,tirunelveli:160,kanniyakumari:245,madurai:15,thiruvananthapuram:280,chennai:460},thiruvananthapuram:{sankarankovil:145,karivalam:155,kovilpatti:175,tenkasi:105,courtallam:110,tirunelveli:140,kanniyakumari:90,madurai:280,thiruvananthapuram:15,chennai:760},chennai:{sankarankovil:615,karivalam:610,kovilpatti:580,tenkasi:650,courtallam:655,tirunelveli:625,kanniyakumari:710,madurai:460,thiruvananthapuram:760,chennai:25}};selectedPickupId=z(`sankarankovil`);selectedDropId=z(`madurai`);customPickupText=z(``);customDropText=z(``);distanceKm=z(120);selectedVehicleId=z(`sedan`);tripType=z(`oneway`);isAc=z(!0);extraHours=z(0);isNightMode=z(!1);isRainMode=z(!1);scene;camera;renderer;animationFrameId;taxiGroup=new Ie;roadMesh;roadTexture;wheels=[];frontWheelSteerGroupLeft=new Ie;frontWheelSteerGroupRight=new Ie;rainParticles;headlights=[];headlightMeshes=[];taillightMeshes=[];streetLampsGroup=new Ie;streetLightPoints=[];catEyesGroup=new Ie;ambientLight;sunLight;cloudsGroup=new Ie;templeSilhouetteGroup=new Ie;ngOnInit(){this.updateDistanceForSelectedLocations()}ngAfterViewInit(){if(typeof window<`u`&&this.canvasContainer){try{this.initThreeJs(),this.animate()}catch(t){console.error(`Hero scene could not be initialized:`,t)}window.addEventListener(`resize`,this.onWindowResize)}}ngOnDestroy(){this.animationFrameId&&cancelAnimationFrame(this.animationFrameId),typeof window<`u`&&window.removeEventListener(`resize`,this.onWindowResize),this.renderer&&this.renderer.dispose()}get calculatedFare(){return this.taxiData.calculateFare(this.distanceKm(),this.selectedVehicleId(),this.tripType(),this.isAc(),this.extraHours())}onPickupChange(t){this.selectedPickupId.set(t),this.updateDistanceForSelectedLocations()}onDropChange(t){this.selectedDropId.set(t),this.updateDistanceForSelectedLocations()}updateDistanceForSelectedLocations(){let t=this.selectedPickupId(),e=this.selectedDropId();if(t!==`others`&&e!==`others`){let n=this.distanceMatrix[t];if(n&&n[e]!==void 0){let i=n[e],s=this.tripType()===`round`?i*2:i;this.distanceKm.set(s);return}}this.distanceKm()<=0&&this.distanceKm.set(this.tripType()===`round`?40:20)}updateDistance(t){this.distanceKm.set(Math.max(1,Math.round(t||1)))}setVehicle(t){this.selectedVehicleId.set(t)}setTripType(t){if(this.tripType()!==t){let e=this.tripType();this.tripType.set(t);let n=this.selectedPickupId(),i=this.selectedDropId();if(n!==`others`&&i!==`others`){let s=this.distanceMatrix[n];if(s&&s[i]!==void 0){let a=s[i];this.distanceKm.set(t===`round`?a*2:a);return}}e===`oneway`&&t===`round`?this.distanceKm.update(s=>s*2):e===`round`&&t===`oneway`&&this.distanceKm.update(s=>Math.max(1,Math.round(s/2)))}}setIsAc(t){this.isAc.set(t)}setExtraHours(t){this.extraHours.set(Math.max(0,Math.min(24,Math.round(t||0))))}incrementExtraHours(){this.extraHours.update(t=>Math.min(24,t+1))}decrementExtraHours(){this.extraHours.update(t=>Math.max(0,t-1))}toggleNightMode(){this.isNightMode.update(t=>!t),this.applyLightingMode(this.isNightMode())}toggleRainMode(){this.isRainMode.update(t=>!t),this.rainParticles&&(this.rainParticles.visible=this.isRainMode())}getPickupDisplayName(){if(this.selectedPickupId()===`others`)return this.customPickupText().trim()||(this.i18n.isTamil()?`விருப்ப இடம்`:`Custom Pickup`);let t=this.locations.find(e=>e.id===this.selectedPickupId());return t?this.i18n.isTamil()?t.nameTa:t.nameEn:this.selectedPickupId()}getDropDisplayName(){if(this.selectedDropId()===`others`)return this.customDropText().trim()||(this.i18n.isTamil()?`விருப்ப சேருமிடம்`:`Custom Drop`);let t=this.locations.find(e=>e.id===this.selectedDropId());return t?this.i18n.isTamil()?t.nameTa:t.nameEn:this.selectedDropId()}dispatchWhatsAppBooking(){let t=this.calculatedFare,e=this.getPickupDisplayName(),n=this.getDropDisplayName(),i=this.i18n.isTamil(),s=this.isAc()?i?`ஏசி (AC)`:`AC Cab`:i?`நான்-ஏசி (Non-AC)`:`Non-AC Cab`;if(t.isComingSoon){let u=i?`\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD \u0BB0\u0BC8\u0B9F\u0BB0\u0BCD \u0B95\u0BBE\u0BB2\u0BCD \u0B9F\u0BBE\u0B95\u0BCD\u0BB8\u0BBF, \u0B9F\u0BC6\u0BAE\u0BCD\u0BAA\u0BCB \u0B9F\u0BBF\u0BB0\u0BBE\u0BB5\u0BB2\u0BB0\u0BCD (14-\u0B9A\u0BC0\u0B9F\u0BCD\u0B9F\u0BB0\u0BCD) \u0BB5\u0BBE\u0B95\u0BA9\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BC1 \u0BAE\u0BC1\u0BA9\u0BCD\u0B95\u0BC2\u0B9F\u0BCD\u0B9F\u0BBF\u0BAF\u0BC7 \u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD.
\u{1F4CD} \u0BAA\u0BC1\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD \u0B87\u0B9F\u0BAE\u0BCD: ${e}
\u{1F3C1} \u0B9A\u0BC7\u0BB0\u0BC1\u0BAE\u0BCD \u0B87\u0B9F\u0BAE\u0BCD: ${n}
\u{1F4C5} \u0BB5\u0BBE\u0B95\u0BA9\u0BAE\u0BCD \u0BB5\u0BB0\u0BB5\u0BBF\u0BB0\u0BC1\u0B95\u0BCD\u0B95\u0BC1\u0BAE\u0BCD \u0BA4\u0BC7\u0BA4\u0BBF \u0BAE\u0BB1\u0BCD\u0BB1\u0BC1\u0BAE\u0BCD \u0B95\u0B9F\u0BCD\u0B9F\u0BA3 \u0BB5\u0BBF\u0BAA\u0BB0\u0B99\u0BCD\u0B95\u0BB3\u0BC8 \u0BA4\u0BC6\u0BB0\u0BBF\u0BB5\u0BBF\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.`:`Hello Rider Call Taxi, I would like to pre-book / register interest for Tempo Traveller (14-Seater).
Pickup: ${e}
Destination: ${n}
Please inform availability and group rates.`,d=this.taxiData.getWhatsAppEnquiryUrl({pickup:e,destination:n,vehicle:`Tempo Traveller (14-Seater - Coming Soon)`,tripType:t.tripType,message:u});window.open(d,`_blank`);return}let a=t.tripType,o=t.extraHours&&t.extraHours>0?i?`
\u23F1\uFE0F \u0B87\u0BB2\u0BB5\u0B9A \u0BAA\u0BAF\u0BA3 \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD: ${t.includedTimeFormatted}
\u23F3 \u0B95\u0BC2\u0B9F\u0BC1\u0BA4\u0BB2\u0BCD \u0B95\u0BBE\u0BA4\u0BCD\u0BA4\u0BBF\u0BB0\u0BC1\u0BAA\u0BCD\u0BAA\u0BC1: ${t.extraHours} \u0BAE\u0BA3\u0BBF (\u20B9${t.waitingFare})`:`
\u23F1\uFE0F Included Time: ${t.includedTimeFormatted}
\u23F3 Extra Waiting: ${t.extraHours} hrs (\u20B9${t.waitingFare})`:i?`
\u23F1\uFE0F \u0B87\u0BB2\u0BB5\u0B9A \u0BAA\u0BAF\u0BA3 \u0BA8\u0BC7\u0BB0\u0BAE\u0BCD: ${t.includedTimeFormatted}`:`
\u23F1\uFE0F Included Time: ${t.includedTimeFormatted}`,c=i?`\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD \u0BB0\u0BC8\u0B9F\u0BB0\u0BCD \u0B95\u0BBE\u0BB2\u0BCD \u0B9F\u0BBE\u0B95\u0BCD\u0BB8\u0BBF, ${a} (${s}) \u0BAA\u0BAF\u0BA3 \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0BB5\u0BBF\u0BB5\u0BB0\u0BAE\u0BCD:
\u{1F4CD} \u0BAA\u0BC1\u0BB1\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BAE\u0BCD \u0B87\u0B9F\u0BAE\u0BCD: ${e}
\u{1F3C1} \u0B9A\u0BC7\u0BB0\u0BC1\u0BAE\u0BCD \u0B87\u0B9F\u0BAE\u0BCD: ${n}
\u{1F4CF} \u0BAA\u0BAF\u0BA3 \u0BA4\u0BC2\u0BB0\u0BAE\u0BCD: ${t.distanceKm} \u0B95\u0BBF.\u0BAE\u0BC0
\u{1F697} \u0BB5\u0BBE\u0B95\u0BA9\u0BAE\u0BCD: ${t.vehicleName} (${s})${o}
\u{1F4B0} \u0BA4\u0BCB\u0BB0\u0BBE\u0BAF \u0B95\u0B9F\u0BCD\u0B9F\u0BA3\u0BAE\u0BCD: \u20B9${t.estimatedTotal}. \u0BA4\u0BAF\u0BB5\u0BC1\u0B9A\u0BC6\u0BAF\u0BCD\u0BA4\u0BC1 \u0B95\u0BBE\u0BB0\u0BCD \u0B89\u0BB1\u0BC1\u0BA4\u0BBF\u0BAA\u0BCD\u0BAA\u0B9F\u0BC1\u0BA4\u0BCD\u0BA4\u0BB5\u0BC1\u0BAE\u0BCD.`:`Enquiry for ${a} (${s}) from ${e} to ${n}.
Distance: ${t.distanceKm} KM
Vehicle: ${t.vehicleName} (${s})${o}
Estimated Fare: \u20B9${t.estimatedTotal}. Please confirm availability.`,l=this.taxiData.getWhatsAppEnquiryUrl({pickup:e,destination:n,distance:t.distanceKm,vehicle:`${t.vehicleName} (${s})`,tripType:t.tripType,isAc:this.isAc(),includedTime:t.includedTimeFormatted,extraHours:t.extraHours,estimatedFare:t.estimatedTotal,message:c});window.open(l,`_blank`)}initThreeJs(){let t=this.canvasContainer.nativeElement,e=t.clientWidth||600,n=t.clientHeight||450;this.scene=new na,this.scene.background=new Xt(15857145),this.scene.fog=new Lr(15857145,.012),this.camera=new on(38,e/n,.1,1e3),this.camera.position.set(1.4,3.8,11.2),this.camera.lookAt(.2,1,0),this.renderer=new Nc({antialias:!0,alpha:!0,powerPreference:`high-performance`}),this.renderer.setSize(e,n),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Nr,t.innerHTML=``,t.appendChild(this.renderer.domElement),this.ambientLight=new ga(16777215,1.25),this.scene.add(this.ambientLight);let i=new da(14742270,3359061,.65);this.scene.add(i),this.sunLight=new ma(16775149,1.85),this.sunLight.position.set(18,25,18),this.sunLight.castShadow=!0,this.sunLight.shadow.mapSize.width=2048,this.sunLight.shadow.mapSize.height=2048,this.sunLight.shadow.camera.near=.5,this.sunLight.shadow.camera.far=120,this.sunLight.shadow.camera.left=-25,this.sunLight.shadow.camera.right=25,this.sunLight.shadow.camera.top=25,this.sunLight.shadow.camera.bottom=-25,this.sunLight.shadow.bias=-5e-4,this.scene.add(this.sunLight),this.buildInfiniteRoad(),this.buildStreetLamps(),this.buildCatEyes(),this.buildTaxiModel(),this.buildTempleSkyline(),this.buildClouds(),this.buildHighwayMilestones(),this.buildRainSystem(),this.updateResponsiveCamera(),this.applyLightingMode(!1)}createRoadTexture(){let t=document.createElement(`canvas`);t.width=1024,t.height=1024;let e=t.getContext(`2d`);e.fillStyle=`#18202F`,e.fillRect(0,0,1024,1024);let n=e.getImageData(0,0,1024,1024),i=n.data;for(let a=0;a<i.length;a+=4){let o=(Math.random()-.5)*14;i[a]=Math.max(0,Math.min(255,i[a]+o)),i[a+1]=Math.max(0,Math.min(255,i[a+1]+o)),i[a+2]=Math.max(0,Math.min(255,i[a+2]+o))}e.putImageData(n,0,0),e.fillStyle=`#FFFFFF`,e.fillRect(36,0,16,1024),e.fillRect(972,0,16,1024),e.fillStyle=`#FFC107`,e.fillRect(504,0,8,1024),e.fillRect(518,0,8,1024),e.fillStyle=`#F8FAFC`;for(let a=0;a<1024;a+=128)e.fillRect(270,a+20,10,72),e.fillRect(746,a+20,10,72);let s=new zi(t);return s.wrapS=Dr,s.wrapT=Dr,s.repeat.set(1,8),s}createLicensePlateTexture(t){let e=document.createElement(`canvas`);e.width=256,e.height=64;let n=e.getContext(`2d`);return n.fillStyle=`#FFC72C`,n.fillRect(0,0,256,64),n.strokeStyle=`#0F172A`,n.lineWidth=4,n.strokeRect(2,2,252,60),n.fillStyle=`#1D4ED8`,n.fillRect(3,3,32,58),n.fillStyle=`#FFFFFF`,n.font=`bold 12px sans-serif`,n.textAlign=`center`,n.fillText(`IND`,19,36),n.fillStyle=`#0F172A`,n.font=`900 28px "Arial Black", "Trebuchet MS", sans-serif`,n.textAlign=`center`,n.fillText(t,148,44),new zi(e)}createTaxiSignTexture(){let t=document.createElement(`canvas`);t.width=256,t.height=128;let e=t.getContext(`2d`);return e.fillStyle=`#FFFBEB`,e.fillRect(0,0,256,128),e.fillStyle=`#DC2626`,e.fillRect(0,0,256,32),e.fillStyle=`#FFFFFF`,e.font=`bold 16px sans-serif`,e.textAlign=`center`,e.fillText(`RIDER CALL TAXI`,128,22),e.fillStyle=`#0F172A`,e.font=`900 52px "Arial Black", sans-serif`,e.fillText(`TAXI`,128,86),e.fillStyle=`#B45309`,e.font=`bold 16px sans-serif`,e.fillText(`SANKARANKOVIL`,128,114),new zi(t)}createCarShadowTexture(){let t=document.createElement(`canvas`);t.width=256,t.height=256;let e=t.getContext(`2d`),n=e.createRadialGradient(128,128,20,128,128,120);return n.addColorStop(0,`rgba(0, 0, 0, 0.7)`),n.addColorStop(.5,`rgba(0, 0, 0, 0.4)`),n.addColorStop(1,`rgba(0, 0, 0, 0)`),e.fillStyle=n,e.fillRect(0,0,256,256),new zi(t)}buildInfiniteRoad(){this.roadTexture=this.createRoadTexture();let t=new jn(18,160),e=new pe({map:this.roadTexture,roughness:.75,metalness:.15});this.roadMesh=new Et(t,e),this.roadMesh.rotation.x=-Math.PI/2,this.roadMesh.position.set(0,0,0),this.roadMesh.receiveShadow=!0,this.scene.add(this.roadMesh);let n=new jt(.5,.25,160),i=new pe({color:16096779,roughness:.7}),s=new Et(n,i);s.position.set(-9.25,.12,0),s.receiveShadow=!0,this.scene.add(s);let a=new Et(n,i);a.position.set(9.25,.12,0),a.receiveShadow=!0,this.scene.add(a);let o=new pe({color:13358561,metalness:.8,roughness:.3}),c=new pe({color:6583435,metalness:.7,roughness:.4});[-9.8,9.8].forEach(h=>{let g=new Et(new jt(.12,.35,160),o);g.position.set(h,.75,0),g.castShadow=!0,this.scene.add(g);for(let _=-75;_<=75;_+=6){let p=new Et(new jt(.15,.85,.15),c);p.position.set(h,.42,_),p.castShadow=!0,this.scene.add(p)}});let d=new Et(new jn(90,160),new pe({color:14870768,roughness:.95}));d.rotation.x=-Math.PI/2,d.position.set(0,-.05,0),d.receiveShadow=!0,this.scene.add(d)}buildStreetLamps(){this.streetLampsGroup=new Ie;let t=new pe({color:4674921,metalness:.8,roughness:.3}),e=new pe({color:988970,roughness:.4}),n=new pe({color:16707722,emissive:16638023,emissiveIntensity:.8});[-60,-35,-10,15,40,65].forEach(s=>{let a=new Ie,c=new Et(new Qn(.09,.14,5.5,12),t);c.position.set(0,2.75,0),c.castShadow=!0,a.add(c);let u=new Et(new Qn(.07,.08,2.4,10),t);u.rotation.z=Math.PI/3,u.position.set(-.9,5.4,0),a.add(u);let h=new Et(new jt(.8,.15,.35),e);h.position.set(-1.8,5.85,0),a.add(h);let g=new Et(new jn(.7,.3),n);g.rotation.x=Math.PI/2,g.position.set(-1.8,5.76,0),a.add(g);let _=new pa(16707722,0,18,1.2);_.position.set(-1.8,5.6,0),a.add(_),this.streetLightPoints.push(_),a.position.set(10.2,0,s),this.streetLampsGroup.add(a)}),this.scene.add(this.streetLampsGroup)}buildCatEyes(){this.catEyesGroup=new Ie;let t=new pe({color:16498468,emissive:16096779,emissiveIntensity:.7,metalness:.9,roughness:.1});for(let e=-70;e<=70;e+=5){let n=new jt(.18,.07,.22),i=new Et(n,t);i.position.set(0,.04,e),this.catEyesGroup.add(i);let s=new Et(n,t);s.position.set(-4.2,.04,e),this.catEyesGroup.add(s);let a=new Et(n,t);a.position.set(4.2,.04,e),this.catEyesGroup.add(a)}this.scene.add(this.catEyesGroup)}buildTaxiModel(){this.taxiGroup=new Ie;let t=new pe({color:16759304,roughness:.2,metalness:.35,envMapIntensity:1.2}),e=new pe({color:1976635,roughness:.6,metalness:.2}),n=new pe({color:16317180,roughness:.1,metalness:.95}),i=new pe({color:659229,roughness:.06,metalness:.92,transparent:!0,opacity:.88}),s=new pe({color:1120295,roughness:.9,metalness:.05}),a=new pe({color:14870768,roughness:.2,metalness:.92}),o=new pe({color:9741240,roughness:.3,metalness:.85}),c=new pe({color:14427686,roughness:.25,metalness:.4}),l=new pe({color:14427686,emissive:15680580,emissiveIntensity:1.5,roughness:.2}),h=new Et(new jn(3.6,6.4),new ki({map:this.createCarShadowTexture(),transparent:!0,opacity:.85,depthWrite:!1}));h.rotation.x=-Math.PI/2,h.position.set(0,.03,0),this.taxiGroup.add(h);let g=new Et(new jt(2.32,.55,4.9),t);g.position.set(0,.78,0),g.castShadow=!0,g.receiveShadow=!0,this.taxiGroup.add(g);let m=new Et(new jt(2.36,.16,4.8),e);m.position.set(0,.52,0),this.taxiGroup.add(m);let b=new Et(new jt(2.26,.26,1.55),t);b.position.set(0,1.12,1.35),b.rotation.x=.05,b.castShadow=!0,this.taxiGroup.add(b);let y=new Et(new jt(2.24,.42,.35),e);y.position.set(0,.8,2.45),this.taxiGroup.add(y);let E=new Et(new jt(1.6,.22,.08),n);E.position.set(0,.85,2.63),this.taxiGroup.add(E);let x=new Et(new jt(2.34,.1,.5),e);x.position.set(0,.48,2.38),this.taxiGroup.add(x);let C=new jt(.48,.22,.25),P=new pe({color:16777215,emissive:16710083,emissiveIntensity:.9,roughness:.1});[-.88,.88].forEach(Bt=>{let Vt=new Et(C,P);Vt.position.set(Bt,.95,2.42),this.headlightMeshes.push(Vt),this.taxiGroup.add(Vt);let Ae=new Et(new ua(.08,12,12),n);Ae.position.set(Bt>0?Bt-.1:Bt+.1,.95,2.52),this.taxiGroup.add(Ae)});let B=new Cs(16776171,0,45,Math.PI/6.5,.45,1.2);B.position.set(-.88,.95,2.5),B.target.position.set(-.88,.1,24),this.taxiGroup.add(B),this.taxiGroup.add(B.target),this.headlights.push(B);let L=new Cs(16776171,0,45,Math.PI/6.5,.45,1.2);L.position.set(.88,.95,2.5),L.target.position.set(.88,.1,24),this.taxiGroup.add(L),this.taxiGroup.add(L.target),this.headlights.push(L);let I=new Et(new jt(2.08,.85,.1),i);I.position.set(0,1.48,.58),I.rotation.x=-Math.PI/3.8,this.taxiGroup.add(I);let Y=new Et(new jt(2.04,.78,2.3),i);Y.position.set(0,1.5,-.4),Y.castShadow=!0,this.taxiGroup.add(Y);let rt=new Et(new jt(2,.8,.1),i);rt.position.set(0,1.46,-1.45),rt.rotation.x=Math.PI/3.8,this.taxiGroup.add(rt);let tt=new Et(new jt(1.98,.12,2.15),t);tt.position.set(0,1.9,-.4),tt.castShadow=!0,this.taxiGroup.add(tt);let wt=new Et(new jt(2.08,.78,.12),e);wt.position.set(0,1.5,-.4),this.taxiGroup.add(wt),[-1.24,1.24].forEach(Bt=>{let D=new Et(new jt(.25,.08,.1),e);D.position.set(Bt,1.32,.7),this.taxiGroup.add(D);let ne=new Et(new jt(.24,.16,.18),t);ne.position.set(Bt>0?Bt+.12:Bt-.12,1.34,.7),ne.castShadow=!0,this.taxiGroup.add(ne);let z=new Et(new jt(.05,.05,.12),new pe({color:16096779,emissive:14251782,emissiveIntensity:.8}));z.position.set(Bt>0?Bt+.22:Bt-.22,1.34,.7),this.taxiGroup.add(z)}),[{x:-1.18,z:.2},{x:-1.18,z:-.7},{x:1.18,z:.2},{x:1.18,z:-.7}].forEach(Bt=>{let D=new Et(new jt(.06,.05,.22),n);D.position.set(Bt.x,1.08,Bt.z),this.taxiGroup.add(D)});let $t=new Et(new jt(2.22,.28,1.1),t);$t.position.set(0,1.06,-1.9),$t.castShadow=!0,this.taxiGroup.add($t);let ae=new Et(new jt(2.18,.08,.2),e);ae.position.set(0,1.22,-2.4),this.taxiGroup.add(ae);let st=new Et(new jt(2.16,.16,.12),l);st.position.set(0,.98,-2.48),this.taillightMeshes.push(st),this.taxiGroup.add(st);let Gt=new Et(new jt(2.26,.28,.45),e);Gt.position.set(0,.58,-2.35),this.taxiGroup.add(Gt),[-.65,.65].forEach(Bt=>{let Vt=new Qn(.07,.07,.25,12);Vt.rotateX(Math.PI/2);let D=new Et(Vt,n);D.position.set(Bt,.48,-2.55),this.taxiGroup.add(D)});let Yt=new ki({map:this.createLicensePlateTexture(`TN 76 RIDER`)}),Kt=new Et(new jn(.82,.2),Yt);Kt.position.set(0,.64,2.64),this.taxiGroup.add(Kt);let ue=new Et(new jn(.82,.2),Yt);ue.rotation.y=Math.PI,ue.position.set(0,.76,-2.59),this.taxiGroup.add(ue);let Fe=new Et(new jt(1.05,.28,.46),new pe({map:this.createTaxiSignTexture(),roughness:.2,emissive:16638023,emissiveIntensity:.5}));Fe.position.set(0,2.12,-.3),Fe.castShadow=!0,this.taxiGroup.add(Fe),[-.38,.38].forEach(Bt=>{let D=new Et(new jt(.1,.08,.35),e);D.position.set(Bt,1.97,-.3),this.taxiGroup.add(D)});let dn=[{id:`FL`,x:-1.22,y:.46,z:1.48,isFront:!0},{id:`FR`,x:1.22,y:.46,z:1.48,isFront:!0},{id:`RL`,x:-1.22,y:.46,z:-1.48,isFront:!1},{id:`RR`,x:1.22,y:.46,z:-1.48,isFront:!1}];this.wheels=[],dn.forEach(Bt=>{let Vt=new Ie,D=new Qn(.46,.46,.34,24);D.rotateZ(Math.PI/2);let Ae=new Et(D,s);Ae.castShadow=!0,Vt.add(Ae);let ne=new Qn(.38,.38,.35,20);ne.rotateZ(Math.PI/2);let A=new Et(ne,a);Vt.add(A);let v=new Qn(.3,.3,.04,16);v.rotateZ(Math.PI/2);let z=new Et(v,o);z.position.x=Bt.x>0?-.06:.06,Vt.add(z);let J=new Et(new jt(.08,.16,.12),c);J.position.set(Bt.x>0?-.06:.06,.18,.08),Vt.add(J);for(let Q=0;Q<5;Q++){let et=Q*Math.PI*2/5,Rt=new Et(new jt(.04,.3,.08),a);Rt.rotation.x=et,Rt.position.set(Bt.x>0?.15:-.15,Math.sin(et)*.14,Math.cos(et)*.14),Vt.add(Rt)}let ut=new Qn(.09,.09,.36,12);ut.rotateZ(Math.PI/2);let ht=new Et(ut,n);Vt.add(ht),this.wheels.push(Vt),Bt.isFront?Bt.x<0?(this.frontWheelSteerGroupLeft.position.set(Bt.x,Bt.y,Bt.z),this.frontWheelSteerGroupLeft.add(Vt),this.taxiGroup.add(this.frontWheelSteerGroupLeft)):(this.frontWheelSteerGroupRight.position.set(Bt.x,Bt.y,Bt.z),this.frontWheelSteerGroupRight.add(Vt),this.taxiGroup.add(this.frontWheelSteerGroupRight)):(Vt.position.set(Bt.x,Bt.y,Bt.z),this.taxiGroup.add(Vt))}),this.taxiGroup.position.set(.2,0,-2.8),this.scene.add(this.taxiGroup)}buildTempleSkyline(){this.templeSilhouetteGroup=new Ie;let t=new pe({color:14251782,roughness:.65,metalness:.18}),e=new pe({color:16096779,metalness:.95,roughness:.12,emissive:14251782,emissiveIntensity:.35}),n=2,i=-48,s=9;for(let o=0;o<s;o++){let c=12.5-o*1.1,h=new Et(new jt(c,1.9,4.4),t);h.position.set(n,o*1.95+1,i),h.castShadow=!0,this.templeSilhouetteGroup.add(h);let g=new Et(new jt(c+.6,.28,5),t);g.position.set(n,(o+1)*1.95,i),this.templeSilhouetteGroup.add(g)}for(let o=-2;o<=2;o++){let l=new Et(new bs(.32,1.9,10),e);l.position.set(n+o*.92,18.5,i),this.templeSilhouetteGroup.add(l)}let a=new pe({color:9741240,roughness:.95,transparent:!0,opacity:.55});for(let o=0;o<6;o++){let l=new Et(new bs(24+o*4,30,8),a);l.position.set(-58+o*22,10,-70),this.templeSilhouetteGroup.add(l)}this.scene.add(this.templeSilhouetteGroup)}buildClouds(){this.cloudsGroup=new Ie;let t=new ki({color:16777215,transparent:!0,opacity:.65});for(let e=0;e<9;e++){let i=new Et(new la(3+Math.random()*2.5,1),t);i.position.set((Math.random()-.5)*75,15+Math.random()*8,-15-Math.random()*45),this.cloudsGroup.add(i)}this.scene.add(this.cloudsGroup)}buildHighwayMilestones(){let t=new Ie,n=new pe({map:this.createMilestoneTexture(`NH 744`,`SANKARANKOVIL`,`0 KM`),roughness:.55}),i=new jt(.7,1.45,.4),s=new Et(i,n);s.position.set(-9.6,.72,-14),s.castShadow=!0,t.add(s);let c=new Et(i,new pe({map:this.createMilestoneTexture(`NH 744`,`MADURAI`,`120 KM`),roughness:.55}));c.position.set(9.6,.72,24),c.rotation.y=Math.PI,c.castShadow=!0,t.add(c),this.scene.add(t)}createMilestoneTexture(t,e,n){let i=document.createElement(`canvas`);i.width=256,i.height=512;let s=i.getContext(`2d`);return s.fillStyle=`#F8FAFC`,s.fillRect(0,0,256,512),s.fillStyle=`#F59E0B`,s.beginPath(),s.arc(128,120,110,Math.PI,0,!1),s.lineTo(238,150),s.lineTo(18,150),s.closePath(),s.fill(),s.fillStyle=`#0F172A`,s.font=`bold 26px sans-serif`,s.textAlign=`center`,s.fillText(t,128,112),s.fillStyle=`#0F172A`,s.font=`900 28px sans-serif`,s.fillText(e,128,250),s.font=`900 48px sans-serif`,s.fillStyle=`#D97706`,s.fillText(n,128,380),new zi(i)}buildRainSystem(){let e=new gn,n=new Float32Array(2e3*3);for(let s=0;s<2e3*3;s+=3)n[s]=(Math.random()-.5)*60,n[s+1]=Math.random()*35,n[s+2]=(Math.random()-.5)*60;e.setAttribute(`position`,new In(n,3));let i=new Ms({color:9684477,size:.16,transparent:!0,opacity:.75});this.rainParticles=new aa(e,i),this.rainParticles.visible=!1,this.scene.add(this.rainParticles)}applyLightingMode(t){this.scene&&(t?(this.scene.background=new Xt(395537),this.scene.fog=new Lr(395537,.022),this.ambientLight.intensity=.25,this.sunLight.intensity=.2,this.sunLight.color.setHex(3718648),this.streetLightPoints.forEach(e=>{e.intensity=18}),this.headlights.forEach(e=>{e.intensity=32}),this.headlightMeshes.forEach(e=>{e.material.emissiveIntensity=2.8}),this.taillightMeshes.forEach(e=>{e.material.emissiveIntensity=2.2})):(this.scene.background=new Xt(15857145),this.scene.fog=new Lr(15857145,.012),this.ambientLight.intensity=1.2,this.sunLight.intensity=1.8,this.sunLight.color.setHex(16775149),this.streetLightPoints.forEach(e=>{e.intensity=0}),this.headlights.forEach(e=>{e.intensity=0}),this.headlightMeshes.forEach(e=>{e.material.emissiveIntensity=.8}),this.taillightMeshes.forEach(e=>{e.material.emissiveIntensity=1})))}animate=()=>{this.animationFrameId=requestAnimationFrame(this.animate);let t=performance.now()*.001;this.roadTexture&&(this.roadTexture.offset.y-=.052),this.wheels.forEach(i=>{i.rotation.x-=.32});let e=Math.sin(t*.7)*.25,n=Math.cos(t*.7)*.07;if(this.taxiGroup){let i=typeof window<`u`?window.innerWidth:1440,s=i<640?0:i<1024?.05:i<1320?.12:.2;this.taxiGroup.position.x=s+e,this.taxiGroup.position.y=Math.sin(t*14)*.016+Math.sin(t*28)*.003,this.taxiGroup.rotation.x=Math.sin(t*4)*.007,this.taxiGroup.rotation.z=-n*.32}if(this.frontWheelSteerGroupLeft&&this.frontWheelSteerGroupRight&&(this.frontWheelSteerGroupLeft.rotation.y=n,this.frontWheelSteerGroupRight.rotation.y=n),this.streetLampsGroup&&this.streetLampsGroup.children.forEach(i=>{i.position.z+=.85,i.position.z>70&&(i.position.z=-75)}),this.catEyesGroup&&this.catEyesGroup.children.forEach(i=>{i.position.z+=.85,i.position.z>70&&(i.position.z=-70)}),this.cloudsGroup&&this.cloudsGroup.children.forEach(i=>{i.position.x+=.02,i.position.x>40&&(i.position.x=-40)}),this.rainParticles&&this.isRainMode()){let i=this.rainParticles.geometry.attributes.position.array;for(let s=0;s<i.length;s+=3)i[s+1]-=1.4,i[s+2]+=.45,i[s+1]<0&&(i[s+1]=32),i[s+2]>30&&(i[s+2]=-30);this.rainParticles.geometry.attributes.position.needsUpdate=!0}this.renderer.render(this.scene,this.camera)};onWindowResize=()=>{this.updateResponsiveCamera()};updateResponsiveCamera(){if(!this.canvasContainer||!this.renderer||!this.camera)return;let t=this.canvasContainer.nativeElement,e=t.clientWidth||(typeof window<`u`?window.innerWidth:1440),n=t.clientHeight||(typeof window<`u`?window.innerHeight:900),i=e/n;this.camera.aspect=i,e<640?(this.camera.fov=46,this.camera.position.set(0,3.6,12.2),this.camera.lookAt(0,.9,0),this.taxiGroup&&this.taxiGroup.position.set(0,0,-1.5),this.templeSilhouetteGroup&&this.templeSilhouetteGroup.position.set(-.2,0,0)):e<1024?(this.camera.fov=42,this.camera.position.set(.4,3.7,11.6),this.camera.lookAt(.08,.95,0),this.taxiGroup&&this.taxiGroup.position.set(.08,0,-2),this.templeSilhouetteGroup&&this.templeSilhouetteGroup.position.set(.5,0,0)):e<1320?(this.camera.fov=39,this.camera.position.set(1,3.7,11),this.camera.lookAt(.14,1,0),this.taxiGroup&&this.taxiGroup.position.set(.14,0,-2.4),this.templeSilhouetteGroup&&this.templeSilhouetteGroup.position.set(1.2,0,0)):(this.camera.fov=38,this.camera.position.set(1.4,3.8,11.2),this.camera.lookAt(.2,1,0),this.taxiGroup&&this.taxiGroup.position.set(.2,0,-2.8),this.templeSilhouetteGroup&&this.templeSilhouetteGroup.position.set(2,0,0)),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,n)}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-hero-banner`]],viewQuery:function(e,n){if(e&1&&um$1(Fv,5),e&2){let i;Rl$1(i=xl$1())&&(n.canvasContainer=i.first)}},decls:146,vars:57,consts:[[`threeCanvasContainer`,``],[1,`hero-section`],[1,`hero-3d-wrapper`],[1,`three-canvas-container`],[1,`scene-controls-overlay`],[`title`,`Toggle Day/Night Mode`,1,`scene-toggle-btn`,3,`click`],[1,`btn-icon`],[`title`,`Toggle Monsoon Rain Effect`,1,`scene-toggle-btn`,3,`click`],[1,`container`,`hero-container`],[1,`hero-grid`],[1,`hero-content`,`hero-content-card`,`glass-card`],[1,`hero-badge`],[1,`pulse-dot`],[1,`hero-title`],[1,`highlight-text`],[1,`hero-subtitle`],[1,`hero-action-buttons`],[1,`btn`,`btn-primary`,`btn-lg`,`hero-cta-btn`,3,`click`],[`viewBox`,`0 0 24 24`,`width`,`20`,`height`,`20`,`stroke`,`currentColor`,`stroke-width`,`2.5`,`fill`,`none`],[`x1`,`5`,`y1`,`12`,`x2`,`19`,`y2`,`12`],[`points`,`12 5 19 12 12 19`],[1,`btn`,`btn-outline`,`btn-lg`,`hero-call-btn`,3,`href`],[`d`,`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`],[1,`hero-trust-row`],[1,`trust-item`],[1,`trust-icon`],[1,`trust-text`],[`id`,`fare-calculator-section`,1,`hero-calculator-column`],[1,`calculator-card`,`glass-card`],[1,`calc-header`],[1,`calc-header-tag`],[1,`tag-icon`],[1,`calc-rate-badge`],[1,`calc-toggles-grid`],[1,`trip-type-toggle`],[`type`,`button`,1,`trip-btn`,3,`click`],[1,`ac-type-toggle`],[`type`,`button`,1,`ac-btn`,3,`click`],[1,`calc-vehicle-selection`],[1,`calc-label`],[1,`vehicle-pills-grid`],[`type`,`button`,1,`vehicle-pill`,3,`selected`,`coming-soon-pill`],[1,`calc-inputs-row`],[1,`calc-input-group`],[1,`calc-label-with-icon`],[1,`dot-indicator`,`dot-pickup`],[1,`custom-select-wrapper`],[1,`calc-select`,3,`ngModelChange`,`ngModel`],[3,`value`],[1,`select-chevron`],[`viewBox`,`0 0 20 20`,`width`,`16`,`height`,`16`,`fill`,`currentColor`],[`fill-rule`,`evenodd`,`d`,`M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z`,`clip-rule`,`evenodd`],[`type`,`text`,1,`input-field`,`custom-location-input`,3,`ngModel`,`placeholder`],[1,`dot-indicator`,`dot-drop`],[1,`distance-slider-box`],[1,`distance-header`],[1,`round-km-hint`],[1,`distance-number-badge`],[`type`,`number`,`min`,`1`,`max`,`1500`,1,`distance-input-field`,3,`ngModelChange`,`ngModel`],[1,`unit`],[`type`,`range`,`min`,`5`,`max`,`650`,`step`,`5`,1,`distance-range-slider`,3,`ngModelChange`,`ngModel`],[1,`slider-marks`],[1,`time-and-waiting-deck`],[1,`fare-result-box`],[1,`coming-soon-content`],[`type`,`button`,1,`vehicle-pill`,3,`click`],[1,`v-name`],[1,`v-rate`,`v-coming-soon`],[1,`v-rate`],[`type`,`text`,1,`input-field`,`custom-location-input`,3,`ngModelChange`,`ngModel`,`placeholder`],[1,`included-time-box`],[1,`time-icon`],[1,`time-info`],[1,`time-label`],[1,`time-val`],[1,`time-tag-free`],[1,`extra-hours-box`],[1,`extra-hours-info`],[1,`extra-label`],[1,`extra-sub`],[1,`hours-stepper`],[`type`,`button`,1,`stepper-btn`,`minus-btn`,3,`click`,`disabled`],[1,`hours-display`],[`type`,`button`,1,`stepper-btn`,`plus-btn`,3,`click`],[1,`coming-soon-header`],[1,`coming-soon-pill`],[1,`coming-soon-desc`],[1,`btn`,`btn-whatsapp`,`calc-book-btn`,`w-full`,3,`click`],[`viewBox`,`0 0 24 24`,`width`,`18`,`height`,`18`,`fill`,`currentColor`],[`d`,`M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z`],[1,`fare-result-left`],[1,`fare-breakdown-details`],[1,`fare-trip-summary`],[1,`trip-type-badge`],[1,`trip-climate-badge`],[1,`trip-dist-badge`],[1,`waiting-charge-tag`],[1,`estimated-price`],[1,`currency-symbol`],[1,`amount-number`],[1,`fare-subtext`],[1,`btn`,`btn-whatsapp`,`calc-book-btn`,3,`click`]],template:function(e,n){e&1&&(Fs$1(0,`section`,1)(1,`div`,2),Xs$1(2,`div`,3,0),Ml$1(),Fs$1(4,`div`,4)(5,`button`,5),ea$1(`click`,function(){return n.toggleNightMode()}),Fs$1(6,`span`,6),GI(7),Ml$1(),Fs$1(8,`span`),GI(9),Ml$1()(),Fs$1(10,`button`,7),ea$1(`click`,function(){return n.toggleRainMode()}),Fs$1(11,`span`,6),GI(12),Ml$1(),Fs$1(13,`span`),GI(14),Ml$1()()(),Fs$1(15,`div`,8)(16,`div`,9)(17,`div`,10)(18,`div`,11),Xs$1(19,`span`,12),Fs$1(20,`span`),GI(21),Ml$1()(),Fs$1(22,`h1`,13),GI(23),Fs$1(24,`span`,14),GI(25),Ml$1(),GI(26),Ml$1(),Fs$1(27,`p`,15),GI(28),Ml$1(),Fs$1(29,`div`,16)(30,`button`,17),ea$1(`click`,function(){return n.dispatchWhatsAppBooking()}),Fs$1(31,`span`),GI(32),Ml$1(),vp$1(),Fs$1(33,`svg`,18),Xs$1(34,`line`,19)(35,`polyline`,20),Ml$1()(),yp$1(),Fs$1(36,`a`,21),vp$1(),Fs$1(37,`svg`,18),Xs$1(38,`path`,22),Ml$1(),yp$1(),Fs$1(39,`span`),GI(40),Ml$1()()(),Fs$1(41,`div`,23)(42,`div`,24)(43,`div`,25),GI(44,`💰`),Ml$1(),Fs$1(45,`div`,26)(46,`strong`),GI(47),Ml$1(),Fs$1(48,`span`),GI(49),Ml$1()()(),Fs$1(50,`div`,24)(51,`div`,25),GI(52,`🛡️`),Ml$1(),Fs$1(53,`div`,26)(54,`strong`),GI(55),Ml$1(),Fs$1(56,`span`),GI(57),Ml$1()()(),Fs$1(58,`div`,24)(59,`div`,25),GI(60,`⚡`),Ml$1(),Fs$1(61,`div`,26)(62,`strong`),GI(63),Ml$1(),Fs$1(64,`span`),GI(65),Ml$1()()()()(),Fs$1(66,`div`,27)(67,`div`,28)(68,`div`,29)(69,`div`,30)(70,`span`,31),GI(71,`⚡`),Ml$1(),Fs$1(72,`span`),GI(73),Ml$1()(),Fs$1(74,`h3`),GI(75),Ml$1(),Fs$1(76,`p`,32)(77,`strong`),GI(78),Ml$1()()(),Fs$1(79,`div`,33)(80,`div`,34)(81,`button`,35),ea$1(`click`,function(){return n.setTripType(`oneway`)}),GI(82),Ml$1(),Fs$1(83,`button`,35),ea$1(`click`,function(){return n.setTripType(`round`)}),GI(84),Ml$1()(),Fs$1(85,`div`,36)(86,`button`,37),ea$1(`click`,function(){return n.setIsAc(!0)}),GI(87),Ml$1(),Fs$1(88,`button`,37),ea$1(`click`,function(){return n.setIsAc(!1)}),GI(89),Ml$1()()(),Fs$1(90,`div`,38)(91,`label`,39),GI(92),Ml$1(),Fs$1(93,`div`,40),EI(94,kv,5,6,`button`,41,Nu),Ml$1()(),Fs$1(96,`div`,42)(97,`div`,43)(98,`label`,44),Xs$1(99,`span`,45),Fs$1(100,`span`),GI(101),Ml$1()(),Fs$1(102,`div`,46)(103,`select`,47),ea$1(`ngModelChange`,function(s){return n.onPickupChange(s)}),EI(104,zv,2,2,`option`,48,Nu),Ml$1(),aw(),Fs$1(106,`div`,49),vp$1(),Fs$1(107,`svg`,50),Xs$1(108,`path`,51),Ml$1()()(),vI(109,Gv,1,2,`input`,52),Ml$1(),yp$1(),Fs$1(110,`div`,43)(111,`label`,44),Xs$1(112,`span`,53),Fs$1(113,`span`),GI(114),Ml$1()(),Fs$1(115,`div`,46)(116,`select`,47),ea$1(`ngModelChange`,function(s){return n.onDropChange(s)}),EI(117,Vv,2,2,`option`,48,Nu),Ml$1(),aw(),Fs$1(119,`div`,49),vp$1(),Fs$1(120,`svg`,50),Xs$1(121,`path`,51),Ml$1()()(),vI(122,Hv,1,2,`input`,52),Ml$1()(),yp$1(),Fs$1(123,`div`,54)(124,`div`,55)(125,`label`,39)(126,`span`),GI(127),Ml$1(),vI(128,Wv,2,1,`span`,56)(129,Xv,2,1,`span`,56),Ml$1(),Fs$1(130,`div`,57)(131,`input`,58),ea$1(`ngModelChange`,function(s){return n.updateDistance(s)}),Ml$1(),aw(),Fs$1(132,`span`,59),GI(133,`KM`),Ml$1()()(),Fs$1(134,`input`,60),ea$1(`ngModelChange`,function(s){return n.updateDistance(s)}),Ml$1(),aw(),Fs$1(135,`div`,61)(136,`span`),GI(137),Ml$1(),Fs$1(138,`span`),GI(139),Ml$1(),Fs$1(140,`span`),GI(141),Ml$1()()(),vI(142,qv,24,9,`div`,62),Fs$1(143,`div`,63),vI(144,Yv,13,4,`div`,64)(145,Kv,22,9),Ml$1()()()()()()),e&2&&(mC(5),dm$1(`active`,n.isNightMode()),mC(2),pm$1(n.isNightMode()?`☀️`:`🌙`),mC(2),pm$1(n.isNightMode()?n.i18n.t(`hero.dayMode`):n.i18n.t(`hero.nightMode`)),mC(),dm$1(`active`,n.isRainMode()),mC(2),pm$1(n.isRainMode()?`🌤️`:`🌧️`),mC(2),pm$1(n.isRainMode()?n.i18n.t(`hero.clearSky`):n.i18n.t(`hero.rainOn`)),mC(3),dm$1(`tamil-mode`,n.i18n.isTamil()),mC(4),pm$1(n.i18n.t(`hero.badge`)),mC(2),Ol$1(` `,n.i18n.t(`hero.title1`),` `),mC(2),pm$1(n.i18n.t(`hero.titleHighlight`)),mC(),Ol$1(` `,n.i18n.t(`hero.title2`),` `),mC(2),Ol$1(` `,n.i18n.t(`hero.sub`),` `),mC(4),pm$1(n.i18n.t(`hero.bookBtn`)),mC(4),nm$1(`href`,`tel:`+n.taxiData.company.phone1,og),mC(4),pm$1(n.i18n.t(`hero.callBtn`)),mC(7),pm$1(n.i18n.t(`hero.trustRate`)),mC(2),pm$1(n.i18n.t(`hero.trustRateSub`)),mC(6),pm$1(n.i18n.t(`hero.trustVerified`)),mC(2),pm$1(n.i18n.t(`hero.trustVerifiedSub`)),mC(6),pm$1(n.i18n.t(`hero.trustPickup`)),mC(2),pm$1(n.i18n.t(`hero.trustPickupSub`)),mC(8),pm$1(n.i18n.t(`calc.tag`)),mC(2),pm$1(n.i18n.t(`calc.title`)),mC(3),pm$1(n.i18n.t(`calc.officialRate`)),mC(3),dm$1(`active`,n.tripType()===`oneway`),mC(),Ol$1(` `,n.i18n.t(`calc.oneWay`),` `),mC(),dm$1(`active`,n.tripType()===`round`),mC(),Ol$1(` `,n.i18n.t(`calc.roundTrip`),` `),mC(2),dm$1(`active`,n.isAc()),mC(),Ol$1(` ❄️ `,n.i18n.t(`calc.ac`),` `),mC(),dm$1(`active`,!n.isAc()),mC(),Ol$1(` 🍃 `,n.i18n.t(`calc.nonAc`),` `),mC(3),pm$1(n.i18n.t(`calc.selectCab`)),mC(2),CI(n.taxiData.vehicleCategories),mC(7),pm$1(n.i18n.t(`calc.pickup`)),mC(2),nm$1(`ngModel`,n.selectedPickupId()),uw(),mC(),CI(n.locations),mC(5),yI(n.selectedPickupId()===`others`?109:-1),mC(5),pm$1(n.i18n.t(`calc.drop`)),mC(2),nm$1(`ngModel`,n.selectedDropId()),uw(),mC(),CI(n.locations),mC(5),yI(n.selectedDropId()===`others`?122:-1),mC(5),pm$1(n.i18n.t(`calc.distance`)),mC(),yI(n.tripType()===`round`?128:129),mC(3),nm$1(`ngModel`,n.distanceKm()),uw(),mC(3),nm$1(`ngModel`,n.distanceKm()),uw(),mC(3),pm$1(n.i18n.isTamil()?`உள்ளூர் (10 கி.மீ)`:`Local (10 KM)`),mC(2),pm$1(n.i18n.isTamil()?`மதுரை (120 கி.மீ)`:`Madurai (120 KM)`),mC(2),pm$1(n.i18n.isTamil()?`சென்னை (620 கி.மீ)`:`Chennai (620 KM)`),mC(),yI(n.calculatedFare.isComingSoon?-1:142),mC(),dm$1(`coming-soon-mode`,n.calculatedFare.isComingSoon),mC(),yI(n.calculatedFare.isComingSoon?144:145))},dependencies:[xm$1,Nn$1,Fn$1,wn$1,Te,Xt$1,Kt,ot,bn,Ft,Mt,zt$1],styles:[`.hero-section[_ngcontent-%COMP%]{position:relative;min-height:100vh;padding-top:5.5rem;padding-bottom:3.5rem;display:flex;align-items:center;overflow:hidden}@media(max-width:767px){.hero-section[_ngcontent-%COMP%]{padding-top:7.2rem;padding-bottom:2rem}}.hero-3d-wrapper[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:auto}.hero-3d-wrapper[_ngcontent-%COMP%]   .three-canvas-container[_ngcontent-%COMP%]{width:100%;height:100%}.hero-3d-wrapper[_ngcontent-%COMP%]   .three-canvas-container[_ngcontent-%COMP%]   canvas[_ngcontent-%COMP%]{display:block;width:100%!important;height:100%!important}.scene-controls-overlay[_ngcontent-%COMP%]{position:absolute;top:5.5rem;left:50%;transform:translate(-50%);display:flex;align-items:center;gap:.65rem;z-index:30;pointer-events:auto;background:#ffffffe0;backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);padding:.35rem .65rem;border-radius:9999px;border:1px solid rgba(255,255,255,.95);box-shadow:0 8px 24px #0f172a1a,0 0 16px #ffc1071f}@media(max-width:767px){.scene-controls-overlay[_ngcontent-%COMP%]{top:4.6rem;padding:.25rem .45rem;gap:.35rem}.scene-controls-overlay[_ngcontent-%COMP%]   .scene-toggle-btn[_ngcontent-%COMP%]{font-size:.68rem;padding:.3rem .6rem;gap:.3rem}.scene-controls-overlay[_ngcontent-%COMP%]   .scene-toggle-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:.8rem}}.scene-controls-overlay[_ngcontent-%COMP%]   .scene-toggle-btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.4rem;font-size:.76rem;font-weight:700;padding:.42rem .88rem;border-radius:9999px;background:#ffffffe6;border:1px solid rgba(226,232,240,.8);color:#0f172a;box-shadow:0 2px 8px #0f172a0f;transition:all .25s cubic-bezier(.4,0,.2,1);cursor:pointer;white-space:nowrap}.scene-controls-overlay[_ngcontent-%COMP%]   .scene-toggle-btn[_ngcontent-%COMP%]   .btn-icon[_ngcontent-%COMP%]{font-size:.9rem;line-height:1}.scene-controls-overlay[_ngcontent-%COMP%]   .scene-toggle-btn[_ngcontent-%COMP%]:hover{transform:translateY(-2px);background:#fff;box-shadow:0 4px 14px #0f172a1f}.scene-controls-overlay[_ngcontent-%COMP%]   .scene-toggle-btn.active[_ngcontent-%COMP%]{background:#0f172a;color:#ffc107;border-color:#ffc107;box-shadow:0 0 14px #ffc10759}.hero-container[_ngcontent-%COMP%]{position:relative;z-index:5;width:100%;max-width:1440px;margin:0 auto}.hero-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1.8rem;align-items:center;justify-items:center}@media(min-width:768px){.hero-grid[_ngcontent-%COMP%]{max-width:620px;margin:0 auto;gap:2.2rem}}@media(min-width:1024px){.hero-grid[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:stretch;max-width:100%;margin:0;gap:1.5rem}}@media(min-width:1280px){.hero-grid[_ngcontent-%COMP%]{gap:2.5rem}}.hero-content.hero-content-card[_ngcontent-%COMP%]{width:100%;background:#ffffffd1;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1.5px solid rgba(255,255,255,.95);border-radius:28px;padding:2rem 2.2rem;box-shadow:0 20px 50px #0f172a14,0 0 35px #ffc10714;position:relative;z-index:10;display:flex;flex-direction:column;justify-content:space-between}@media(min-width:1024px){.hero-content.hero-content-card[_ngcontent-%COMP%]{flex:0 1 450px;max-width:450px;padding:1.7rem 1.8rem}}@media(min-width:1280px){.hero-content.hero-content-card[_ngcontent-%COMP%]{flex:0 1 520px;max-width:520px;padding:2.2rem 2.4rem}}@media(max-width:767px){.hero-content.hero-content-card[_ngcontent-%COMP%]{padding:1.3rem 1.15rem;border-radius:20px;max-width:100%}}.hero-content.hero-content-card.tamil-mode[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:1.6rem;line-height:1.32;letter-spacing:-.01em}@media(min-width:640px){.hero-content.hero-content-card.tamil-mode[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:1.85rem;line-height:1.3}}@media(min-width:768px){.hero-content.hero-content-card.tamil-mode[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:2.15rem;line-height:1.28}}@media(min-width:1024px){.hero-content.hero-content-card.tamil-mode[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:1.95rem;line-height:1.26}}@media(min-width:1280px){.hero-content.hero-content-card.tamil-mode[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:2.45rem;line-height:1.24}}.hero-content.hero-content-card.tamil-mode[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%]{font-size:.88rem;line-height:1.55}@media(max-width:767px){.hero-content.hero-content-card.tamil-mode[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%]{font-size:.8rem;line-height:1.45}}.hero-content[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#ffc10724;border:1px solid rgba(255,193,7,.6);padding:.35rem .85rem;border-radius:9999px;font-size:.75rem;font-weight:800;letter-spacing:.03em;color:#9a6200;margin-bottom:.85rem;white-space:nowrap;max-width:100%;overflow:hidden;text-overflow:ellipsis}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]{font-size:.68rem;padding:.25rem .65rem;margin-bottom:.6rem}}.hero-content[_ngcontent-%COMP%]   .hero-badge[_ngcontent-%COMP%]   .pulse-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#d32f2f;animation:beaconPing 2s cubic-bezier(0,0,.2,1) infinite}.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:1.85rem;line-height:1.22;margin-bottom:.85rem;color:#0f172a;word-break:keep-all}@media(min-width:640px){.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:2.2rem}}@media(min-width:768px){.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:2.45rem}}@media(min-width:1024px){.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:2.25rem;line-height:1.2}}@media(min-width:1280px){.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]{font-size:2.85rem;line-height:1.18}}.hero-content[_ngcontent-%COMP%]   .hero-title[_ngcontent-%COMP%]   .highlight-text[_ngcontent-%COMP%]{background:linear-gradient(135deg,#d97706,#ea580c);-webkit-background-clip:text;-webkit-text-fill-color:transparent;display:inline-block}.hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%]{font-size:.94rem;line-height:1.55;color:#475569;margin-bottom:1.4rem;max-width:520px}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-subtitle[_ngcontent-%COMP%]{font-size:.82rem;line-height:1.45;margin-bottom:1rem}}.hero-content[_ngcontent-%COMP%]   .hero-action-buttons[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem;margin-bottom:1.5rem}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-action-buttons[_ngcontent-%COMP%]{gap:.55rem;margin-bottom:1rem}.hero-content[_ngcontent-%COMP%]   .hero-action-buttons[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{flex:1 1 calc(50% - .35rem);padding:.65rem .8rem;font-size:.85rem;justify-content:center}}.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.85rem;padding-top:1.1rem;border-top:1px solid rgba(226,232,240,.9)}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr);gap:.4rem;padding-top:.85rem}}.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.55rem}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]{flex-direction:column;align-items:center;text-align:center;gap:.25rem}}.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-icon[_ngcontent-%COMP%]{font-size:1.3rem;line-height:1}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-icon[_ngcontent-%COMP%]{font-size:1.1rem}}.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.85rem;font-weight:800;color:#0f172a}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.72rem}}.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.7rem;font-weight:600;color:#64748b}@media(max-width:767px){.hero-content[_ngcontent-%COMP%]   .hero-trust-row[_ngcontent-%COMP%]   .trust-item[_ngcontent-%COMP%]   .trust-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.62rem}}.hero-calculator-column[_ngcontent-%COMP%]{width:100%;position:relative;z-index:10}@media(min-width:768px){.hero-calculator-column[_ngcontent-%COMP%]{max-width:620px;margin:0 auto}}@media(min-width:1024px){.hero-calculator-column[_ngcontent-%COMP%]{flex:0 1 420px;max-width:420px;margin:0}}@media(min-width:1280px){.hero-calculator-column[_ngcontent-%COMP%]{flex:0 1 460px;max-width:460px}}.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]{padding:1.6rem 1.8rem;background:#ffffffeb;backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1.5px solid rgba(255,255,255,.95);border-radius:28px;box-shadow:0 20px 50px #0f172a1a,0 0 35px #ffc10714}@media(min-width:1024px){.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]{padding:1.4rem 1.5rem}}@media(min-width:1280px){.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]{padding:1.8rem 2rem}}@media(max-width:767px){.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]{padding:1.25rem 1.15rem;border-radius:20px}}.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]   .calc-header[_ngcontent-%COMP%]{margin-bottom:1.1rem}.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]   .calc-header[_ngcontent-%COMP%]   .calc-header-tag[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;background:#d32f2f1a;color:#d32f2f;font-size:.7rem;font-weight:800;letter-spacing:.08em;padding:.2rem .6rem;border-radius:9999px;margin-bottom:.4rem}.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]   .calc-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.55rem;color:#0f172a;margin-bottom:.2rem}.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]   .calc-header[_ngcontent-%COMP%]   .calc-rate-badge[_ngcontent-%COMP%]{font-size:.84rem;color:#d97706}.hero-calculator-column[_ngcontent-%COMP%]   .calculator-card[_ngcontent-%COMP%]   .calc-header[_ngcontent-%COMP%]   .calc-rate-badge[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:800;color:#0f172a}.calc-toggles-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:.5rem;margin-bottom:.9rem}@media(min-width:640px){.calc-toggles-grid[_ngcontent-%COMP%]{grid-template-columns:1.15fr .85fr}}.trip-type-toggle[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:.35rem;background:#f1f5f9;padding:.28rem;border-radius:9999px}.trip-type-toggle[_ngcontent-%COMP%]   .trip-btn[_ngcontent-%COMP%]{padding:.52rem .35rem;min-height:38px;font-size:.82rem;font-weight:700;border-radius:9999px;background:transparent;color:#475569;transition:all .2s cubic-bezier(.4,0,.2,1);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;text-align:center;border:none;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.trip-type-toggle[_ngcontent-%COMP%]   .trip-btn[_ngcontent-%COMP%]:active{transform:scale(.96)}.trip-type-toggle[_ngcontent-%COMP%]   .trip-btn.active[_ngcontent-%COMP%]{background:#fff;color:#0f172a;box-shadow:0 2px 8px #00000014}.ac-type-toggle[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr 1fr;gap:.35rem;background:#f1f5f9;padding:.28rem;border-radius:9999px}.ac-type-toggle[_ngcontent-%COMP%]   .ac-btn[_ngcontent-%COMP%]{padding:.52rem .35rem;min-height:38px;font-size:.8rem;font-weight:700;border-radius:9999px;background:transparent;color:#475569;transition:all .2s cubic-bezier(.4,0,.2,1);text-align:center;border:none;cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.ac-type-toggle[_ngcontent-%COMP%]   .ac-btn[_ngcontent-%COMP%]:active{transform:scale(.96)}.ac-type-toggle[_ngcontent-%COMP%]   .ac-btn.active[_ngcontent-%COMP%]{background:#0284c7;color:#fff;box-shadow:0 2px 8px #0284c74d}.calc-vehicle-selection[_ngcontent-%COMP%]{margin-bottom:.9rem}.calc-vehicle-selection[_ngcontent-%COMP%]   .calc-label[_ngcontent-%COMP%]{display:block;font-size:.75rem;font-weight:700;text-transform:uppercase;letter-spacing:.05em;color:#475569;margin-bottom:.4rem}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(2,1fr);gap:.45rem}@media(min-width:640px){.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;padding:.52rem .4rem;background:#fff;border:1.5px solid #E2E8F0;border-radius:14px;transition:all .2s cubic-bezier(.4,0,.2,1);cursor:pointer;touch-action:manipulation;-webkit-tap-highlight-color:transparent}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill[_ngcontent-%COMP%]:active{transform:scale(.96)}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill[_ngcontent-%COMP%]   .v-name[_ngcontent-%COMP%]{font-size:.76rem;font-weight:700;color:#0f172a;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:100%}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill[_ngcontent-%COMP%]   .v-rate[_ngcontent-%COMP%]{font-size:.68rem;font-weight:600;color:#d97706}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill[_ngcontent-%COMP%]   .v-rate.v-coming-soon[_ngcontent-%COMP%]{color:#10b981;font-weight:800}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill.coming-soon-pill[_ngcontent-%COMP%]{border-style:dashed;border-color:#10b981;background:#10b9810a}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill.selected[_ngcontent-%COMP%]{border-color:#ffc107;background:#ffc1071f;box-shadow:0 0 12px #ffc1074d}.calc-vehicle-selection[_ngcontent-%COMP%]   .vehicle-pills-grid[_ngcontent-%COMP%]   .vehicle-pill.selected.coming-soon-pill[_ngcontent-%COMP%]{border-color:#10b981;background:#10b98126;box-shadow:0 0 12px #10b98140}.calc-inputs-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:.6rem;margin-bottom:.9rem}@media(min-width:640px){.calc-inputs-row[_ngcontent-%COMP%]{grid-template-columns:1fr 1fr}}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.25rem}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .calc-label-with-icon[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.4rem;font-size:.72rem;font-weight:700;color:#475569}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .calc-label-with-icon[_ngcontent-%COMP%]   .dot-indicator[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;display:inline-block}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .calc-label-with-icon[_ngcontent-%COMP%]   .dot-indicator.dot-pickup[_ngcontent-%COMP%]{background-color:#10b981;box-shadow:0 0 6px #10b98166}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .calc-label-with-icon[_ngcontent-%COMP%]   .dot-indicator.dot-drop[_ngcontent-%COMP%]{background-color:#ef4444;box-shadow:0 0 6px #ef444466}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]{position:relative;width:100%}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]   .calc-select[_ngcontent-%COMP%]{width:100%;border:1.5px solid #CBD5E1;background:#fff;border-radius:14px;padding:.52rem 2rem .52rem .75rem;font-size:.84rem;font-weight:600;color:#0f172a;outline:none;appearance:none;-webkit-appearance:none;cursor:pointer;transition:all .2s ease}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]   .calc-select[_ngcontent-%COMP%]:hover{border-color:#94a3b8}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]   .calc-select[_ngcontent-%COMP%]:focus{border-color:#ffc107;box-shadow:0 0 0 3px #ffc10733}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]   .calc-select[_ngcontent-%COMP%]   option[_ngcontent-%COMP%]{font-size:.84rem;color:#0f172a;padding:.4rem}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-select-wrapper[_ngcontent-%COMP%]   .select-chevron[_ngcontent-%COMP%]{position:absolute;right:.65rem;top:50%;transform:translateY(-50%);pointer-events:none;color:#64748b;display:flex;align-items:center}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-location-input[_ngcontent-%COMP%]{width:100%;border:1.5px solid #F59E0B;background:#fffbeb;border-radius:14px;padding:.52rem .75rem;font-size:.82rem;color:#0f172a;outline:none;margin-top:.3rem;transition:all .2s ease}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .custom-location-input[_ngcontent-%COMP%]:focus{border-color:#d97706;box-shadow:0 0 0 3px #f59e0b33}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]{width:100%;border:1.5px solid #E2E8F0;background:#fff;border-radius:14px;padding:.55rem .75rem;font-size:.84rem;outline:none;transition:border-color .2s}.calc-inputs-row[_ngcontent-%COMP%]   .calc-input-group[_ngcontent-%COMP%]   .input-field[_ngcontent-%COMP%]:focus{border-color:#ffc107}.distance-slider-box[_ngcontent-%COMP%]{background:#f8fafc;border:1px solid #E2E8F0;border-radius:20px;padding:.75rem .95rem;margin-bottom:1rem}.distance-slider-box[_ngcontent-%COMP%]   .distance-header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:.5rem}.distance-slider-box[_ngcontent-%COMP%]   .distance-header[_ngcontent-%COMP%]   .calc-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:#0f172a}.distance-slider-box[_ngcontent-%COMP%]   .distance-header[_ngcontent-%COMP%]   .calc-label[_ngcontent-%COMP%]   .round-km-hint[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;color:#d97706;margin-left:.35rem}.distance-slider-box[_ngcontent-%COMP%]   .distance-header[_ngcontent-%COMP%]   .distance-number-badge[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.3rem;background:#fff;border:1px solid #CBD5E1;padding:.2rem .5rem;border-radius:8px}.distance-slider-box[_ngcontent-%COMP%]   .distance-header[_ngcontent-%COMP%]   .distance-number-badge[_ngcontent-%COMP%]   .distance-input-field[_ngcontent-%COMP%]{width:55px;border:none;outline:none;font-size:1.05rem;font-weight:800;text-align:right;color:#0f172a}.distance-slider-box[_ngcontent-%COMP%]   .distance-header[_ngcontent-%COMP%]   .distance-number-badge[_ngcontent-%COMP%]   .unit[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:#d97706}.distance-slider-box[_ngcontent-%COMP%]   .distance-range-slider[_ngcontent-%COMP%]{width:100%;height:8px;border-radius:4px;background:#e2e8f0;outline:none;accent-color:#FFC107;cursor:pointer;touch-action:pan-y;-webkit-tap-highlight-color:transparent}.distance-slider-box[_ngcontent-%COMP%]   .distance-range-slider[_ngcontent-%COMP%]::-webkit-slider-thumb{-webkit-appearance:none;width:22px;height:22px;border-radius:50%;background:#ffc107;border:2.5px solid #FFFFFF;box-shadow:0 2px 6px #00000040;cursor:pointer;transition:transform .15s ease}.distance-slider-box[_ngcontent-%COMP%]   .distance-range-slider[_ngcontent-%COMP%]::-webkit-slider-thumb:hover, .distance-slider-box[_ngcontent-%COMP%]   .distance-range-slider[_ngcontent-%COMP%]::-webkit-slider-thumb:active{transform:scale(1.15)}.distance-slider-box[_ngcontent-%COMP%]   .distance-range-slider[_ngcontent-%COMP%]::-moz-range-thumb{width:22px;height:22px;border-radius:50%;background:#ffc107;border:2.5px solid #FFFFFF;box-shadow:0 2px 6px #00000040;cursor:pointer;transition:transform .15s ease}.distance-slider-box[_ngcontent-%COMP%]   .distance-range-slider[_ngcontent-%COMP%]::-moz-range-thumb:hover, .distance-slider-box[_ngcontent-%COMP%]   .distance-range-slider[_ngcontent-%COMP%]::-moz-range-thumb:active{transform:scale(1.15)}.distance-slider-box[_ngcontent-%COMP%]   .slider-marks[_ngcontent-%COMP%]{display:flex;justify-content:space-between;font-size:.7rem;color:#64748b;margin-top:.4rem}.time-and-waiting-deck[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:.6rem;margin-bottom:.95rem}@media(min-width:640px){.time-and-waiting-deck[_ngcontent-%COMP%]{grid-template-columns:1.1fr 1fr}}.time-and-waiting-deck[_ngcontent-%COMP%]   .included-time-box[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;background:#eff6ff;border:1px solid #BFDBFE;padding:.55rem .75rem;border-radius:14px}.time-and-waiting-deck[_ngcontent-%COMP%]   .included-time-box[_ngcontent-%COMP%]   .time-icon[_ngcontent-%COMP%]{font-size:1.2rem}.time-and-waiting-deck[_ngcontent-%COMP%]   .included-time-box[_ngcontent-%COMP%]   .time-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.2}.time-and-waiting-deck[_ngcontent-%COMP%]   .included-time-box[_ngcontent-%COMP%]   .time-info[_ngcontent-%COMP%]   .time-label[_ngcontent-%COMP%]{font-size:.68rem;font-weight:700;text-transform:uppercase;color:#1e40af;letter-spacing:.03em}.time-and-waiting-deck[_ngcontent-%COMP%]   .included-time-box[_ngcontent-%COMP%]   .time-info[_ngcontent-%COMP%]   .time-val[_ngcontent-%COMP%]{font-size:.92rem;font-weight:800;color:#1e3a8a}.time-and-waiting-deck[_ngcontent-%COMP%]   .included-time-box[_ngcontent-%COMP%]   .time-tag-free[_ngcontent-%COMP%]{margin-left:auto;font-size:.68rem;font-weight:800;color:#10b981;background:#10b9811f;border:1px solid rgba(16,185,129,.25);padding:.2rem .45rem;border-radius:9999px;text-transform:uppercase}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:.6rem;background:#fffbeb;border:1px solid #FDE68A;padding:.45rem .75rem;border-radius:14px}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .extra-hours-info[_ngcontent-%COMP%]{display:flex;flex-direction:column;line-height:1.2}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .extra-hours-info[_ngcontent-%COMP%]   .extra-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;color:#92400e}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .extra-hours-info[_ngcontent-%COMP%]   .extra-sub[_ngcontent-%COMP%]{font-size:.65rem;font-weight:600;color:#b45309}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .hours-stepper[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.35rem;background:#fff;border:1px solid #FCD34D;border-radius:9999px;padding:.15rem .35rem}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .hours-stepper[_ngcontent-%COMP%]   .stepper-btn[_ngcontent-%COMP%]{width:24px;height:24px;border-radius:50%;border:none;background:#f59e0b;color:#fff;font-weight:900;font-size:.95rem;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all .15s ease}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .hours-stepper[_ngcontent-%COMP%]   .stepper-btn[_ngcontent-%COMP%]:disabled{background:#e2e8f0;color:#94a3b8;cursor:not-allowed}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .hours-stepper[_ngcontent-%COMP%]   .stepper-btn[_ngcontent-%COMP%]:not(:disabled):hover{background:#d97706;transform:scale(1.08)}.time-and-waiting-deck[_ngcontent-%COMP%]   .extra-hours-box[_ngcontent-%COMP%]   .hours-stepper[_ngcontent-%COMP%]   .hours-display[_ngcontent-%COMP%]{font-size:.76rem;font-weight:800;color:#78350f;min-width:44px;text-align:center}.fare-result-box[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding-top:.95rem;border-top:1.5px dashed #CBD5E1}.fare-result-box.coming-soon-mode[_ngcontent-%COMP%]{display:block;padding-top:.8rem}.fare-result-box[_ngcontent-%COMP%]   .coming-soon-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:.5rem}.fare-result-box[_ngcontent-%COMP%]   .coming-soon-content[_ngcontent-%COMP%]   .coming-soon-header[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem}.fare-result-box[_ngcontent-%COMP%]   .coming-soon-content[_ngcontent-%COMP%]   .coming-soon-header[_ngcontent-%COMP%]   .coming-soon-pill[_ngcontent-%COMP%]{font-size:.7rem;font-weight:800;background:#dcfce7;color:#15803d;padding:.2rem .6rem;border-radius:9999px;border:1px solid #86EFAC}.fare-result-box[_ngcontent-%COMP%]   .coming-soon-content[_ngcontent-%COMP%]   .coming-soon-header[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:.95rem;font-weight:800;color:#0f172a;margin:0}.fare-result-box[_ngcontent-%COMP%]   .coming-soon-content[_ngcontent-%COMP%]   .coming-soon-desc[_ngcontent-%COMP%]{font-size:.8rem;color:#64748b;line-height:1.4;margin:0}.fare-result-box[_ngcontent-%COMP%]   .waiting-charge-tag[_ngcontent-%COMP%]{display:inline-block;font-size:.68rem;font-weight:700;color:#b45309;background:#fef3c7;padding:.15rem .45rem;border-radius:8px;margin-top:.2rem}@media(max-width:767px){.fare-result-box[_ngcontent-%COMP%]{flex-direction:column;align-items:stretch;gap:.85rem}}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .fare-trip-summary[_ngcontent-%COMP%]{display:flex;align-items:center;flex-wrap:wrap;gap:.35rem;margin-bottom:.35rem}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .fare-trip-summary[_ngcontent-%COMP%]   .trip-type-badge[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.04em;background:#fef3c7;color:#92400e;padding:.2rem .55rem;border-radius:9999px;border:1px solid #FDE68A}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .fare-trip-summary[_ngcontent-%COMP%]   .trip-climate-badge[_ngcontent-%COMP%]{font-size:.72rem;font-weight:700;background:#f1f5f9;color:#475569;padding:.2rem .55rem;border-radius:9999px;border:1px solid #E2E8F0}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .fare-trip-summary[_ngcontent-%COMP%]   .trip-climate-badge.ac[_ngcontent-%COMP%]{background:#e0f2fe;color:#0369a1;border-color:#bae6fd}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .fare-trip-summary[_ngcontent-%COMP%]   .trip-dist-badge[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;background:#ecfdf5;color:#047857;padding:.2rem .55rem;border-radius:9999px;border:1px solid #A7F3D0}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .estimated-price[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.2rem;line-height:1;margin:.2rem 0}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .estimated-price[_ngcontent-%COMP%]   .currency-symbol[_ngcontent-%COMP%]{font-size:1.35rem;font-weight:800;color:#d32f2f}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .estimated-price[_ngcontent-%COMP%]   .amount-number[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-size:2.25rem;font-weight:900;color:#0f172a;letter-spacing:-.02em}.fare-result-box[_ngcontent-%COMP%]   .fare-result-left[_ngcontent-%COMP%]   .fare-subtext[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;color:#64748b}.fare-result-box[_ngcontent-%COMP%]   .calc-book-btn[_ngcontent-%COMP%]{padding:.85rem 1.4rem;font-size:.92rem;font-weight:800;min-height:48px;display:inline-flex;align-items:center;justify-content:center;gap:.5rem;border-radius:9999px;touch-action:manipulation;-webkit-tap-highlight-color:transparent;transition:transform .15s ease,background .2s ease,box-shadow .2s ease}.fare-result-box[_ngcontent-%COMP%]   .calc-book-btn[_ngcontent-%COMP%]:active{transform:scale(.97)}@media(max-width:767px){.fare-result-box[_ngcontent-%COMP%]   .calc-book-btn[_ngcontent-%COMP%]{width:100%}}`]})};function Wi(r){if(r===void 0)throw new ReferenceError(`this hasn't been initialised - super() hasn't been called`);return r}function rp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var kn={autoSleep:120,force3D:`auto`,nullTargetWarn:1,units:{lineHeight:``}};var Da={duration:.5,overwrite:!1,delay:0};var eh;var un;var Oe;var ni=1e8;var ye=1/ni;var Xu=Math.PI*2;var Zv=Xu/4;var Jv=0;var sp=Math.sqrt;var Qv=Math.cos;var jv=Math.sin;var rn=function(t){return typeof t==`string`};var Ue=function(t){return typeof t==`function`};var qi=function(t){return typeof t==`number`};var Zc=function(t){return typeof t>`u`};var Ri=function(t){return typeof t==`object`};var Un=function(t){return t!==!1};var nh=function(){return typeof window<`u`};var Gc=function(t){return Ue(t)||rn(t)};var ap=typeof ArrayBuffer==`function`&&ArrayBuffer.isView||function(){};var vn=Array.isArray;var ty=/random\([^)]+\)/g;var ey=/,\s*/g;var Zf=/(?:-?\.?\d|\.)+/gi;var ih=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g;var Xr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g;var Uu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi;var rh=/[+-]=-?[.\d]+/;var ny=/[^,'"\[\]\s]+/gi;var iy=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i;var De;var Ai;var qu;var sh;var Yn={};var Xc={};var op;var cp=function(t){return(Xc=Ls(t,Yn))&&yn};var Jc=function(t,e){return console.warn(`Invalid property`,t,`set to`,e,`Missing plugin? gsap.registerPlugin()`)};var La=function(t,e){return!e&&console.warn(t)};var lp=function(t,e){return t&&(Yn[t]=e)&&Xc&&(Xc[t]=e)||Yn};var Fa=function(){return 0};var ry={suppressEvents:!0,isStart:!0,kill:!1};var Vc={suppressEvents:!0,kill:!1};var sy={suppressEvents:!0};var ah={};var gr=[];var Yu={};var up;var Fn={};var ku={};var Jf=30;var Hc=[];var oh=``;var ch=function(t){var e=t[0],n,i;if(Ri(e)||Ue(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Hc.length;i--&&!Hc[i].targetTest(e););n=Hc[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new dh(t[i],n)))||t.splice(i,1);return t};var _r=function(t){return t._gsap||ch(ii(t))[0]._gsap};var lh=function(t,e,n){return(n=t[e])&&Ue(n)?t[e]():Zc(n)&&t.getAttribute&&t.getAttribute(e)||n};var En=function(t,e){return(t=t.split(`,`)).forEach(e)||t};var ke=function(t){return Math.round(t*1e5)/1e5||0};var Be=function(t){return Math.round(t*1e7)/1e7||0};var qr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n===`+`?t+i:n===`-`?t-i:n===`*`?t*i:t/i};var ay=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n};var qc=function(){var t=gr.length,e=gr.slice(0),n,i;for(Yu={},gr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)};var uh=function(t){return!!(t._initted||t._startAt||t.add)};var hp=function(t,e,n,i){gr.length&&!un&&qc(),t.render(e,n,i||!!(un&&e<0&&uh(t))),gr.length&&!un&&qc()};var dp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+``).match(ny).length<2?e:rn(t)?t.trim():t};var fp=function(t){return t};var $n=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t};var oy=function(t){return function(e,n){for(var i in n)i in e||i===`duration`&&t||i===`ease`||(e[i]=n[i])}};var Ls=function(t,e){for(var n in e)t[n]=e[n];return t};var Qf=function r(t,e){for(var n in e)n!==`__proto__`&&n!==`constructor`&&n!==`prototype`&&(t[n]=Ri(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t};var Yc=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n};var Oa=function(t){var e=t.parent||De,n=t.keyframes?oy(vn(t.keyframes)):$n;if(Un(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t};var cy=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0};var pp=function(t,e,n,i,s){n===void 0&&(n=`_first`),i===void 0&&(i=`_last`);var a=t[i],o;if(s)for(o=e[s];a&&a[s]>o;)a=a._prev;return a?(e._next=a._next,a._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=a,e.parent=e._dp=t,e};var Qc=function(t,e,n,i){n===void 0&&(n=`_first`),i===void 0&&(i=`_last`);var s=e._prev,a=e._next;s?s._next=a:t[n]===e&&(t[n]=a),a?a._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null};var xr=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0};var Vr=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t};var ly=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t};var $u=function(t,e,n,i){return t._startAt&&(un?t._startAt.revert(Vc):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))};var uy=function r(t){return!t||t._ts&&r(t.parent)};var jf=function(t){return t._repeat?Fs(t._tTime,t=t.duration()+t._rDelay)*t:0};var Fs=function(t,e){var n=Math.floor(t=Be(t/e));return t&&n===t?n-1:n};var $c=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)};var jc=function(t){return t._end=Be(t._start+(t._tDur/Math.abs(t._ts||t._rts||ye)||0))};var tl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Be(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),jc(t),n._dirty||Vr(n,t)),t};var mp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=$c(t.rawTime(),e),(!e._dur||ka(0,e.totalDuration(),n)-e._tTime>ye)&&e.render(n,!0)),Vr(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-ye}};var Pi=function(t,e,n,i){return e.parent&&xr(e),e._start=Be((qi(n)?n:n||t!==De?ei(t,n,e):t._time)+e._delay),e._end=Be(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),pp(t,e,`_first`,`_last`,t._sort?`_start`:0),Ku(e)||(t._recent=e),i||mp(t,e),t._ts<0&&tl(t,t._tTime),t};var gp=function(t,e){return(Yn.ScrollTrigger||Jc(`scrollTrigger`,e))&&Yn.ScrollTrigger.create(e,t)};var _p=function(t,e,n,i,s){if(mh(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!un&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&up!==Nn.frame)return gr.push(t),t._lazy=[s,i],1};var hy=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))};var Ku=function(t){var e=t.data;return e===`isFromStart`||e===`isStart`};var dy=function(t,e,n,i){var s=t.ratio,a=e<0||!e&&(!t._start&&hy(t)&&!(!t._initted&&Ku(t))||(t._ts<0||t._dp._ts<0)&&!Ku(t))?0:1,o=t._rDelay,c=0,l,u,d;if(o&&t._repeat&&(c=ka(0,t._tDur,e),u=Fs(c,o),t._yoyo&&u&1&&(a=1-a),u!==Fs(t._tTime,o)&&(s=1-a,t.vars.repeatRefresh&&t._initted&&t.invalidate())),a!==s||un||i||t._zTime===ye||!e&&t._zTime){if(!t._initted&&_p(t,e,i,n,c))return;for(d=t._zTime,t._zTime=e||(n?ye:0),n||(n=e&&!d),t.ratio=a,t._from&&(a=1-a),t._time=0,t._tTime=c,l=t._pt;l;)l.r(a,l.d),l=l._next;e<0&&$u(t,e,n,!0),t._onUpdate&&!n&&qn(t,`onUpdate`),c&&t._repeat&&!n&&t.parent&&qn(t,`onRepeat`),(e>=t._tDur||e<0)&&t.ratio===a&&(a&&xr(t,1),!n&&!un&&(qn(t,a?`onComplete`:`onReverseComplete`,!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)};var fy=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data===`isPause`&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data===`isPause`&&i._start<e)return i;i=i._prev}};var Ns=function(t,e,n,i){var s=t._repeat,a=Be(e)||0,o=t._tTime/t._tDur;return o&&!i&&(t._time*=a/t._dur),t._dur=a,t._tDur=s?s<0?1e10:Be(a*(s+1)+t._rDelay*s):a,o>0&&!i&&tl(t,t._tTime=t._tDur*o),t.parent&&jc(t),n||Vr(t.parent,t),t};var tp=function(t){return t instanceof xn?Vr(t):Ns(t,t._dur)};var py={_start:0,endTime:Fa,totalDuration:Fa};var ei=function r(t,e,n){var i=t.labels,s=t._recent||py,a=t.duration()>=ni?s.endTime(!1):t._dur,o,c,l;return rn(e)&&(isNaN(e)||e in i)?(c=e.charAt(0),l=e.substr(-1)===`%`,o=e.indexOf(`=`),c===`<`||c===`>`?(o>=0&&(e=e.replace(/=/,``)),(c===`<`?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(e in i||(i[e]=a),i[e]):(c=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&n&&(c=c/100*(vn(n)?n[0]:n).totalDuration()),o>1?r(t,e.substr(0,o-1),n)+c:a+c)):e==null?a:+e};var Ia=function(t,e,n){var i=qi(e[1]),s=(i?2:1)+(t<2?0:1),a=e[s],o,c;if(i&&(a.duration=e[1]),a.parent=n,t){for(o=a,c=n;c&&!(`immediateRender`in o);)o=c.vars.defaults||{},c=Un(c.vars.inherit)&&c.parent;a.immediateRender=Un(o.immediateRender),t<2?a.runBackwards=1:a.startAt=e[s-1]}return new We(e[0],a,e[s+1])};var vr=function(t,e){return t||t===0?e(t):e};var ka=function(t,e,n){return n<t?t:n>e?e:n};var hn=function(t,e){return!rn(t)||!(e=iy.exec(t))?``:e[1]};var my=function(t,e,n){return vr(n,function(i){return ka(t,e,i)})};var Zu=[].slice;var xp=function(t,e){return t&&Ri(t)&&`length`in t&&(!e&&!t.length||t.length-1 in t&&Ri(t[0]))&&!t.nodeType&&t!==Ai};var gy=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return rn(i)&&!e||xp(i,1)?(s=n).push.apply(s,ii(i)):n.push(i)})||n};var ii=function(t,e,n){return Oe&&!e&&Oe.selector?Oe.selector(t):rn(t)&&!n&&(qu||!Us())?Zu.call((e||sh).querySelectorAll(t),0):vn(t)?gy(t,n):xp(t)?Zu.call(t,0):t?[t]:[]};var Ju=function(t){return t=ii(t)[0]||La(`Invalid scope`)||{},function(e){var n=t.current||t.nativeElement||t;return ii(e,n.querySelectorAll?n:n===t?La(`Invalid scope`)||sh.createElement(`div`):t)}};var vp=function(t){return t.sort(function(){return .5-Math.random()})};var yp=function(t){if(Ue(t))return t;var e=Ri(t)?t:{each:t},n=Hr(e.ease),i=e.from||0,s=parseFloat(e.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=e.axis,u=i,d=i;return rn(i)?u=d={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(u=i[0],d=i[1]),function(h,f,g){var _=(g||e).length,m=a[_],p,b,w,y,M,E,T,x,C;if(!m){if(C=e.grid===`auto`?0:(e.grid||[1,ni])[1],!C){for(T=-ni;T<(T=g[C++].getBoundingClientRect().left)&&C<_;);C<_&&C--}for(m=a[_]=[],p=c?Math.min(C,_)*u-.5:i%C,b=C===ni?0:c?_*d/C-.5:i/C|0,T=0,x=ni,E=0;E<_;E++)w=E%C-p,y=b-(E/C|0),m[E]=M=l?Math.abs(l===`y`?y:w):sp(w*w+y*y),M>T&&(T=M),M<x&&(x=M);i===`random`&&vp(m),m.max=T-x,m.min=x,m.v=_=(parseFloat(e.amount)||parseFloat(e.each)*(C>_?_-1:l?l===`y`?_/C:C:Math.max(C,_/C))||0)*(i===`edges`?-1:1),m.b=_<0?s-_:s,m.u=hn(e.amount||e.each)||0,n=n&&_<0?Py(n):n}return _=(m[h]-m.min)/m.max||0,Be(m.b+(n?n(_):_)*m.v)+m.u}};var Qu=function(t){var e=Math.pow(10,((t+``).split(`.`)[1]||``).length);return function(n){var i=Be(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(qi(n)?0:hn(n))}};var Mp=function(t,e){var n=vn(t),i,s;return!n&&Ri(t)&&(i=n=t.radius||ni,t.values?(t=ii(t.values),(s=!qi(t[0]))&&(i*=i)):t=Qu(t.increment)),vr(e,n?Ue(t)?function(a){return s=t(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=ni,u=0,d=t.length,h,f;d--;)s?(h=t[d].x-o,f=t[d].y-c,h=h*h+f*f):h=Math.abs(t[d]-o),h<l&&(l=h,u=d);return u=!i||l<=i?t[u]:a,s||u===a||qi(a)?u:u+hn(a)}:Qu(t))};var bp=function(t,e,n,i){return vr(vn(t)?!e:n===!0?!!(n=0):!i,function(){return vn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+``).length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})};var _y=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,a){return a(s)},i)}};var xy=function(t,e){return function(n){return t(parseFloat(n))+(e||hn(n))}};var vy=function(t,e,n){return Cp(t,e,0,1,n)};var Sp=function(t,e,n){return vr(n,function(i){return t[~~e(i)]})};var yy=function r(t,e,n){var i=e-t;return vn(t)?Sp(t,r(0,t.length),e):vr(n,function(s){return(i+(s-t)%i)%i+t})};var My=function r(t,e,n){var i=e-t,s=i*2;return vn(t)?Sp(t,r(0,t.length-1),e):vr(n,function(a){return a=(s+(a-t)%s)%s||0,t+(a>i?s-a:a)})};var ks=function(t){return t.replace(ty,function(e){var n=e.indexOf(`[`)+1,i=e.substring(n||7,n?e.indexOf(`]`):e.length-1).split(ey);return bp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})};var Cp=function(t,e,n,i,s){var a=e-t,o=i-n;return vr(s,function(c){return n+((c-t)/a*o||0)})};var by=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var a=rn(t),o={},c,l,u,d,h;if(n===!0&&(i=1)&&(n=null),a)t={p:t},e={p:e};else if(vn(t)&&!vn(e)){for(u=[],d=t.length,h=d-2,l=1;l<d;l++)u.push(r(t[l-1],t[l]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return u[_](g-_)},n=e}else i||(t=Ls(vn(t)?[]:{},t));if(!u){for(c in e)fh.call(o,t,c,`get`,e[c]);s=function(g){return xh(g,o)||(a?t.p:t)}}}return vr(n,s)};var ep=function(t,e,n){var i=t.labels,s=ni,a,o,c;for(a in i)o=i[a]-e,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c};var qn=function(t,e,n){var i=t.vars,s=i[e],a=Oe,o=t._ctx,c,l,u;if(s)return c=i[e+`Params`],l=i.callbackScope||t,n&&gr.length&&qc(),o&&(Oe=o),u=c?s.apply(l,c):s.call(l),Oe=a,u};var Pa=function(t){return xr(t),t.scrollTrigger&&t.scrollTrigger.kill(!!un),t.progress()<1&&qn(t,`onInterrupt`),t};var Ds;var Ep=[];var wp=function(t){if(t)if(t=!t.name&&t.default||t,nh()||t.headless){var e=t.name,n=Ue(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:Fa,render:xh,add:fh,kill:ky,modifier:Uy,rawVars:0},a={targetTest:0,get:0,getSetter:el,aliases:{},register:0};if(Us(),t!==i){if(Fn[e])return;$n(i,$n(Yc(t,s),a)),Ls(i.prototype,Ls(s,Yc(t,a))),Fn[i.prop=e]=i,t.targetTest&&(Hc.push(i),ah[e]=1),e=(e===`css`?`CSS`:e.charAt(0).toUpperCase()+e.substr(1))+`Plugin`}lp(e,i),t.register&&t.register(yn,i,wn)}else Ep.push(t)};var ve=255;var Ra={aqua:[0,ve,ve],lime:[0,ve,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,ve],navy:[0,0,128],white:[ve,ve,ve],olive:[128,128,0],yellow:[ve,ve,0],orange:[ve,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[ve,0,0],pink:[ve,192,203],cyan:[0,ve,ve],transparent:[ve,ve,ve,0]};var zu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*ve+.5|0};var Tp=function(t,e,n){var i=t?qi(t)?[t>>16,t>>8&ve,t&ve]:0:Ra.black,s,a,o,c,l,u,d,h,f,g;if(!i){if(t.substr(-1)===`,`&&(t=t.substr(0,t.length-1)),Ra[t])i=Ra[t];else if(t.charAt(0)===`#`){if(t.length<6&&(s=t.charAt(1),a=t.charAt(2),o=t.charAt(3),t=`#`+s+s+a+a+o+o+(t.length===5?t.charAt(4)+t.charAt(4):``)),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&ve,i&ve,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&ve,t&ve]}else if(t.substr(0,3)===`hsl`){if(i=g=t.match(Zf),!e)c=+i[0]%360/360,l=+i[1]/100,u=+i[2]/100,a=u<=.5?u*(l+1):u+l-u*l,s=u*2-a,i.length>3&&(i[3]*=1),i[0]=zu(c+1/3,s,a),i[1]=zu(c,s,a),i[2]=zu(c-1/3,s,a);else if(~t.indexOf(`=`))return i=t.match(ih),n&&i.length<4&&(i[3]=1),i}else i=t.match(Zf)||Ra.transparent;i=i.map(Number)}return e&&!g&&(s=i[0]/ve,a=i[1]/ve,o=i[2]/ve,d=Math.max(s,a,o),h=Math.min(s,a,o),u=(d+h)/2,d===h?c=l=0:(f=d-h,l=u>.5?f/(2-d-h):f/(d+h),c=d===s?(a-o)/f+(a<o?6:0):d===a?(o-s)/f+2:(s-a)/f+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i};var Ap=function(t){var e=[],n=[],i=-1;return t.split(Xi).forEach(function(s){var a=s.match(Xr)||[];e.push.apply(e,a),n.push(i+=a.length+1)}),e.c=n,e};var np=function(t,e,n){var i=``,s=(t+i).match(Xi),a=e?`hsla(`:`rgba(`,o=0,c,l,u,d;if(!s)return t;if(s=s.map(function(h){return(h=Tp(h,e,1))&&a+(e?h[0]+`,`+h[1]+`%,`+h[2]+`%,`+h[3]:h.join(`,`))+`)`}),n&&(u=Ap(t),c=n.c,c.join(i)!==u.c.join(i)))for(l=t.replace(Xi,`1`).split(Xr),d=l.length-1;o<d;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+`0,0,0,0)`:(u.length?u:s.length?s:n).shift());if(!l)for(l=t.split(Xi),d=l.length-1;o<d;o++)i+=l[o]+s[o];return i+l[d]};var Xi=(function(){var r=`(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b`,t;for(t in Ra)r+=`|`+t+`\\b`;return new RegExp(r+`)`,`gi`)})();var Sy=/hsl[a]?\(/;var hh=function(t){var e=t.join(` `),n;if(Xi.lastIndex=0,Xi.test(e))return n=Sy.test(e),t[1]=np(t[1],n),t[0]=np(t[0],n,Ap(t[1])),!0};var Na;var Nn=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,u,d,h,f,g=function _(m){var p=r()-i,b=m===!0,w,y,M,E;if((p>t||p<0)&&(n+=p-e),i+=p,M=i-n,w=M-a,(w>0||b)&&(E=++d.frame,h=M-d.time*1e3,d.time=M=M/1e3,a+=w+(w>=s?4:s-w),y=1),b||(c=l(_)),y)for(f=0;f<o.length;f++)o[f](M,h,E,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){op&&(!qu&&nh()&&(Ai=qu=window,sh=Ai.document||{},Yn.gsap=yn,(Ai.gsapVersions||(Ai.gsapVersions=[])).push(yn.version),cp(Xc||Ai.GreenSockGlobals||!Ai.gsap&&Ai||{}),Ep.forEach(wp)),u=typeof requestAnimationFrame<`u`&&requestAnimationFrame,c&&d.sleep(),l=u||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Na=1,g(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(c),Na=0,l=Fa},lagSmoothing:function(m,p){t=m||Infinity,e=Math.min(p||33,t)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,b){var w=p?function(y,M,E,T){m(y,M,E,T),d.remove(w)}:m;return d.remove(m),o[b?`unshift`:`push`](w),Us(),w},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&f>=p&&f--},_listeners:o},d})();var Us=function(){return!Na&&Nn.wake()};var se={};var Cy=/^[\d.\-M][\d.\-,\s]/;var Ey=/["']/g;var wy=function(t){for(var e={},n=t.substr(1,t.length-3).split(`:`),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(`,`):c.length,l=c.substr(0,o),e[i]=isNaN(l)?l.replace(Ey,``).trim():+l,i=c.substr(o+1).trim();return e};var Ty=function(t){var e=t.indexOf(`(`)+1,n=t.indexOf(`)`),i=t.indexOf(`(`,e);return t.substring(e,~i&&i<n?t.indexOf(`)`,n+1):n)};var Ay=function(t){var e=(t+``).split(`(`),n=se[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf(`{`)?[wy(e[1])]:Ty(t).split(`,`).map(dp)):se._CE&&Cy.test(t)?se._CE(``,t):n};var Py=function(t){return function(e){return 1-t(1-e)}};var Hr=function(t,e){return t&&(Ue(t)?t:se[t]||Ay(t))||e};var Yr=function(t,e,n,i){n===void 0&&(n=function(c){return 1-e(1-c)}),i===void 0&&(i=function(c){return c<.5?e(c*2)/2:1-e((1-c)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},a;return En(t,function(o){se[o]=Yn[o]=s,se[a=o.toLowerCase()]=n;for(var c in s)se[a+(c===`easeIn`?`.in`:c===`easeOut`?`.out`:`.inOut`)]=se[o+`.`+c]=s[c]}),s};var Pp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}};var Gu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),a=s/Xu*(Math.asin(1/i)||0),o=function(u){return u===1?1:i*Math.pow(2,-10*u)*jv((u-a)*s)+1},c=t===`out`?o:t===`in`?function(l){return 1-o(1-l)}:Pp(o);return s=Xu/s,c.config=function(l,u){return r(t,l,u)},c};var Vu=function r(t,e){e===void 0&&(e=1.70158);var n=function(a){return a?--a*a*((e+1)*a+e)+1:0},i=t===`out`?n:t===`in`?function(s){return 1-n(1-s)}:Pp(n);return i.config=function(s){return r(t,s)},i};En(`Linear,Quad,Cubic,Quart,Quint,Strong`,function(r,t){var e=t<5?t+1:t;Yr(r+`,Power`+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});se.Linear.easeNone=se.none=se.Linear.easeIn;Yr(`Elastic`,Gu(`in`),Gu(`out`),Gu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(o){return o<e?r*o*o:o<n?r*Math.pow(o-1.5/t,2)+.75:o<i?r*(o-=2.25/t)*o+.9375:r*Math.pow(o-2.625/t,2)+.984375};Yr(`Bounce`,function(a){return 1-s(1-a)},s)})(7.5625,2.75);Yr(`Expo`,function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Yr(`Circ`,function(r){return-(sp(1-r*r)-1)});Yr(`Sine`,function(r){return r===1?1:-Qv(r*Zv)+1});Yr(`Back`,Vu(`in`),Vu(`out`),Vu());se.SteppedEase=se.steps=Yn.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,a=1-ye;return function(o){return((i*ka(0,a,o)|0)+s)*n}}};Da.ease=se[`quad.out`];En(`onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt`,function(r){return oh+=r+`,`+r+`Params,`});var dh=function(t,e){this.id=Jv++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:lh,this.set=e?e.getSetter:el};var Ua=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===Infinity?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ns(this,+e.duration,1,1),this.data=e.data,Oe&&(this._ctx=Oe,Oe.data.push(this)),Na||Nn.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ns(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Us(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(tl(this,n),!s._dp||s.parent||mp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Pi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===ye||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),hp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+jf(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+jf(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Fs(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-ye?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?$c(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-ye?0:this._rts,this.totalTime(ka(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),jc(this),ly(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Us(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==ye&&(this._tTime-=ye)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Be(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Pi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(Un(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?$c(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=sy);var i=un;return un=n,uh(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!==`nested`&&n.kill!==!1&&this.kill(),un=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===Infinity?-2:n,tp(this)):this._repeat===-2?Infinity:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,tp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(ei(this,n),Un(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Un(i)),this._dur||(this._zTime=-ye),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-ye:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-ye,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-ye)},t.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+`Params`]=s),n===`onUpdate`&&(this._onUpdate=i)):delete a[n],this):a[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ue(n)?n:fp,c=function(){var u=i.then;i.then=null,s&&s(),Ue(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=u),a(o),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},t.kill=function(){Pa(this)},r})();$n(Ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-ye,_prom:0,_ps:!1,_rts:1});var xn=(function(r){rp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Un(n.sortChildren),De&&Pi(n.parent||De,Wi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&gp(Wi(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,a){return Ia(0,arguments,this),this},e.from=function(i,s,a){return Ia(1,arguments,this),this},e.fromTo=function(i,s,a,o){return Ia(2,arguments,this),this},e.set=function(i,s,a){return s.duration=0,s.parent=this,Oa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new We(i,s,ei(this,a),1),this},e.call=function(i,s,a){return Pi(this,We.delayedCall(0,i,s),a)},e.staggerTo=function(i,s,a,o,c,l,u){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=u,a.parent=this,new We(i,a,ei(this,c)),this},e.staggerFrom=function(i,s,a,o,c,l,u){return a.runBackwards=1,Oa(a).immediateRender=Un(a.immediateRender),this.staggerTo(i,s,a,o,c,l,u)},e.staggerFromTo=function(i,s,a,o,c,l,u,d){return o.startAt=a,Oa(o).immediateRender=Un(o.immediateRender),this.staggerTo(i,s,o,c,l,u,d)},e.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,u=i<=0?0:Be(i),d=this._zTime<0!=i<0&&(this._initted||!l),h,f,g,_,m,p,b,w,y,M,E,T;if(this!==De&&u>c&&i>=0&&(u=c),u!==this._tTime||a||d){if(o!==this._time&&l&&(u+=this._time-o,i+=this._time-o),h=u,y=this._start,w=this._ts,p=!w,d&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Be(u%m),u===c?(_=this._repeat,h=l):(M=Be(u/m),_=~~M,_&&_===M&&(h=l,_--),h>l&&(h=l)),M=Fs(this._tTime,m),!o&&this._tTime&&M!==_&&this._tTime-M*m-this._dur<=0&&(M=_),E&&_&1&&(h=l-h,T=1),_!==M&&!this._lock){var x=E&&M&1,C=x===(E&&_&1);if(_<M&&(x=!x),o=x?0:u%l?l:u,this._lock=1,this.render(o||(T?0:Be(_*m)),s,!l)._lock=0,this._tTime=u,!s&&this.parent&&qn(this,`onRepeat`),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,M=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,C&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(b=fy(this,Be(o),Be(h)),b&&(u-=h-(h=b._start))),this._tTime=u,this._time=h,this._act=!!w,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&u&&l&&!s&&!M&&(qn(this,`onStart`),this._tTime!==u))return this;if(h>=o&&i>=0)for(f=this._first;f;){if(g=f._next,(f._act||h>=f._start)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(h-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(h-f._start)*f._ts,s,a),h!==this._time||!this._ts&&!p){b=0,g&&(u+=this._zTime=-ye);break}}f=g}else{f=this._last;for(var P=i<0?i:h;f;){if(g=f._prev,(f._act||P<=f._end)&&f._ts&&b!==f){if(f.parent!==this)return this.render(i,s,a);if(f.render(f._ts>0?(P-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(P-f._start)*f._ts,s,a||un&&uh(f)),h!==this._time||!this._ts&&!p){b=0,g&&(u+=this._zTime=P?-ye:ye);break}}f=g}}if(b&&!s&&(this.pause(),b.render(h>=o?0:-ye)._zTime=h>=o?1:-1,this._ts))return this._start=y,jc(this),this.render(i,s,a);this._onUpdate&&!s&&qn(this,`onUpdate`,!0),(u===c&&this._tTime>=this.totalDuration()||!u&&o)&&(y===this._start||Math.abs(w)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(u===c&&this._ts>0||!u&&this._ts<0)&&xr(this,1),!s&&!(i<0&&!o)&&(u||o||!c)&&(qn(this,u===c&&i>=0?`onComplete`:`onReverseComplete`,!0),this._prom&&!(u<c&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var a=this;if(qi(s)||(s=ei(this,s,i)),!(i instanceof Ua)){if(vn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(rn(i))return this.addLabel(i,s);if(Ue(i))i=We.delayedCall(0,i);else return this}return this!==i?Pi(this,i,s):this},e.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ni);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof We?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},e.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},e.remove=function(i){return rn(i)?this.removeLabel(i):Ue(i)?this.killTweensOf(i):(i.parent===this&&Qc(this,i),i===this._recent&&(this._recent=this._last),Vr(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Be(Nn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=ei(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,a){var o=We.delayedCall(0,s||Fa,a);return o.data=`isPause`,this._hasPause=1,Pi(this,o,ei(this,i))},e.removePause=function(i){var s=this._first;for(i=ei(this,i);s;)s._start===i&&s.data===`isPause`&&xr(s),s=s._next},e.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)mr!==o[c]&&o[c].kill(i,s);return this},e.getTweensOf=function(i,s){for(var a=[],o=ii(i),c=this._first,l=qi(s),u;c;)c instanceof We?ay(c._targets,o)&&(l?(!mr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(u=c.getTweensOf(o,s)).length&&a.push.apply(a,u),c=c._next;return a},e.tweenTo=function(i,s){s=s||{};var a=this,o=ei(a,i),c=s,l=c.startAt,u=c.onStart,d=c.onStartParams,h=c.immediateRender,f,g=We.to(a,$n({ease:s.ease||`none`,lazy:!1,immediateRender:!1,time:o,overwrite:`auto`,duration:s.duration||Math.abs((o-(l&&`time`in l?l.time:a._time))/a.timeScale())||ye,onStart:function(){if(a.pause(),!f){var m=s.duration||Math.abs((o-(l&&`time`in l?l.time:a._time))/a.timeScale());g._dur!==m&&Ns(g,m,0,1).render(g._time,!0,!0),f=1}u&&u.apply(g,d||[])}},s));return h?g.render(0):g},e.tweenFromTo=function(i,s,a){return this.tweenTo(s,$n({startAt:{time:ei(this,i)}},a))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),ep(this,ei(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),ep(this,ei(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+ye)},e.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=Be(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Vr(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Vr(this)},e.totalDuration=function(i){var s=0,a=this,o=a._last,c=ni,l,u,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),u=o._start,u>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Pi(a,o,u-o._delay,1)._lock=0):c=u,u<0&&o._ts&&(s-=u,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Be(u/a._ts),a._time-=u,a._tTime-=u),a.shiftChildren(-u,!1,-Infinity),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Ns(a,a===De&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},t.updateRoot=function(i){if(De._ts&&(hp(De,$c(i,De)),up=Nn.frame),Nn.frame>=Jf){Jf+=kn.autoSleep||120;var s=De._first;if((!s||!s._ts)&&kn.autoSleep&&Nn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Nn.sleep()}}},t})(Ua);$n(xn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Ry=function(t,e,n,i,s,a,o){var c=new wn(this._pt,t,e,0,1,_h,null,s),l=0,u=0,d,h,f,g,_,m,p,b;for(c.b=n,c.e=i,n+=``,i+=``,(p=~i.indexOf(`random(`))&&(i=ks(i)),a&&(b=[n,i],a(b,t,e),n=b[0],i=b[1]),h=n.match(Uu)||[];d=Uu.exec(i);)g=d[0],_=i.substring(l,d.index),f?f=(f+1)%5:_.substr(-5)===`rgba(`&&(f=1),g!==h[u++]&&(m=parseFloat(h[u-1])||0,c._pt={_next:c._pt,p:_||u===1?_:`,`,s:m,c:g.charAt(1)===`=`?qr(m,g)-m:parseFloat(g)-m,m:f&&f<4?Math.round:0},l=Uu.lastIndex);return c.c=l<i.length?i.substring(l,i.length):``,c.fp=o,(rh.test(i)||p)&&(c.e=0),this._pt=c,c};var fh=function(t,e,n,i,s,a,o,c,l,u){Ue(i)&&(i=i(s||0,t,a));var d=t[e],h=n!==`get`?n:Ue(d)?l?t[e.indexOf(`set`)||!Ue(t[`get`+e.substr(3)])?e:`get`+e.substr(3)](l):t[e]():d,f=Ue(d)?l?Ly:Ip:gh,g;if(rn(i)&&(~i.indexOf(`random(`)&&(i=ks(i)),i.charAt(1)===`=`&&(g=qr(h,i)+(hn(h)||0),(g||g===0)&&(i=g))),!u||h!==i||ju)return!isNaN(h*i)&&i!==``?(g=new wn(this._pt,t,e,+h||0,i-(h||0),typeof d==`boolean`?Ny:Bp,0,f),l&&(g.fp=l),o&&g.modifier(o,this,t),this._pt=g):(!d&&!(e in t)&&Jc(e,i),Ry.call(this,t,e,h,i,f,c||kn.stringFilter,l))};var Oy=function(t,e,n,i,s){if(Ue(t)&&(t=Ba(t,s,e,n,i)),!Ri(t)||t.style&&t.nodeType||vn(t)||ap(t))return rn(t)?Ba(t,s,e,n,i):t;var a={},o;for(o in t)a[o]=Ba(t[o],s,e,n,i);return a};var ph=function(t,e,n,i,s,a){var o,c,l,u;if(Fn[t]&&(o=new Fn[t]).init(s,o.rawVars?e[t]:Oy(e[t],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new wn(n._pt,s,t,0,1,o.render,o,0,o.priority),n!==Ds))for(l=n._ptLookup[n._targets.indexOf(s)],u=o._props.length;u--;)l[o._props[u]]=c;return o};var mr;var ju;var mh=function r(t,e,n){var i=t.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,u=i.runBackwards,d=i.yoyoEase,h=i.keyframes,f=i.autoRevert,g=t._dur,_=t._startAt,m=t._targets,p=t.parent,b=p&&p.data===`nested`?p.vars.targets:m,w=t._overwrite===`auto`&&!eh,y=t.timeline,M=i.easeReverse||d,E,T,x,C,P,B,L,k,I,G,Y,$,rt;if(y&&(!h||!s)&&(s=`none`),t._ease=Hr(s,Da.ease),t._rEase=M&&(Hr(M)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||h&&!i.stagger){if(k=m[0]?_r(m[0]).harness:0,$=k&&i[k.prop],E=Yc(i,ah),_&&(_._zTime<0&&_.progress(1),e<0&&u&&o&&!f?_.render(-1,!0):_.revert(u&&g?Vc:ry),_._lazy=0),a){if(xr(t._startAt=We.set(m,$n({data:`isStart`,overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&Un(c),startAt:null,delay:0,onUpdate:l&&function(){return qn(t,`onUpdate`)},stagger:0},a))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un||!o&&!f)&&t._startAt.revert(Vc),o&&g&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&g&&!_){if(e&&(o=!1),x=$n({overwrite:!1,data:`isFromStart`,lazy:o&&!_&&Un(c),immediateRender:o,stagger:0,parent:p},E),$&&(x[k.prop]=$),xr(t._startAt=We.set(m,x)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(un?t._startAt.revert(Vc):t._startAt.render(-1,!0)),t._zTime=e,!o)r(t._startAt,ye,ye);else if(!e)return}for(t._pt=t._ptCache=0,c=g&&Un(c)||c&&!g,T=0;T<m.length;T++){if(P=m[T],L=P._gsap||ch(m)[T]._gsap,t._ptLookup[T]=G={},Yu[L.id]&&gr.length&&qc(),Y=b===m?T:b.indexOf(P),k&&(I=new k).init(P,$||E,t,Y,b)!==!1&&(t._pt=C=new wn(t._pt,P,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Z){G[Z]=C}),I.priority&&(B=1)),!k||$)for(x in E)Fn[x]&&(I=ph(x,E,t,Y,P,b))?I.priority&&(B=1):G[x]=C=fh.call(t,P,x,`get`,E[x],Y,b,0,i.stringFilter);t._op&&t._op[T]&&t.kill(P,t._op[T]),w&&t._pt&&(mr=t,De.killTweensOf(P,G,t.globalTime(e)),rt=!t.parent,mr=0),t._pt&&c&&(Yu[L.id]=1)}B&&vh(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!rt,h&&e<=0&&y.render(ni,!0,!0)};var Iy=function(t,e,n,i,s,a,o,c){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,d,h,f;if(!l)for(l=t._ptCache[e]=[],h=t._ptLookup,f=t._targets.length;f--;){if(u=h[f][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return ju=1,t.vars[e]=`+=0`,mh(t,o),ju=0,c?La(e+` not eligible for reset. Try splitting into individual properties`):1;l.push(u)}for(f=l.length;f--;)d=l[f],u=d._pt||d,u.s=(i||i===0)&&!s?i:u.s+(i||0)+a*u.c,u.c=n-u.s,d.e&&(d.e=ke(n)+hn(d.e)),d.b&&(d.b=u.s+hn(d.b))};var By=function(t,e){var n=t[0]?_r(t[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return e;s=Ls({},e);for(a in i)if(a in s)for(c=i[a].split(`,`),o=c.length;o--;)s[c[o]]=s[a];return s};var Dy=function(t,e,n,i){var s=e.ease||i||`power1.inOut`,a,o;if(vn(e))o=n[t]||(n[t]=[]),e.forEach(function(c,l){return o.push({t:l/(e.length-1)*100,v:c,e:s})});else for(a in e)o=n[a]||(n[a]=[]),a===`ease`||o.push({t:parseFloat(t),v:e[a],e:s})};var Ba=function(t,e,n,i,s){return Ue(t)?t.call(e,n,i,s):rn(t)&&~t.indexOf(`random(`)?ks(t):t};var Rp=oh+`repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert`;var Op={};En(Rp+`,id,stagger,delay,duration,paused,scrollTrigger`,function(r){return Op[r]=1});var We=(function(r){rp(t,r);function t(n,i,s,a){var o;typeof i==`number`&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:Oa(i))||this;var c=o.vars,l=c.duration,u=c.delay,d=c.immediateRender,h=c.stagger,f=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=i.parent||De,b=(vn(n)||ap(n)?qi(n[0]):`length`in i)?[n]:ii(n),w,y,M,E,T,x,C,P;if(o._targets=b.length?ch(b):La(`GSAP target `+n+` not found. https://gsap.com`,!kn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=f,g||h||Gc(l)||Gc(u)){i=o.vars;var B=i.easeReverse||i.yoyoEase;if(w=o.timeline=new xn({data:`nested`,defaults:_||{},targets:p&&p.data===`nested`?p.vars.targets:b}),w.kill(),w.parent=w._dp=Wi(o),w._start=0,h||Gc(l)||Gc(u)){if(E=b.length,C=h&&yp(h),Ri(h))for(T in h)~Rp.indexOf(T)&&(P||(P={}),P[T]=h[T]);for(y=0;y<E;y++)M=Yc(i,Op),M.stagger=0,B&&(M.easeReverse=B),P&&Ls(M,P),x=b[y],M.duration=+Ba(l,Wi(o),y,x,b),M.delay=(+Ba(u,Wi(o),y,x,b)||0)-o._delay,!h&&E===1&&M.delay&&(o._delay=u=M.delay,o._start+=u,M.delay=0),w.to(x,M,C?C(y,x,b):0),w._ease=se.none;w.duration()?l=u=0:o.timeline=0}else if(g){Oa($n(w.vars.defaults,{ease:`none`})),w._ease=Hr(g.ease||i.ease||`none`);var L=0,k,I,G;if(vn(g))g.forEach(function(Y){return w.to(b,Y,`>`)}),w.duration();else{M={};for(T in g)T===`ease`||T===`easeEach`||Dy(T,g[T],M,g.easeEach);for(T in M)for(k=M[T].sort(function(Y,$){return Y.t-$.t}),L=0,y=0;y<k.length;y++)I=k[y],G={ease:I.e,duration:(I.t-(y?k[y-1].t:0))/100*l},G[T]=I.v,w.to(b,G,L),L+=G.duration;w.duration()<l&&w.to({},{duration:l-w.duration()})}}l||o.duration(l=w.duration())}else o.timeline=0;return f===!0&&!eh&&(mr=Wi(o),De.killTweensOf(b),mr=0),Pi(p,Wi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!l&&!g&&o._start===Be(p._time)&&Un(d)&&uy(Wi(o))&&p.data!==`nested`)&&(o._tTime=-ye,o.render(Math.max(0,-u)||0)),m&&gp(Wi(o),m),o}var e=t.prototype;return e.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,u=i<0,d=i>c-ye&&!u?c:i<ye?0:i,h,f,g,_,m,p,b,w;if(!l)dy(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(h=d,w=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&u)return this.totalTime(_*100+i,s,a);if(h=Be(d%_),d===c?(g=this._repeat,h=l):(m=Be(d/_),g=~~m,g&&g===m?(h=l,g--):h>l&&(h=l)),p=this._yoyo&&g&1,p&&(h=l-h),m=Fs(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Be(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(_p(this,u?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var y=h<o;if(y!==this._inv){var M=y?o:l-o;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=M?(y?-1:1)/M:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=b=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=b=this._ease(h/l);if(this._from&&(this.ratio=b=1-b),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(qn(this,`onStart`),this._tTime!==d))return this;for(f=this._pt;f;)f.r(b,f.d),f=f._next;w&&w.render(i<0?i:w._dur*w._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&$u(this,i,s,a),qn(this,`onUpdate`)),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&qn(this,`onRepeat`),(d===this._tDur||!d)&&this._tTime===d&&(u&&!this._onUpdate&&$u(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&xr(this,1),!s&&!(u&&!o)&&(d||o||p)&&(qn(this,d===c?`onComplete`:`onReverseComplete`,!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,a,o,c){Na||Nn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||mh(this,l),u=this._ease(l/this._dur),Iy(this,i,s,a,o,u,l,c)?this.resetTo(i,s,a,o,1):(tl(this,0),this.parent||pp(this._dp,this,`_first`,`_last`,this._dp._sort?`_start`:0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s=`all`),!i&&(!s||s===`all`))return this._lazy=this._pt=0,this.parent?Pa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!un),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,mr&&mr.vars.overwrite!==!0)._first||Pa(this),this.parent&&a!==this.timeline.totalDuration()&&Ns(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?ii(i):o,l=this._ptLookup,u=this._pt,d,h,f,g,_,m,p;if((!s||s===`all`)&&cy(o,c))return s===`all`&&(this._pt=0),Pa(this);for(d=this._op=this._op||[],s!==`all`&&(rn(s)&&(_={},En(s,function(b){return _[b]=1}),s=_),s=By(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){h=l[p],s===`all`?(d[p]=s,g=h,f={}):(f=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!(`kill`in m.d)||m.d.kill(_)===!0)&&Qc(this,m,`_pt`),delete h[_]),f!==`all`&&(f[_]=1)}return this._initted&&!this._pt&&u&&Pa(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return Ia(1,arguments)},t.delayedCall=function(i,s,a,o){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},t.fromTo=function(i,s,a){return Ia(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,a){return De.killTweensOf(i,s,a)},t})(Ua);$n(We.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});En(`staggerTo,staggerFrom,staggerFromTo`,function(r){We[r]=function(){var t=new xn,e=Zu.call(arguments,0);return e.splice(r===`staggerFromTo`?5:4,0,0),t[r].apply(t,e)}});var gh=function(t,e,n){return t[e]=n};var Ip=function(t,e,n){return t[e](n)};var Ly=function(t,e,n,i){return t[e](i.fp,n)};var Fy=function(t,e,n){return t.setAttribute(e,n)};var el=function(t,e){return Ue(t[e])?Ip:Zc(t[e])&&t.setAttribute?Fy:gh};var Bp=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)};var Ny=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)};var _h=function(t,e){var n=e._pt,i=``;if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)};var xh=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next};var Uy=function(t,e,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(t,e,n),s=a};var ky=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Qc(this,e,`_pt`):e.dep||(n=1),e=i;return!n};var zy=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)};var vh=function(t){for(var e=t._pt,n,i,s,a;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:a)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:a=e,e=n}t._pt=s};var wn=(function(){function r(e,n,i,s,a,o,c,l,u){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||Bp,this.d=c||this,this.set=l||gh,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=zy,this.m=n,this.mt=s,this.tween=i},r})();En(oh+`parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse`,function(r){return ah[r]=1});Yn.TweenMax=Yn.TweenLite=We;Yn.TimelineLite=Yn.TimelineMax=xn;De=new xn({sortChildren:!1,defaults:Da,autoRemoveChildren:!0,id:`root`,smoothChildTiming:!0});kn.stringFilter=hh;var Wr=[];var Wc={};var Gy=[];var ip=0;var Vy=0;var Hu=function(t){return(Wc[t]||Gy).map(function(e){return e()})};var th=function(){var t=Date.now(),e=[];t-ip>2&&(Hu(`matchMediaInit`),Wr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=Ai.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&e.push(n))}),Hu(`matchMediaRevert`),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),ip=t,Hu(`matchMedia`))};var Dp=(function(){function r(e,n){this.selector=n&&Ju(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Vy++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ue(n)&&(s=i,i=n,n=Ue);var a=this,o=function(){var l=Oe,u=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=Ju(s)),Oe=a,d=i.apply(a,arguments),Ue(d)&&a._r.push(d),Oe=l,a.selector=u,a.isReverted=!1,d};return a.last=o,n===Ue?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},t.ignore=function(n){var i=Oe;Oe=null,n(this),Oe=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof We&&!(i.parent&&i.parent.data===`nested`)&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data===`isFlip`&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}));for(o.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-Infinity,t:u}}).sort(function(u,d){return d.g-u.g||-Infinity}).forEach(function(u){return u.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof xn?l.data!==`nested`&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof We)&&l.revert&&l.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wr.length;a--;)Wr[a].id===this.id&&Wr.splice(a,1)},t.revert=function(n){this.kill(n||{})},r})();var Hy=(function(){function r(e){this.contexts=[],this.scope=e,Oe&&Oe.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Ri(n)||(n={matches:n});var a=new Dp(0,s||this.scope),o=a.conditions={},c,l,u;Oe&&!a.selector&&(a.selector=Oe.selector),this.contexts.push(a),i=a.add(`onMatch`,i),a.queries=n;for(l in n)l===`all`?u=1:(c=Ai.matchMedia(n[l]),c&&(Wr.indexOf(a)<0&&Wr.push(a),(o[l]=c.matches)&&(u=1),c.addListener?c.addListener(th):c.addEventListener(`change`,th)));return u&&i(a,function(d){return a.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})();var Kc={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return wp(i)})},timeline:function(t){return new xn(t)},getTweensOf:function(t,e){return De.getTweensOf(t,e)},getProperty:function(t,e,n,i){rn(t)&&(t=ii(t)[0]);var s=_r(t||{}).get,a=n?fp:dp;return n===`native`&&(n=``),t&&(e?a((Fn[e]&&Fn[e].get||s)(t,e,n,i)):function(o,c,l){return a((Fn[o]&&Fn[o].get||s)(t,o,c,l))})},quickSetter:function(t,e,n){if(t=ii(t),t.length>1){var i=t.map(function(u){return yn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var d=s;d--;)i[d](u)}}t=t[0]||{};var a=Fn[e],o=_r(t),c=o.harness&&(o.harness.aliases||{})[e]||e,l=a?function(u){var d=new a;Ds._pt=0,d.init(t,n?u+n:u,Ds,0,[t]),d.render(1,d),Ds._pt&&xh(1,Ds)}:o.set(t,c);return a?l:function(u){return l(t,c,n?u+n:u,o,1)}},quickTo:function(t,e,n){var i,s=yn.to(t,$n((i={},i[e]=`+=0.1`,i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,u){return s.resetTo(e,c,l,u)};return a.tween=s,a},isTweening:function(t){return De.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Hr(t.ease,Da.ease)),Qf(Da,t||{})},config:function(t){return Qf(kn,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,a=t.extendTimeline;(i||``).split(`,`).forEach(function(o){return o&&!Fn[o]&&!Yn[o]&&La(e+` effect requires `+o+` plugin.`)}),ku[e]=function(o,c,l){return n(ii(o),$n(c||{},s),l)},a&&(xn.prototype[e]=function(o,c,l){return this.add(ku[e](o,Ri(c)?c:(l=c)&&{},this),l)})},registerEase:function(t,e){se[t]=Hr(e)},parseEase:function(t,e){return arguments.length?Hr(t,e):se},getById:function(t){return De.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new xn(t),i,s;for(n.smoothChildTiming=Un(t.smoothChildTiming),De.remove(n),n._dp=0,n._time=n._tTime=De._time,i=De._first;i;)s=i._next,(e||!(!i._dur&&i instanceof We&&i.vars.onComplete===i._targets[0]))&&Pi(n,i,i._start-i._delay),i=s;return Pi(De,n,0),n},context:function(t,e){return t?new Dp(t,e):Oe},matchMedia:function(t){return new Hy(t)},matchMediaRefresh:function(){return Wr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||th()},addEventListener:function(t,e){var n=Wc[t]||(Wc[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Wc[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:yy,wrapYoyo:My,distribute:yp,random:bp,snap:Mp,normalize:vy,getUnit:hn,clamp:my,splitColor:Tp,toArray:ii,selector:Ju,mapRange:Cp,pipe:_y,unitize:xy,interpolate:by,shuffle:vp},install:cp,effects:ku,ticker:Nn,updateRoot:xn.updateRoot,plugins:Fn,globalTimeline:De,core:{PropTween:wn,globals:lp,Tween:We,Timeline:xn,Animation:Ua,getCache:_r,_removeLinkedListItem:Qc,reverting:function(){return un},context:function(t){return t&&Oe&&(Oe.data.push(t),t._ctx=Oe),Oe},suppressOverwrites:function(t){return eh=t}}};En(`to,from,fromTo,delayedCall,set,killTweensOf`,function(r){return Kc[r]=We[r]});Nn.add(xn.updateRoot);Ds=Kc.to({},{duration:0});var Wy=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n};var Xy=function(t,e){var n=t._targets,i,s,a;for(i in e)for(s=n.length;s--;)a=t._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Wy(a,i)),a&&a.modifier&&a.modifier(e[i],t,n[s],i))};var Wu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(rn(s)&&(c={},En(s,function(u){return c[u]=1}),s=c),e){c={};for(l in s)c[l]=e(s[l]);s=c}Xy(o,s)}}}};var yn=Kc.registerPlugin({name:`attr`,init:function(t,e,n,i,s){var a,o,c;this.tween=n;for(a in e)c=t.getAttribute(a)||``,o=this.add(t,`setAttribute`,(c||0)+``,e[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(t,e){for(var n=e._pt;n;)un?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:`endArray`,headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Wu(`roundProps`,Qu),Wu(`modifiers`),Wu(`snap`,Mp))||Kc;We.version=xn.version=yn.version=`3.15.0`;op=1;nh()&&Us();se.Power0;se.Power1;se.Power2;se.Power3;se.Power4;se.Linear;se.Quad;se.Cubic;se.Quart;se.Quint;se.Strong;se.Elastic;se.Back;se.SteppedEase;se.Bounce;se.Sine;se.Expo;se.Circ;var Lp;var yr;var Gs;var Eh;var Jr;var Fp;var wh;var h1=function(){return typeof window<`u`};var $i={};var Zr=180/Math.PI;var Vs=Math.PI/180;var zs=Math.atan2;var Np=1e8;var Th=/([A-Z])/g;var d1=/(left|right|width|margin|padding|x)/i;var f1=/[\s,\(]\S/;var Oi={autoAlpha:`opacity,visibility`,scale:`scaleX,scaleY`,alpha:`opacity`};var Mh=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)};var p1=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)};var m1=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)};var g1=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)};var _1=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)};var Xp=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)};var qp=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)};var x1=function(t,e,n){return t.style[e]=n};var v1=function(t,e,n){return t.style.setProperty(e,n)};var y1=function(t,e,n){return t._gsap[e]=n};var M1=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n};var b1=function(t,e,n,i,s){var a=t._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)};var S1=function(t,e,n,i,s){var a=t._gsap;a[e]=n,a.renderTransform(s,a)};var Le=`transform`;var zn=Le+`Origin`;var C1=function r(t,e){var n=this,i=this.target,s=i.style,a=i._gsap;if(t in $i&&s){if(this.tfm=this.tfm||{},t!==`transform`)t=Oi[t]||t,~t.indexOf(`,`)?t.split(`,`).forEach(function(o){return n.tfm[o]=Yi(i,o)}):this.tfm[t]=a.x?a[t]:Yi(i,t),t===zn&&(this.tfm.zOrigin=a.zOrigin);else return Oi.transform.split(`,`).forEach(function(o){return r.call(n,o,e)});if(this.props.indexOf(Le)>=0)return;a.svg&&(this.svgo=i.getAttribute(`data-svg-origin`),this.props.push(zn,e,``)),t=Le}(s||e)&&this.props.push(t,e,s[t])};var Yp=function(t){t.translate&&(t.removeProperty(`translate`),t.removeProperty(`scale`),t.removeProperty(`rotate`))};var E1=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,a;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)===`--`?t[s]:t[s].replace(Th,`-$1`).toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),e.setAttribute(`data-svg-origin`,this.svgo||``)),s=wh(),(!s||!s.isStart)&&!n[Le]&&(Yp(n),i.zOrigin&&n[zn]&&(n[zn]+=` `+i.zOrigin+`px`,i.zOrigin=0,i.renderTransform()),i.uncache=1)}};var $p=function(t,e){var n={target:t,props:[],revert:E1,save:C1};return t._gsap||yn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(`,`).forEach(function(i){return n.save(i)}),n};var Kp;var bh=function(t,e){var n=yr.createElementNS?yr.createElementNS((e||`http://www.w3.org/1999/xhtml`).replace(/^https/,`http`),t):yr.createElement(t);return n&&n.style?n:yr.createElement(t)};var Kn=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Th,`-$1`).toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Hs(e)||e,1)||``};var Up=`O,Moz,ms,Ms,Webkit`.split(`,`);var Hs=function(t,e,n){var s=(e||Jr).style,a=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);a--&&!(Up[a]+t in s););return a<0?null:(a===3?`ms`:a>=0?Up[a]:``)+t};var Sh=function(){h1()&&window.document&&(Lp=window,yr=Lp.document,Gs=yr.documentElement,Jr=bh(`div`)||{style:{}},bh(`div`),Le=Hs(Le),zn=Le+`Origin`,Jr.style.cssText=`border-width:0;line-height:0;position:absolute;padding:0`,Kp=!!Hs(`perspective`),wh=yn.core.reverting,Eh=1)};var kp=function(t){var e=t.ownerSVGElement,n=bh(`svg`,e&&e.getAttribute(`xmlns`)||`http://www.w3.org/2000/svg`),i=t.cloneNode(!0),s;i.style.display=`block`,n.appendChild(i),Gs.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Gs.removeChild(n),s};var zp=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])};var Zp=function(t){var e,n;try{e=t.getBBox()}catch{e=kp(t),n=1}return e&&(e.width||e.height)||n||(e=kp(t)),e&&!e.width&&!e.x&&!e.y?{x:+zp(t,[`x`,`cx`,`x1`])||0,y:+zp(t,[`y`,`cy`,`y1`])||0,width:0,height:0}:e};var Jp=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Zp(t))};var br=function(t,e){if(e){var n=t.style,i;e in $i&&e!==zn&&(e=Le),n.removeProperty?(i=e.substr(0,2),(i===`ms`||e.substr(0,6)===`webkit`)&&(e=`-`+e),n.removeProperty(i===`--`?e:e.replace(Th,`-$1`).toLowerCase())):n.removeAttribute(e)}};var Mr=function(t,e,n,i,s,a){var o=new wn(t._pt,e,n,0,1,a?qp:Xp);return t._pt=o,o.b=i,o.e=s,t._props.push(n),o};var Gp={deg:1,rad:1,turn:1};var w1={grid:1,flex:1};var Sr=function r(t,e,n,i){var s=parseFloat(n)||0,a=(n+``).trim().substr((s+``).length)||`px`,o=Jr.style,c=d1.test(e),l=t.tagName.toLowerCase()===`svg`,u=(l?`client`:`offset`)+(c?`Width`:`Height`),d=100,h=i===`px`,f=i===`%`,g,_,m,p;if(i===a||!s||Gp[i]||Gp[a])return s;if(a!==`px`&&!h&&(s=r(t,e,n,`px`)),p=t.getCTM&&Jp(t),(f||a===`%`)&&($i[e]||~e.indexOf(`adius`)))return g=p?t.getBBox()[c?`width`:`height`]:t[u],ke(f?s/g*d:s/100*g);if(o[c?`width`:`height`]=d+(h?a:i),_=i!==`rem`&&~e.indexOf(`adius`)||i===`em`&&t.appendChild&&!l?t:t.parentNode,p&&(_=(t.ownerSVGElement||{}).parentNode),(!_||_===yr||!_.appendChild)&&(_=yr.body),m=_._gsap,m&&f&&m.width&&c&&m.time===Nn.time&&!m.uncache)return ke(s/m.width*d);if(f&&(e===`height`||e===`width`)){var b=t.style[e];t.style[e]=d+i,g=t[u],b?t.style[e]=b:br(t,e)}else(f||a===`%`)&&!w1[Kn(_,`display`)]&&(o.position=Kn(t,`position`)),_===t&&(o.position=`static`),_.appendChild(Jr),g=Jr[u],_.removeChild(Jr),o.position=`absolute`;return c&&f&&(m=_r(_),m.time=Nn.time,m.width=_[u]),ke(h?g*s/d:g&&s?d/g*s:0)};var Yi=function(t,e,n,i){var s;return Eh||Sh(),e in Oi&&e!==`transform`&&(e=Oi[e],~e.indexOf(`,`)&&(e=e.split(`,`)[0])),$i[e]&&e!==`transform`?(s=Va(t,i),s=e!==`transformOrigin`?s[e]:s.svg?s.origin:il(Kn(t,zn))+` `+s.zOrigin+`px`):(s=t.style[e],(!s||s===`auto`||i||~(s+``).indexOf(`calc(`))&&(s=nl[e]&&nl[e](t,e,n)||Kn(t,e)||lh(t,e)||(e===`opacity`?1:0))),n&&!~(s+``).trim().indexOf(` `)?Sr(t,e,s,n)+n:s};var T1=function(t,e,n,i){if(!n||n===`none`){var s=Hs(e,t,1),a=s&&Kn(t,s,1);a&&a!==n?(e=s,n=a):e===`borderColor`&&(n=Kn(t,`borderTopColor`))}var o=new wn(this._pt,t.style,e,0,1,_h),c=0,l=0,u,d,h,f,g,_,m,p,b,w,y,M;if(o.b=n,o.e=i,n+=``,i+=``,i.substring(0,6)===`var(--`&&(i=Kn(t,i.substring(4,i.indexOf(`)`)))),i===`auto`&&(_=t.style[e],t.style[e]=i,i=Kn(t,e)||i,_?t.style[e]=_:br(t,e)),u=[n,i],hh(u),n=u[0],i=u[1],h=n.match(Xr)||[],M=i.match(Xr)||[],M.length){for(;d=Xr.exec(i);)m=d[0],b=i.substring(c,d.index),g?g=(g+1)%5:(b.substr(-5)===`rgba(`||b.substr(-5)===`hsla(`)&&(g=1),m!==(_=h[l++]||``)&&(f=parseFloat(_)||0,y=_.substr((f+``).length),m.charAt(1)===`=`&&(m=qr(f,m)+y),p=parseFloat(m),w=m.substr((p+``).length),c=Xr.lastIndex-w.length,w||(w=w||kn.units[e]||y,c===i.length&&(i+=w,o.e+=w)),y!==w&&(f=Sr(t,e,_,w)||0),o._pt={_next:o._pt,p:b||l===1?b:`,`,s:f,c:p-f,m:g&&g<4||e===`zIndex`?Math.round:0});o.c=c<i.length?i.substring(c,i.length):``}else o.r=e===`display`&&i===`none`?qp:Xp;return rh.test(i)&&(o.e=0),this._pt=o,o};var Vp={top:`0%`,bottom:`100%`,left:`0%`,right:`100%`,center:`50%`};var A1=function(t){var e=t.split(` `),n=e[0],i=e[1]||`50%`;return(n===`top`||n===`bottom`||i===`left`||i===`right`)&&(t=n,n=i,i=t),e[0]=Vp[n]||n,e[1]=Vp[i]||i,e.join(` `)};var P1=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,a=n._gsap,o,c,l;if(s===`all`||s===!0)i.cssText=``,c=1;else for(s=s.split(`,`),l=s.length;--l>-1;)o=s[l],$i[o]&&(c=1,o=o===`transformOrigin`?zn:Le),br(n,o);c&&(br(n,Le),a&&(a.svg&&n.removeAttribute(`transform`),i.scale=i.rotate=i.translate=`none`,Va(n,1),a.uncache=1,Yp(i)))}};var nl={clearProps:function(t,e,n,i,s){if(s.data!==`isFromStart`){var a=t._pt=new wn(t._pt,e,n,0,0,P1);return a.u=i,a.pr=-10,a.tween=s,t._props.push(n),1}}};var Ga=[1,0,0,1,0,0];var Qp={};var jp=function(t){return t===`matrix(1, 0, 0, 1, 0, 0)`||t===`none`||!t};var Hp=function(t){var e=Kn(t,Le);return jp(e)?Ga:e.substr(7).match(ih).map(ke)};var Ah=function(t,e){var n=t._gsap||_r(t),i=t.style,s=Hp(t),a,o,c,l;return n.svg&&t.getAttribute(`transform`)?(c=t.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(`,`)===`1,0,0,1,0,0`?Ga:s):(s===Ga&&!t.offsetParent&&t!==Gs&&!n.svg&&(c=i.display,i.display=`block`,a=t.parentNode,(!a||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,Gs.appendChild(t)),s=Hp(t),c?i.display=c:br(t,`display`),l&&(o?a.insertBefore(t,o):a?a.appendChild(t):Gs.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)};var Ch=function(t,e,n,i,s,a){var o=t._gsap,c=s||Ah(t,!0),l=o.xOrigin||0,u=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,f=c[0],g=c[1],_=c[2],m=c[3],p=c[4],b=c[5],w=e.split(` `),y=parseFloat(w[0])||0,M=parseFloat(w[1])||0,E,T,x,C;n?c!==Ga&&(T=f*m-g*_)&&(x=y*(m/T)+M*(-_/T)+(_*b-m*p)/T,C=y*(-g/T)+M*(f/T)-(f*b-g*p)/T,y=x,M=C):(E=Zp(t),y=E.x+(~w[0].indexOf(`%`)?y/100*E.width:y),M=E.y+(~(w[1]||w[0]).indexOf(`%`)?M/100*E.height:M)),i||i!==!1&&o.smooth?(p=y-l,b=M-u,o.xOffset=d+(p*f+b*_)-p,o.yOffset=h+(p*g+b*m)-b):o.xOffset=o.yOffset=0,o.xOrigin=y,o.yOrigin=M,o.smooth=!!i,o.origin=e,o.originIsAbsolute=!!n,t.style[zn]=`0px 0px`,a&&(Mr(a,o,`xOrigin`,l,y),Mr(a,o,`yOrigin`,u,M),Mr(a,o,`xOffset`,d,o.xOffset),Mr(a,o,`yOffset`,h,o.yOffset)),t.setAttribute(`data-svg-origin`,y+` `+M)};var Va=function(t,e){var n=t._gsap||new dh(t);if(`x`in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,a=`px`,o=`deg`,c=getComputedStyle(t),l=Kn(t,zn)||`0`,u,d,h,f,g,_,m,p,b,w,y,M,E,T,x,C,P,B,L,k,I,G,Y,$,rt,Z,tt,ot,wt,Pt,$t,Wt;return u=d=h=_=m=p=b=w=y=0,f=g=1,n.svg=!!(t.getCTM&&Jp(t)),c.translate&&((c.translate!==`none`||c.scale!==`none`||c.rotate!==`none`)&&(i[Le]=(c.translate!==`none`?`translate3d(`+(c.translate+` 0 0`).split(` `).slice(0,3).join(`, `)+`) `:``)+(c.rotate!==`none`?`rotate(`+c.rotate+`) `:``)+(c.scale!==`none`?`scale(`+c.scale.split(` `).join(`,`)+`) `:``)+(c[Le]!==`none`?c[Le]:``)),i.scale=i.rotate=i.translate=`none`),T=Ah(t,n.svg),n.svg&&(n.uncache?(rt=t.getBBox(),l=n.xOrigin-rt.x+`px `+(n.yOrigin-rt.y)+`px`,$=``):$=!e&&t.getAttribute(`data-svg-origin`),Ch(t,$||l,!!$||n.originIsAbsolute,n.smooth!==!1,T)),M=n.xOrigin||0,E=n.yOrigin||0,T!==Ga&&(B=T[0],L=T[1],k=T[2],I=T[3],u=G=T[4],d=Y=T[5],T.length===6?(f=Math.sqrt(B*B+L*L),g=Math.sqrt(I*I+k*k),_=B||L?zs(L,B)*Zr:0,b=k||I?zs(k,I)*Zr+_:0,b&&(g*=Math.abs(Math.cos(b*Vs))),n.svg&&(u-=M-(M*B+E*k),d-=E-(M*L+E*I))):(Wt=T[6],Pt=T[7],tt=T[8],ot=T[9],wt=T[10],$t=T[11],u=T[12],d=T[13],h=T[14],x=zs(Wt,wt),m=x*Zr,x&&(C=Math.cos(-x),P=Math.sin(-x),$=G*C+tt*P,rt=Y*C+ot*P,Z=Wt*C+wt*P,tt=G*-P+tt*C,ot=Y*-P+ot*C,wt=Wt*-P+wt*C,$t=Pt*-P+$t*C,G=$,Y=rt,Wt=Z),x=zs(-k,wt),p=x*Zr,x&&(C=Math.cos(-x),P=Math.sin(-x),$=B*C-tt*P,rt=L*C-ot*P,Z=k*C-wt*P,$t=I*P+$t*C,B=$,L=rt,k=Z),x=zs(L,B),_=x*Zr,x&&(C=Math.cos(x),P=Math.sin(x),$=B*C+L*P,rt=G*C+Y*P,L=L*C-B*P,Y=Y*C-G*P,B=$,G=rt),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),f=ke(Math.sqrt(B*B+L*L+k*k)),g=ke(Math.sqrt(Y*Y+Wt*Wt)),x=zs(G,Y),b=Math.abs(x)>2e-4?x*Zr:0,y=$t?1/($t<0?-$t:$t):0),n.svg&&($=t.getAttribute(`transform`),n.forceCSS=t.setAttribute(`transform`,``)||!jp(Kn(t,Le)),$&&t.setAttribute(`transform`,$))),Math.abs(b)>90&&Math.abs(b)<270&&(s?(f*=-1,b+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,b+=b<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=ke(f),n.scaleY=ke(g),n.rotation=ke(_)+o,n.rotationX=ke(m)+o,n.rotationY=ke(p)+o,n.skewX=b+o,n.skewY=w+o,n.transformPerspective=y+a,(n.zOrigin=parseFloat(l.split(` `)[2])||!e&&n.zOrigin||0)&&(i[zn]=il(l)),n.xOffset=n.yOffset=0,n.force3D=kn.force3D,n.renderTransform=n.svg?O1:Kp?tm:R1,n.uncache=0,n};var il=function(t){return(t=t.split(` `))[0]+` `+t[1]};var yh=function(t,e,n){var i=hn(e);return ke(parseFloat(e)+parseFloat(Sr(t,`x`,n+`px`,i)))+i};var R1=function(t,e){e.z=`0px`,e.rotationY=e.rotationX=`0deg`,e.force3D=0,tm(t,e)};var $r=`0deg`;var za=`0px`;var Kr=`) `;var tm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,u=n.rotationY,d=n.rotationX,h=n.skewX,f=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,b=n.target,w=n.zOrigin,y=``,M=p===`auto`&&t&&t!==1||p===!0;if(w&&(d!==$r||u!==$r)){var E=parseFloat(u)*Vs,T=Math.sin(E),x=Math.cos(E),C;E=parseFloat(d)*Vs,C=Math.cos(E),a=yh(b,a,T*C*-w),o=yh(b,o,-Math.sin(E)*-w),c=yh(b,c,x*C*-w+w)}m!==za&&(y+=`perspective(`+m+Kr),(i||s)&&(y+=`translate(`+i+`%, `+s+`%) `),(M||a!==za||o!==za||c!==za)&&(y+=c!==za||M?`translate3d(`+a+`, `+o+`, `+c+`) `:`translate(`+a+`, `+o+Kr),l!==$r&&(y+=`rotate(`+l+Kr),u!==$r&&(y+=`rotateY(`+u+Kr),d!==$r&&(y+=`rotateX(`+d+Kr),(h!==$r||f!==$r)&&(y+=`skew(`+h+`, `+f+Kr),(g!==1||_!==1)&&(y+=`scale(`+g+`, `+_+Kr),b.style[Le]=y||`translate(0, 0)`};var O1=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,u=n.skewY,d=n.scaleX,h=n.scaleY,f=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,b=n.forceCSS,w=parseFloat(a),y=parseFloat(o),M,E,T,x,C;c=parseFloat(c),l=parseFloat(l),u=parseFloat(u),u&&(u=parseFloat(u),l+=u,c+=u),c||l?(c*=Vs,l*=Vs,M=Math.cos(c)*d,E=Math.sin(c)*d,T=Math.sin(c-l)*-h,x=Math.cos(c-l)*h,l&&(u*=Vs,C=Math.tan(l-u),C=Math.sqrt(1+C*C),T*=C,x*=C,u&&(C=Math.tan(u),C=Math.sqrt(1+C*C),M*=C,E*=C)),M=ke(M),E=ke(E),T=ke(T),x=ke(x)):(M=d,x=h,E=T=0),(w&&!~(a+``).indexOf(`px`)||y&&!~(o+``).indexOf(`px`))&&(w=Sr(f,`x`,a,`px`),y=Sr(f,`y`,o,`px`)),(g||_||m||p)&&(w=ke(w+g-(g*M+_*T)+m),y=ke(y+_-(g*E+_*x)+p)),(i||s)&&(C=f.getBBox(),w=ke(w+i/100*C.width),y=ke(y+s/100*C.height)),C=`matrix(`+M+`,`+E+`,`+T+`,`+x+`,`+w+`,`+y+`)`,f.setAttribute(`transform`,C),b&&(f.style[Le]=C)};var I1=function(t,e,n,i,s){var a=360,o=rn(s),l=parseFloat(s)*(o&&~s.indexOf(`rad`)?Zr:1)-i,u=i+l+`deg`,d,h;return o&&(d=s.split(`_`)[1],d===`short`&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d===`cw`&&l<0?l=(l+a*Np)%a-~~(l/a)*a:d===`ccw`&&l>0&&(l=(l-a*Np)%a-~~(l/a)*a)),t._pt=h=new wn(t._pt,e,n,i,l,p1),h.e=u,h.u=`deg`,t._props.push(n),h};var Wp=function(t,e){for(var n in e)t[n]=e[n];return t};var B1=function(t,e,n){var i=Wp({},n._gsap),s=`perspective,force3D,transformOrigin,svgOrigin`,a=n.style,o,c,l,u,d,h,f,g;i.svg?(l=n.getAttribute(`transform`),n.setAttribute(`transform`,``),a[Le]=e,o=Va(n,1),br(n,Le),n.setAttribute(`transform`,l)):(l=getComputedStyle(n)[Le],a[Le]=e,o=Va(n,1),a[Le]=l);for(c in $i)l=i[c],u=o[c],l!==u&&s.indexOf(c)<0&&(f=hn(l),g=hn(u),d=f!==g?Sr(n,c,l,g):parseFloat(l),h=parseFloat(u),t._pt=new wn(t._pt,o,c,d,h-d,Mh),t._pt.u=g||0,t._props.push(c));Wp(o,i)};En(`padding,margin,Width,Radius`,function(r,t){var e=`Top`,n=`Right`,i=`Bottom`,s=`Left`,a=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(o){return t<2?r+o:`border`+o+r});nl[t>1?`border`+r:r]=function(o,c,l,u,d){var h,f;if(arguments.length<4)return h=a.map(function(g){return Yi(o,g,l)}),f=h.join(` `),f.split(h[0]).length===5?h[0]:f;h=(u+``).split(` `),f={},a.forEach(function(g,_){return f[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(c,f,d)}});var Ph={name:`css`,register:Sh,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var a=this._props,o=t.style,c=n.vars.startAt,l,u,d,h,f,g,_,m,p,b,w,y,M,E,T,x,C;Eh||Sh(),this.styles=this.styles||$p(t),x=this.styles.props,this.tween=n;for(_ in e)if(_!==`autoRound`&&(u=e[_],!(Fn[_]&&ph(_,e,n,i,t,s)))){if(f=typeof u,g=nl[_],f===`function`&&(u=u.call(n,i,t,s),f=typeof u),f===`string`&&~u.indexOf(`random(`)&&(u=ks(u)),g)g(this,t,_,u,n)&&(T=1);else if(_.substr(0,2)===`--`)l=(getComputedStyle(t).getPropertyValue(_)+``).trim(),u+=``,Xi.lastIndex=0,Xi.test(l)||(m=hn(l),p=hn(u),p?m!==p&&(l=Sr(t,_,l,p)+p):m&&(u+=m)),this.add(o,`setProperty`,l,u,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(f!==`undefined`){if(c&&_ in c?(l=typeof c[_]==`function`?c[_].call(n,i,t,s):c[_],rn(l)&&~l.indexOf(`random(`)&&(l=ks(l)),hn(l+``)||l===`auto`||(l+=kn.units[_]||hn(Yi(t,_))||``),(l+``).charAt(1)===`=`&&(l=Yi(t,_))):l=Yi(t,_),h=parseFloat(l),b=f===`string`&&u.charAt(1)===`=`&&u.substr(0,2),b&&(u=u.substr(2)),d=parseFloat(u),_ in Oi&&(_===`autoAlpha`&&(h===1&&Yi(t,`visibility`)===`hidden`&&d&&(h=0),x.push(`visibility`,0,o.visibility),Mr(this,o,`visibility`,h?`inherit`:`hidden`,d?`inherit`:`hidden`,!d)),_!==`scale`&&_!==`transform`&&(_=Oi[_],~_.indexOf(`,`)&&(_=_.split(`,`)[0]))),w=_ in $i,w){if(this.styles.save(_),C=u,f===`string`&&u.substring(0,6)===`var(--`){if(u=Kn(t,u.substring(4,u.indexOf(`)`))),u.substring(0,5)===`calc(`){var P=t.style.perspective;t.style.perspective=u,u=Kn(t,`perspective`),P?t.style.perspective=P:br(t,`perspective`)}d=parseFloat(u)}if(y||(M=t._gsap,M.renderTransform&&!e.parseTransform||Va(t,e.parseTransform),E=e.smoothOrigin!==!1&&M.smooth,y=this._pt=new wn(this._pt,o,Le,0,1,M.renderTransform,M,0,-1),y.dep=1),_===`scale`)this._pt=new wn(this._pt,M,`scaleY`,M.scaleY,(b?qr(M.scaleY,b+d):d)-M.scaleY||0,Mh),this._pt.u=0,a.push(`scaleY`,_),_+=`X`;else if(_===`transformOrigin`){x.push(zn,0,o[zn]),u=A1(u),M.svg?Ch(t,u,0,E,0,this):(p=parseFloat(u.split(` `)[2])||0,p!==M.zOrigin&&Mr(this,M,`zOrigin`,M.zOrigin,p),Mr(this,o,_,il(l),il(u)));continue}else if(_===`svgOrigin`){Ch(t,u,1,E,0,this);continue}else if(_ in Qp){I1(this,M,_,h,b?qr(h,b+u):u);continue}else if(_===`smoothOrigin`){Mr(this,M,`smooth`,M.smooth,u);continue}else if(_===`force3D`){M[_]=u;continue}else if(_===`transform`){B1(this,u,t);continue}}else _ in o||(_=Hs(_)||_);if(w||(d||d===0)&&(h||h===0)&&!f1.test(u)&&_ in o)m=(l+``).substr((h+``).length),d||(d=0),p=hn(u)||(_ in kn.units?kn.units[_]:m),m!==p&&(h=Sr(t,_,l,p)),this._pt=new wn(this._pt,w?M:o,_,h,(b?qr(h,b+d):d)-h,!w&&(p===`px`||_===`zIndex`)&&e.autoRound!==!1?_1:Mh),this._pt.u=p||0,w&&C!==u?(this._pt.b=l,this._pt.e=C,this._pt.r=g1):m!==p&&p!==`%`&&(this._pt.b=l,this._pt.r=m1);else if(_ in o)T1.call(this,t,_,l,b?b+u:u);else if(_ in t)this.add(t,_,l||t[_],b?b+u:u,i,s);else if(_!==`parseTransform`){Jc(_,u);continue}w||(_ in o?x.push(_,0,o[_]):typeof t[_]==`function`?x.push(_,2,t[_]()):x.push(_,1,l||t[_])),a.push(_)}}T&&vh(this)},render:function(t,e){if(e.tween._time||!wh())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Yi,aliases:Oi,getSetter:function(t,e,n){var i=Oi[e];return i&&i.indexOf(`,`)<0&&(e=i),e in $i&&e!==zn&&(t._gsap.x||Yi(t,`x`))?n&&Fp===n?e===`scale`?M1:y1:(Fp=n||{})&&(e===`scale`?b1:S1):t.style&&!Zc(t.style[e])?x1:~e.indexOf(`-`)?v1:el(t,e)},core:{_removeProperty:br,_getMatrix:Ah}};yn.utils.checkPrefix=Hs;yn.core.getStyleSaver=$p;(function(r,t,e,n){var i=En(r+`,`+t+`,`+e,function(s){$i[s]=1});En(t,function(s){kn.units[s]=`deg`,Qp[s]=1}),Oi[i[13]]=r+`,`+t,En(n,function(s){var a=s.split(`:`);Oi[a[1]]=i[a[0]]})})(`x,y,z,scale,scaleX,scaleY,xPercent,yPercent`,`rotation,rotationX,rotationY,skewX,skewY`,`transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective`,`0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY`);En(`x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective`,function(r){kn.units[r]=`px`});yn.registerPlugin(Ph);var Rh=yn.registerPlugin(Ph)||yn;Rh.core.Tween;var D1=(r,t)=>t.id;function L1(r,t){if(r&1&&(Nl$1(0,`div`,3)(1,`div`,4)(2,`span`,5),GI(3),Al$1()(),Nl$1(4,`div`,6)(5,`div`,7)(6,`span`,8),GI(7,`0`),Al$1(),Nl$1(8,`span`,9),GI(9),Al$1()(),Nl$1(10,`h4`,10),GI(11),Al$1(),Nl$1(12,`p`,11),GI(13),Al$1()()()),r&2){let e=t.$implicit,n=MI();mC(3),pm$1(e.icon),mC(3),im(`id`,`counter-`+e.id),mC(3),pm$1(e.suffix),mC(2),pm$1(n.i18n.t(e.labelKey)),mC(2),pm$1(n.i18n.t(e.subKey))}}var rl=class r{constructor(t){this.el=t}el;i18n=h(qv$1);stats=[{id:`stat1`,target:1e4,suffix:`+`,labelKey:`stats.happyRiders`,subKey:`stats.happyRidersSub`,icon:`🚕`},{id:`stat2`,target:500,suffix:`+`,labelKey:`stats.drivers`,subKey:`stats.driversSub`,icon:`👨‍✈️`},{id:`stat3`,target:24,suffix:`/7`,labelKey:`stats.support`,subKey:`stats.supportSub`,icon:`🕒`},{id:`stat4`,target:4.9,suffix:`★`,labelKey:`stats.rating`,subKey:`stats.ratingSub`,icon:`⭐`,isDecimal:!0}];ngOnInit(){}ngAfterViewInit(){typeof window<`u`&&this.initCounters()}initCounters(){let t=new IntersectionObserver(e=>{e.forEach(n=>{n.isIntersecting&&(this.stats.forEach(i=>{let s=document.getElementById(`counter-${i.id}`);if(s){let a={val:0};Rh.to(a,{val:i.target,duration:2.2,ease:`power2.out`,onUpdate:()=>{i.isDecimal?s.innerText=a.val.toFixed(1):s.innerText=Math.floor(a.val).toLocaleString(`en-IN`)}})}}),t.disconnect())})},{threshold:.2});t.observe(this.el.nativeElement)}static ɵfac=function(e){return new(e||r)(ye$1(ft))};static ɵcmp=wl$1({type:r,selectors:[[`app-statistics`]],decls:5,vars:0,consts:[[1,`stats-section`],[1,`container`],[1,`stats-grid`],[1,`stat-card`,`glass-card`],[1,`stat-icon-wrapper`],[1,`stat-icon`],[1,`stat-content`],[1,`stat-number-wrap`],[1,`counter-val`,3,`id`],[1,`suffix`],[1,`stat-label`],[1,`stat-sub`]],template:function(e,n){e&1&&(Nl$1(0,`section`,0)(1,`div`,1)(2,`div`,2),EI(3,L1,14,5,`div`,3,D1),Al$1()()()),e&2&&(mC(3),CI(n.stats))},dependencies:[xm$1],styles:[`.stats-section[_ngcontent-%COMP%]{position:relative;margin-top:-2rem;margin-bottom:2rem;z-index:10}.stats-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1.25rem}@media(min-width:640px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.stats-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.stat-card[_ngcontent-%COMP%]{padding:1.8rem 1.5rem;display:flex;align-items:center;gap:1.25rem;background:#ffffffe6;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.95);border-radius:28px;box-shadow:0 10px 30px #0f172a0f}.stat-card[_ngcontent-%COMP%]   .stat-icon-wrapper[_ngcontent-%COMP%]{width:58px;height:58px;border-radius:20px;background:linear-gradient(135deg,#ffc10733,#ff6b3526);display:flex;align-items:center;justify-content:center;font-size:1.8rem;flex-shrink:0;box-shadow:0 4px 15px #ffc10733}.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-number-wrap[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.15rem;font-family:Outfit,sans-serif;font-size:2.2rem;font-weight:800;color:#0f172a;line-height:1.1}.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-number-wrap[_ngcontent-%COMP%]   .counter-val[_ngcontent-%COMP%]{color:#0f172a}.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-number-wrap[_ngcontent-%COMP%]   .suffix[_ngcontent-%COMP%]{color:#d32f2f}.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%]{font-size:1rem;font-weight:700;color:#0f172a;margin-top:.15rem;margin-bottom:.15rem}.stat-card[_ngcontent-%COMP%]   .stat-content[_ngcontent-%COMP%]   .stat-sub[_ngcontent-%COMP%]{font-size:.78rem;color:#64748b}`]})};var F1=(r,t)=>t.id;function N1(r,t){if(r&1&&(Fs$1(0,`li`)(1,`span`,29),GI(2,`✓`),Ml$1(),Fs$1(3,`span`),GI(4),Ml$1()()),r&2){let e=t.$implicit;mC(4),pm$1(e)}}function U1(r,t){if(r&1){let e=SI();Fs$1(0,`article`,8)(1,`div`,14)(2,`div`,15)(3,`span`,16),GI(4),Ml$1(),Fs$1(5,`span`,17),GI(6),Ml$1()(),Fs$1(7,`h3`,18),GI(8),Ml$1(),Fs$1(9,`p`,19),GI(10),Ml$1()(),Fs$1(11,`p`,20),GI(12),Ml$1(),Fs$1(13,`div`,21)(14,`div`,22),GI(15),Ml$1(),Fs$1(16,`ul`,23),EI(17,N1,5,1,`li`,null,DI),Ml$1()(),Fs$1(19,`div`,24)(20,`button`,25),ea$1(`click`,function(){let i=np$1(e).$implicit;return rp$1(MI().bookService(i))}),Fs$1(21,`span`),GI(22),Ml$1(),vp$1(),Fs$1(23,`svg`,26),Xs$1(24,`line`,27)(25,`polyline`,28),Ml$1()()()()}if(r&2){let e=t.$implicit,n=MI();mC(4),pm$1(e.icon),mC(2),pm$1(n.i18n.isTamil()?e.badgeTa:e.badgeEn),mC(2),pm$1(n.i18n.isTamil()?e.titleTa:e.titleEn),mC(2),pm$1(n.i18n.isTamil()?e.subtitleTa:e.subtitleEn),mC(2),Ol$1(` `,n.i18n.isTamil()?e.descTa:e.descEn,` `),mC(3),pm$1(n.i18n.isTamil()?`சிறப்பம்சங்கள்:`:`Key Highlights:`),mC(2),CI(n.i18n.isTamil()?e.highlightsTa:e.highlightsEn),mC(5),pm$1(n.i18n.isTamil()?`வாட்ஸ்அப்பில் புக் செய்ய`:`Book on WhatsApp`)}}var sl=class r{i18n=h(qv$1);taxiData=h(Wv$1);services=[{id:`local-city-rides`,icon:`🚕`,titleEn:`Local City Rides in Sankarankovil`,titleTa:`சங்கரன்கோவில் உள்ளூர் டாக்ஸி பயணம்`,subtitleEn:`Point-to-Point 10-Min Doorstep Pickup`,subtitleTa:`10 நிமிடங்களில் உங்கள் வாசலில் வாகனம்`,descEn:`Quick, dependable rides across Sankarankovil, Karivalam, Kalappakulam, and surrounding towns with polite verified drivers and honest per-km billing.`,descTa:`சங்கரன்கோவில் நகர், கரிவலம்வந்தநல்லூர், களப்பாகுளம் மற்றும் சுற்றுவட்டார பகுதிகளுக்கு உடனடி 10 நிமிட பிக்கப் சேவை.`,badgeEn:`10-Min Pickup`,badgeTa:`10 நிமிடம்`,highlightsEn:[`Doorstep pickup across Sankarankovil`,`No peak-hour surge pricing`,`Hospital, railway & shopping drops`],highlightsTa:[`வீட்டு வாசலிலேயே பிக்கப்`,`பீக் ஹவர் கூடுதல் கட்டணம் இல்லை`,`மருத்துவமனை, ரயில் நிலைய பயணங்கள்`]},{id:`outstation-cabs`,icon:`🛣️`,titleEn:`One-Way & Round-Trip Outstation Cabs`,titleTa:`ஒரு வழி & இரு வழி வெளியூர் டாக்ஸி`,subtitleEn:`Madurai, Tirunelveli, Tenkasi & Chennai`,subtitleTa:`மதுரை, திருநெல்வேலி, தென்காசி, சென்னை`,descEn:`Affordable one-way drop taxis and multi-day round trips to Madurai, Tirunelveli, Tenkasi, Rajapalayam, Sivakasi, and Chennai starting at just ₹14/KM.`,descTa:`மதுரை, திருநெல்வேலி, தென்காசி, ராஜபாளையம், சிவகாசி மற்றும் சென்னைக்கு ₹14/கி.மீ முதல் தொடங்கும் சிக்கனமான வெளியூர் டாக்ஸி.`,badgeEn:`From ₹14/KM`,badgeTa:`₹14/கி.மீ முதல்`,highlightsEn:[`One-way drop options with zero return fee`,`Fastag equipped on all toll highways`,`Round trips with minimal waiting charges`],highlightsTa:[`ஒரு வழி டிராப் வசதி`,`அனைத்து சுங்கச்சாவடிகளிலும் Fastag`,`குறைந்த காத்திருப்பு கட்டணங்கள்`]},{id:`airport-railway-transfers`,icon:`✈️`,titleEn:`Airport & Railway Transfers`,titleTa:`விமான நிலையம் & ரயில் நிலைய டிராப்`,subtitleEn:`Madurai (IXM) & Tuticorin (TCR) Airports`,subtitleTa:`மதுரை & தூத்துக்குடி விமான நிலையங்கள்`,descEn:`Guaranteed punctual 24/7 transfers to Madurai International Airport (120 KM) and Tuticorin Airport (95 KM). Live flight tracking and early-morning 2 AM / 3 AM pickups.`,descTa:`மதுரை (120 கி.மீ), தூத்துக்குடி (95 கி.மீ) விமான நிலையங்களுக்கு 24/7 குறித்த நேரத்தில் பாதுகாப்பான விமான நிலைய பயணம்.`,badgeEn:`24/7 Punctual`,badgeTa:`24/7 தயார்`,highlightsEn:[`Flight schedule monitoring buffer`,`Midnight & early dawn dispatch`,`Luggage assistance for family travelers`],highlightsTa:[`விமான நேர கண்காணிப்பு வசதி`,`அதிகாலை 2:00 / 3:00 மணி உடனடி சேவை`,`லக்கேஜ் உதவி மற்றும் பெரிய டிக்கி வசதி`]},{id:`temple-sightseeing-tours`,icon:`🛕`,titleEn:`Temple & Sightseeing Tour Packages`,titleTa:`கோவில் சுற்றுலா & ஆன்மீக யாத்திரை`,subtitleEn:`Sankaranarayanar Temple & Courtallam`,subtitleTa:`சங்கரநாராயணர் கோவில் & குற்றாலம்`,descEn:`Dedicated spiritual circuits to Sri Sankaranarayanaswamy Temple, Courtallam Falls, Tiruchendur Murugan Temple, Madurai Meenakshi Amman & Papanasam.`,descTa:`அருள்மிகு சங்கரநாராயணர் கோவில், குற்றால அருவிகள், திருச்செந்தூர் முருகன் கோவில் மற்றும் மதுரை மீனாட்சி அம்மன் ஆன்மீக சுற்றுலா பேக்கேஜ்கள்.`,badgeEn:`Heritage Tour`,badgeTa:`ஆன்மீக சுற்றுலா`,highlightsEn:[`Relaxed darshan waiting flexibility`,`Experienced pilgrimage route drivers`,`Senior citizen & family comfortable cabs`],highlightsTa:[`சுவாமி தரிசனத்திற்கு தாராள காத்திருப்பு`,`புனித தலங்களை அறிந்த ஓட்டுநர்கள்`,`முதியவர்கள் & குடும்பத்தினருக்கு ஏற்ற கார்கள்`]}];bookService(t){let e=`Hello Rider Call Taxi, I would like to book "${t.titleEn}" from Sankarankovil. Please share availability and fare details.`,n=`https://wa.me/919363015586?text=${encodeURIComponent(e)}`;typeof window<`u`&&window.open(n,`_blank`)}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-services-overview`]],decls:31,vars:5,consts:[[`id`,`services-section`,1,`section`,`services-overview-section`],[1,`container`],[1,`section-header`],[1,`section-badge`],[1,`section-title`],[1,`highlight-yellow`],[1,`section-subtitle`],[1,`services-overview-grid`],[1,`service-overview-card`,`glass-card`],[1,`services-seo-footer`],[1,`seo-tags-wrapper`],[1,`seo-label`],[1,`seo-pills`],[`routerLink`,`/pricing`,1,`seo-pill`],[1,`card-head`],[1,`icon-badge-row`],[1,`service-icon`],[1,`service-badge`],[1,`service-title`],[1,`service-subtitle`],[1,`service-desc`],[1,`service-highlights`],[1,`highlights-label`],[1,`highlights-list`],[1,`service-actions`],[1,`btn`,`btn-whatsapp`,`w-full`,3,`click`],[`viewBox`,`0 0 24 24`,`width`,`18`,`height`,`18`,`fill`,`none`,`stroke`,`currentColor`,`stroke-width`,`2.5`],[`x1`,`5`,`y1`,`12`,`x2`,`19`,`y2`,`12`],[`points`,`12 5 19 12 12 19`],[1,`check-icon`]],template:function(e,n){e&1&&(Fs$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3),GI(4),Ml$1(),Fs$1(5,`h2`,4),GI(6),Fs$1(7,`span`,5),GI(8),Ml$1()(),Fs$1(9,`p`,6),GI(10),Ml$1()(),Fs$1(11,`div`,7),EI(12,U1,26,7,`article`,8,F1),Ml$1(),Fs$1(14,`div`,9)(15,`div`,10)(16,`span`,11),GI(17),Ml$1(),Fs$1(18,`div`,12)(19,`a`,13),GI(20,`Sankarankovil to Madurai Cab`),Ml$1(),Fs$1(21,`a`,13),GI(22,`Sankarankovil to Tirunelveli Taxi`),Ml$1(),Fs$1(23,`a`,13),GI(24,`Sankarankovil to Tenkasi / Courtallam`),Ml$1(),Fs$1(25,`a`,13),GI(26,`Sankarankovil to Rajapalayam Taxi`),Ml$1(),Fs$1(27,`a`,13),GI(28,`Sankarankovil to Tuticorin Airport Drop`),Ml$1(),Fs$1(29,`a`,13),GI(30,`Sankarankovil to Chennai One-Way Taxi`),Ml$1()()()()()()),e&2&&(mC(4),pm$1(n.i18n.isTamil()?`நமது சேவைகள்`:`OUR PREMIER SERVICES`),mC(2),Ol$1(` `,n.i18n.isTamil()?`சங்கரன்கோவில் மற்றும் தென்காசி மாவட்ட`:`Taxi Services in Sankarankovil &`,` `),mC(2),pm$1(n.i18n.isTamil()?`டாக்ஸி சேவைகள்`:`Tenkasi District`),mC(2),Ol$1(` `,n.i18n.isTamil()?`உள்ளூர் பயணம் முதல் ஒரு வழி வெளியூர் டாக்ஸி, விமான நிலைய டிராப் மற்றும் ஆன்மீக சுற்றுலா வரை 24 மணி நேர நம்பகமான கால் டாக்ஸி சேவை.`:`From 10-minute local pickups and one-way outstation cabs to Madurai airport transfers and temple tour packages with 100% verified drivers.`,` `),mC(2),CI(n.services),mC(5),pm$1(n.i18n.isTamil()?`பிரபலமான பயண வழித்தடங்கள்:`:`Popular Taxi Routes from Sankarankovil:`))},dependencies:[xm$1,RS,Ua$1],styles:[`.services-overview-section[_ngcontent-%COMP%]{background:transparent;padding:5rem 0 3.5rem}.services-overview-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1.8rem;margin-top:2.5rem}@media(min-width:640px){.services-overview-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.services-overview-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(4,1fr)}}.service-overview-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;padding:2.2rem 1.8rem;border-radius:28px;background:#ffffffeb;border:1px solid rgba(255,193,7,.25);box-shadow:0 10px 30px #0000000d;transition:all .35s cubic-bezier(.16,1,.3,1);position:relative;overflow:hidden}.service-overview-card[_ngcontent-%COMP%]:before{content:"";position:absolute;top:0;left:0;right:0;height:4px;background:linear-gradient(90deg,#ffc107,#ff6b00);opacity:0;transition:opacity .3s ease}.service-overview-card[_ngcontent-%COMP%]:hover{transform:translateY(-6px);box-shadow:0 18px 40px #ffc1072e;border-color:#ffc1078c}.service-overview-card[_ngcontent-%COMP%]:hover:before{opacity:1}.service-overview-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]{margin-bottom:1.2rem}.service-overview-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]   .icon-badge-row[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.2rem}.service-overview-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]   .icon-badge-row[_ngcontent-%COMP%]   .service-icon[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#ffc10738,#ff980026);display:flex;align-items:center;justify-content:center;font-size:1.8rem;box-shadow:0 4px 14px #ffc10726}.service-overview-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]   .icon-badge-row[_ngcontent-%COMP%]   .service-badge[_ngcontent-%COMP%]{font-size:.75rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:.35rem .75rem;border-radius:999px;background:#ffc10729;color:#d97706;border:1px solid rgba(255,193,7,.35)}.service-overview-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]   .service-title[_ngcontent-%COMP%]{font-size:1.22rem;font-weight:800;color:#111827;line-height:1.35;margin-bottom:.35rem}.service-overview-card[_ngcontent-%COMP%]   .card-head[_ngcontent-%COMP%]   .service-subtitle[_ngcontent-%COMP%]{font-size:.85rem;font-weight:600;color:#d97706;margin:0}.service-overview-card[_ngcontent-%COMP%]   .service-desc[_ngcontent-%COMP%]{font-size:.92rem;color:#4b5563;line-height:1.6;margin-bottom:1.4rem;flex-grow:1}.service-overview-card[_ngcontent-%COMP%]   .service-highlights[_ngcontent-%COMP%]{margin-bottom:1.5rem;background:#f8fafcd9;padding:1rem;border-radius:14px;border:1px solid #f1f5f9}.service-overview-card[_ngcontent-%COMP%]   .service-highlights[_ngcontent-%COMP%]   .highlights-label[_ngcontent-%COMP%]{font-size:.78rem;font-weight:700;color:#64748b;text-transform:uppercase;letter-spacing:.04em;margin-bottom:.5rem}.service-overview-card[_ngcontent-%COMP%]   .service-highlights[_ngcontent-%COMP%]   .highlights-list[_ngcontent-%COMP%]{list-style:none;padding:0;margin:0}.service-overview-card[_ngcontent-%COMP%]   .service-highlights[_ngcontent-%COMP%]   .highlights-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.5rem;font-size:.83rem;color:#334155;line-height:1.45;margin-bottom:.35rem}.service-overview-card[_ngcontent-%COMP%]   .service-highlights[_ngcontent-%COMP%]   .highlights-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:last-child{margin-bottom:0}.service-overview-card[_ngcontent-%COMP%]   .service-highlights[_ngcontent-%COMP%]   .highlights-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .check-icon[_ngcontent-%COMP%]{color:#16a34a;font-weight:900;font-size:.85rem;line-height:1.2;flex-shrink:0}.service-overview-card[_ngcontent-%COMP%]   .service-actions[_ngcontent-%COMP%]{margin-top:auto}.service-overview-card[_ngcontent-%COMP%]   .service-actions[_ngcontent-%COMP%]   .btn-whatsapp[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;gap:.5rem;padding:.75rem 1.2rem;background:#25d366;color:#fff;font-weight:700;font-size:.88rem;border-radius:14px;text-decoration:none;border:none;cursor:pointer;box-shadow:0 4px 14px #25d36647;transition:all .25s ease}.service-overview-card[_ngcontent-%COMP%]   .service-actions[_ngcontent-%COMP%]   .btn-whatsapp[_ngcontent-%COMP%]:hover{background:#20ba59;transform:translateY(-2px);box-shadow:0 6px 18px #25d36666}.services-seo-footer[_ngcontent-%COMP%]{margin-top:2.5rem;padding:1.5rem 1.8rem;border-radius:20px;background:#fffc;border:1px solid rgba(226,232,240,.8)}.services-seo-footer[_ngcontent-%COMP%]   .seo-tags-wrapper[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.8rem}.services-seo-footer[_ngcontent-%COMP%]   .seo-tags-wrapper[_ngcontent-%COMP%]   .seo-label[_ngcontent-%COMP%]{font-size:.85rem;font-weight:700;color:#475569}.services-seo-footer[_ngcontent-%COMP%]   .seo-tags-wrapper[_ngcontent-%COMP%]   .seo-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.services-seo-footer[_ngcontent-%COMP%]   .seo-tags-wrapper[_ngcontent-%COMP%]   .seo-pills[_ngcontent-%COMP%]   .seo-pill[_ngcontent-%COMP%]{display:inline-block;font-size:.8rem;font-weight:600;color:#1e293b;background:#f1f5f9;padding:.35rem .8rem;border-radius:999px;text-decoration:none;border:1px solid #e2e8f0;transition:all .2s ease}.services-seo-footer[_ngcontent-%COMP%]   .seo-tags-wrapper[_ngcontent-%COMP%]   .seo-pills[_ngcontent-%COMP%]   .seo-pill[_ngcontent-%COMP%]:hover{background:#ffc107;color:#000;border-color:#ffc107}`]})};var k1=(r,t)=>t.titleKey;function z1(r,t){if(r&1&&(Nl$1(0,`div`,8)(1,`div`,9)(2,`div`,10),GI(3),Al$1(),Nl$1(4,`span`,11),GI(5),Al$1()(),Nl$1(6,`h3`,12),GI(7),Al$1(),Nl$1(8,`p`,13),GI(9),Al$1()()),r&2){let e=t.$implicit,n=MI();mC(3),pm$1(e.icon),mC(2),pm$1(n.i18n.t(e.badgeKey)),mC(2),pm$1(n.i18n.t(e.titleKey)),mC(2),pm$1(n.i18n.t(e.descKey))}}var al=class r{i18n=h(qv$1);features=[{icon:`🛡️`,titleKey:`why.feat1Title`,descKey:`why.feat1Desc`,badgeKey:`why.feat1Badge`},{icon:`💰`,titleKey:`why.feat2Title`,descKey:`why.feat2Desc`,badgeKey:`why.feat2Badge`},{icon:`📡`,titleKey:`why.feat3Title`,descKey:`why.feat3Desc`,badgeKey:`why.feat3Badge`},{icon:`⏱️`,titleKey:`why.feat4Title`,descKey:`why.feat4Desc`,badgeKey:`why.feat4Badge`},{icon:`✨`,titleKey:`why.feat5Title`,descKey:`why.feat5Desc`,badgeKey:`why.feat5Badge`},{icon:`🌙`,titleKey:`why.feat6Title`,descKey:`why.feat6Desc`,badgeKey:`why.feat6Badge`}];static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-why-choose-us`]],decls:14,vars:4,consts:[[1,`section`,`why-us-section`],[1,`container`],[1,`section-header`],[1,`section-badge`],[1,`section-title`],[1,`highlight-yellow`],[1,`section-subtitle`],[1,`why-us-grid`],[1,`why-card`,`glass-card`],[1,`why-top`],[1,`why-icon-box`],[1,`why-badge`],[1,`why-card-title`],[1,`why-card-desc`]],template:function(e,n){e&1&&(Nl$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3),GI(4),Al$1(),Nl$1(5,`h2`,4),GI(6),Nl$1(7,`span`,5),GI(8),Al$1()(),Nl$1(9,`p`,6),GI(10),Al$1()(),Nl$1(11,`div`,7),EI(12,z1,10,4,`div`,8,k1),Al$1()()()),e&2&&(mC(4),pm$1(n.i18n.t(`why.badge`)),mC(2),Ol$1(` `,n.i18n.t(`why.title`),` `),mC(2),pm$1(n.i18n.t(`why.titleHighlight`)),mC(2),Ol$1(` `,n.i18n.t(`why.sub`),` `),mC(2),CI(n.features))},dependencies:[xm$1],styles:[`.why-us-section[_ngcontent-%COMP%]{background:transparent}.why-us-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1.5rem}@media(min-width:640px){.why-us-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(min-width:1024px){.why-us-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}.why-card[_ngcontent-%COMP%]{padding:2.2rem;display:flex;flex-direction:column;height:100%;border-radius:28px;background:#ffffffd9}.why-card[_ngcontent-%COMP%]   .why-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1.5rem}.why-card[_ngcontent-%COMP%]   .why-top[_ngcontent-%COMP%]   .why-icon-box[_ngcontent-%COMP%]{width:52px;height:52px;border-radius:14px;background:linear-gradient(135deg,#ffc10740,#d32f2f26);display:flex;align-items:center;justify-content:center;font-size:1.6rem;box-shadow:0 4px 14px #ffc10733}.why-card[_ngcontent-%COMP%]   .why-top[_ngcontent-%COMP%]   .why-badge[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;letter-spacing:.05em;text-transform:uppercase;padding:.3rem .75rem;background:#0f172a0d;border-radius:9999px;color:#475569}.why-card[_ngcontent-%COMP%]   .why-card-title[_ngcontent-%COMP%]{font-size:1.35rem;margin-bottom:.75rem;color:#0f172a}.why-card[_ngcontent-%COMP%]   .why-card-desc[_ngcontent-%COMP%]{font-size:.95rem;line-height:1.65;color:#475569}`]})};var G1=(r,t)=>t.id;function V1(r,t){if(r&1&&(Nl$1(0,`span`,9),GI(1),Al$1()),r&2){let e=MI().$implicit;mC(),pm$1(e.badge)}}function H1(r,t){if(r&1&&(Nl$1(0,`div`,13),rm(1,`img`,24),Nl$1(2,`div`,25),rm(3,`span`,26),Nl$1(4,`span`),GI(5),Al$1()()()),r&2){let e=MI().$implicit;mC(),im(`src`,e.image,og)(`alt`,`Rider Call Taxi `+e.name+` cab service in Sankarankovil`),mC(4),pm$1(e.id===`hatchback`?`TN 79 M 7309`:e.id===`sedan`?`TN 79 Q 9304`:e.id===`suv`?`TN 79 Q 3460`:e.id===`corporate`?`TN 79 M 5198`:`TOURIST DELUXE`)}}function W1(r,t){if(r&1&&(Nl$1(0,`span`,15),GI(1),Al$1()),r&2){let e=MI(2);mC(),Ol$1(`🚀 `,e.i18n.isTamil()?`விரைவில் வருகிறது`:`Coming Soon`)}}function X1(r,t){if(r&1&&(Nl$1(0,`div`,16)(1,`span`,27),GI(2,`Non-AC `),Nl$1(3,`strong`),GI(4),Al$1()(),Nl$1(5,`span`,28),GI(6,`•`),Al$1(),Nl$1(7,`span`,29),GI(8,`AC `),Nl$1(9,`strong`),GI(10),Al$1()(),Nl$1(11,`span`,30),GI(12,`/ KM`),Al$1()()),r&2){let e=MI().$implicit;mC(4),Ol$1(`₹`,e.rateNonAcPerKm||e.ratePerKm),mC(6),Ol$1(`₹`,e.rateAcPerKm||e.ratePerKm)}}function q1(r,t){if(r&1&&(Nl$1(0,`li`),vp$1(),Nl$1(1,`svg`,31),rm(2,`polyline`,32),Al$1(),yp$1(),Nl$1(3,`span`),GI(4),Al$1()()),r&2){let e=t.$implicit;mC(4),pm$1(e)}}function Y1(r,t){if(r&1){let e=SI();Nl$1(0,`div`,8),vI(1,V1,2,1,`span`,9),Nl$1(2,`div`,10)(3,`h3`,11),GI(4),Al$1(),Nl$1(5,`p`,12),GI(6),Al$1()(),vI(7,H1,6,3,`div`,13),Nl$1(8,`div`,14),vI(9,W1,2,1,`span`,15)(10,X1,13,2,`div`,16),Al$1(),Nl$1(11,`div`,17)(12,`strong`),GI(13),Al$1(),GI(14),Al$1(),Nl$1(15,`div`,18)(16,`div`,19)(17,`span`,20),GI(18,`👥`),Al$1(),Nl$1(19,`span`),GI(20),Al$1()(),Nl$1(21,`div`,19)(22,`span`,20),GI(23,`🧳`),Al$1(),Nl$1(24,`span`),GI(25),Al$1()(),Nl$1(26,`div`,19)(27,`span`,20),GI(28,`❄️`),Al$1(),Nl$1(29,`span`),GI(30),Al$1()()(),Nl$1(31,`ul`,21),EI(32,q1,5,1,`li`,null,DI),Al$1(),Nl$1(34,`div`,22)(35,`button`,23),am(`click`,function(){let i=np$1(e).$implicit;return rp$1(MI().bookCategory(i))}),Nl$1(36,`span`),GI(37),Al$1()()()()}if(r&2){let e=t.$implicit,n=MI();mC(),yI(e.badge?1:-1),mC(3),pm$1(e.name),mC(2),pm$1(e.tagline),mC(),yI(e.image?7:-1),mC(),dm$1(`cs-price-box`,e.isComingSoon),mC(),yI(e.isComingSoon?9:10),mC(4),pm$1(n.i18n.isTamil()?`வாகனங்கள்:`:`Popular Models:`),mC(),Ol$1(` `,e.models,` `),mC(6),pm$1(e.capacity),mC(5),pm$1(e.luggage),mC(5),pm$1(n.i18n.isTamil()?`ஏசி வசதி`:`AC Cabin`),mC(2),CI(e.features),mC(3),dm$1(`btn-cs-action`,e.isComingSoon),mC(2),pm$1(e.isComingSoon?n.i18n.isTamil()?`முன்பதிவு செய்ய (விரைவில்)`:`Pre-Book on WhatsApp`:n.i18n.t(`types.bookBtn`)+` `+e.name)}}var ol=class r{taxiData=h(Wv$1);i18n=h(qv$1);bookCategory(t){let e=this.i18n.isTamil();if(t.isComingSoon){let o=e?`வணக்கம், டெம்போ டிராவலர் (14-சீட்டர்) வாகனத்திற்கு முன்கூட்டியே பதிவு செய்ய விரும்புகிறேன். விபரங்களை பகிரவும்.`:`Hello, I am interested in pre-booking the upcoming Tempo Traveller 14-seater. Please share details.`,c=this.taxiData.getWhatsAppEnquiryUrl({vehicle:`Tempo Traveller (14-Seater - Coming Soon)`,message:o});window.open(c,`_blank`);return}let n=t.rateNonAcPerKm||t.ratePerKm,i=t.rateAcPerKm||t.ratePerKm,s=e?`\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD, \u0BA8\u0BBE\u0BA9\u0BCD ${t.name} (${t.models}) \u0BB5\u0BBE\u0B95\u0BA9\u0BA4\u0BCD\u0BA4\u0BC8 Non-AC \u20B9${n} / AC \u20B9${i}/\u0B95\u0BBF.\u0BAE\u0BC0 \u0B95\u0B9F\u0BCD\u0B9F\u0BA3\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BAA\u0BC1\u0B95\u0BCD \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD.`:`I am interested in booking a ${t.name} (${t.models}) [Non-AC \u20B9${n} / AC \u20B9${i}/KM].`,a=this.taxiData.getWhatsAppEnquiryUrl({vehicle:t.name,message:s});window.open(a,`_blank`)}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-taxi-types`]],decls:14,vars:4,consts:[[1,`section`,`taxi-types-section`],[1,`container`],[1,`section-header`],[1,`section-badge`],[1,`section-title`],[1,`highlight-yellow`],[1,`section-subtitle`],[1,`taxi-types-grid`],[1,`category-card`,`glass-card`],[1,`category-badge`],[1,`cat-header`],[1,`cat-title`],[1,`cat-tagline`],[1,`cat-car-preview`],[1,`cat-price-box`],[1,`price-val`,`cs-text`],[1,`cat-dual-rate`],[1,`models-name`],[1,`cat-specs-row`],[1,`spec-chip`],[1,`spec-icon`],[1,`cat-features-list`],[1,`cat-card-actions`],[1,`btn`,`btn-whatsapp`,`w-full`,3,`click`],[`loading`,`lazy`,1,`cat-preview-img`,3,`src`,`alt`],[1,`cat-live-badge`],[1,`live-dot`],[1,`rate-part`],[1,`rate-sep`],[1,`rate-part`,`ac-accent`],[1,`price-unit`],[`viewBox`,`0 0 24 24`,`width`,`16`,`height`,`16`,`stroke`,`#10B981`,`stroke-width`,`3`,`fill`,`none`],[`points`,`20 6 9 17 4 12`]],template:function(e,n){e&1&&(Nl$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3),GI(4),Al$1(),Nl$1(5,`h2`,4),GI(6),Nl$1(7,`span`,5),GI(8),Al$1()(),Nl$1(9,`p`,6),GI(10),Al$1()(),Nl$1(11,`div`,7),EI(12,Y1,38,15,`div`,8,G1),Al$1()()()),e&2&&(mC(4),pm$1(n.i18n.t(`types.badge`)),mC(2),Ol$1(` `,n.i18n.t(`types.title`),` `),mC(2),pm$1(n.i18n.t(`types.titleHighlight`)),mC(2),Ol$1(` `,n.i18n.t(`types.sub`),` `),mC(2),CI(n.taxiData.vehicleCategories))},dependencies:[xm$1,RS],styles:[`.taxi-types-section[_ngcontent-%COMP%]{position:relative}.taxi-types-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:1.5rem}@media(min-width:768px){.taxi-types-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(2,1fr)}}@media(min-width:1280px){.taxi-types-grid[_ngcontent-%COMP%]{grid-template-columns:repeat(3,1fr)}}.category-card[_ngcontent-%COMP%]{position:relative;padding:2.2rem 1.75rem;display:flex;flex-direction:column;height:100%;border-radius:28px;background:#ffffffe0}.category-card[_ngcontent-%COMP%]   .category-badge[_ngcontent-%COMP%]{position:absolute;top:1.25rem;right:1.25rem;background:linear-gradient(135deg,#ffc107,#ff9800);color:#1e1b18;font-size:.72rem;font-weight:800;text-transform:uppercase;letter-spacing:.05em;padding:.3rem .75rem;border-radius:9999px}.category-card[_ngcontent-%COMP%]   .cat-header[_ngcontent-%COMP%]{margin-bottom:1rem}.category-card[_ngcontent-%COMP%]   .cat-header[_ngcontent-%COMP%]   .cat-title[_ngcontent-%COMP%]{font-size:1.6rem;color:#0f172a;margin-bottom:.25rem}.category-card[_ngcontent-%COMP%]   .cat-header[_ngcontent-%COMP%]   .cat-tagline[_ngcontent-%COMP%]{font-size:.85rem;color:#64748b}.category-card[_ngcontent-%COMP%]   .cat-car-preview[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:16/9;border-radius:20px;overflow:hidden;background:#0a0e17;margin-bottom:1.25rem;border:1px solid rgba(0,0,0,.08)}.category-card[_ngcontent-%COMP%]   .cat-car-preview[_ngcontent-%COMP%]   .cat-preview-img[_ngcontent-%COMP%]{width:100%;height:100%;object-fit:cover;transition:transform .4s ease}.category-card[_ngcontent-%COMP%]   .cat-car-preview[_ngcontent-%COMP%]:hover   .cat-preview-img[_ngcontent-%COMP%]{transform:scale(1.04)}.category-card[_ngcontent-%COMP%]   .cat-car-preview[_ngcontent-%COMP%]   .cat-live-badge[_ngcontent-%COMP%]{position:absolute;bottom:8px;right:8px;display:inline-flex;align-items:center;gap:.35rem;background:#0f172ae6;-webkit-backdrop-filter:blur(8px);backdrop-filter:blur(8px);border:1px solid rgba(255,193,7,.5);color:#ffc107;font-size:.68rem;font-weight:800;letter-spacing:.04em;padding:.2rem .6rem;border-radius:9999px;box-shadow:0 2px 8px #0006}.category-card[_ngcontent-%COMP%]   .cat-car-preview[_ngcontent-%COMP%]   .cat-live-badge[_ngcontent-%COMP%]   .live-dot[_ngcontent-%COMP%]{width:6px;height:6px;border-radius:50%;background:#10b981;box-shadow:0 0 6px #10b981}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.25rem;margin-bottom:1.25rem;padding:.75rem 1rem;background:#ffc1071a;border-radius:14px;width:fit-content}.category-card[_ngcontent-%COMP%]   .cat-price-box.cs-price-box[_ngcontent-%COMP%]{background:#10b9811a;border:1px dashed #10B981}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .cs-text[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:800;color:#059669}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .cat-dual-rate[_ngcontent-%COMP%]{display:flex;align-items:baseline;gap:.4rem;flex-wrap:wrap}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .cat-dual-rate[_ngcontent-%COMP%]   .rate-part[_ngcontent-%COMP%]{font-size:.88rem;color:#475569}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .cat-dual-rate[_ngcontent-%COMP%]   .rate-part[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-size:1.35rem;font-weight:900;color:#d32f2f}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .cat-dual-rate[_ngcontent-%COMP%]   .rate-part.ac-accent[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0284c7}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .cat-dual-rate[_ngcontent-%COMP%]   .rate-sep[_ngcontent-%COMP%]{color:#94a3b8;font-weight:300}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .price-val[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-size:2rem;font-weight:900;color:#d32f2f}.category-card[_ngcontent-%COMP%]   .cat-price-box[_ngcontent-%COMP%]   .price-unit[_ngcontent-%COMP%]{font-size:.85rem;font-weight:700;color:#475569}.category-card[_ngcontent-%COMP%]   .models-name[_ngcontent-%COMP%]{font-size:.88rem;color:#475569;margin-bottom:1.25rem}.category-card[_ngcontent-%COMP%]   .models-name[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{color:#0f172a}.category-card[_ngcontent-%COMP%]   .cat-specs-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem;margin-bottom:1.5rem}.category-card[_ngcontent-%COMP%]   .cat-specs-row[_ngcontent-%COMP%]   .spec-chip[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.35rem;background:#f1f5f9;border:1px solid #E2E8F0;padding:.35rem .7rem;border-radius:8px;font-size:.78rem;font-weight:600;color:#475569}.category-card[_ngcontent-%COMP%]   .cat-features-list[_ngcontent-%COMP%]{list-style:none;display:flex;flex-direction:column;gap:.65rem;margin-bottom:2rem;flex:1}.category-card[_ngcontent-%COMP%]   .cat-features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.6rem;font-size:.88rem;color:#475569}.category-card[_ngcontent-%COMP%]   .cat-card-actions[_ngcontent-%COMP%]{margin-top:auto}.category-card[_ngcontent-%COMP%]   .cat-card-actions[_ngcontent-%COMP%]   .w-full[_ngcontent-%COMP%]{width:100%}`]})};var $1=(r,t)=>t.id;function K1(r,t){if(r&1){let e=SI();Nl$1(0,`button`,42),am(`click`,function(){let i=np$1(e).$implicit;return rp$1(MI().selectRoute(i.id))}),Nl$1(1,`span`,43),GI(2),Al$1(),Nl$1(3,`span`,44),GI(4),Al$1()()}if(r&2){let e=t.$implicit;dm$1(`active`,MI().activeRouteId()===e.id),mC(2),hm$1(``,e.from,` → `,e.to),mC(2),Ol$1(`(`,e.distanceKm,` KM)`)}}function Z1(r,t){if(r&1&&(Nl$1(0,`span`,14),GI(1),Al$1()),r&2){let e=MI();mC(),Ol$1(`🔥 `,e.i18n.isTamil()?`அதிக முன்பதிவு`:`High Demand`)}}function J1(r,t){if(r&1&&(Nl$1(0,`span`,37),GI(1),Al$1()),r&2){let e=t.$implicit;mC(),Ol$1(`📌 `,e)}}var cl=class r{taxiData=h(Wv$1);i18n=h(qv$1);activeRouteId=z(`snk-madurai`);get activeRoute(){return this.taxiData.smartRoutes.find(t=>t.id===this.activeRouteId())||this.taxiData.smartRoutes[0]}selectRoute(t){this.activeRouteId.set(t)}bookRoute(t){let n=this.i18n.isTamil()?`\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD, ${t.from} \u0BAE\u0BC1\u0BA4\u0BB2\u0BCD ${t.to} \u0BB5\u0BB0\u0BC8 (${t.distanceKm} \u0B95\u0BBF.\u0BAE\u0BC0, \u0B86\u0BB0\u0BAE\u0BCD\u0BAA \u0B95\u0B9F\u0BCD\u0B9F\u0BA3\u0BAE\u0BCD \u20B9${t.startingPrice}) \u0BB5\u0BB4\u0BBF\u0BA4\u0BCD\u0BA4\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB1\u0BCD\u0B95\u0BBE\u0BA9 \u0B9F\u0BBE\u0B95\u0BCD\u0BB8\u0BBF \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD.`:`Enquiry for popular route: ${t.from} to ${t.to} (${t.distanceKm} KM, Est. \u20B9${t.startingPrice}).`,i=this.taxiData.getWhatsAppEnquiryUrl({pickup:t.from,destination:t.to,distance:t.distanceKm,estimatedFare:t.startingPrice,message:n});window.open(i,`_blank`)}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-route-showcase`]],decls:74,vars:19,consts:[[1,`section`,`route-showcase-section`],[1,`container`],[1,`section-header`],[1,`section-badge`],[1,`section-title`],[1,`highlight-yellow`],[1,`section-subtitle`],[1,`routes-tab-bar`],[1,`route-tab-pill`,3,`active`],[1,`active-route-card`,`glass-card`],[1,`route-card-top`],[1,`route-title-block`],[1,`route-badge-row`],[1,`highway-pill`],[1,`hot-badge`],[1,`arrow`],[1,`route-desc`],[1,`route-pricing-box`],[1,`starting-label`],[1,`price-val`],[1,`rate-per-km`],[1,`animated-route-highway`],[1,`highway-node`,`start-node`],[1,`node-circle`],[1,`node-text`],[1,`road-path-svg-box`],[`viewBox`,`0 0 500 60`,`preserveAspectRatio`,`none`,1,`road-svg`],[`d`,`M 10 30 Q 250 10, 490 30`,`stroke`,`#334155`,`stroke-width`,`12`,`fill`,`none`,`stroke-linecap`,`round`],[`d`,`M 10 30 Q 250 10, 490 30`,`stroke`,`#FFC107`,`stroke-width`,`3`,`stroke-dasharray`,`12 12`,`fill`,`none`,1,`animated-dash`],[1,`moving-taxi-indicator`],[1,`taxi-vehicle-glyph`],[1,`moving-eta`],[1,`highway-node`,`end-node`],[1,`route-stops-footer`],[1,`key-stops-row`],[1,`stops-label`],[1,`stops-pills`],[1,`stop-tag`],[1,`btn`,`btn-primary`,`btn-lg`,3,`click`],[`viewBox`,`0 0 24 24`,`width`,`18`,`height`,`18`,`stroke`,`currentColor`,`stroke-width`,`2.5`,`fill`,`none`],[`x1`,`5`,`y1`,`12`,`x2`,`19`,`y2`,`12`],[`points`,`12 5 19 12 12 19`],[1,`route-tab-pill`,3,`click`],[1,`route-names`],[1,`route-km`]],template:function(e,n){e&1&&(Nl$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3),GI(4),Al$1(),Nl$1(5,`h2`,4),GI(6),Nl$1(7,`span`,5),GI(8),Al$1()(),Nl$1(9,`p`,6),GI(10),Al$1()(),Nl$1(11,`div`,7),EI(12,K1,5,5,`button`,8,$1),Al$1(),Nl$1(14,`div`,9)(15,`div`,10)(16,`div`,11)(17,`div`,12)(18,`span`,13),GI(19),Al$1(),vI(20,Z1,2,1,`span`,14),Al$1(),Nl$1(21,`h3`),GI(22),Nl$1(23,`span`,15),GI(24,`⇄`),Al$1(),GI(25),Al$1(),Nl$1(26,`p`,16),GI(27),Al$1()(),Nl$1(28,`div`,17)(29,`span`,18),GI(30),Al$1(),Nl$1(31,`div`,19),GI(32),Al$1(),Nl$1(33,`span`,20),GI(34),Al$1()()(),Nl$1(35,`div`,21)(36,`div`,22)(37,`div`,23),GI(38,`📍`),Al$1(),Nl$1(39,`div`,24)(40,`strong`),GI(41),Al$1(),Nl$1(42,`span`),GI(43),Al$1()()(),Nl$1(44,`div`,25),vp$1(),Nl$1(45,`svg`,26),rm(46,`path`,27)(47,`path`,28),Al$1(),yp$1(),Nl$1(48,`div`,29)(49,`div`,30),GI(50,`🚕`),Al$1(),Nl$1(51,`span`,31),GI(52),Al$1()()(),Nl$1(53,`div`,32)(54,`div`,23),GI(55,`🏁`),Al$1(),Nl$1(56,`div`,24)(57,`strong`),GI(58),Al$1(),Nl$1(59,`span`),GI(60),Al$1()()()(),Nl$1(61,`div`,33)(62,`div`,34)(63,`span`,35),GI(64),Al$1(),Nl$1(65,`div`,36),EI(66,J1,2,1,`span`,37,DI),Al$1()(),Nl$1(68,`button`,38),am(`click`,function(){return n.bookRoute(n.activeRoute)}),Nl$1(69,`span`),GI(70),Al$1(),vp$1(),Nl$1(71,`svg`,39),rm(72,`line`,40)(73,`polyline`,41),Al$1()()()()()()),e&2&&(mC(4),pm$1(n.i18n.t(`routes.badge`)),mC(2),Ol$1(` `,n.i18n.t(`routes.title`),` `),mC(2),pm$1(n.i18n.t(`routes.titleHighlight`)),mC(2),Ol$1(` `,n.i18n.t(`routes.sub`),` `),mC(2),CI(n.taxiData.smartRoutes),mC(7),Ol$1(`🛣️ `,n.activeRoute.highway),mC(),yI(n.activeRoute.popular?20:-1),mC(2),Ol$1(``,n.activeRoute.from,` `),mC(3),Ol$1(` `,n.activeRoute.to),mC(2),pm$1(n.activeRoute.highlight),mC(3),pm$1(n.i18n.t(`routes.startingFrom`)),mC(2),Ol$1(`₹`,n.activeRoute.startingPrice),mC(2),pm$1(n.i18n.t(`routes.standardRate`)),mC(7),pm$1(n.activeRoute.from),mC(2),pm$1(n.i18n.t(`routes.pickupHub`)),mC(9),pm$1(n.activeRoute.estimatedDuration),mC(6),pm$1(n.activeRoute.to),mC(2),pm$1(n.i18n.t(`routes.destination`)),mC(4),pm$1(n.i18n.t(`routes.enRoute`)),mC(2),CI(n.activeRoute.keyStops),mC(4),pm$1(n.i18n.t(`routes.bookRouteBtn`)))},dependencies:[xm$1],styles:[`.route-showcase-section[_ngcontent-%COMP%]{position:relative}.routes-tab-bar[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center;gap:.65rem;margin-bottom:2.5rem}.routes-tab-bar[_ngcontent-%COMP%]   .route-tab-pill[_ngcontent-%COMP%]{padding:.6rem 1.1rem;border-radius:9999px;background:#fffc;border:1.5px solid #E2E8F0;cursor:pointer;transition:all .2s ease;display:flex;align-items:center;gap:.35rem}.routes-tab-bar[_ngcontent-%COMP%]   .route-tab-pill[_ngcontent-%COMP%]   .route-names[_ngcontent-%COMP%]{font-size:.88rem;font-weight:700;color:#0f172a}.routes-tab-bar[_ngcontent-%COMP%]   .route-tab-pill[_ngcontent-%COMP%]   .route-km[_ngcontent-%COMP%]{font-size:.78rem;color:#d97706;font-weight:600}.routes-tab-bar[_ngcontent-%COMP%]   .route-tab-pill[_ngcontent-%COMP%]:hover{border-color:#ffc107;transform:translateY(-2px)}.routes-tab-bar[_ngcontent-%COMP%]   .route-tab-pill.active[_ngcontent-%COMP%]{background:linear-gradient(135deg,#0f172a,#1e293b);border-color:#0f172a}.routes-tab-bar[_ngcontent-%COMP%]   .route-tab-pill.active[_ngcontent-%COMP%]   .route-names[_ngcontent-%COMP%]{color:#fff}.routes-tab-bar[_ngcontent-%COMP%]   .route-tab-pill.active[_ngcontent-%COMP%]   .route-km[_ngcontent-%COMP%]{color:#ffc107}.active-route-card[_ngcontent-%COMP%]{padding:3rem;background:#ffffffe6}@media(max-width:767px){.active-route-card[_ngcontent-%COMP%]{padding:1.75rem}}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:1.5rem;margin-bottom:2.5rem}@media(min-width:768px){.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]{flex-direction:row;align-items:flex-start}}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-title-block[_ngcontent-%COMP%]   .route-badge-row[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.65rem;margin-bottom:.75rem}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-title-block[_ngcontent-%COMP%]   .route-badge-row[_ngcontent-%COMP%]   .highway-pill[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;padding:.25rem .65rem;background:#f1f5f9;border-radius:9999px;color:#475569}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-title-block[_ngcontent-%COMP%]   .route-badge-row[_ngcontent-%COMP%]   .hot-badge[_ngcontent-%COMP%]{font-size:.75rem;font-weight:800;padding:.25rem .65rem;background:#d32f2f1a;color:#d32f2f;border-radius:9999px}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-title-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:1.85rem;color:#0f172a;margin-bottom:.5rem}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-title-block[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%]{color:#ffc107;margin:0 .35rem}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-title-block[_ngcontent-%COMP%]   .route-desc[_ngcontent-%COMP%]{font-size:.95rem;color:#475569;max-width:600px}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-pricing-box[_ngcontent-%COMP%]{background:#ffc1071f;border:1px solid rgba(255,193,7,.4);padding:1.1rem 1.5rem;border-radius:20px;text-align:center;min-width:190px}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-pricing-box[_ngcontent-%COMP%]   .starting-label[_ngcontent-%COMP%]{font-size:.72rem;font-weight:800;text-transform:uppercase;color:#9a6200}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-pricing-box[_ngcontent-%COMP%]   .price-val[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-size:2.2rem;font-weight:900;color:#d32f2f;line-height:1.1;margin:.2rem 0}.active-route-card[_ngcontent-%COMP%]   .route-card-top[_ngcontent-%COMP%]   .route-pricing-box[_ngcontent-%COMP%]   .rate-per-km[_ngcontent-%COMP%]{font-size:.75rem;color:#64748b}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:2rem 0;margin:1.5rem 0 2.5rem;border-top:1px solid #E2E8F0;border-bottom:1px solid #E2E8F0}@media(max-width:767px){.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]{flex-direction:column;gap:1.5rem}}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .highway-node[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.75rem;min-width:140px}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .highway-node[_ngcontent-%COMP%]   .node-circle[_ngcontent-%COMP%]{font-size:1.6rem}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .highway-node[_ngcontent-%COMP%]   .node-text[_ngcontent-%COMP%]{display:flex;flex-direction:column}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .highway-node[_ngcontent-%COMP%]   .node-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.95rem;color:#0f172a}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .highway-node[_ngcontent-%COMP%]   .node-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:.75rem;color:#64748b}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .road-path-svg-box[_ngcontent-%COMP%]{flex:1;position:relative;height:60px;display:flex;align-items:center;width:100%}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .road-path-svg-box[_ngcontent-%COMP%]   .road-svg[_ngcontent-%COMP%]{width:100%;height:100%}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .road-path-svg-box[_ngcontent-%COMP%]   .road-svg[_ngcontent-%COMP%]   .animated-dash[_ngcontent-%COMP%]{animation:dashFlow 2s linear infinite}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .road-path-svg-box[_ngcontent-%COMP%]   .moving-taxi-indicator[_ngcontent-%COMP%]{position:absolute;top:4px;left:0;display:flex;flex-direction:column;align-items:center;animation:_ngcontent-%COMP%_taxiPatrol 6s ease-in-out infinite alternate}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .road-path-svg-box[_ngcontent-%COMP%]   .moving-taxi-indicator[_ngcontent-%COMP%]   .taxi-vehicle-glyph[_ngcontent-%COMP%]{font-size:1.6rem;filter:drop-shadow(0 2px 6px rgba(0,0,0,.25))}.active-route-card[_ngcontent-%COMP%]   .animated-route-highway[_ngcontent-%COMP%]   .road-path-svg-box[_ngcontent-%COMP%]   .moving-taxi-indicator[_ngcontent-%COMP%]   .moving-eta[_ngcontent-%COMP%]{font-size:.65rem;font-weight:800;background:#0f172a;color:#ffc107;padding:.15rem .45rem;border-radius:9999px;white-space:nowrap}.active-route-card[_ngcontent-%COMP%]   .route-stops-footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;gap:1.5rem}@media(min-width:768px){.active-route-card[_ngcontent-%COMP%]   .route-stops-footer[_ngcontent-%COMP%]{flex-direction:row;align-items:center}}.active-route-card[_ngcontent-%COMP%]   .route-stops-footer[_ngcontent-%COMP%]   .key-stops-row[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;align-items:center;gap:.65rem}.active-route-card[_ngcontent-%COMP%]   .route-stops-footer[_ngcontent-%COMP%]   .key-stops-row[_ngcontent-%COMP%]   .stops-label[_ngcontent-%COMP%]{font-size:.8rem;font-weight:700;color:#475569}.active-route-card[_ngcontent-%COMP%]   .route-stops-footer[_ngcontent-%COMP%]   .key-stops-row[_ngcontent-%COMP%]   .stops-pills[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.4rem}.active-route-card[_ngcontent-%COMP%]   .route-stops-footer[_ngcontent-%COMP%]   .key-stops-row[_ngcontent-%COMP%]   .stops-pills[_ngcontent-%COMP%]   .stop-tag[_ngcontent-%COMP%]{font-size:.78rem;background:#f1f5f9;padding:.25rem .6rem;border-radius:8px;color:#0f172a}@keyframes _ngcontent-%COMP%_taxiPatrol{0%{left:8%}to{left:80%}}`]})};var Q1=(r,t)=>t.id;function j1(r,t){if(r&1&&(vp$1(),rm(0,`line`,98)(1,`line`,99)(2,`circle`,100)),r&2){let e=MI();Js$1(`x1`,e.hqCoords.x)(`y1`,e.hqCoords.y)(`x2`,e.selectedCity.coordinates.x)(`y2`,e.selectedCity.coordinates.y),mC(),Js$1(`x1`,e.hqCoords.x)(`y1`,e.hqCoords.y)(`x2`,e.selectedCity.coordinates.x)(`y2`,e.selectedCity.coordinates.y),mC(),Js$1(`cx`,(e.hqCoords.x+e.selectedCity.coordinates.x)/2)(`cy`,(e.hqCoords.y+e.selectedCity.coordinates.y)/2)}}function tM(r,t){if(r&1&&(vp$1(),rm(0,`circle`,104)(1,`circle`,105)(2,`circle`,106)(3,`circle`,107)),r&2){let e=MI().$implicit;Js$1(`cx`,e.coordinates.x)(`cy`,e.coordinates.y),mC(),Js$1(`cx`,e.coordinates.x)(`cy`,e.coordinates.y),mC(),Js$1(`cx`,e.coordinates.x)(`cy`,e.coordinates.y),mC(),Js$1(`cx`,e.coordinates.x)(`cy`,e.coordinates.y)}}function eM(r,t){if(r&1&&(vp$1(),rm(0,`circle`,108)(1,`circle`,109)(2,`circle`,110)),r&2){let e=MI().$implicit;Js$1(`cx`,e.coordinates.x)(`cy`,e.coordinates.y),mC(),Js$1(`cx`,e.coordinates.x)(`cy`,e.coordinates.y),mC(),Js$1(`cx`,e.coordinates.x)(`cy`,e.coordinates.y)}}function nM(r,t){r&1&&(vp$1(),Nl$1(0,`tspan`,103),GI(1,` (HQ)`),Al$1())}function iM(r,t){if(r&1){let e=SI();vp$1(),Nl$1(0,`g`,101),am(`click`,function(){let i=np$1(e).$implicit;return rp$1(MI().selectCity(i.id))}),vI(1,tM,4,8)(2,eM,3,6),Nl$1(3,`text`,102),GI(4),vI(5,nM,2,0,`:svg:tspan`,103),Al$1()()}if(r&2){let e=t.$implicit,n=MI();dm$1(`active-pin`,n.selectedCityId()===e.id)(`hq-pin`,e.isHQ),mC(),yI(e.isHQ?1:2),mC(2),dm$1(`hq-label`,e.isHQ),Js$1(`x`,e.coordinates.x+(e.labelDx||0))(`y`,e.coordinates.y+(e.labelDy||0))(`text-anchor`,e.labelAnchor||`start`),mC(),Ol$1(` `,n.getCityName(e),` `),mC(),yI(e.isHQ?5:-1)}}function rM(r,t){if(r&1&&(Nl$1(0,`span`,93),GI(1),Al$1()),r&2){let e=t.$implicit;mC(),Ol$1(`🚕 `,e)}}var ll=class r{taxiData=h(Wv$1);i18n=h(qv$1);selectedCityId=z(`sankarankovil`);hqCoords={x:225,y:642};get selectedCity(){return this.taxiData.citiesCoverage.find(t=>t.id===this.selectedCityId())||this.taxiData.citiesCoverage[0]}selectCity(t){this.selectedCityId.set(t)}getCityName(t){return this.i18n.isTamil()&&t.nameTa?t.nameTa:t.name}getCityDistrict(t){return this.i18n.isTamil()&&t.districtTa?t.districtTa:t.district}getCityTagline(t){return this.i18n.isTamil()&&t.taglineTa?t.taglineTa:t.tagline}getCityRoutes(t){return this.i18n.isTamil()&&t.topRoutesTa?t.topRoutesTa:t.topRoutes}bookFromCity(t){let e=this.i18n.isTamil(),n=this.getCityName(t),i=this.getCityDistrict(t),s=e?`\u0BB5\u0BA3\u0B95\u0BCD\u0B95\u0BAE\u0BCD, \u0B9A\u0BC7\u0BB5\u0BC8 \u0BB5\u0BB0\u0BC8\u0BAA\u0B9F\u0BA4\u0BCD\u0BA4\u0BBF\u0BB2\u0BCD \u0BAA\u0BBE\u0BB0\u0BCD\u0BA4\u0BCD\u0BA4 ${n} (${i}) \u0BAA\u0B95\u0BC1\u0BA4\u0BBF\u0BAF\u0BBF\u0BB2\u0BCD \u0B87\u0BB0\u0BC1\u0BA8\u0BCD\u0BA4\u0BC1 \u0B9F\u0BBE\u0B95\u0BCD\u0BB8\u0BBF \u0BAE\u0BC1\u0BA9\u0BCD\u0BAA\u0BA4\u0BBF\u0BB5\u0BC1 \u0B9A\u0BC6\u0BAF\u0BCD\u0BAF \u0BB5\u0BBF\u0BB0\u0BC1\u0BAE\u0BCD\u0BAA\u0BC1\u0B95\u0BBF\u0BB1\u0BC7\u0BA9\u0BCD. \u0B85\u0BB0\u0BC1\u0B95\u0BBF\u0BB2\u0BCD \u0B89\u0BB3\u0BCD\u0BB3 \u0BB5\u0BBE\u0B95\u0BA9\u0BA4\u0BCD\u0BA4\u0BC8 \u0B92\u0BA4\u0BC1\u0B95\u0BCD\u0B95\u0BB5\u0BC1\u0BAE\u0BCD.`:`Enquiry from Service Map for ${t.name} (${t.district}). Please assign the nearest available cab.`,a=this.taxiData.getWhatsAppEnquiryUrl({pickup:t.name,message:s});window.open(a,`_blank`)}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-service-map`]],decls:159,vars:32,consts:[[1,`section`,`service-map-section`],[1,`container`],[1,`section-header`],[1,`section-badge`],[1,`section-title`],[1,`highlight-yellow`],[1,`section-subtitle`],[1,`map-interactive-grid`],[1,`map-svg-card`,`glass-card`],[1,`map-toolbar`],[1,`fleet-status-pill`],[1,`pulse-live-dot`],[1,`fleet-status-text`],[1,`map-hint-text`],[1,`map-wrapper`],[`viewBox`,`0 0 600 780`,`role`,`img`,`aria-label`,`Tamil Nadu Service Network Map`,1,`tn-map-svg`],[`id`,`tnLandGrad`,`x1`,`0%`,`y1`,`0%`,`x2`,`100%`,`y2`,`100%`],[`offset`,`0%`,`stop-color`,`#FFFBEB`,`stop-opacity`,`0.95`],[`offset`,`50%`,`stop-color`,`#FEF3C7`,`stop-opacity`,`0.9`],[`offset`,`100%`,`stop-color`,`#FDE68A`,`stop-opacity`,`0.85`],[`id`,`oceanGrad`,`x1`,`0%`,`y1`,`0%`,`x2`,`100%`,`y2`,`100%`],[`offset`,`0%`,`stop-color`,`#F0F9FF`,`stop-opacity`,`0.6`],[`offset`,`100%`,`stop-color`,`#E0F2FE`,`stop-opacity`,`0.9`],[`id`,`nhGlow`,`x`,`-20%`,`y`,`-20%`,`width`,`140%`,`height`,`140%`],[`dx`,`0`,`dy`,`0`,`stdDeviation`,`2.5`,`flood-color`,`#F59E0B`,`flood-opacity`,`0.65`],[`id`,`hqGlow`,`x`,`-50%`,`y`,`-50%`,`width`,`200%`,`height`,`200%`],[`dx`,`0`,`dy`,`0`,`stdDeviation`,`6`,`flood-color`,`#DC2626`,`flood-opacity`,`0.7`],[`id`,`activeCorridorGlow`,`x`,`-30%`,`y`,`-30%`,`width`,`160%`,`height`,`160%`],[`dx`,`0`,`dy`,`0`,`stdDeviation`,`4`,`flood-color`,`#EA580C`,`flood-opacity`,`0.8`],[`x`,`0`,`y`,`0`,`width`,`600`,`height`,`780`,`fill`,`url(#oceanGrad)`,`rx`,`16`,1,`ocean-backdrop`],[`d`,`
              M 530 635 
              C 550 630, 575 642, 584 668 
              C 592 695, 575 728, 555 750 
              C 540 740, 532 708, 524 678 
              C 520 655, 520 640, 530 635 
              Z`,1,`surrounding-land`,`sri-lanka`],[`x`,`555`,`y`,`692`,1,`geo-water-label`,`geo-land-label`],[`x`,`510`,`y`,`240`,1,`geo-water-label`],[`x`,`475`,`y`,`490`,1,`geo-water-label`],[`x`,`365`,`y`,`670`,1,`geo-water-label`],[`x`,`240`,`y`,`764`,1,`geo-water-label`,`geo-ocean-label`],[`x`,`75`,`y`,`600`,1,`geo-neighbor-label`],[`x`,`135`,`y`,`190`,1,`geo-neighbor-label`],[`x`,`410`,`y`,`45`,1,`geo-neighbor-label`],[`d`,`
              M 550 48
              C 530 55, 510 65, 492 72
              C 475 78, 455 88, 435 98
              C 415 108, 395 118, 375 125
              C 350 135, 320 142, 290 142
              C 265 142, 245 135, 235 128
              C 225 145, 215 165, 218 190
              C 222 210, 212 230, 195 245
              C 175 258, 145 268, 125 275
              C 100 272, 75 270, 52 288
              C 42 298, 40 315, 50 330
              C 62 348, 78 358, 88 372
              C 95 382, 108 392, 114 402
              C 105 412, 95 422, 92 432
              C 90 442, 98 455, 115 460
              C 132 465, 148 472, 158 485
              C 168 498, 172 515, 160 532
              C 150 545, 155 558, 172 568
              C 182 578, 184 595, 180 612
              C 178 625, 176 640, 180 652
              C 172 660, 162 668, 165 676
              C 172 682, 182 695, 185 710
              C 188 720, 198 728, 212 732
              C 224 734, 232 736, 240 736
              C 255 732, 270 722, 285 710
              C 300 698, 310 682, 318 672
              C 324 662, 328 652, 332 642
              C 338 628, 355 615, 375 605
              C 398 595, 425 585, 455 575
              C 475 568, 495 562, 512 558
              C 525 555, 542 554, 558 554
              C 570 556, 582 558, 590 562
              C 582 566, 570 568, 555 566
              C 538 564, 522 566, 508 572
              C 475 555, 450 535, 435 505
              C 425 480, 435 455, 460 445
              C 485 438, 510 435, 528 434
              C 525 415, 520 395, 520 376
              C 522 355, 524 335, 522 318
              C 518 300, 512 280, 504 258
              C 498 240, 502 225, 510 212
              C 518 190, 530 165, 542 140
              C 550 120, 558 100, 558 82
              C 558 68, 556 55, 550 48
              Z`,1,`tn-boundary`],[`d`,`
              M 55 315
              Q 75 350, 92 400
              Q 115 440, 140 470
              Q 165 520, 175 580
              Q 178 630, 175 670
              Q 185 705, 220 732`,1,`ghats-ridge`],[`stroke`,`#FFFFFF`,`stroke-linecap`,`round`,`stroke-linejoin`,`round`,1,`state-highways`],[`d`,`M 225 642 L 216 628 L 235 650 L 246 672 L 255 690`,1,`sh-road`,`sh-sankarankovil-nellai`],[`d`,`M 225 642 L 248 644 L 270 646`,1,`sh-road`],[`d`,`M 225 642 L 218 654 L 206 664 L 196 674`,1,`sh-road`],[`d`,`M 225 642 L 228 628 L 232 614`,1,`sh-road`],[`d`,`M 255 690 L 278 684 L 298 678 L 318 672`,1,`sh-road`],[`d`,`M 330 654 L 326 664 L 318 672`,1,`sh-road`],[`d`,`M 280 565 L 260 545 L 235 520 L 205 500`,1,`sh-road`],[`d`,`M 270 480 L 235 465 L 205 455 L 170 445 L 135 430 L 120 360`,1,`sh-road`],[`d`,`M 370 395 L 430 390 L 465 365 L 500 340 L 520 375`,1,`sh-road`],[`d`,`M 165 365 L 188 340 L 210 315`,1,`sh-road`],[`d`,`M 360 215 L 415 210 L 455 230 L 472 195`,1,`sh-road`],[`d`,`M 240 734 L 215 732 L 185 728`,1,`sh-road`],[`stroke`,`#F59E0B`,`stroke-linecap`,`round`,`stroke-linejoin`,`round`,`filter`,`url(#nhGlow)`,1,`national-highways`],[`d`,`M 235 128 L 280 150 L 275 215 L 272 260 L 275 285 L 285 345 L 280 395 L 270 480 L 275 525 L 280 565 L 274 582 L 275 608 L 272 628 L 270 646 L 265 666 L 255 690 L 248 708 L 242 718 L 238 726 L 240 734`,1,`nh-road`,`nh-44`],[`d`,`M 545 92 L 532 112 L 515 138 L 472 195 L 455 230 L 430 265 L 390 340 L 375 380 L 370 395 L 320 438 L 270 480`,1,`nh-road`,`nh-45`],[`d`,`M 280 565 L 274 582 L 255 594 L 240 600 L 232 614 L 225 642 L 214 654 L 206 664 L 195 666 L 165 672`,1,`nh-road`,`nh-744`],[`d`,`M 275 285 L 240 305 L 215 310 L 195 325 L 160 342 L 120 360 L 92 385`,1,`nh-road`,`nh-544`],[`d`,`M 280 565 L 305 575 L 330 585 L 375 595 L 420 600 L 465 585 L 510 560 L 528 558 L 550 558 L 575 562`,1,`nh-road`,`nh-49`],[`d`,`M 370 395 L 355 440 L 320 520 L 295 558 L 305 605 L 290 628 L 270 646 L 300 652 L 330 654`,1,`nh-road`,`nh-45b`],[`d`,`M 255 690 L 275 682 L 305 668 L 330 654`,1,`nh-road`,`nh-7a`],[`d`,`M 545 92 L 510 105 L 475 115 L 435 120 L 400 130 L 355 145 L 335 150 L 305 150 L 280 150`,1,`nh-road`,`nh-48`],[`d`,`M 545 92 L 540 138 L 520 185 L 508 222 L 500 252 L 485 290 L 500 310 L 520 375`,1,`nh-road`,`nh-32`],[`d`,`M 520 375 L 480 380 L 430 390 L 370 395 L 325 395 L 280 395 L 215 380 L 165 365 L 120 360`,1,`nh-road`,`nh-67`],[`d`,`M 275 285 L 305 282 L 335 280 L 380 272 L 430 265`,1,`nh-road`,`nh-68`],[`d`,`M 280 565 L 240 550 L 220 542 L 200 535 L 170 555`,1,`nh-road`,`nh-85`],[`font-size`,`7.5`,`font-weight`,`800`,1,`nh-badges`],[`x`,`278`,`y`,`240`,1,`nh-tag-label`],[`x`,`445`,`y`,`280`,1,`nh-tag-label`],[`x`,`220`,`y`,`594`,1,`nh-tag-label`],[`x`,`180`,`y`,`325`,1,`nh-tag-label`],[`x`,`385`,`y`,`588`,1,`nh-tag-label`],[`x`,`365`,`y`,`132`,1,`nh-tag-label`],[`x`,`525`,`y`,`170`,1,`nh-tag-label`],[1,`city-pin-group`,3,`active-pin`,`hq-pin`],[1,`map-legend`],[1,`legend-item`],[1,`legend-highway-yellow`],[1,`legend-highway-white`],[1,`legend-hq-dot`],[1,`legend-cluster-dot`],[1,`city-status-panel`,`glass-card`],[1,`panel-header`],[1,`panel-tag`],[1,`city-name`],[1,`city-district`],[1,`city-metrics-row`],[1,`city-metric`],[1,`m-val`],[1,`m-lbl`],[1,`city-top-routes`],[1,`route-pills-list`],[1,`city-route-tag`],[1,`dispatch-guarantee-box`],[1,`guarantee-icon`],[1,`guarantee-text`],[1,`btn`,`btn-whatsapp`,`btn-lg`,`w-full`,3,`click`],[`filter`,`url(#activeCorridorGlow)`,1,`dispatch-active-beam`],[1,`dispatch-active-pulse`],[`r`,`4.5`,1,`traveling-taxi-marker`],[1,`city-pin-group`,3,`click`],[1,`pin-label`],[1,`hq-badge-text`],[`r`,`18`,1,`hq-beacon-ripple`],[`r`,`12`,1,`hq-beacon-ring`],[`r`,`6.5`,`filter`,`url(#hqGlow)`,1,`hq-core-dot`],[`r`,`2.8`,1,`hq-inner-star`],[`r`,`8`,1,`pin-pulse`],[`r`,`3.8`,1,`pin-dot`],[`r`,`1.6`,1,`pin-inner-dot`]],template:function(e,n){e&1&&(Nl$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3),GI(4),Al$1(),Nl$1(5,`h2`,4),GI(6),Nl$1(7,`span`,5),GI(8),Al$1()(),Nl$1(9,`p`,6),GI(10),Al$1()(),Nl$1(11,`div`,7)(12,`div`,8)(13,`div`,9)(14,`div`,10),rm(15,`span`,11),Nl$1(16,`span`,12),GI(17),Al$1()(),Nl$1(18,`span`,13),GI(19),Al$1()(),Nl$1(20,`div`,14),vp$1(),Nl$1(21,`svg`,15)(22,`defs`)(23,`linearGradient`,16),rm(24,`stop`,17)(25,`stop`,18)(26,`stop`,19),Al$1(),Nl$1(27,`linearGradient`,20),rm(28,`stop`,21)(29,`stop`,22),Al$1(),Nl$1(30,`filter`,23),rm(31,`feDropShadow`,24),Al$1(),Nl$1(32,`filter`,25),rm(33,`feDropShadow`,26),Al$1(),Nl$1(34,`filter`,27),rm(35,`feDropShadow`,28),Al$1()(),rm(36,`rect`,29)(37,`path`,30),Nl$1(38,`text`,31),GI(39,`SRI LANKA`),Al$1(),Nl$1(40,`text`,32),GI(41,`BAY OF BENGAL`),Al$1(),Nl$1(42,`text`,33),GI(43,`PALK STRAIT`),Al$1(),Nl$1(44,`text`,34),GI(45,`GULF OF MANNAR`),Al$1(),Nl$1(46,`text`,35),GI(47,`INDIAN OCEAN`),Al$1(),Nl$1(48,`text`,36),GI(49,`KERALA`),Al$1(),Nl$1(50,`text`,37),GI(51,`KARNATAKA`),Al$1(),Nl$1(52,`text`,38),GI(53,`ANDHRA PRADESH`),Al$1(),rm(54,`path`,39)(55,`path`,40),Nl$1(56,`g`,41),rm(57,`path`,42)(58,`path`,43)(59,`path`,44)(60,`path`,45)(61,`path`,46)(62,`path`,47)(63,`path`,48)(64,`path`,49)(65,`path`,50)(66,`path`,51)(67,`path`,52)(68,`path`,53),Al$1(),Nl$1(69,`g`,54),rm(70,`path`,55)(71,`path`,56)(72,`path`,57)(73,`path`,58)(74,`path`,59)(75,`path`,60)(76,`path`,61)(77,`path`,62)(78,`path`,63)(79,`path`,64)(80,`path`,65)(81,`path`,66),Al$1(),Nl$1(82,`g`,67)(83,`text`,68),GI(84,`NH 44`),Al$1(),Nl$1(85,`text`,69),GI(86,`NH 45`),Al$1(),Nl$1(87,`text`,70),GI(88,`NH 744`),Al$1(),Nl$1(89,`text`,71),GI(90,`NH 544`),Al$1(),Nl$1(91,`text`,72),GI(92,`NH 49`),Al$1(),Nl$1(93,`text`,73),GI(94,`NH 48`),Al$1(),Nl$1(95,`text`,74),GI(96,`ECR`),Al$1()(),vI(97,j1,3,10),EI(98,iM,6,12,`:svg:g`,75,Q1),Al$1()(),yp$1(),Nl$1(100,`div`,76)(101,`div`,77),rm(102,`span`,78),Nl$1(103,`span`),GI(104),Al$1()(),Nl$1(105,`div`,77),rm(106,`span`,79),Nl$1(107,`span`),GI(108),Al$1()(),Nl$1(109,`div`,77),rm(110,`span`,80),Nl$1(111,`span`),GI(112),Al$1()(),Nl$1(113,`div`,77),rm(114,`span`,81),Nl$1(115,`span`),GI(116),Al$1()()()(),Nl$1(117,`div`,82)(118,`div`,83)(119,`div`,84)(120,`span`),GI(121),Al$1()(),Nl$1(122,`h3`,85),GI(123),Al$1(),Nl$1(124,`p`,86),GI(125),Al$1()(),Nl$1(126,`div`,87)(127,`div`,88)(128,`span`,89),GI(129),Al$1(),Nl$1(130,`span`,90),GI(131),Al$1()(),Nl$1(132,`div`,88)(133,`span`,89),GI(134),Al$1(),Nl$1(135,`span`,90),GI(136),Al$1()(),Nl$1(137,`div`,88)(138,`span`,89),GI(139,`24/7`),Al$1(),Nl$1(140,`span`,90),GI(141),Al$1()()(),Nl$1(142,`div`,91)(143,`h5`),GI(144),Al$1(),Nl$1(145,`div`,92),EI(146,rM,2,1,`span`,93,DI),Al$1()(),Nl$1(148,`div`,94)(149,`div`,95),GI(150,`🛡️`),Al$1(),Nl$1(151,`div`,96)(152,`strong`),GI(153),Al$1(),Nl$1(154,`p`),GI(155),Al$1()()(),Nl$1(156,`button`,97),am(`click`,function(){return n.bookFromCity(n.selectedCity)}),Nl$1(157,`span`),GI(158),Al$1()()()()()()),e&2&&(mC(4),pm$1(n.i18n.t(`map.badge`)),mC(2),Ol$1(` `,n.i18n.t(`map.title`),` `),mC(2),pm$1(n.i18n.t(`map.titleHighlight`)),mC(2),Ol$1(` `,n.i18n.t(`map.sub`),` `),mC(7),pm$1(n.i18n.t(`map.liveFleetTracking`)),mC(2),pm$1(n.i18n.t(`map.clickHint`)),mC(78),yI(n.selectedCityId()!==`sankarankovil`?97:-1),mC(),CI(n.taxiData.citiesCoverage),mC(6),pm$1(n.i18n.t(`map.nationalHighways`)),mC(4),pm$1(n.i18n.t(`map.stateCorridors`)),mC(4),hm$1(``,n.i18n.t(`map.mainHQ`),` (8 `,n.i18n.isTamil()?`நிமிடம்`:`Mins`,`)`),mC(4),pm$1(n.i18n.t(`map.cityCluster`)),mC(3),dm$1(`tag-hq`,n.selectedCity.isHQ),mC(2),pm$1(n.selectedCity.isHQ?`⭐ `+n.i18n.t(`map.mainHQ`):`📍 `+n.i18n.t(`map.cityCluster`)),mC(2),pm$1(n.getCityName(n.selectedCity)),mC(2),hm$1(``,n.getCityDistrict(n.selectedCity),` • `,n.getCityTagline(n.selectedCity)),mC(4),hm$1(``,n.selectedCity.responseMinutes,` `,n.i18n.isTamil()?`நிமிடம்`:`Mins`),mC(2),pm$1(n.i18n.t(`map.avgPickup`)),mC(3),Ol$1(``,n.selectedCity.availableCabs,`+`),mC(2),pm$1(n.i18n.t(`map.standbyCabs`)),mC(5),pm$1(n.i18n.t(`map.deskSupport`)),mC(3),hm$1(``,n.i18n.t(`map.popularFrom`),` `,n.getCityName(n.selectedCity)),mC(2),CI(n.getCityRoutes(n.selectedCity)),mC(7),pm$1(n.i18n.t(`map.guaranteeTitle`)),mC(2),gm$1(``,n.i18n.t(`map.guaranteeDesc`),` (`,n.selectedCity.responseMinutes,` `,n.i18n.isTamil()?`நிமிடங்களில் வருகை`:`Mins Arrival`,`).`),mC(3),hm$1(``,n.i18n.t(`map.bookCityBtn`),` `,n.getCityName(n.selectedCity)))},dependencies:[xm$1],styles:[`.service-map-section[_ngcontent-%COMP%]{position:relative;overflow:hidden}.map-interactive-grid[_ngcontent-%COMP%]{display:grid;grid-template-columns:1fr;gap:2rem}@media(min-width:1024px){.map-interactive-grid[_ngcontent-%COMP%]{grid-template-columns:1.25fr 1fr;align-items:start}}.map-svg-card[_ngcontent-%COMP%]{padding:1.5rem;background:#fffffff0;border:1px solid rgba(226,232,240,.8);border-radius:28px;box-shadow:0 12px 32px #0f172a0f;position:relative;overflow:hidden}@media(max-width:767px){.map-svg-card[_ngcontent-%COMP%]{padding:1rem .75rem}}.map-svg-card[_ngcontent-%COMP%]   .map-toolbar[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;padding:0 .25rem}.map-svg-card[_ngcontent-%COMP%]   .map-toolbar[_ngcontent-%COMP%]   .fleet-status-pill[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;background:#16a34a1a;border:1px solid rgba(22,163,74,.25);padding:.35rem .85rem;border-radius:9999px}.map-svg-card[_ngcontent-%COMP%]   .map-toolbar[_ngcontent-%COMP%]   .fleet-status-pill[_ngcontent-%COMP%]   .pulse-live-dot[_ngcontent-%COMP%]{width:8px;height:8px;border-radius:50%;background:#16a34a;box-shadow:0 0 #16a34ab3;animation:_ngcontent-%COMP%_livePulse 2s infinite cubic-bezier(.4,0,.6,1)}.map-svg-card[_ngcontent-%COMP%]   .map-toolbar[_ngcontent-%COMP%]   .fleet-status-pill[_ngcontent-%COMP%]   .fleet-status-text[_ngcontent-%COMP%]{font-size:.76rem;font-weight:700;color:#15803d;letter-spacing:.02em}.map-svg-card[_ngcontent-%COMP%]   .map-toolbar[_ngcontent-%COMP%]   .map-hint-text[_ngcontent-%COMP%]{font-size:.75rem;font-weight:600;color:#64748b}@media(max-width:767px){.map-svg-card[_ngcontent-%COMP%]   .map-toolbar[_ngcontent-%COMP%]   .map-hint-text[_ngcontent-%COMP%]{display:none}}.map-svg-card[_ngcontent-%COMP%]   .map-wrapper[_ngcontent-%COMP%]{position:relative;width:100%;aspect-ratio:4/5;max-height:640px;margin:0 auto;border-radius:20px;overflow:hidden;background:#f0f9ff;border:1px solid rgba(186,230,253,.6)}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]{width:100%;height:100%;display:block;-webkit-user-select:none;user-select:none}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .ocean-backdrop[_ngcontent-%COMP%]{transition:fill .3s ease}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .surrounding-land[_ngcontent-%COMP%]{fill:#e2e8f0;stroke:#cbd5e1;stroke-width:1.2;stroke-dasharray:3 2;opacity:.8}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .geo-water-label[_ngcontent-%COMP%]{font-size:8.5px;font-weight:800;letter-spacing:2.5px;fill:#0284c7;opacity:.35;text-anchor:middle;pointer-events:none}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .geo-land-label[_ngcontent-%COMP%]{font-size:8px;letter-spacing:1.5px;fill:#64748b;opacity:.6}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .geo-neighbor-label[_ngcontent-%COMP%]{font-size:10.5px;font-weight:800;letter-spacing:3px;fill:#64748b;opacity:.32;pointer-events:none}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .tn-boundary[_ngcontent-%COMP%]{fill:url(#tnLandGrad);stroke:#d97706;stroke-width:1.6;filter:drop-shadow(0 6px 16px rgba(180,83,9,.1))}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .ghats-ridge[_ngcontent-%COMP%]{fill:none;stroke:#b4530929;stroke-width:10;stroke-linecap:round;pointer-events:none}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .state-highways[_ngcontent-%COMP%]   .sh-road[_ngcontent-%COMP%]{stroke:#fff;stroke-width:2.4;opacity:.95;fill:none;transition:stroke-width .2s ease;filter:drop-shadow(0 1px 2px rgba(0,0,0,.2))}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .state-highways[_ngcontent-%COMP%]   .sh-road.sh-sankarankovil-nellai[_ngcontent-%COMP%]{stroke-width:2.8}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .national-highways[_ngcontent-%COMP%]   .nh-road[_ngcontent-%COMP%]{stroke:#f59e0b;stroke-width:3.6;fill:none;transition:all .2s ease}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .national-highways[_ngcontent-%COMP%]   .nh-road.nh-44[_ngcontent-%COMP%]{stroke:#ea580c;stroke-width:4.4}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .national-highways[_ngcontent-%COMP%]   .nh-road.nh-744[_ngcontent-%COMP%]{stroke:#f59e0b;stroke-width:4}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .nh-badges[_ngcontent-%COMP%]{pointer-events:none}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .nh-badges[_ngcontent-%COMP%]   .nh-tag-label[_ngcontent-%COMP%]{fill:#92400e;font-weight:800;letter-spacing:.02em;paint-order:stroke fill;stroke:#fef3c7;stroke-width:3.5px;stroke-linejoin:round}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .dispatch-active-beam[_ngcontent-%COMP%]{stroke:#ea580c;stroke-width:3.5;stroke-linecap:round;fill:none;opacity:.75}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .dispatch-active-pulse[_ngcontent-%COMP%]{stroke:#fef08a;stroke-width:2.2;stroke-linecap:round;stroke-dasharray:8 8;fill:none;animation:_ngcontent-%COMP%_dispatchFlow 1.2s linear infinite}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .traveling-taxi-marker[_ngcontent-%COMP%]{fill:#ea580c;stroke:#fff;stroke-width:1.5;animation:_ngcontent-%COMP%_cabPulse 1.6s ease-in-out infinite alternate}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]{cursor:pointer;transition:transform .2s ease}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]   .pin-pulse[_ngcontent-%COMP%]{fill:#f59e0b4d;animation:_ngcontent-%COMP%_beaconPing 2.4s infinite ease-in-out}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]   .pin-dot[_ngcontent-%COMP%]{fill:#1e293b;stroke:#fff;stroke-width:1.4;transition:all .2s ease}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]   .pin-inner-dot[_ngcontent-%COMP%]{fill:#fff}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]   .pin-label[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-size:10px;font-weight:700;fill:#0f172a;paint-order:stroke fill;stroke:#fff;stroke-width:3.6px;stroke-linejoin:round;pointer-events:none;transition:all .2s ease}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]   .pin-label[_ngcontent-%COMP%]   .hq-badge-text[_ngcontent-%COMP%]{font-weight:900;fill:#b91c1c}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]:hover   .pin-dot[_ngcontent-%COMP%], .map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.active-pin[_ngcontent-%COMP%]   .pin-dot[_ngcontent-%COMP%]{fill:#ea580c;stroke:#fef08a;stroke-width:1.8;transform-origin:center}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group[_ngcontent-%COMP%]:hover   .pin-label[_ngcontent-%COMP%], .map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.active-pin[_ngcontent-%COMP%]   .pin-label[_ngcontent-%COMP%]{fill:#ea580c;font-weight:900;stroke:#fffbeb;stroke-width:4px}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.hq-pin[_ngcontent-%COMP%]   .hq-beacon-ripple[_ngcontent-%COMP%]{fill:#dc262626;animation:_ngcontent-%COMP%_beaconRipple 2s infinite ease-out}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.hq-pin[_ngcontent-%COMP%]   .hq-beacon-ring[_ngcontent-%COMP%]{fill:none;stroke:#dc262673;stroke-width:1.5;stroke-dasharray:3 2;animation:_ngcontent-%COMP%_spinRing 12s linear infinite;transform-origin:225px 642px}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.hq-pin[_ngcontent-%COMP%]   .hq-core-dot[_ngcontent-%COMP%]{fill:#dc2626;stroke:#fef08a;stroke-width:2.2}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.hq-pin[_ngcontent-%COMP%]   .hq-inner-star[_ngcontent-%COMP%]{fill:#fff}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.hq-pin[_ngcontent-%COMP%]   .hq-label[_ngcontent-%COMP%]{font-size:12.5px;font-weight:900;fill:#991b1b;stroke:#fef3c7;stroke-width:4.5px}.map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.hq-pin[_ngcontent-%COMP%]:hover   .hq-core-dot[_ngcontent-%COMP%], .map-svg-card[_ngcontent-%COMP%]   .tn-map-svg[_ngcontent-%COMP%]   .city-pin-group.hq-pin.active-pin[_ngcontent-%COMP%]   .hq-core-dot[_ngcontent-%COMP%]{fill:#b91c1c}.map-svg-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]{margin-top:1rem;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:.5rem 1rem;background:#f8fafc;padding:.75rem 1rem;border-radius:14px;border:1px solid rgba(226,232,240,.9);box-shadow:0 2px 8px #0f172a0a}@media(max-width:767px){.map-svg-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]{margin-top:.75rem;padding:.6rem .75rem;gap:.4rem .75rem}}.map-svg-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.45rem;font-size:.72rem;font-weight:700;color:#475569}.map-svg-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-highway-yellow[_ngcontent-%COMP%]{width:18px;height:4px;border-radius:2px;background:#f59e0b;box-shadow:0 0 4px #f59e0b99}.map-svg-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-highway-white[_ngcontent-%COMP%]{width:18px;height:3px;border-radius:2px;background:#fff;border:1px solid #CBD5E1}.map-svg-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-hq-dot[_ngcontent-%COMP%]{width:11px;height:11px;border-radius:50%;background:#dc2626;border:2px solid #FEF08A;box-shadow:0 0 5px #dc262680}.map-svg-card[_ngcontent-%COMP%]   .map-legend[_ngcontent-%COMP%]   .legend-item[_ngcontent-%COMP%]   .legend-cluster-dot[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background:#1e293b;border:1.5px solid #FFFFFF}.city-status-panel[_ngcontent-%COMP%]{padding:2.25rem;background:#fffffff0;border:1px solid rgba(226,232,240,.8);border-radius:28px;box-shadow:0 12px 32px #0f172a0f;display:flex;flex-direction:column}@media(max-width:767px){.city-status-panel[_ngcontent-%COMP%]{padding:1.5rem}}.city-status-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]{margin-bottom:1.5rem}.city-status-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-tag[_ngcontent-%COMP%]{display:inline-block;background:#ea580c1a;color:#ea580c;font-size:.74rem;font-weight:800;letter-spacing:.06em;padding:.3rem .75rem;border-radius:9999px;margin-bottom:.6rem}.city-status-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .panel-tag.tag-hq[_ngcontent-%COMP%]{background:#dc26261f;color:#dc2626;border:1px solid rgba(220,38,38,.2)}.city-status-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .city-name[_ngcontent-%COMP%]{font-size:2.1rem;font-family:Outfit,sans-serif;color:#0f172a;line-height:1.15;margin-bottom:.35rem}@media(max-width:767px){.city-status-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .city-name[_ngcontent-%COMP%]{font-size:1.75rem}}.city-status-panel[_ngcontent-%COMP%]   .panel-header[_ngcontent-%COMP%]   .city-district[_ngcontent-%COMP%]{font-size:.92rem;font-weight:500;color:#475569;line-height:1.4}.city-status-panel[_ngcontent-%COMP%]   .city-metrics-row[_ngcontent-%COMP%]{display:grid;grid-template-columns:repeat(3,1fr);gap:.75rem;margin-bottom:1.75rem}.city-status-panel[_ngcontent-%COMP%]   .city-metrics-row[_ngcontent-%COMP%]   .city-metric[_ngcontent-%COMP%]{display:flex;flex-direction:column;padding:.9rem .6rem;background:#f8fafc;border:1px solid #E2E8F0;border-radius:14px;text-align:center;transition:all .2s ease}.city-status-panel[_ngcontent-%COMP%]   .city-metrics-row[_ngcontent-%COMP%]   .city-metric[_ngcontent-%COMP%]:hover{background:#f1f5f9;border-color:#cbd5e1}.city-status-panel[_ngcontent-%COMP%]   .city-metrics-row[_ngcontent-%COMP%]   .city-metric[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%]{font-family:Outfit,sans-serif;font-size:1.25rem;font-weight:800;color:#ea580c;margin-bottom:.15rem}@media(max-width:767px){.city-status-panel[_ngcontent-%COMP%]   .city-metrics-row[_ngcontent-%COMP%]   .city-metric[_ngcontent-%COMP%]   .m-val[_ngcontent-%COMP%]{font-size:1.1rem}}.city-status-panel[_ngcontent-%COMP%]   .city-metrics-row[_ngcontent-%COMP%]   .city-metric[_ngcontent-%COMP%]   .m-lbl[_ngcontent-%COMP%]{font-size:.72rem;font-weight:600;color:#64748b;line-height:1.2}.city-status-panel[_ngcontent-%COMP%]   .city-top-routes[_ngcontent-%COMP%]{margin-bottom:1.75rem}.city-status-panel[_ngcontent-%COMP%]   .city-top-routes[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{font-size:.85rem;text-transform:uppercase;letter-spacing:.05em;color:#475569;margin-bottom:.75rem;font-weight:700}.city-status-panel[_ngcontent-%COMP%]   .city-top-routes[_ngcontent-%COMP%]   .route-pills-list[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.5rem}.city-status-panel[_ngcontent-%COMP%]   .city-top-routes[_ngcontent-%COMP%]   .route-pills-list[_ngcontent-%COMP%]   .city-route-tag[_ngcontent-%COMP%]{font-size:.82rem;background:#f59e0b1f;color:#92400e;padding:.38rem .85rem;border-radius:9999px;font-weight:600;border:1px solid rgba(245,158,11,.25);transition:all .2s ease}.city-status-panel[_ngcontent-%COMP%]   .city-top-routes[_ngcontent-%COMP%]   .route-pills-list[_ngcontent-%COMP%]   .city-route-tag[_ngcontent-%COMP%]:hover{background:#f59e0b38;transform:translateY(-1px)}.city-status-panel[_ngcontent-%COMP%]   .dispatch-guarantee-box[_ngcontent-%COMP%]{display:flex;align-items:flex-start;gap:.85rem;padding:1.1rem 1.25rem;background:#f0fdf4;border:1px solid #BBF7D0;border-radius:14px;margin-bottom:2rem}.city-status-panel[_ngcontent-%COMP%]   .dispatch-guarantee-box[_ngcontent-%COMP%]   .guarantee-icon[_ngcontent-%COMP%]{font-size:1.5rem;line-height:1}.city-status-panel[_ngcontent-%COMP%]   .dispatch-guarantee-box[_ngcontent-%COMP%]   .guarantee-text[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-size:.9rem;color:#166534;display:block;margin-bottom:.2rem;font-weight:700}.city-status-panel[_ngcontent-%COMP%]   .dispatch-guarantee-box[_ngcontent-%COMP%]   .guarantee-text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.8rem;color:#15803d;line-height:1.45;margin:0}.city-status-panel[_ngcontent-%COMP%]   .w-full[_ngcontent-%COMP%]{width:100%}@keyframes _ngcontent-%COMP%_dispatchFlow{0%{stroke-dashoffset:16}to{stroke-dashoffset:0}}@keyframes _ngcontent-%COMP%_livePulse{0%{box-shadow:0 0 #16a34ab3}70%{box-shadow:0 0 0 8px #16a34a00}to{box-shadow:0 0 #16a34a00}}@keyframes _ngcontent-%COMP%_beaconPing{0%{r:4;opacity:.8}50%{r:10;opacity:.25}to{r:4;opacity:.8}}@keyframes _ngcontent-%COMP%_beaconRipple{0%{r:8;opacity:.8}to{r:24;opacity:0}}@keyframes _ngcontent-%COMP%_spinRing{0%{transform:rotate(0)}to{transform:rotate(360deg)}}@keyframes _ngcontent-%COMP%_cabPulse{0%{transform:scale(.9)}to{transform:scale(1.15)}}`]})};var sM=()=>({});var aM=(r,t)=>t.id;function oM(r,t){if(r&1&&(Nl$1(0,`div`,24)(1,`p`,25),GI(2),Al$1()()),r&2){let e=MI().$implicit,n=MI();mC(2),pm$1(n.i18n.isTamil()?e.answerTa:e.answerEn)}}function cM(r,t){if(r&1){let e=SI();Nl$1(0,`article`,16)(1,`button`,17),am(`click`,function(){let i=np$1(e).$index;return rp$1(MI().toggle(i))}),Nl$1(2,`span`,18)(3,`span`,19),GI(4),Al$1(),Nl$1(5,`h3`,20),GI(6),Al$1()(),Nl$1(7,`span`,21),vp$1(),Nl$1(8,`svg`,22),rm(9,`polyline`,23),Al$1()()(),vI(10,oM,3,1,`div`,24),Al$1()}if(r&2){let e=t.$implicit,n=t.$index,i=MI();dm$1(`open`,i.isOpen(n)),mC(),Js$1(`aria-expanded`,i.isOpen(n)),mC(3),Ol$1(`0`,n+1),mC(2),pm$1(i.i18n.isTamil()?e.questionTa:e.questionEn),mC(),dm$1(`rotated`,i.isOpen(n)),mC(3),yI(i.isOpen(n)?10:-1)}}var ul=class r{i18n=h(qv$1);taxiData=h(Wv$1);activeIdx=z(0);faqs=[{id:`faq-1`,questionEn:`How do I book a call taxi in Sankarankovil with Rider Call Taxi?`,questionTa:`சங்கரன்கோவிலில் ரைடர் கால் டாக்ஸியை எவ்வாறு முன்பதிவு செய்வது?`,answerEn:`Booking is easy and instant! You can call our 24/7 dispatch hotlines directly at +91 9363015586 or +91 9363715586, or use our 1-click WhatsApp booking feature with your pickup location, drop destination, and preferred vehicle.`,answerTa:`முன்பதிவு மிகவும் எளிதானது மற்றும் உடனடியானது! எங்கள் 24/7 அவசர உதவி எண்களான +91 9363015586 அல்லது +91 9363715586 என்ற எண்களை நேரடியாக அழைக்கலாம், அல்லது எங்கள் இணையதளத்தில் உள்ள 1-கிளிக் வாட்ஸ்அப் வசதி மூலம் உங்கள் புறப்படும் இடம், சேரும் இடம் மற்றும் காரின் வகையை தெரிவித்து உடனடியாக புக் செய்யலாம்.`},{id:`faq-2`,questionEn:`What are the one-way drop taxi charges from Sankarankovil?`,questionTa:`சங்கரன்கோவிலில் இருந்து ஒரு வழி (One-Way) டாக்ஸி கட்டணங்கள் என்ன?`,answerEn:`For trips under 50 km, we charge a base package of ₹450 plus ₹14/km (Non-AC) or ₹15/km (AC) for Sedans, and ₹600 plus ₹18/km (Non-AC) or ₹19/km (AC) for SUVs. For outstation drops above 50 km, transparent 2x return rates apply (Sedan Non-AC ₹28/km, AC ₹30/km; SUV Non-AC ₹36/km, AC ₹38/km) with zero base fee.`,answerTa:`50 கி.மீ-க்கு உட்பட்ட குறுகிய பயணங்களுக்கு, செடான் காருக்கு ₹450 அடிப்படை கட்டணம் + கி.மீ-க்கு ₹14 (Non-AC) அல்லது ₹15 (AC), மற்றும் SUV காருக்கு ₹600 + கி.மீ-க்கு ₹18 (Non-AC) அல்லது ₹19 (AC) வசூலிக்கப்படுகிறது. 50 கி.மீ-க்கு மேற்பட்ட வெளியூர் ஒரு வழி பயணங்களுக்கு அடிப்படை கட்டணம் இன்றி, நேரடி வெளிப்படையான 2x ரிட்டர்ன் கட்டணம் மட்டுமே (செடான் Non-AC ₹28, AC ₹30; SUV Non-AC ₹36, AC ₹38).`},{id:`faq-3`,questionEn:`Are cabs available 24/7 for early morning Madurai airport drops?`,questionTa:`அதிகாலை மதுரை விமான நிலைய டிராப்பிற்கு 24/7 டாக்ஸி கிடைக்குமா?`,answerEn:`Yes, absolutely! Rider Call Taxi operates 24 hours a day, 7 days a week. We specialize in punctuality for early morning 2:00 AM / 3:00 AM airport transfers to Madurai, Tuticorin, and Trivandrum airports with live flight monitoring.`,answerTa:`ஆம், நிச்சயமாக! ரைடர் கால் டாக்ஸி 24 மணி நேரமும், வாரத்தின் 7 நாட்களும் இயங்குகிறது. அதிகாலை 2:00 மணி / 3:00 மணி போன்ற நேரங்களில் மதுரை, தூத்துக்குடி மற்றும் திருவனந்தபுரம் விமான நிலையங்களுக்கு குறித்த நேரத்தில் சென்று சேருவதில் நாங்கள் முழு அர்ப்பணிப்புடன் செயல்படுகிறோம்.`},{id:`faq-4`,questionEn:`What types of cars and vehicles are available in your fleet?`,questionTa:`உங்கள் வாகனக் குழுவில் என்னென்ன வகையான கார்கள் உள்ளன?`,answerEn:`Our genuine commercial fleet includes Tata Altroz Premium (Hatchback), Maruti Suzuki Dzire Tour & Toyota Glanza (Sedans with overhead carriers), Maruti Suzuki Ertiga Smart Hybrid (7-Seater SUV), Chevrolet Tavera Neo 3 (9-Seater MUV for ghat roads), and 14-seater Tempo Travellers.`,answerTa:`எங்கள் வணிக வாகன வரிசையில் டாடா அல்ட்ராஸ் பிரீமியம் (ஹேட்ச்பேக்), மாருதி சுசுகி டிசையர் டூர் & டொயோட்டா கிளான்சா (கேரியர் கொண்ட செடான்கள்), மாருதி சுசுகி எர்டிகா ஸ்மார்ட் ஹைப்ரிட் (7-சீட்டர் SUV), செவர்லே தவேரா நியோ 3 (மலைப்பாதைக்கான 9-சீட்டர் MUV), மற்றும் 14-சீட்டர் டெம்போ டிராவலர்கள் உள்ளன.`},{id:`faq-5`,questionEn:`Are there any hidden charges, surge fees, or night driving charges?`,questionTa:`கூடுதல் மறைமுக கட்டணங்கள், பீக் ஹவர் சார்ஜ் அல்லது இரவுக் கட்டணங்கள் உண்டா?`,answerEn:`No, we strictly guarantee zero surge pricing and zero hidden fees. Tolls and parking are paid at actual receipts by passengers with complete transparency, and all fares are billed accurately per kilometer.`,answerTa:`இல்லை, கூடுதல் கட்டணங்களோ, பீக் ஹவர் சர்சார்ஜோ அல்லது மறைமுக கட்டணங்களோ எதுவும் இல்லை. சுங்கச்சாவடி மற்றும் பார்க்கிங் கட்டணங்கள் உண்மையான ரசீது அடிப்படையில் மட்டுமே வாடிக்கையாளர்களால் செலுத்தப்படும், மேலும் அனைத்து பயணங்களும் துல்லியமான கி.மீ கணக்கீட்டில் மட்டுமே கட்டணம் வசூலிக்கப்படுகிறது.`}];isOpen(t){return this.activeIdx()===t}toggle(t){this.activeIdx()===t?this.activeIdx.set(null):this.activeIdx.set(t)}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-faq`]],decls:29,vars:11,consts:[[`id`,`faq-section`,1,`section`,`faq-section`],[1,`container`],[1,`section-header`],[1,`section-badge`],[1,`section-title`],[1,`highlight-yellow`],[1,`section-subtitle`],[1,`faq-accordion-list`],[1,`faq-item`,`glass-card`,3,`open`],[1,`faq-contact-card`,`glass-card`],[1,`faq-contact-info`],[1,`faq-contact-actions`],[1,`btn`,`btn-primary`,3,`href`],[`viewBox`,`0 0 24 24`,`width`,`18`,`height`,`18`,`stroke`,`currentColor`,`stroke-width`,`2.5`,`fill`,`none`],[`d`,`M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z`],[`target`,`_blank`,1,`btn`,`btn-whatsapp`,3,`href`],[1,`faq-item`,`glass-card`],[1,`faq-question-btn`,3,`click`],[1,`faq-q-left`],[1,`faq-q-num`],[1,`faq-q-title`],[1,`faq-chevron`],[`viewBox`,`0 0 24 24`,`width`,`22`,`height`,`22`,`stroke`,`currentColor`,`stroke-width`,`2.5`,`fill`,`none`],[`points`,`6 9 12 15 18 9`],[1,`faq-answer-body`],[1,`faq-answer-text`]],template:function(e,n){e&1&&(Nl$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3),GI(4),Al$1(),Nl$1(5,`h2`,4),GI(6),Nl$1(7,`span`,5),GI(8),Al$1()(),Nl$1(9,`p`,6),GI(10),Al$1()(),Nl$1(11,`div`,7),EI(12,cM,11,8,`article`,8,aM),Al$1(),Nl$1(14,`div`,9)(15,`div`,10)(16,`h4`),GI(17),Al$1(),Nl$1(18,`p`),GI(19),Al$1()(),Nl$1(20,`div`,11)(21,`a`,12),vp$1(),Nl$1(22,`svg`,13),rm(23,`path`,14),Al$1(),yp$1(),Nl$1(24,`span`),GI(25),Al$1()(),Nl$1(26,`a`,15)(27,`span`),GI(28),Al$1()()()()()()),e&2&&(mC(4),pm$1(n.i18n.isTamil()?`அடிக்கடி கேட்கப்படும் கேள்விகள்`:`HELP & COMMON QUERIES`),mC(2),Ol$1(` `,n.i18n.isTamil()?`அடிக்கடி கேட்கப்படும்`:`Frequently Asked`,` `),mC(2),pm$1(n.i18n.isTamil()?`கேள்விகள் (FAQ)`:`Questions (FAQ)`),mC(2),Ol$1(` `,n.i18n.isTamil()?`சங்கரன்கோவில் டாக்ஸி முன்பதிவு, ஒரு வழி கட்டணங்கள் மற்றும் ஏர்போர்ட் டிராப் பற்றிய முழுமையான விளக்கங்கள்.`:`Clear, transparent answers about our Sankarankovil cab booking, one-way outstation tariffs, fleet options, and 24/7 airport drops.`,` `),mC(2),CI(n.faqs),mC(5),pm$1(n.i18n.isTamil()?`மேலும் சந்தேகங்கள் உள்ளதா?`:`Still have questions or need a quick ride?`),mC(2),pm$1(n.i18n.isTamil()?`எங்கள் 24/7 அவசர உதவி மையத்தை எந்த நேரத்திலும் தொடர்பு கொள்ளலாம்.`:`Our 24/7 Sankarankovil dispatch team is ready to assist you day and night.`),mC(2),im(`href`,`tel:`+n.taxiData.company.rawPhone1,og),mC(4),pm$1(n.i18n.isTamil()?`அழைக்க: +91 9363015586`:`Call +91 9363015586`),mC(),im(`href`,n.taxiData.getWhatsAppEnquiryUrl(tT(10,sM)),og),mC(2),pm$1(n.i18n.isTamil()?`வாட்ஸ்அப் உதவி`:`Chat on WhatsApp`))},dependencies:[xm$1],styles:[`.faq-section[_ngcontent-%COMP%]{background:transparent;padding:4.5rem 0 3.5rem}.faq-accordion-list[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:1.1rem;max-width:960px;margin:2.5rem auto 0}.faq-item[_ngcontent-%COMP%]{border-radius:20px;background:#fffffff0;border:1px solid rgba(226,232,240,.85);box-shadow:0 4px 16px #0000000a;transition:all .3s cubic-bezier(.16,1,.3,1);overflow:hidden}.faq-item.open[_ngcontent-%COMP%]{border-color:#ffc10799;box-shadow:0 8px 24px #ffc10724}.faq-item[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:1.35rem 1.6rem;background:transparent;border:none;text-align:left;cursor:pointer;font-family:inherit}.faq-item[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]   .faq-q-left[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem;flex-grow:1}.faq-item[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]   .faq-q-left[_ngcontent-%COMP%]   .faq-q-num[_ngcontent-%COMP%]{font-family:monospace;font-size:.95rem;font-weight:800;color:#ff9800;background:#ff98001f;padding:.25rem .55rem;border-radius:6px;flex-shrink:0}.faq-item[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]   .faq-q-left[_ngcontent-%COMP%]   .faq-q-title[_ngcontent-%COMP%]{font-size:1.05rem;font-weight:700;color:#1e293b;line-height:1.4;margin:0}.faq-item[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]   .faq-chevron[_ngcontent-%COMP%]{color:#64748b;transition:transform .3s ease;display:flex;align-items:center;justify-content:center;flex-shrink:0}.faq-item[_ngcontent-%COMP%]   .faq-question-btn[_ngcontent-%COMP%]   .faq-chevron.rotated[_ngcontent-%COMP%]{transform:rotate(180deg);color:#d97706}.faq-item[_ngcontent-%COMP%]   .faq-answer-body[_ngcontent-%COMP%]{padding:1rem 1.6rem 1.4rem 4rem;border-top:1px solid rgba(241,245,249,.9);animation:_ngcontent-%COMP%_fadeIn .3s ease}.faq-item[_ngcontent-%COMP%]   .faq-answer-body[_ngcontent-%COMP%]   .faq-answer-text[_ngcontent-%COMP%]{font-size:.95rem;color:#475569;line-height:1.65;margin:0}@keyframes _ngcontent-%COMP%_fadeIn{0%{opacity:0;transform:translateY(-4px)}to{opacity:1;transform:translateY(0)}}.faq-contact-card[_ngcontent-%COMP%]{max-width:960px;margin:2.8rem auto 0;padding:1.8rem 2.2rem;border-radius:28px;background:linear-gradient(135deg,#fffffff2,#fff8e1f2);border:1px solid rgba(255,193,7,.4);display:flex;flex-direction:column;gap:1.2rem;align-items:center;justify-content:space-between;box-shadow:0 10px 30px #ffc1071f}@media(min-width:768px){.faq-contact-card[_ngcontent-%COMP%]{flex-direction:row}}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:1.15rem;font-weight:800;color:#111827;margin:0 0 .3rem}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:.88rem;color:#64748b;margin:0}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-actions[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;gap:.75rem}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{display:inline-flex;align-items:center;gap:.5rem;padding:.65rem 1.25rem;border-radius:14px;font-weight:700;font-size:.88rem;text-decoration:none;transition:all .25s ease;cursor:pointer}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]{background:#ffc107;color:#111827;border:1px solid #ffb300}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-actions[_ngcontent-%COMP%]   .btn-primary[_ngcontent-%COMP%]:hover{background:#ffb300;transform:translateY(-2px)}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-actions[_ngcontent-%COMP%]   .btn-whatsapp[_ngcontent-%COMP%]{background:#25d366;color:#fff;border:1px solid #20ba59}.faq-contact-card[_ngcontent-%COMP%]   .faq-contact-actions[_ngcontent-%COMP%]   .btn-whatsapp[_ngcontent-%COMP%]:hover{background:#20ba59;transform:translateY(-2px)}`]})};var lM=()=>[1,2,3,4,5];var em=(r,t)=>t.id;function uM(r,t){r&1&&(Nl$1(0,`span`,21),GI(1,`⭐`),Al$1())}function hM(r,t){if(r&1&&(Nl$1(0,`div`,9)(1,`div`,18)(2,`div`,19)(3,`div`,20),EI(4,uM,2,0,`span`,21,DI),Al$1(),Nl$1(6,`span`,22),GI(7),Al$1()(),Nl$1(8,`p`,23),GI(9),Al$1(),Nl$1(10,`div`,24)(11,`div`,25),GI(12),Al$1(),Nl$1(13,`div`,26)(14,`h4`,27),GI(15),Al$1(),Nl$1(16,`p`,28),GI(17),Al$1()()()()()),r&2){let e=t.$implicit,n=MI();mC(4),CI(tT(6,lM)),mC(3),pm$1(n.i18n.isTamil()&&e.tripTypeTa?e.tripTypeTa:e.tripType),mC(2),Ol$1(`“`,n.i18n.isTamil()&&e.commentTa?e.commentTa:e.comment,`”`),mC(3),pm$1(e.avatar),mC(3),pm$1(n.i18n.isTamil()&&e.nameTa?e.nameTa:e.name),mC(2),hm$1(``,n.i18n.isTamil()&&e.locationTa?e.locationTa:e.location,` • `,n.i18n.isTamil()&&e.dateTa?e.dateTa:e.date)}}function dM(r,t){if(r&1){let e=SI();Nl$1(0,`button`,29),am(`click`,function(){let i=np$1(e).$index;return rp$1(MI().setIndex(i))}),Al$1()}if(r&2){let e=t.$index;dm$1(`active`,MI().currentIndex()===e)}}var hl=class r{taxiData=h(Wv$1);i18n=h(qv$1);currentIndex=z(0);next(){this.currentIndex.update(t=>(t+1)%this.taxiData.testimonials.length)}prev(){this.currentIndex.update(t=>(t-1+this.taxiData.testimonials.length)%this.taxiData.testimonials.length)}setIndex(t){this.currentIndex.set(t)}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-testimonials`]],decls:25,vars:6,consts:[[1,`section`,`testimonials-section`],[1,`container`],[1,`section-header`],[1,`section-badge`],[1,`section-title`],[1,`highlight-yellow`],[1,`section-subtitle`],[1,`testimonials-slider`],[1,`reviews-track`],[1,`review-slide`],[1,`slider-controls`],[`aria-label`,`Previous review`,1,`slider-btn`,`prev-btn`,3,`click`],[`viewBox`,`0 0 24 24`,`width`,`20`,`height`,`20`,`stroke`,`currentColor`,`stroke-width`,`2.5`,`fill`,`none`],[`points`,`15 18 9 12 15 6`],[1,`slider-dots`],[`aria-label`,`Go to slide`,1,`dot-btn`,3,`active`],[`aria-label`,`Next review`,1,`slider-btn`,`next-btn`,3,`click`],[`points`,`9 18 15 12 9 6`],[1,`review-card`,`glass-card`],[1,`review-top`],[1,`stars-row`],[1,`star-icon`],[1,`trip-tag`],[1,`review-comment`],[1,`reviewer-meta`],[1,`reviewer-avatar`],[1,`reviewer-info`],[1,`reviewer-name`],[1,`reviewer-loc`],[`aria-label`,`Go to slide`,1,`dot-btn`,3,`click`]],template:function(e,n){e&1&&(Nl$1(0,`section`,0)(1,`div`,1)(2,`div`,2)(3,`span`,3),GI(4),Al$1(),Nl$1(5,`h2`,4),GI(6),Nl$1(7,`span`,5),GI(8),Al$1()(),Nl$1(9,`p`,6),GI(10),Al$1()(),Nl$1(11,`div`,7)(12,`div`,8),EI(13,hM,18,7,`div`,9,em),Al$1(),Nl$1(15,`div`,10)(16,`button`,11),am(`click`,function(){return n.prev()}),vp$1(),Nl$1(17,`svg`,12),rm(18,`polyline`,13),Al$1()(),yp$1(),Nl$1(19,`div`,14),EI(20,dM,1,2,`button`,15,em),Al$1(),Nl$1(22,`button`,16),am(`click`,function(){return n.next()}),vp$1(),Nl$1(23,`svg`,12),rm(24,`polyline`,17),Al$1()()()()()()),e&2&&(mC(4),pm$1(n.i18n.t(`reviews.badge`)),mC(2),Ol$1(` `,n.i18n.t(`reviews.title`),` `),mC(2),pm$1(n.i18n.t(`reviews.titleHighlight`)),mC(2),Ol$1(` `,n.i18n.t(`reviews.sub`),` `),mC(2),lm(`transform`,`translateX(-`+n.currentIndex()*100+`%)`),mC(),CI(n.taxiData.testimonials),mC(7),CI(n.taxiData.testimonials))},dependencies:[xm$1],styles:[`.testimonials-section[_ngcontent-%COMP%]{position:relative;overflow:hidden}.testimonials-slider[_ngcontent-%COMP%]{max-width:860px;margin:0 auto;position:relative;overflow:hidden}.reviews-track[_ngcontent-%COMP%]{display:flex;transition:transform .4s cubic-bezier(.16,1,.3,1);width:100%}.review-slide[_ngcontent-%COMP%]{min-width:100%;padding:.5rem 1rem}.review-card[_ngcontent-%COMP%]{padding:3rem;background:#ffffffe6;border-radius:28px}@media(max-width:767px){.review-card[_ngcontent-%COMP%]{padding:1.75rem}}.review-card[_ngcontent-%COMP%]   .review-top[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;gap:1rem;margin-bottom:1.5rem}.review-card[_ngcontent-%COMP%]   .review-top[_ngcontent-%COMP%]   .stars-row[_ngcontent-%COMP%]{display:flex;gap:.25rem;font-size:1.1rem}.review-card[_ngcontent-%COMP%]   .review-top[_ngcontent-%COMP%]   .trip-tag[_ngcontent-%COMP%]{font-size:.75rem;font-weight:700;padding:.3rem .75rem;background:#ffc1072e;color:#9a6200;border-radius:9999px}.review-card[_ngcontent-%COMP%]   .review-comment[_ngcontent-%COMP%]{font-size:1.15rem;line-height:1.7;color:#0f172a;font-style:italic;margin-bottom:2rem}@media(max-width:767px){.review-card[_ngcontent-%COMP%]   .review-comment[_ngcontent-%COMP%]{font-size:1rem}}.review-card[_ngcontent-%COMP%]   .reviewer-meta[_ngcontent-%COMP%]{display:flex;align-items:center;gap:1rem}.review-card[_ngcontent-%COMP%]   .reviewer-meta[_ngcontent-%COMP%]   .reviewer-avatar[_ngcontent-%COMP%]{font-size:2.2rem;width:52px;height:52px;border-radius:50%;background:#f1f5f9;display:flex;align-items:center;justify-content:center}.review-card[_ngcontent-%COMP%]   .reviewer-meta[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .reviewer-name[_ngcontent-%COMP%]{font-size:1.1rem;color:#0f172a;margin-bottom:.15rem}.review-card[_ngcontent-%COMP%]   .reviewer-meta[_ngcontent-%COMP%]   .reviewer-info[_ngcontent-%COMP%]   .reviewer-loc[_ngcontent-%COMP%]{font-size:.82rem;color:#64748b}.slider-controls[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;gap:1.5rem;margin-top:2rem}.slider-controls[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]{width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid #E2E8F0;color:#0f172a;display:flex;align-items:center;justify-content:center;cursor:pointer;box-shadow:0 4px 12px #0000000d;transition:all .2s ease}.slider-controls[_ngcontent-%COMP%]   .slider-btn[_ngcontent-%COMP%]:hover{background:#ffc107;border-color:#ffc107;transform:scale(1.05)}.slider-controls[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]{display:flex;gap:.5rem}.slider-controls[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   .dot-btn[_ngcontent-%COMP%]{width:10px;height:10px;border-radius:50%;background:#cbd5e1;border:none;cursor:pointer;transition:all .25s ease}.slider-controls[_ngcontent-%COMP%]   .slider-dots[_ngcontent-%COMP%]   .dot-btn.active[_ngcontent-%COMP%]{background:#d32f2f;width:24px;border-radius:5px}`]})};var nm=class r{scrollAnimation=h(Kv$1);ngAfterViewInit(){this.scrollAnimation.initScrollAnimations()}static ɵfac=function(e){return new(e||r)};static ɵcmp=wl$1({type:r,selectors:[[`app-home`]],decls:13,vars:0,consts:[[1,`home-page-wrapper`]],template:function(e,n){e&1&&(Fs$1(0,`div`,0),Xs$1(1,`app-hero-banner`)(2,`app-statistics`)(3,`app-services-overview`)(4,`app-why-choose-us`)(5,`app-taxi-types`)(6,`app-fleet-showcase`)(7,`app-route-showcase`)(8,`app-service-map`)(9,`app-faq`)(10,`app-testimonials`)(11,`app-enquiry-form`)(12,`app-google-map`),Ml$1())},dependencies:[xm$1,zc,rl,sl,al,ol,W,cl,ll,ul,hl,We$1,Le$1],styles:[`.home-page-wrapper[_ngcontent-%COMP%]{overflow-x:hidden}`]})};export{nm as HomeComponent};