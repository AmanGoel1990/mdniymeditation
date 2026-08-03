import { Component, inject, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Menu } from './menu/menu';
import { Banner } from './banner/banner';
import { Footer } from './footer/footer';

@Component({
  selector: 'app-root',
  imports: [Menu, Banner, RouterOutlet, Footer, NgIf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Meditation');
  protected readonly showBanner = signal(false);
  private readonly router = inject(Router);

  constructor() {
    this.showBanner.set(this.isHomeRoute(this.router.url));
    this.router.events.pipe(
      filter((event): event is NavigationEnd => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.showBanner.set(this.isHomeRoute(event.urlAfterRedirects));
    });
  }

  private isHomeRoute(url: string): boolean {
    return url === '/' || url === '';
  }
}
