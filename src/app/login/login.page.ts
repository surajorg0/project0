import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonItem, 
  IonLabel, 
  IonInput, 
  IonButton, 
  IonIcon, 
  IonText,
  ToastController,
  AnimationController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { call, lockClosed, fingerPrint, sunny } from 'ionicons/icons';
import { NativeBiometric } from 'capacitor-native-biometric';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonItem, 
    IonLabel, 
    IonInput, 
    IonButton, 
    IonIcon, 
    IonText
  ]
})
export class LoginPage implements OnInit {
  phoneNumber: string = '';
  otp: string = '';
  showOtpInput: boolean = false;
  fingerprintAvailable: boolean = false;

  constructor(
    private router: Router,
    private toastController: ToastController,
    private animationCtrl: AnimationController
  ) {
    addIcons({ call, lockClosed, fingerPrint, sunny });
  }

  async ngOnInit() {
    // Check if fingerprint is available
    try {
      const result = await NativeBiometric.isAvailable();
      this.fingerprintAvailable = result.isAvailable;
    } catch (error) {
      console.error('Error checking biometric availability:', error);
      this.fingerprintAvailable = false;
    }
    
    // Apply animations
    setTimeout(() => {
      this.animateElements();
    }, 300);
  }

  // Apply animations to elements
  animateElements() {
    // Animate sun logo
    const sunLogo = document.querySelector('.sun-logo') as HTMLElement;
    if (sunLogo) {
      const animation = this.animationCtrl.create()
        .addElement(sunLogo)
        .duration(1200)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'scale(0.2) rotate(0deg)', opacity: '0' },
          { offset: 0.5, transform: 'scale(1.3) rotate(180deg)', opacity: '0.8' },
          { offset: 1, transform: 'scale(1) rotate(360deg)', opacity: '1' }
        ]);
      
      animation.play();
    }
    
    // Animate card
    const card = document.querySelector('ion-card') as HTMLElement;
    if (card) {
      const animation = this.animationCtrl.create()
        .addElement(card)
        .duration(800)
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateY(50px)', opacity: '0' },
          { offset: 1, transform: 'translateY(0)', opacity: '1' }
        ]);
      
      animation.play();
    }
    
    // Animate buttons with delay
    const buttons = document.querySelectorAll('ion-button') as NodeListOf<HTMLElement>;
    buttons.forEach((button, index) => {
      const animation = this.animationCtrl.create()
        .addElement(button)
        .duration(500)
        .delay(800 + (100 * index))
        .iterations(1)
        .keyframes([
          { offset: 0, transform: 'translateX(-20px)', opacity: '0' },
          { offset: 1, transform: 'translateX(0)', opacity: '1' }
        ]);
      
      animation.play();
    });
  }

  sendOtp() {
    if (!this.phoneNumber) {
      this.presentToast('Please enter a phone number');
      return;
    }
    
    // Simulate OTP sending
    this.showOtpInput = true;
    this.presentToast('OTP sent to your phone');
    
    // Apply animation to OTP input
    setTimeout(() => {
      const otpContainer = document.querySelector('.otp-container') as HTMLElement;
      if (otpContainer) {
        const animation = this.animationCtrl.create()
          .addElement(otpContainer)
          .duration(500)
          .iterations(1)
          .keyframes([
            { offset: 0, transform: 'translateY(20px)', opacity: '0' },
            { offset: 1, transform: 'translateY(0)', opacity: '1' }
          ]);
        
        animation.play();
      }
    }, 100);
  }

  verifyOtp() {
    if (!this.otp) {
      this.presentToast('Please enter the OTP');
      return;
    }
    
    // For demo, accept "12345" as valid OTP
    if (this.otp === '12345') {
      this.presentToast('Login successful');
      
      // Apply success animation
      const card = document.querySelector('ion-card') as HTMLElement;
      if (card) {
        const animation = this.animationCtrl.create()
          .addElement(card)
          .duration(800)
          .iterations(1)
          .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.05)' },
            { offset: 1, transform: 'scale(0)', opacity: '0' }
          ]);
        
        animation.play();
        
        // Navigate after animation completes
        setTimeout(() => {
          this.router.navigate(['/home'], { replaceUrl: true });
        }, 800);
      } else {
        this.router.navigate(['/home'], { replaceUrl: true });
      }
    } else {
      this.presentToast('Invalid OTP. For this demo, use "12345"');
      
      // Apply error shake animation
      const otpInput = document.querySelector('ion-input[type="text"]') as HTMLElement;
      if (otpInput) {
        const animation = this.animationCtrl.create()
          .addElement(otpInput)
          .duration(400)
          .iterations(1)
          .keyframes([
            { offset: 0, transform: 'translateX(0)' },
            { offset: 0.1, transform: 'translateX(-10px)' },
            { offset: 0.3, transform: 'translateX(10px)' },
            { offset: 0.5, transform: 'translateX(-10px)' },
            { offset: 0.7, transform: 'translateX(10px)' },
            { offset: 0.9, transform: 'translateX(-10px)' },
            { offset: 1, transform: 'translateX(0)' }
          ]);
        
        animation.play();
      }
    }
  }

  async loginWithFingerprint() {
    try {
      const result = await NativeBiometric.verifyIdentity({
        reason: "Log in to Suraj App",
        title: "Biometric Authentication",
        subtitle: "Use your fingerprint to log in",
        description: "Authenticate using your fingerprint"
      });
      
      // Biometric verification successful
      this.presentToast('Fingerprint authentication successful');
      
      // Apply success animation
      const card = document.querySelector('ion-card') as HTMLElement;
      if (card) {
        const animation = this.animationCtrl.create()
          .addElement(card)
          .duration(800)
          .iterations(1)
          .keyframes([
            { offset: 0, transform: 'scale(1)' },
            { offset: 0.5, transform: 'scale(1.05)' },
            { offset: 1, transform: 'scale(0)', opacity: '0' }
          ]);
        
        animation.play();
        
        // Navigate after animation completes
        setTimeout(() => {
          this.router.navigate(['/home'], { replaceUrl: true });
        }, 800);
      } else {
        this.router.navigate(['/home'], { replaceUrl: true });
      }
    } catch (error) {
      console.error('Error with fingerprint authentication:', error);
      this.presentToast('Fingerprint authentication failed');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'primary'
    });
    toast.present();
  }
}
