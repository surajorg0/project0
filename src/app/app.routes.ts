import { Routes } from '@angular/router';

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
    loadComponent: () => import('./login/login.page').then( m => m.LoginPage)
  },
  {
    path: 'folder',
    loadComponent: () => import('./folder/folder.page').then( m => m.FolderPage)
  },
  {
    path: 'gallery',
    loadComponent: () => import('./gallery/gallery.page').then( m => m.GalleryPage)
  },
  {
    path: 'videos',
    loadComponent: () => import('./videos/videos.page').then( m => m.VideosPage)
  },
  {
    path: 'profile',
    loadComponent: () => import('./profile/profile.page').then( m => m.ProfilePage)
  },
];
