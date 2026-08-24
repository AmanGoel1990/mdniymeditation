import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  protected readonly activeTab = signal<'video' | 'images'>('video');
  protected readonly galleryImages = signal<GalleryImage[]>([
    { src: 'banner.jpg', alt: 'Meditation banner', caption: 'Meditation banner' },
    { src: 'banner_1.jpeg', alt: 'Yoga meditation image', caption: 'Yoga meditation session' },
    { src: 'banner_2.jpeg', alt: 'Mindfulness practice image', caption: 'Mindfulness practice' },
  ]);
  protected readonly selectedIndex = signal<number | null>(null);

  protected setTab(tab: 'video' | 'images') {
    this.activeTab.set(tab);
    if (tab === 'video') {
      this.selectedIndex.set(null);
    }
  }

  protected showImage(index: number) {
    this.selectedIndex.set(index);
    this.activeTab.set('images');
  }

  protected closeViewer() {
    this.selectedIndex.set(null);
  }

  protected prevImage() {
    const images = this.galleryImages();
    const current = this.selectedIndex();
    if (current === null) {
      return;
    }
    const previous = (current - 1 + images.length) % images.length;
    this.selectedIndex.set(previous);
  }

  protected nextImage() {
    const images = this.galleryImages();
    const current = this.selectedIndex();
    if (current === null) {
      return;
    }
    const next = (current + 1) % images.length;
    this.selectedIndex.set(next);
  }
}
