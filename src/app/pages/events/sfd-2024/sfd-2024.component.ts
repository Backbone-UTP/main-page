import { Component } from '@angular/core';
import { SFD2024HeroComponent } from './components/hero/hero.component';
import { SFDHeaderComponent } from './components/header/header.component';
import { Header } from 'src/app/interfaces/header.interface';
import { ButtonComponent } from './components/button/button.component';

@Component({
  selector: 'app-sfd-2024',
  standalone: true,
  imports: [SFD2024HeroComponent, SFDHeaderComponent],
  templateUrl: './sfd-2024.component.html',
  styleUrl: './sfd-2024.component.scss',
})
export class SFD2024Component {
  headerLinks: Header[] = [
    {
      title: 'Qué es',
      label: 'about',
      url: '/events/software-freedom-day-2024/#about',
    },
    {
      title: 'Agenda',
      label: 'agenda',
      url: '/events/software-freedom-day-2024#agenda',
    },
    {
      title: 'Patrocinadores',
      label: 'sponsors',
      url: '/events/software-freedom-day-2024#sponsors',
    },
    {
      title: 'Registro',
      label: 'register',
      url: '/events/software-freedom-day-2024#register',
    },
  ];
}
