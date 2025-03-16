import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { NativeBiometric } from 'capacitor-native-biometric';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated = new BehaviorSubject<boolean>(false);
  private phoneNumber: string | null = null;
  private fingerprintEnabled = new BehaviorSubject<boolean>(false);

  constructor(private router: Router) {
    // Check if fingerprint is enabled in local storage
    const fingerprintEnabled = localStorage.getItem('fingerprintEnabled');
    if (fingerprintEnabled === 'true') {
      this.fingerprintEnabled.next(true);
    }
  }

  // Check if user is authenticated
  get isLoggedIn() {
    return this.isAuthenticated.asObservable();
  }

  // Check if fingerprint is enabled
  get isFingerprintEnabled() {
    return this.fingerprintEnabled.asObservable();
  }

  // Login with phone number
  loginWithPhone(phoneNumber: string) {
    console.log('Auth service: loginWithPhone called with', phoneNumber);
    this.phoneNumber = phoneNumber;
    // In a real app, you would send an OTP to the phone number
    return true;
  }

  // Verify OTP
  verifyOTP(otp: string) {
    console.log('Auth service: verifyOTP called with', otp);
    console.log('Current phone number:', this.phoneNumber);
    
    // In a real app, you would verify the OTP with a backend service
    // For this demo, we'll accept '12345' as the valid OTP
    const validOtp = '12345';
    
    // Clean up the OTP input
    const cleanOtp = otp.toString().trim();
    console.log('Clean OTP:', cleanOtp, 'Valid OTP:', validOtp);
    
    if (cleanOtp === validOtp && this.phoneNumber) {
      console.log('OTP verification successful');
      this.isAuthenticated.next(true);
      localStorage.setItem('phoneNumber', this.phoneNumber);
      return true;
    }
    
    console.log('OTP verification failed');
    return false;
  }

  // Enable fingerprint authentication
  async enableFingerprint() {
    try {
      // Check if device supports biometric authentication
      const result = await NativeBiometric.isAvailable();
      
      if (result.isAvailable) {
        // Save credentials for future biometric login
        await NativeBiometric.setCredentials({
          username: 'user',
          password: 'password',
          server: 'fingerprint-auth-demo',
        });
        
        this.fingerprintEnabled.next(true);
        localStorage.setItem('fingerprintEnabled', 'true');
        return true;
      } else {
        console.log('Biometric authentication not available');
        return false;
      }
    } catch (error) {
      console.error('Error enabling fingerprint:', error);
      return false;
    }
  }

  // Login with fingerprint
  async loginWithFingerprint() {
    try {
      // Check if biometric authentication is available
      const result = await NativeBiometric.isAvailable();
      
      if (result.isAvailable) {
        // Authenticate with biometrics
        try {
          await NativeBiometric.verifyIdentity({
            reason: 'Log in to your account',
            title: 'Fingerprint Authentication',
            subtitle: 'Use your fingerprint to log in',
            description: 'Scan your fingerprint to continue',
          });
          
          // If verification is successful, get credentials
          const credentials = await NativeBiometric.getCredentials({
            server: 'fingerprint-auth-demo',
          });
          
          if (credentials) {
            this.isAuthenticated.next(true);
            return true;
          }
        } catch (verifyError) {
          console.error('Biometric verification failed:', verifyError);
          return false;
        }
      }
      return false;
    } catch (error) {
      console.error('Error with fingerprint login:', error);
      return false;
    }
  }

  // Logout
  logout() {
    this.isAuthenticated.next(false);
    this.router.navigate(['/login']);
  }
}
