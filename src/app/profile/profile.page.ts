import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonButtons, 
  IonBackButton,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonIcon,
  IonAvatar,
  IonImg,
  ToastController,
  Platform,
  AnimationController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, camera, person, save, sunny } from 'ionicons/icons';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule,
    IonHeader, 
    IonToolbar, 
    IonTitle, 
    IonContent, 
    IonButtons, 
    IonBackButton,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonIcon,
    IonAvatar,
    IonImg
  ]
})
export class ProfilePage implements OnInit, OnDestroy {
  userName: string = '';
  profileImage: string | null = null;
  emojis: string[] = ['😊', '😎', '🚗', '🏎️', '🌞', '🌟', '🔥', '👍', '🎉', '🌈'];
  currentEmoji: string = '😊';
  private backButtonSubscription: any;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private platform: Platform,
    private animationCtrl: AnimationController
  ) {
    addIcons({ arrowBack, camera, person, save, sunny });
  }

  ngOnInit() {
    // Load saved profile data
    this.loadProfileData();
    
    // Set up hardware back button handling
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      this.router.navigate(['/home']);
    });
    
    // Set random emoji
    this.setRandomEmoji();
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    }
  }

  loadProfileData() {
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

  saveProfile() {
    // Save user name to localStorage
    localStorage.setItem('userName', this.userName);
    
    // Save profile image to localStorage (if exists)
    if (this.profileImage) {
      localStorage.setItem('profileImage', this.profileImage);
    }
    
    this.presentToast('Profile saved successfully!');
    
    // Apply animation to the save button
    const saveButton = document.querySelector('.save-button') as HTMLElement;
    if (saveButton) {
      const animation = this.animationCtrl.create()
        .addElement(saveButton)
        .duration(1000)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'scale(1)' },
          { offset: 0.5, transform: 'scale(1.2)' },
          { offset: 1, transform: 'scale(1)' }
        ]);
      
      animation.play();
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  uploadProfilePicture() {
    // Create a file input element
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    
    // Listen for file selection
    fileInput.addEventListener('change', (event: any) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e: any) => {
          this.profileImage = e.target.result;
          
          // Apply animation to the profile image
          const profileImg = document.querySelector('.profile-image') as HTMLElement;
          if (profileImg) {
            const animation = this.animationCtrl.create()
              .addElement(profileImg)
              .duration(1000)
              .iterations(1)
              .keyframes([
                { offset: 0, transform: 'rotate(0)' },
                { offset: 0.5, transform: 'rotate(180deg)' },
                { offset: 1, transform: 'rotate(360deg)' }
              ]);
            
            animation.play();
          }
        };
        reader.readAsDataURL(file);
      }
    });
    
    // Trigger file selection
    fileInput.click();
  }

  setRandomEmoji() {
    const randomIndex = Math.floor(Math.random() * this.emojis.length);
    this.currentEmoji = this.emojis[randomIndex];
  }

  goToHome() {
    this.router.navigate(['/home']);
  }
}
