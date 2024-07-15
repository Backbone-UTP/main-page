import { Component } from '@angular/core';
import { SFD2024HeroComponent } from './components/hero/hero.component';
import { SFDHeaderComponent } from './components/header/header.component';
import { Header } from 'src/app/interfaces/header.interface';
import { CountdownComponent } from 'src/app/shared/components/countdown/countdown.component';
import { features } from 'src/assets/content/sfd-features';
import { FeaturesComponent } from './components/features/features.component';
import { Feature } from 'src/app/interfaces/features.interface';
@Component({
  selector: 'app-sfd-2024',
  standalone: true,
  imports: [
    SFD2024HeroComponent,
    SFDHeaderComponent,
    CountdownComponent,
    FeaturesComponent,
  ],
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
      url: '/events/software-freedom-day-2024/#agenda',
    },
    {
      title: 'Patrocinadores',
      label: 'sponsors',
      url: '/events/software-freedom-day-2024/#sponsors',
    },
    {
      title: 'Registro',
      label: 'register',
      url: '/events/software-freedom-day-2024/#register',
    },
  ];

  // Date to countdown to oct 8th, 2024 at 08:00:00
  countdownDate = new Date('2024-10-08T08:00:00Z').toDateString();

  aboutTitle = '¿Qué es Software Freedom Day 2024?';
  aboutSubTitle =
    'Es un evento donde se celebra el software libre y de código abierto. Apoyado por semilleros pertenecientes de la Facultad de Ingenierías, donde se espera dar a conocer el gran ecosistema de investigadores que la universidad está formando. Este año, las charlas y talleres se enfocarán en cuatro temáticas';

  aboutFeatures: Feature[] = features;
}
