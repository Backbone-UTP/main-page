import { Component } from '@angular/core';
import { SFD2025HeroComponent } from './components/hero/hero.component';
import { SFDHeaderComponent } from './components/header/header.component';
import { agenda, features } from 'src/assets/content/sfd-features';
import { FeaturesComponent } from './components/features/features.component';
import {
  Feature,
  TimelineEvent,
} from 'src/app/shared/interfaces/features.interface';
import { ProfileCardComponent } from '../../../shared/components/profile-card/profile-card.component';
import { staff2025, supporters2025 } from 'src/assets/content/sfd.people';
import { LogosListComponent } from '../../../shared/components/logos-list/logos-list.component';
import { Logo } from 'src/app/shared/interfaces/logo.interface';
import { footerLinks, headerLinks } from 'src/assets/content/sfd-links';
import { FooterComponent } from './components/footer/footer.component';
import { ButtonComponent } from './components/button/button.component';
@Component({
  selector: 'app-sfd-2025',
  standalone: true,
  imports: [
    SFD2025HeroComponent,
    SFDHeaderComponent,
    FeaturesComponent,
    ProfileCardComponent,
    LogosListComponent,
    FooterComponent,
    ButtonComponent,
  ],
  templateUrl: './sfd-2025.component.html',
  styleUrl: './sfd-2025.component.scss',
})
export class SFD2025Component {
  headerLinks = headerLinks;

  footerLinks = footerLinks;

  // Date to countdown to oct 10th, 2024 at 08:00:00 UTC-5

  countdownDate = new Date('2024-10-10T08:00:00-05:00').toString();

  aboutTitle = '¿Qué es el Software Freedom Day 2025?';
  aboutSubTitle =
    'Es un evento donde se celebra el software libre y de código abierto. Apoyado por semilleros pertenecientes a la Facultad de Ingenierías, donde se dará a conocer el gran ecosistema de investigadores que la universidad está formando. Este año, las charlas y talleres se enfocarán en cuatro temáticas';

  aboutFeatures: Feature[] = features;

  staff = staff2025;

  sfdAgenda: TimelineEvent[] = agenda;

  supporters: Logo[] = supporters2025;
}
