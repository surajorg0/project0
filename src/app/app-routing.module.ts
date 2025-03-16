import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('./login/login.page').then(m => m.LoginPage)
  },
  {
    path: 'folder',
    loadComponent: () => import('./folder/folder.page').then(m => m.FolderPage)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery/gallery.page').then(m => m.GalleryPage)
  },
  {
    path: 'videos',
    loadComponent: () => import('./videos/videos.page').then(m => m.VideosPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then(m => m.ProfilePage)
  },
  {
    path: 'video-detail/:id',
    loadComponent: () => import('./pages/video-detail/video-detail.page').then(m => m.VideoDetailPage)
  },
  {
    path: 'car-video',
    loadComponent: () => import('./pages/car-video/car-video.page').then(m => m.CarVideoPage)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 