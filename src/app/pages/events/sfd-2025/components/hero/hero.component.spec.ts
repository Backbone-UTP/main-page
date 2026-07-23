import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SFD2025HeroComponent } from './hero.component';

describe('SFD2025HeroComponent', () => {
  let component: SFD2025HeroComponent;
  let fixture: ComponentFixture<SFD2025HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFD2025HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SFD2025HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
