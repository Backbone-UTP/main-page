import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  constructor() {
    window.location.href = 'https://www.instagram.com/backboneutp/';
  }

  ngOnInit(): void {}
}
