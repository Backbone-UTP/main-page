import { NgFor } from '@angular/common';
import {
  Component,
  ElementRef,
  HostListener,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { ThemeToggleComponent } from '../../../../../shared/components/theme-toogle/theme.toggle.component';
import { Header } from 'src/app/shared/interfaces/header.interface';

@Component({
  selector: 'app-sfd-header',
  standalone: true,
  imports: [NgFor, ThemeToggleComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class SFDHeaderComponent implements OnInit {
  @Input() navItems: Header[] = [];

  @ViewChild('nav', { static: true }) nav!: ElementRef<HTMLElement>; // Use non-null assertion operator or handle potential null
  private observer!: IntersectionObserver; // Declare observer, will be initialized in ngOnInit

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    this.initIntersectionObserver();
  }

  ngAfterViewInit(): void {
    const sections = this.el.nativeElement.querySelectorAll('main');
    sections.forEach((section) => {
      this.observer.observe(section);
    });
  }

  private initIntersectionObserver(): void {
    const callback = (
      entries: IntersectionObserverEntry[],
      observer: IntersectionObserver
    ) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navItems = this.nav.nativeElement.querySelectorAll('a');
          navItems.forEach((item) => {
            const itemId = item.getAttribute('aria-label');
            if (itemId && itemId === entry.target.id) {
              this.renderer.addClass(item, 'text-primary');
            } else {
              this.renderer.removeClass(item, 'text-primary');
            }
          });
        }
      });
    };

    this.observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0.3,
    });
  }

  @HostListener('document:visibilitychange')
  onVisibilityChange(): void {
    if (document.visibilityState === 'hidden') {
      this.observer.disconnect();
    } else {
      const sections = this.el.nativeElement.querySelectorAll('main');
      sections.forEach((section) => {
        this.observer.observe(section);
      });
    }
  }
}
