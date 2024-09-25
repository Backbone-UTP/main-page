import { Component } from '@angular/core';
import { SFD2024HeroComponent } from './components/hero/hero.component';
import { SFDHeaderComponent } from './components/header/header.component';
import { Header } from 'src/app/shared/interfaces/header.interface';
import { CountdownComponent } from 'src/app/shared/components/countdown/countdown.component';
import { agenda, features } from 'src/assets/content/sfd-features';
import { FeaturesComponent } from './components/features/features.component';
import {
  Feature,
  TimelineEvent,
} from 'src/app/shared/interfaces/features.interface';
import { ProfileCardComponent } from '../../../shared/components/profile-card/profile-card.component';
import { staff, supporters } from 'src/assets/content/sfd.people';
import { NgFor } from '@angular/common';
import { TimelineComponent } from '../../../shared/components/timeline/timeline.component';
import { LogosListComponent } from '../../../shared/components/logos-list/logos-list.component';
import { Logo } from 'src/app/shared/interfaces/logo.interface';
import { SectionRightComponent } from './components/section-right/section-right.component';
import { footerLinks, headerLinks } from 'src/assets/content/sfd-links';
import { FooterComponent } from './components/footer/footer.component';
import { CallToActionComponent } from './components/call-to-action/call-to-action.component';
@Component({
  selector: 'app-sfd-2024',
  standalone: true,
  imports: [
    SFD2024HeroComponent,
    SFDHeaderComponent,
    CountdownComponent,
    FeaturesComponent,
    ProfileCardComponent,
    NgFor,
    TimelineComponent,
    LogosListComponent,
    SectionRightComponent,
    FooterComponent,
    CallToActionComponent,
  ],
  templateUrl: './sfd-2024.component.html',
  styleUrl: './sfd-2024.component.scss',
})
export class SFD2024Component {
  headerLinks = headerLinks;

  footerLinks = footerLinks;

  // Date to countdown to oct 10th, 2024 at 08:00:00 UTC-5

  countdownDate = new Date('2024-10-10T08:00:00-05:00').toString();

  aboutTitle = '¿Qué es el Software Freedom Day 2024?';
  aboutSubTitle =
    'Es un evento donde se celebra el software libre y de código abierto. Apoyado por semilleros pertenecientes a la Facultad de Ingenierías, donde se dará a conocer el gran ecosistema de investigadores que la universidad está formando. Este año, las charlas y talleres se enfocarán en cuatro temáticas';

  aboutFeatures: Feature[] = features;

  staff = staff;

  sfdAgenda: TimelineEvent[] = agenda;

  supporters: Logo[] = supporters;
}
