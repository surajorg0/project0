// This file is used to check if the app is running
console.log('App-check.ts is loaded!');

// Check browser environment
const browserInfo = {
  userAgent: navigator.userAgent,
  platform: navigator.platform,
  language: navigator.language,
  cookiesEnabled: navigator.cookieEnabled,
  onLine: navigator.onLine
};

console.log('Browser information:', browserInfo);

// Check for common issues
if (!window.localStorage) {
  console.error('LocalStorage is not available!');
}

if (!window.sessionStorage) {
  console.error('SessionStorage is not available!');
}

// Check for Angular
if ((window as any)['ng']) {
  console.log('Angular is available on window.ng');
} else {
  console.log('Angular is not available on window.ng');
}

// Check for Ionic
if ((window as any)['Ionic']) {
  console.log('Ionic is available on window.Ionic');
} else {
  console.log('Ionic is not available on window.Ionic');
}

// Export a function to check app status
export function checkAppStatus() {
  console.log('App status check called');
  return {
    timestamp: new Date().toISOString(),
    online: navigator.onLine,
    localStorage: !!window.localStorage,
    sessionStorage: !!window.sessionStorage
  };
} 