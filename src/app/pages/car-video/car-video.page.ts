import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../../services/video.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-car-video',
  templateUrl: './car-video.page.html',
  styleUrls: ['./car-video.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class CarVideoPage implements OnInit {
  videos: any[] = [];

  constructor(
    private router: Router,
    private videoService: VideoService
  ) { }

  ngOnInit() {
    this.videos = this.videoService.getAllVideos();
  }

  playVideo(event: any) {
    const videoElement = event.target as HTMLVideoElement;
    
    if (videoElement.paused) {
      videoElement.play();
    } else {
      videoElement.pause();
    }
  }

  openVideoDetail(video: any) {
    this.router.navigate(['/video-detail', video.id]);
  }
} 