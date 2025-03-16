import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private videos = [
    {
      id: '1',
      title: 'Ferrari F8 Tributo',
      description: "The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse's classic two-seater berlinetta.",
      url: 'assets/videos/ferrari.mp4',
      thumbnail: 'assets/thumbnails/ferrari.jpg'
    },
    {
      id: '2',
      title: 'Lamborghini Aventador',
      description: 'The Lamborghini Aventador is a mid-engine sports car produced by the Italian automotive manufacturer Lamborghini.',
      url: 'assets/videos/lamborghini.mp4',
      thumbnail: 'assets/thumbnails/lamborghini.jpg'
    },
    // Add more videos as needed
  ];

  constructor() { }

  getAllVideos() {
    return this.videos;
  }

  getVideoById(id: string) {
    return this.videos.find(video => video.id === id);
  }
} 