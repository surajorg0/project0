// Vite configuration to fix dependency optimization issues
export default {
  optimizeDeps: {
    exclude: [
      '@ionic/core',
      '@ionic/core/loader',
      '@ionic/angular',
      '@ionic/angular/standalone',
      'ionicons',
      'ionicons/icons',
      'swipe-back-*',
      'index9-*',
      'ion-app*',
      'ion-button*',
      'ion-back-button*',
      'ion-card*',
      'ion-item*',
      'ion-avatar*',
      'ion-img*',
      'ion-input*'
    ]
  },
  build: {
    commonjsOptions: {
      transformMixedEsModules: true
    }
  }
}; 