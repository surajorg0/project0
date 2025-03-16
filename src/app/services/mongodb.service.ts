import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {
  private localStoragePrefix = 'mock_mongodb_';

  constructor() { }

  // User registration
  registerUser(phoneNumber: string): Observable<any> {
    console.log('Mock MongoDB: Registering user with phone number', phoneNumber);
    
    // Generate a random user ID
    const userId = 'user_' + Math.random().toString(36).substring(2, 15);
    
    // Store user data in local storage
    const userData = {
      userId,
      phoneNumber,
      createdAt: new Date().toISOString()
    };
    
    localStorage.setItem(this.localStoragePrefix + userId, JSON.stringify(userData));
    
    return of({ userId, success: true });
  }

  // Update user profile
  updateUserProfile(userId: string, data: any): Observable<any> {
    console.log('Mock MongoDB: Updating user profile for', userId, data);
    
    // Get existing user data
    const userDataStr = localStorage.getItem(this.localStoragePrefix + userId);
    if (!userDataStr) {
      return of({ success: false, message: 'User not found' });
    }
    
    // Update user data
    const userData = JSON.parse(userDataStr);
    const updatedData = { ...userData, ...data, updatedAt: new Date().toISOString() };
    
    // Save updated data
    localStorage.setItem(this.localStoragePrefix + userId, JSON.stringify(updatedData));
    
    return of({ success: true, data: updatedData });
  }

  // Get user profile
  getUserProfile(userId: string): Observable<any> {
    console.log('Mock MongoDB: Getting user profile for', userId);
    
    // Get user data from local storage
    const userDataStr = localStorage.getItem(this.localStoragePrefix + userId);
    if (!userDataStr) {
      return of({ success: false, message: 'User not found' });
    }
    
    return of({ success: true, data: JSON.parse(userDataStr) });
  }

  // Upload profile picture
  uploadProfilePicture(userId: string, file: File): Observable<any> {
    console.log('Mock MongoDB: Uploading profile picture for', userId);
    
    // In a real implementation, we would upload the file to a server
    // For this mock, we'll just pretend it was successful
    
    // Get existing user data
    const userDataStr = localStorage.getItem(this.localStoragePrefix + userId);
    if (!userDataStr) {
      return of({ success: false, message: 'User not found' });
    }
    
    // Update user data with profile picture info
    const userData = JSON.parse(userDataStr);
    const updatedData = { 
      ...userData, 
      profilePicture: 'mock_profile_picture.jpg',
      updatedAt: new Date().toISOString() 
    };
    
    // Save updated data
    localStorage.setItem(this.localStoragePrefix + userId, JSON.stringify(updatedData));
    
    return of({ 
      success: true, 
      message: 'Profile picture uploaded successfully',
      profilePictureUrl: 'mock_profile_picture.jpg'
    });
  }
} 