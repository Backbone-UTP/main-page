import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardPresentationComponent } from './card-presentation.component';

describe('CardPresentationComponent', () => {
  let component: CardPresentationComponent;
  let fixture: ComponentFixture<CardPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPresentationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
