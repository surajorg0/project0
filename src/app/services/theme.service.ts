import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private isDarkMode = new BehaviorSubject<boolean>(false);
  isDarkMode$ = this.isDarkMode.asObservable();

  constructor(private storage: Storage) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
    const savedTheme = await this.storage.get('darkMode');
    if (savedTheme !== null) {
      this.setTheme(savedTheme);
    }
  }

  async toggleTheme() {
    const newValue = !this.isDarkMode.value;
    this.setTheme(newValue);
    await this.storage.set('darkMode', newValue);
  }

  setTheme(isDark: boolean) {
    this.isDarkMode.next(isDark);
    document.body.classList.toggle('dark', isDark);
  }
} 