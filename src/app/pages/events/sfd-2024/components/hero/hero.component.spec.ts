import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFD2024HeroComponent } from './hero.component';

describe('SFD2024HeroComponent', () => {
  let component: SFD2024HeroComponent;
  let fixture: ComponentFixture<SFD2024HeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFD2024HeroComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SFD2024HeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
