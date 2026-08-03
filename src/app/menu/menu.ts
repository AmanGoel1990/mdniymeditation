import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  protected readonly menuOpen = signal(false);
  protected readonly aboutOpen = signal(false);
  protected readonly meditationOpen = signal(false);

  protected toggleMenu() {
    this.menuOpen.update((open) => !open);
  }

  protected toggleSubmenu(section: 'about' | 'meditation') {
    if (section === 'about') {
      this.aboutOpen.update((isOpen) => !isOpen);
    } else {
      this.meditationOpen.update((isOpen) => !isOpen);
    }
  }
}
