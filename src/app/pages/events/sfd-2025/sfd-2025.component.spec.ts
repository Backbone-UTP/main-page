import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SFD2025Component } from './sfd-2025.component';

describe('SFD2024Component', () => {
  let component: SFD2025Component;
  let fixture: ComponentFixture<SFD2025Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SFD2025Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SFD2025Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
