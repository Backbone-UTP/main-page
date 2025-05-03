import { NgFor, NgIf } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { IconComponent } from '../icons/icons.component';

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [NgFor, NgIf, IconComponent],
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  themes = ['light', 'dark', 'system'];
  currentTheme = this.getThemePreference();

  constructor() {
    this.updateTheme();
  }

  getThemePreference(): string {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem('theme') ?? 'system';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }

  updateIcon(themePreference: string): void {
    document.querySelectorAll('.theme-toggle-icon').forEach((element) => {
      element.setAttribute(
        'style',
        `transform: scale(${element.id === themePreference ? '1' : '0'})`
      );
    });
    this.currentTheme = themePreference;
  }

  updateTheme(): void {
    const themePreference = this.getThemePreference();
    const isDark =
      themePreference === 'dark' ||
      (themePreference === 'system' &&
        window.matchMedia('(prefers-color-scheme: dark)').matches);

    this.updateIcon(themePreference);
    document.documentElement.classList[isDark ? 'add' : 'remove']('dark');
  }

  @HostListener('document:click', ['$event'])
  closeThemesMenu(): void {
    const themesMenu = document.getElementById('themes-menu');
    themesMenu?.classList.remove('open');
  }

  toggleThemesMenu(event: Event): void {
    event.stopPropagation();
    const themesMenu = document.getElementById('themes-menu');
    const isClosed = !themesMenu?.classList.contains('open');
    themesMenu?.classList[isClosed ? 'add' : 'remove']('open');
  }

  selectTheme(theme: string): void {
    localStorage.setItem('theme', theme);
    this.updateTheme();
  }
}
