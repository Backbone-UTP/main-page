import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFD2024Component } from './sfd-2024.component';

describe('SFD2024Component', () => {
  let component: SFD2024Component;
  let fixture: ComponentFixture<SFD2024Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFD2024Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SFD2024Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
