import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TimelineEvent } from 'src/app/shared/interfaces/features.interface';

import { CardPresentationComponent } from './card-presentation.component';

describe('CardPresentationComponent', () => {
  let component: CardPresentationComponent;
  let fixture: ComponentFixture<CardPresentationComponent>;
  const dialogData: TimelineEvent = {
    name: 'Speaker',
    time: '10:00',
    talk: 'Test talk',
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardPresentationComponent],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: dialogData },
        {
          provide: MatDialogRef,
          useValue: jasmine.createSpyObj<
            MatDialogRef<CardPresentationComponent>
          >('MatDialogRef', ['close']),
        },
      ],
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
