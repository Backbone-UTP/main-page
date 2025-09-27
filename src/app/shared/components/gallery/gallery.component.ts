import {
  Component,
  Input,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  Inject,
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

export interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent implements OnInit, OnDestroy {
  @Input() images: GalleryImage[] = [];
  @Input() title = 'Galería';
  @Input() subtitle?: string;

  private animationId: number | null = null;
  private isBrowser: boolean;

  // Split images into two rows for different animation directions
  firstRowImages: GalleryImage[] = [];
  secondRowImages: GalleryImage[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    // Split images into two rows
    this.firstRowImages = this.images.filter((_, index) => index % 2 === 0);
    this.secondRowImages = this.images.filter((_, index) => index % 2 === 1);

    // Add duplicates for infinite scroll effect
    this.firstRowImages = [...this.firstRowImages, ...this.firstRowImages];
    this.secondRowImages = [...this.secondRowImages, ...this.secondRowImages];
  }

  ngOnDestroy() {
    if (this.animationId && this.isBrowser) {
      cancelAnimationFrame(this.animationId);
    }
  }

  onImageError(event: Event) {
    const img = event.target as HTMLImageElement;
    img.style.display = 'none';
  }

  onImageLoad(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.add('loaded');
  }
}
