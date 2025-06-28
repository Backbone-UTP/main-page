import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardNextEventComponent } from './card-next-event.component';

describe('CardNextEventComponent', () => {
  let component: CardNextEventComponent;
  let fixture: ComponentFixture<CardNextEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardNextEventComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardNextEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
