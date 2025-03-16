import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
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
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonThumbnail,
  IonIcon,
  Platform,
  AnimationController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, playCircle } from 'ionicons/icons';

interface CarVideo {
  id: number;
  title: string;
  description: string;
  youtubeId: string;
  thumbnail: string;
  safeUrl?: SafeResourceUrl;
  isPlaying: boolean;
}

@Component({
  selector: 'app-videos',
  templateUrl: './videos.page.html',
  styleUrls: ['./videos.page.scss'],
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
    IonGrid,
    IonRow,
    IonCol,
    IonItem,
    IonLabel,
    IonThumbnail,
    IonIcon
  ]
})
export class VideosPage implements OnInit, OnDestroy {
  carVideos: CarVideo[] = [
    {
      id: 1,
      title: 'Ferrari SF90 Stradale - Supercar Review',
      description: 'An in-depth look at the Ferrari SF90 Stradale hybrid supercar.',
      youtubeId: 'k1bB_mU4wq0',
      thumbnail: 'https://img.youtube.com/vi/k1bB_mU4wq0/hqdefault.jpg',
      isPlaying: false
    },
    {
      id: 2,
      title: 'Lamborghini Aventador SVJ - Track Test',
      description: 'Testing the Lamborghini Aventador SVJ on the Nürburgring.',
      youtubeId: 'jdcV2kI-8YM',
      thumbnail: 'https://img.youtube.com/vi/ZImYRu7hli4/hqdefault.jpg',
      isPlaying: false
    },
    {
      id: 3,
      title: 'Bugatti Chiron - 0-400-0 km/h',
      description: 'Watch the Bugatti Chiron accelerate from 0 to 400 km/h and back to 0.',
      youtubeId: 'PkkV1vLHUvQ',
      thumbnail: 'https://img.youtube.com/vi/PkkV1vLHUvQ/hqdefault.jpg',
      isPlaying: false
    },
    {
      id: 4,
      title: 'Porsche 911 GT3 RS - Review',
      description: 'A comprehensive review of the track-focused Porsche 911 GT3 RS.',
      youtubeId: 'q5T-v5lYnck',
      thumbnail: 'https://img.youtube.com/vi/q5T-v5lYnck/hqdefault.jpg',
      isPlaying: false
    },
    {
      id: 5,
      title: 'Tesla Model S Plaid - Acceleration Test',
      description: 'Testing the incredible acceleration of the Tesla Model S Plaid.',
      youtubeId: 'i9Mq9GMi0QA',
      thumbnail: 'https://img.youtube.com/vi/i9Mq9GMi0QA/hqdefault.jpg',
      isPlaying: false
    },
    {
      id: 6,
      title: 'Classic Mustang Restoration',
      description: 'Complete restoration of a 1967 Ford Mustang Fastback.',
      youtubeId: '_44-iZtLhnI',
      thumbnail: 'https://img.youtube.com/vi/_44-iZtLhnI/hqdefault.jpg',
      isPlaying: false
    }
  ];

  private backButtonSubscription: any;

  constructor(
    private sanitizer: DomSanitizer,
    private router: Router,
    private platform: Platform,
    private animationCtrl: AnimationController
  ) {
    addIcons({ arrowBack, playCircle });
  }

  ngOnInit() {
    // Create safe URLs for each video
    this.carVideos.forEach(video => {
      video.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
        `https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`
      );
    });

    // Set up hardware back button handling
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      // First check if any video is playing
      const playingVideo = this.carVideos.find(v => v.isPlaying);
      if (playingVideo) {
        // If a video is playing, stop it first
        playingVideo.isPlaying = false;
      } else {
        // If no video is playing, navigate back to home
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy() {
    // Unsubscribe to prevent memory leaks
    if (this.backButtonSubscription) {
      this.backButtonSubscription.unsubscribe();
    }
  }

  playVideo(video: CarVideo) {
    // Reset all videos
    this.carVideos.forEach(v => {
      if (v.id !== video.id) {
        v.isPlaying = false;
      }
    });
    
    // Toggle the selected video
    video.isPlaying = !video.isPlaying;
  }
}
