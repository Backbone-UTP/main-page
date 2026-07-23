import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';

import { CodeOfConductComponent } from './code-of-conduct.component';

describe('CodeOfConductComponent', () => {
  let component: CodeOfConductComponent;
  let fixture: ComponentFixture<CodeOfConductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeOfConductComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeOfConductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
