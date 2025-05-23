import { DecimalPipe, NgIf } from '@angular/common';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [NgIf, DecimalPipe],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit, OnDestroy {
  @Input() targetDate = '';
  @Input() className = '';

  days = 0;
  hours = 0;
  minutes = 0;
  seconds = 0;
  private countdownInterval: any;

  ngOnInit(): void {
    this.updateCountdown();
    this.countdownInterval = setInterval(() => {
      this.updateCountdown();
    }, 1000);
  }

  updateCountdown(): void {
    const now = new Date();
    // Get the user's time zone offset in milliseconds (getTimezoneOffset returns in minutes)
    const timezoneOffset = now.getTimezoneOffset() * 60000;
    // Adjust the current time for the user's timezone
    const nowAdjusted = new Date(now.getTime() - timezoneOffset);

    // Parse the target date considering the timezone offset
    const endDate = new Date(this.targetDate);
    const endDateAdjusted = new Date(endDate.getTime() - timezoneOffset);

    const timeDiff = endDateAdjusted.getTime() - nowAdjusted.getTime();

    if (timeDiff > 0) {
      this.seconds = Math.floor((timeDiff / 1000) % 60);
      this.minutes = Math.floor((timeDiff / 1000 / 60) % 60);
      this.hours = Math.floor((timeDiff / (1000 * 60 * 60)) % 24);
      this.days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    } else {
      clearInterval(this.countdownInterval);
      this.days = this.hours = this.minutes = this.seconds = 0;
    }
  }

  ngOnDestroy(): void {
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
    }
  }
}
