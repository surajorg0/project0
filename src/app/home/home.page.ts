import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButton, 
  IonIcon, 
  IonCard, 
  IonCardContent, 
  IonCardHeader, 
  IonCardTitle,
  IonButtons,
  IonMenuButton,
  AlertController,
  IonAvatar,
  IonImg,
  AnimationController
} from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { addIcons } from 'ionicons';
import { folderOpen, logOut, images, sunny, videocam, person } from 'ionicons/icons';
import { App } from '@capacitor/app';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButton, 
    IonIcon, 
    IonCard, 
    IonCardContent, 
    IonCardHeader, 
    IonCardTitle,
    IonButtons,
    IonMenuButton,
    IonAvatar,
    IonImg,
    CommonModule
  ],
})
export class HomePage implements OnInit {
  greeting: string = '';
  userName: string = '';
  profileImage: string | null = null;
  currentEmoji: string = '😊';
  emojis: string[] = ['😊', '😎', '🚗', '🏎️', '🌞', '🌟', '🔥', '👍', '🎉', '🌈'];

  constructor(
    private router: Router,
    private authService: AuthService,
    private platform: Platform,
    private alertController: AlertController,
    private animationCtrl: AnimationController
  ) {
    addIcons({ folderOpen, logOut, images, sunny, videocam, person });
    this.setupBackButtonHandler();
  }

  ngOnInit() {
    this.loadUserProfile();
    this.setGreeting();
    this.setRandomEmoji();
    this.animateElements();
  }

  // Load user profile data
  loadUserProfile() {
    // Load user name from localStorage
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      this.userName = savedName;
    }
    
    // Load profile image from localStorage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
      this.profileImage = savedImage;
    }
  }

  // Set random emoji
  setRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * this.emojis.length);
    this.currentEmoji = this.emojis[randomIndex];
  }

  // Apply animations to elements
  animateElements() {
    setTimeout(() => {
      // Animate sun logo
      const sunLogo = document.querySelector('.sun-logo') as HTMLElement;
      if (sunLogo) {
        const animation = this.animationCtrl.create()
          .addElement(sunLogo)
          .duration(1000)
          .iterations(1)
          .keyframes([
            { offset: 0, transform: 'scale(0.5)', opacity: '0.5' },
            { offset: 0.5, transform: 'scale(1.2)', opacity: '0.8' },
            { offset: 1, transform: 'scale(1)', opacity: '1' }
          ]);
        
        animation.play();
      }
      
      // Animate buttons
      const buttons = document.querySelectorAll('ion-button') as NodeListOf<HTMLElement>;
      buttons.forEach((button, index) => {
        const animation = this.animationCtrl.create()
          .addElement(button)
          .duration(500)
          .delay(100 * index)
          .iterations(1)
          .keyframes([
            { offset: 0, transform: 'translateX(-20px)', opacity: '0' },
            { offset: 1, transform: 'translateX(0)', opacity: '1' }
          ]);
        
        animation.play();
      });
    }, 300);
  }

  // Set up back button to exit app with confirmation
  setupBackButtonHandler() {
    this.platform.backButton.subscribeWithPriority(10, () => {
      // Only handle back button on home page
      if (this.router.url === '/home') {
        this.showExitConfirmation();
      }
    });
  }

  // Show confirmation dialog before exiting
  async showExitConfirmation() {
    const alert = await this.alertController.create({
      header: 'Exit App',
      message: 'Are you sure you want to exit the app?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Exit',
          handler: () => {
            App.exitApp();
          }
        }
      ]
    });

    await alert.present();
  }

  // Set greeting based on time of day
  setGreeting() {
    const hour = new Date().getHours();
    let timeGreeting = '';
    
    if (hour < 12) {
      timeGreeting = 'Good Morning';
    } else if (hour < 18) {
      timeGreeting = 'Good Afternoon';
    } else {
      timeGreeting = 'Good Evening';
    }
    
    // Add user name if available
    if (this.userName) {
      this.greeting = `${timeGreeting}, ${this.userName} ${this.currentEmoji}`;
    } else {
      this.greeting = timeGreeting;
    }
  }

  // Navigate to folder page
  openFolders() {
    this.router.navigate(['/folder']);
  }

  // Navigate to gallery page
  openGallery() {
    this.router.navigate(['/gallery']);
  }

  // Navigate to videos page
  goToVideos() {
    this.router.navigate(['/videos']);
  }

  // Navigate to profile page
  goToProfile() {
    this.router.navigate(['/profile']);
  }

  // Logout
  logout() {
    this.router.navigate(['/login']);
  }
}
