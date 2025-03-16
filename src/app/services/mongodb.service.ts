import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MongoDBService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  // User registration
  registerUser(phoneNumber: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/users/register`, { phoneNumber });
  }

  // Update user profile
  updateUserProfile(userId: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/users/${userId}`, data);
  }

  // Get user profile
  getUserProfile(userId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/${userId}`);
  }

  // Upload profile picture
  uploadProfilePicture(userId: string, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('profilePicture', file);
    
    return this.http.post(`${this.apiUrl}/users/${userId}/upload-picture`, formData);
  }
} 