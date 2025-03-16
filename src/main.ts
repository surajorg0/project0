import { enableProdMode } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { routes } from './app/app-routing.module';
import { provideIonicAngular, IonicRouteStrategy } from '@ionic/angular/standalone';
import { environment } from './environments/environment';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

console.log('Starting application bootstrap...');

// Add a global error handler
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideIonicAngular({
      mode: 'md'
    }),
    provideHttpClient(),
    provideAnimations(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ]
}).then(() => {
  console.log('Application bootstrapped successfully!');
  // Hide loading spinner
  document.body.classList.add('app-loaded');
}).catch(err => {
  console.error('Bootstrap error:', err);
  // Show error message in loading container
  const loadingText = document.querySelector('.loading-text');
  if (loadingText) {
    loadingText.textContent = 'Error loading application. Check console for details.';
    loadingText.classList.add('error');
  }
});
