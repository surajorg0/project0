import{B as H,D as Y,F as $,H as D,aa as Q,b as T,f as V,g as z,h as j,i as q,j as B,k as F,l as R,m as E,n as U,u as A,x as L,y as G}from"./chunk-SIZ5UOEX.js";import{$ as u,A as m,C as _,G as f,J as c,K as r,L as l,M as s,Q as P,R as C,S as p,aa as g,ib as O,jb as S,ka as I,la as k,n as h,na as x,o as b,ra as M,ua as w,w as y,x as v,y as a}from"./chunk-EELN6U27.js";import"./chunk-YTWACNKP.js";import"./chunk-OHCHZUC3.js";import"./chunk-ICNA3IQD.js";import"./chunk-BP2XPFHT.js";import"./chunk-SARY5JFI.js";import"./chunk-RODA7RWT.js";import"./chunk-ODME3OG3.js";import"./chunk-4U6PRYVA.js";import"./chunk-WBXTLIFG.js";import"./chunk-JWIEPCRG.js";import"./chunk-QPVVTFFW.js";import"./chunk-J6ICYO4L.js";import"./chunk-LF5XB4YN.js";import"./chunk-OYAVQN5W.js";function Z(i,o){if(i&1){let n=P();r(0,"div",11),C("click",function(){h(n);let e=p().$implicit,d=p();return b(d.playVideo(e))}),s(1,"img",12),r(2,"div",13),s(3,"ion-icon",14),l()()}if(i&2){let n=p().$implicit;a(),c("src",n.thumbnail,y)("alt",n.title)}}function J(i,o){if(i&1&&s(0,"iframe",15),i&2){let n=p().$implicit;c("src",n.safeUrl,v)}}function W(i,o){if(i&1&&(r(0,"ion-col",7)(1,"ion-card")(2,"ion-card-header")(3,"ion-card-title"),u(4),l()(),r(5,"ion-card-content"),f(6,Z,4,2,"div",8)(7,J,1,1,"iframe",9),r(8,"p",10),u(9),l()()()()),i&2){let n=o.$implicit;a(4),g(n.title),a(2),c("ngIf",!n.isPlaying),a(),c("ngIf",n.isPlaying),a(2),g(n.description)}}var mt=(()=>{let o=class o{constructor(t,e,d,N){this.sanitizer=t,this.router=e,this.platform=d,this.animationCtrl=N,this.carVideos=[{id:1,title:"Ferrari SF90 Stradale - Supercar Review",description:"An in-depth look at the Ferrari SF90 Stradale hybrid supercar.",youtubeId:"k1bB_mU4wq0",thumbnail:"https://img.youtube.com/vi/k1bB_mU4wq0/hqdefault.jpg",isPlaying:!1},{id:2,title:"Lamborghini Aventador SVJ - Track Test",description:"Testing the Lamborghini Aventador SVJ on the N\xFCrburgring.",youtubeId:"jdcV2kI-8YM",thumbnail:"https://img.youtube.com/vi/ZImYRu7hli4/hqdefault.jpg",isPlaying:!1},{id:3,title:"Bugatti Chiron - 0-400-0 km/h",description:"Watch the Bugatti Chiron accelerate from 0 to 400 km/h and back to 0.",youtubeId:"PkkV1vLHUvQ",thumbnail:"https://img.youtube.com/vi/PkkV1vLHUvQ/hqdefault.jpg",isPlaying:!1},{id:4,title:"Porsche 911 GT3 RS - Review",description:"A comprehensive review of the track-focused Porsche 911 GT3 RS.",youtubeId:"q5T-v5lYnck",thumbnail:"https://img.youtube.com/vi/q5T-v5lYnck/hqdefault.jpg",isPlaying:!1},{id:5,title:"Tesla Model S Plaid - Acceleration Test",description:"Testing the incredible acceleration of the Tesla Model S Plaid.",youtubeId:"i9Mq9GMi0QA",thumbnail:"https://img.youtube.com/vi/i9Mq9GMi0QA/hqdefault.jpg",isPlaying:!1},{id:6,title:"Classic Mustang Restoration",description:"Complete restoration of a 1967 Ford Mustang Fastback.",youtubeId:"_44-iZtLhnI",thumbnail:"https://img.youtube.com/vi/_44-iZtLhnI/hqdefault.jpg",isPlaying:!1}],$({arrowBack:D,playCircle:Q})}ngOnInit(){this.carVideos.forEach(t=>{t.safeUrl=this.sanitizer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${t.youtubeId}?autoplay=1`)}),this.backButtonSubscription=this.platform.backButton.subscribeWithPriority(10,()=>{let t=this.carVideos.find(e=>e.isPlaying);t?t.isPlaying=!1:this.router.navigate(["/home"])})}ngOnDestroy(){this.backButtonSubscription&&this.backButtonSubscription.unsubscribe()}playVideo(t){this.carVideos.forEach(e=>{e.id!==t.id&&(e.isPlaying=!1)}),t.isPlaying=!t.isPlaying}};o.\u0275fac=function(e){return new(e||o)(m(M),m(w),m(S),m(H))},o.\u0275cmp=_({type:o,selectors:[["app-videos"]],decls:12,vars:3,consts:[[3,"translucent"],["slot","start"],["defaultHref","/home"],[3,"fullscreen"],[1,"background-container"],[1,"star-dots"],["size","12","size-md","6",4,"ngFor","ngForOf"],["size","12","size-md","6"],["class","video-thumbnail",3,"click",4,"ngIf"],["width","100%","height","100","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src",4,"ngIf"],[1,"video-description"],[1,"video-thumbnail",3,"click"],[3,"src","alt"],[1,"play-button"],["name","play-circle","size","large"],["width","100%","height","100","frameborder","0","allow","accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture","allowfullscreen","",3,"src"]],template:function(e,d){e&1&&(r(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1),s(3,"ion-back-button",2),l(),r(4,"ion-title"),u(5,"Suraj - Car Videos"),l()()(),r(6,"ion-content",3)(7,"div",4),s(8,"div",5),l(),r(9,"ion-grid")(10,"ion-row"),f(11,W,10,4,"ion-col",6),l()()()),e&2&&(c("translucent",!0),a(6),c("fullscreen",!0),a(5),c("ngForOf",d.carVideos))},dependencies:[x,I,k,O,U,G,L,R,V,T,z,q,B,j,E,A,F,Y],styles:["ion-content[_ngcontent-%COMP%]{--background: #f5f5f5}.background-container[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;overflow:hidden;z-index:-1}.star-dots[_ngcontent-%COMP%]{position:absolute;top:0;left:0;right:0;bottom:0;background-image:radial-gradient(white 1px,transparent 1px);background-size:30px 30px;opacity:.3}ion-card[_ngcontent-%COMP%]{margin:16px;border-radius:12px;overflow:hidden;box-shadow:0 4px 12px #0000001a;transition:transform .3s ease;background:#ffffffe6}ion-card[_ngcontent-%COMP%]:hover{transform:translateY(-5px)}ion-card-title[_ngcontent-%COMP%]{font-size:18px;font-weight:600;color:#333}.video-thumbnail[_ngcontent-%COMP%]{position:relative;cursor:pointer;overflow:hidden;border-radius:8px}.video-thumbnail[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:215px;object-fit:cover;transition:transform .3s ease}.video-thumbnail[_ngcontent-%COMP%]:hover   img[_ngcontent-%COMP%]{transform:scale(1.05)}.video-thumbnail[_ngcontent-%COMP%]:hover   .play-button[_ngcontent-%COMP%]{background-color:#0009}.video-thumbnail[_ngcontent-%COMP%]:hover   .play-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{transform:scale(1.2)}.play-button[_ngcontent-%COMP%]{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;background-color:#0006;transition:background-color .3s ease}.play-button[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{color:#fff;font-size:48px;transition:transform .3s ease}.video-description[_ngcontent-%COMP%]{margin-top:12px;color:#666;font-size:14px;line-height:1.5}iframe[_ngcontent-%COMP%]{border-radius:8px}"]});let i=o;return i})();export{mt as VideosPage};
