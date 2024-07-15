import { DecimalPipe, NgIf } from '@angular/common';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [NgIf, DecimalPipe],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  @Input() targetDate: string = '2022-12-31T23:59:59';
  @Input() className: string = '';

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
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
