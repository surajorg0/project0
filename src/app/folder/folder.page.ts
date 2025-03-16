import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButton, 
  IonIcon, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle,
  IonButtons,
  IonBackButton,
  IonList,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonImg,
  Platform
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { folderOpen, arrowBack, images } from 'ionicons/icons';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButton, 
    IonIcon, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle,
    IonButtons,
    IonBackButton,
    IonList,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonImg
  ]
})
export class FolderPage implements OnInit, OnDestroy {
  folders = [
    { 
      id: 1, 
      name: 'Sports Cars', 
      imageCount: 5,
      thumbnail: 'https://img.freepik.com/premium-vector/sport-car-logo-template-premium-vector_555057-160.jpg?semt=ais_hybrid',
      description: 'High-performance sports cars collection'
    },
    { 
      id: 2, 
      name: 'Vintage Cars', 
      imageCount: 8,
      thumbnail: 'https://img.freepik.com/premium-vector/vintage-classic-car-logo_573604-355.jpg',
      description: 'Classic vintage automobiles from the past'
    },
    { 
      id: 3, 
      name: 'Luxury Cars', 
      imageCount: 7,
      thumbnail: 'https://images-platform.99static.com/XF6ZWRAmIis_Dhh005n4dRlEppI=/98x70:879x851/500x500/top/smart/99designs-contests-attachments/129/129949/attachment_129949202',
      description: 'Premium luxury vehicles'
    },
    { 
      id: 4, 
      name: 'Electric Cars', 
      imageCount: 6,
      thumbnail: 'https://i.ytimg.com/vi/CHsIsCVHXZo/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLB5oyzi9Rx8xPmLsesDbjnfzl7O8A',
      description: 'Modern electric vehicles'
    }
  ];

  private backButtonSubscription: any;

  constructor(
    private router: Router,
    private platform: Platform
  ) {
    addIcons({ folderOpen, arrowBack, images });
  }

  ngOnInit() {
    // Set up hardware back button handling
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/home']);
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    }
  }

  openGallery(folderId?: number) {
    if (folderId) {
      this.router.navigate(['/gallery'], { queryParams: { folder: folderId } });
    } else {
      this.router.navigate(['/gallery']);
    }
  }
}
