import { Component } from '@angular/core';
import { 
  IonApp, 
  IonRouterOutlet, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent,
  IonMenu,
  IonList,
  IonItem,
  IonIcon,
  IonLabel,
  IonMenuButton,
  IonButtons,
  IonButton
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { 
  homeOutline, 
  personOutline, 
  imagesOutline, 
  videocamOutline, 
  folderOutline,
  logOutOutline,
  menuOutline,
  sunnyOutline,
  moonOutline
} from 'ionicons/icons';

@Component({
  selector: 'app-root',
  template: `
    <ion-app>
      <ion-menu contentId="main-content">
        <ion-header>
          <ion-toolbar color="primary">
            <ion-title>Menu</ion-title>
          </ion-toolbar>
        </ion-header>
        <ion-content>
          <ion-list>
            <ion-item routerLink="/home" routerDirection="root">
              <ion-icon slot="start" name="home-outline"></ion-icon>
              <ion-label>Home</ion-label>
            </ion-item>
            <ion-item routerLink="/gallery" routerDirection="root">
              <ion-icon slot="start" name="images-outline"></ion-icon>
              <ion-label>Gallery</ion-label>
            </ion-item>
            <ion-item routerLink="/videos" routerDirection="root">
              <ion-icon slot="start" name="videocam-outline"></ion-icon>
              <ion-label>Videos</ion-label>
            </ion-item>
            <ion-item routerLink="/folder" routerDirection="root">
              <ion-icon slot="start" name="folder-outline"></ion-icon>
              <ion-label>Folder</ion-label>
            </ion-item>
            <ion-item routerLink="/profile" routerDirection="root">
              <ion-icon slot="start" name="person-outline"></ion-icon>
              <ion-label>Profile</ion-label>
            </ion-item>
            <ion-item routerLink="/login" routerDirection="root">
              <ion-icon slot="start" name="log-out-outline"></ion-icon>
              <ion-label>Logout</ion-label>
            </ion-item>
          </ion-list>
        </ion-content>
      </ion-menu>

      <div class="ion-page" id="main-content">
        <ion-header>
          <ion-toolbar>
            <ion-buttons slot="start">
              <ion-menu-button></ion-menu-button>
            </ion-buttons>
            <ion-title>Car Gallery</ion-title>
            <ion-buttons slot="end">
              <ion-button>
                <ion-icon slot="icon-only" name="sunny-outline"></ion-icon>
              </ion-button>
            </ion-buttons>
          </ion-toolbar>
        </ion-header>
        
        <ion-content>
          <ion-router-outlet></ion-router-outlet>
        </ion-content>
      </div>
    </ion-app>
  `,
  styles: [`
    ion-menu ion-content {
      --background: var(--ion-item-background, var(--ion-background-color, #fff));
    }
    
    ion-menu ion-item {
      --padding-start: 16px;
      --padding-end: 16px;
      border-radius: 4px;
    }
    
    ion-menu ion-item.selected {
      --background: rgba(var(--ion-color-primary-rgb), 0.14);
    }
    
    ion-menu ion-item.selected ion-icon {
      color: var(--ion-color-primary);
    }
    
    ion-menu ion-list {
      padding: 20px 0;
    }
    
    ion-menu ion-item ion-icon {
      color: #616e7e;
    }
  `],
  standalone: true,
  imports: [
    CommonModule, 
    RouterModule,
    IonApp,
    IonRouterOutlet,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonMenu,
    IonList,
    IonItem,
    IonIcon,
    IonLabel,
    IonMenuButton,
    IonButtons,
    IonButton
  ]
})
export class AppComponent {
  constructor() {
    // Add all the icons we need
    addIcons({
      homeOutline,
      personOutline,
      imagesOutline,
      videocamOutline,
      folderOutline,
      logOutOutline,
      menuOutline,
      sunnyOutline,
      moonOutline
    });
    
    console.log('AppComponent initialized');
  }
}
