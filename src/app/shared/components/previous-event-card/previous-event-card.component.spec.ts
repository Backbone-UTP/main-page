import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousEventCardComponent } from './previous-event-card.component';

describe('PreviousEventCardComponent', () => {
  let component: PreviousEventCardComponent;
  let fixture: ComponentFixture<PreviousEventCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PreviousEventCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PreviousEventCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
