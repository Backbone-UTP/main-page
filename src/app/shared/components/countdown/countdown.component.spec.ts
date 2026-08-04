import { ComponentFixture, fakeAsync, TestBed, tick } from '@angular/core/testing';

import { CountdownComponent } from './countdown.component';

describe('CountdownComponent', () => {
  let fixture: ComponentFixture<CountdownComponent>;
  let component: CountdownComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CountdownComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CountdownComponent);
    component = fixture.componentInstance;
  });

  it('should calculate every time unit from the target date', () => {
    fixture.componentRef.setInput(
      'targetDate',
      new Date(Date.now() + 90_061_000).toISOString(),
    );
    fixture.componentRef.setInput('compact', true);
    fixture.detectChanges();

    const element: HTMLElement = fixture.nativeElement;

    expect(component.days).toBe(1);
    expect(component.hours).toBe(1);
    expect(component.minutes).toBe(1);
    expect(element.textContent).toContain('Segundos');
    expect(element.querySelector('.countdown--compact')).toBeTruthy();
  });

  it('should emit expiration without starting an interval for a past date', fakeAsync(() => {
    const expirationSpy = jasmine.createSpy('expiration');
    component.countdownExpired.subscribe(expirationSpy);
    fixture.componentRef.setInput('targetDate', '2000-01-01T00:00:00Z');

    fixture.detectChanges();
    tick();

    expect(component.isExpired).toBeTrue();
    expect(expirationSpy).toHaveBeenCalledOnceWith(true);
  }));
});
