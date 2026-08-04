import {
  AfterRenderRef,
  afterNextRender,
  Component,
  DestroyRef,
  ElementRef,
  HostListener,
  Input,
  Injector,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewChild,
  AfterViewInit,
  inject,
} from '@angular/core';
import { Header } from 'src/app/shared/interfaces/header.interface';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ThemeToggleComponent } from '../theme-toogle/theme.toggle.component';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icons/icons.component';
import { Icon } from 'src/app/shared/interfaces/icons.interface';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-event-header',
  standalone: true,
  imports: [RouterLink, ThemeToggleComponent, CommonModule, IconComponent],
  templateUrl: './event-header.component.html',
  styleUrls: ['./event-header.component.scss'],
})
export class EventHeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() logoUrl?: string;
  @Input() logoAlt = 'Event Logo';
  @Input() useIcon = false;
  @Input() iconName?: Icon;
  @Input() iconClass = 'h-8';
  @Input() navItems: Header[] = [];
  @Input() showThemeToggle = false;
  @Input() themeMode: 'light-dark' | 'dark-only' = 'light-dark';

  @ViewChild('nav', { static: true }) nav!: ElementRef<HTMLElement>;
  private readonly destroyRef = inject(DestroyRef);
  private readonly injector = inject(Injector);
  private observer?: IntersectionObserver;
  private fragmentScrollRef?: AfterRenderRef;

  constructor(
    private renderer: Renderer2,
    private route: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.initIntersectionObserver();

    this.route.fragment
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((fragment) => {
        this.fragmentScrollRef?.destroy();
        this.fragmentScrollRef = undefined;

        if (fragment) {
          this.fragmentScrollRef = afterNextRender(() => {
            const element = document.getElementById(fragment);
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }, { injector: this.injector });
        }
      });
  }

  ngAfterViewInit(): void {
    this.observeSections();
  }

  ngOnDestroy(): void {
    this.fragmentScrollRef?.destroy();
    this.observer?.disconnect();
  }

  private initIntersectionObserver(): void {
    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const callback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const navItems = this.nav.nativeElement.querySelectorAll('a');
          navItems.forEach((item) => {
            const itemId = item.dataset['sectionId'];
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
      this.observer?.disconnect();
    } else {
      this.observeSections();
    }
  }

  private observeSections(): void {
    if (!this.observer) {
      return;
    }

    const sectionIds = new Set(
      this.navItems
        .map((item) => item.fragment)
        .filter((fragment): fragment is string => Boolean(fragment)),
    );

    sectionIds.forEach((sectionId) => {
      const section = document.getElementById(sectionId);
      if (section) {
        this.observer?.observe(section);
      }
    });
  }
}
