import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar, 
  IonButtons, 
  IonBackButton,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonImg,
  IonButton,
  IonIcon,
  IonToast,
  ToastController,
  Platform,
  AnimationController
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { arrowBack, heart, heartOutline, download, share } from 'ionicons/icons';

interface CarImage {
  id: number;
  url: string;
  title: string;
  liked: boolean;
  description?: string;
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
  standalone: true,
  imports: [
    CommonModule, 
    FormsModule, 
    IonContent, 
    IonHeader, 
    IonTitle, 
    IonToolbar, 
    IonButtons, 
    IonBackButton,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonImg,
    IonButton,
    IonIcon,
    IonToast
  ]
})
export class GalleryPage implements OnInit, OnDestroy {
  // All car images by category
  allCarImages = {
    sports: [
      {
        id: 1,
        url: 'https://images.unsplash.com/photo-1592198084033-aade902d1aae?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Ferrari F8 Tributo',
        description: 'The Ferrari F8 Tributo is the new mid-rear-engined sports car that represents the highest expression of the Prancing Horse\'s classic two-seater berlinetta.',
        liked: false
      },
      {
        id: 2,
        url: 'https://images.unsplash.com/photo-1544829099-b9a0c07fad1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Lamborghini Huracán',
        description: 'The Lamborghini Huracán is a sports car built by Lamborghini that replaces the previous V10 offering, the Gallardo.',
        liked: false
      },
      {
        id: 3,
        url: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Porsche 911 GT3',
        description: 'The Porsche 911 GT3 is a high-performance homologation model of the Porsche 911 sports car.',
        liked: false
      },
      {
        id: 4,
        url: 'https://images.unsplash.com/photo-1621135802920-133df287f89c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'McLaren 720S',
        description: 'The McLaren 720S is a British sports car designed and manufactured by McLaren Automotive.',
        liked: false
      },
      {
        id: 5,
        url: 'https://images.unsplash.com/photo-1633509817627-5a29634475af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Bugatti Chiron',
        description: 'The Bugatti Chiron is a mid-engine two-seater sports car developed and manufactured by Bugatti Automobiles S.A.S.',
        liked: false
      }
    ],
    vintage: [
      {
        id: 6,
        url: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Classic Ford Mustang',
        description: 'The Ford Mustang is an American car manufactured by Ford. It was originally based on the platform of the second generation North American Ford Falcon, a compact car.',
        liked: false
      },
      {
        id: 7,
        url: 'https://images.unsplash.com/photo-1567784177951-6fa58317e16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Vintage Chevrolet Corvette',
        description: 'The Chevrolet Corvette, colloquially known as the Vette, is a two-door, two-passenger sports car manufactured and marketed by Chevrolet.',
        liked: false
      },
      {
        id: 8,
        url: 'https://images.unsplash.com/photo-1565043589184-75fbb2b7bdf7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Classic Mustang Fastback',
        description: 'The Ford Mustang Fastback is a variant of the Ford Mustang with a sloped roof that extends to the rear of the vehicle.',
        liked: false
      },
      {
        id: 9,
        url: 'https://images.unsplash.com/photo-1566024146175-4c7c8a8a5c87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Vintage Cadillac Eldorado',
        description: 'The Cadillac Eldorado is a premium luxury car that was manufactured and marketed by Cadillac from 1952 to 2002 over twelve generations.',
        liked: false
      },
      {
        id: 10,
        url: 'https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Classic Rolls Royce Phantom',
        description: 'The Rolls-Royce Phantom is a full-sized luxury saloon manufactured by Rolls-Royce Motor Cars.',
        liked: false
      },
      {
        id: 11,
        url: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Vintage Jaguar E-Type',
        description: 'The Jaguar E-Type, or the Jaguar XK-E for the North American market, is a British sports car that was manufactured by Jaguar Cars Ltd between 1961 and 1975.',
        liked: false
      },
      {
        id: 12,
        url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Classic Bentley Continental',
        description: 'The Bentley Continental is a name used on several generations of luxury automobiles produced by Bentley Motors Limited since 1952.',
        liked: false
      },
      {
        id: 13,
        url: 'https://images.unsplash.com/photo-1626668893632-6f3a4466d22f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Vintage Mercedes 300SL',
        description: 'The Mercedes-Benz 300 SL was the first iteration of the SL-Class grand tourer and fastest production car of its day.',
        liked: false
      }
    ],
    luxury: [
      {
        id: 14,
        url: 'https://images.unsplash.com/photo-1631295868223-63265b40d9e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Rolls Royce Ghost',
        description: 'The Rolls-Royce Ghost is a full-sized luxury car manufactured by Rolls-Royce Motor Cars.',
        liked: false
      },
      {
        id: 15,
        url: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Bentley Continental GT',
        description: 'The Bentley Continental GT is a grand tourer manufactured and marketed by British automaker Bentley Motors.',
        liked: false
      },
      {
        id: 16,
        url: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Mercedes-Benz S-Class',
        description: 'The Mercedes-Benz S-Class is a series of full-size luxury sedans and limousines produced by the German automaker Mercedes-Benz.',
        liked: false
      },
      {
        id: 17,
        url: 'https://images.unsplash.com/photo-1603584173870-7f23fdae1b7a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Audi A8',
        description: 'The Audi A8 is a four-door, full-size, luxury sedan manufactured and marketed by the German automaker Audi.',
        liked: false
      },
      {
        id: 18,
        url: 'https://images.unsplash.com/photo-1556800572-1b8aeef2c54f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'BMW 7 Series',
        description: 'The BMW 7 Series is a full-size luxury sedan produced by the German automaker BMW.',
        liked: false
      },
      {
        id: 19,
        url: 'https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Jaguar XJ',
        description: 'The Jaguar XJ is a series of full-size luxury cars produced by British automobile manufacturer Jaguar Cars.',
        liked: false
      },
      {
        id: 20,
        url: 'https://images.unsplash.com/photo-1622199678703-b8bbf1b6c39d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Lexus LS',
        description: 'The Lexus LS is a full-size luxury sedan serving as the flagship model of Lexus, the luxury division of Toyota.',
        liked: false
      }
    ],
    electric: [
      {
        id: 21,
        url: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Tesla Model S',
        description: 'The Tesla Model S is an all-electric five-door liftback sedan produced by Tesla, Inc.',
        liked: false
      },
      {
        id: 22,
        url: 'https://images.unsplash.com/photo-1619767886558-efdc259cde1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Nissan Leaf',
        description: 'The Nissan Leaf is a compact five-door hatchback battery electric vehicle manufactured by Nissan.',
        liked: false
      },
      {
        id: 23,
        url: 'https://images.unsplash.com/photo-1566443280617-2684998eec9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Chevy Bolt',
        description: 'The Chevrolet Bolt or Chevrolet Bolt EV is a battery electric subcompact hatchback produced by General Motors.',
        liked: false
      },
      {
        id: 24,
        url: 'https://images.unsplash.com/photo-1617704548623-340376564e68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Rivian R1T',
        description: 'The Rivian R1T is an all-electric pickup truck made by Rivian Automotive.',
        liked: false
      },
      {
        id: 25,
        url: 'https://images.unsplash.com/photo-1619867368485-4b1d69b4f582?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Lucid Air',
        description: 'The Lucid Air is an electric luxury sedan made by Lucid Motors.',
        liked: false
      },
      {
        id: 26,
        url: 'https://images.unsplash.com/photo-1612911912304-161e195ecfb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400&q=80',
        title: 'Polestar 2',
        description: 'The Polestar 2 is an electric 5-door liftback produced by Polestar, a Swedish automotive company.',
        liked: false
      }
    ]
  };

  // Fallback images in case local images are not found
  fallbackImages = {
    sports: 'https://source.unsplash.com/random/600x400/?sports-car,',
    vintage: 'https://source.unsplash.com/random/600x400/?vintage-car,',
    luxury: 'https://source.unsplash.com/random/600x400/?luxury-car,',
    electric: 'https://source.unsplash.com/random/600x400/?electric-car,'
  };

  // Images to display
  carImages: CarImage[] = [];
  pageTitle: string = 'Suraj - Gallery';
  currentFolder: number | null = null;
  likedImages: CarImage[] = [];

  private backButtonSubscription: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastController: ToastController,
    private platform: Platform,
    private animationCtrl: AnimationController
  ) {
    addIcons({ arrowBack, heart, heartOutline, download, share });
    this.loadLikedImages();
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      const folderId = params['folder'] ? parseInt(params['folder']) : null;
      this.currentFolder = folderId;
      
      // Set images based on folder
      if (folderId) {
        switch(folderId) {
          case 1:
            this.carImages = this.allCarImages.sports;
            this.pageTitle = 'Suraj - Sports Cars';
            break;
          case 2:
            this.carImages = this.allCarImages.vintage;
            this.pageTitle = 'Suraj - Vintage Cars';
            break;
          case 3:
            this.carImages = this.allCarImages.luxury;
            this.pageTitle = 'Suraj - Luxury Cars';
            break;
          case 4:
            this.carImages = this.allCarImages.electric;
            this.pageTitle = 'Suraj - Electric Cars';
            break;
          default:
            this.loadAllImages();
        }
      } else {
        this.loadAllImages();
      }

      // Apply liked status from saved preferences
      this.applyLikedStatus();
    });

    // Set up hardware back button handling
    this.backButtonSubscription = this.platform.backButton.subscribeWithPriority(10, () => {
      if (this.currentFolder) {
        this.router.navigate(['/folder']);
      } else {
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

  loadAllImages() {
    // Combine all images
    this.carImages = [
      ...this.allCarImages.sports,
      ...this.allCarImages.vintage,
      ...this.allCarImages.luxury,
      ...this.allCarImages.electric
    ];
    this.pageTitle = 'Suraj - All Cars';
  }

  toggleLike(image: CarImage) {
    image.liked = !image.liked;
    
    if (image.liked) {
      this.likedImages.push(image);
      this.presentToast(`Added ${image.title} to favorites!`);
    } else {
      this.likedImages = this.likedImages.filter(img => img.id !== image.id);
      this.presentToast(`Removed ${image.title} from favorites`);
    }
    
    // Save liked images to localStorage
    this.saveLikedImages();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000,
      position: 'bottom',
      color: 'success'
    });
    toast.present();
  }

  saveLikedImages() {
    const likedIds = this.likedImages.map(img => img.id);
    localStorage.setItem('likedImages', JSON.stringify(likedIds));
  }

  loadLikedImages() {
    const likedIds = JSON.parse(localStorage.getItem('likedImages') || '[]');
    this.likedImages = [];
    
    // Find all liked images from all categories
    for (const category in this.allCarImages) {
      if (Object.prototype.hasOwnProperty.call(this.allCarImages, category)) {
        const categoryImages = this.allCarImages[category as keyof typeof this.allCarImages];
        categoryImages.forEach(img => {
          if (likedIds.includes(img.id)) {
            img.liked = true;
            this.likedImages.push(img);
          }
        });
      }
    }
  }

  applyLikedStatus() {
    const likedIds = this.likedImages.map(img => img.id);
    this.carImages.forEach(img => {
      img.liked = likedIds.includes(img.id);
    });
  }

  handleImageError(image: CarImage) {
    // If local image fails to load, use fallback from Unsplash
    let category = 'sports';
    
    if (image.id >= 6 && image.id <= 13) {
      category = 'vintage';
    } else if (image.id >= 14 && image.id <= 20) {
      category = 'luxury';
    } else if (image.id >= 21) {
      category = 'electric';
    }
    
    image.url = `${this.fallbackImages[category as keyof typeof this.fallbackImages]}${image.title.toLowerCase().replace(' ', '-')}`;
  }
}
