import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-car-video',
  templateUrl: './car-video.page.html',
  styleUrls: ['./car-video.page.scss'],
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