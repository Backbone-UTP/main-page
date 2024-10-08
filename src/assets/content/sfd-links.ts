import { Footer } from 'src/app/shared/interfaces/footer.interface';
import { Header } from 'src/app/shared/interfaces/header.interface';

export const headerLinks: Header[] = [
  {
    title: 'Qué es',
    label: 'about',
    url: '/events/software-freedom-day-2024/',
    fragment: 'about',
  },
  {
    title: 'Agenda',
    label: 'agenda',
    url: '/events/software-freedom-day-2024/',
    fragment: 'agenda',
  },
  {
    title: 'Invitan',
    label: 'supporters',
    url: '/events/software-freedom-day-2024/',
    fragment: 'supporters',
  }
];

export const footerLinks: Footer[] = [
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/company/backboneutp',
  },
  {
    name: 'github',
    url: 'https://github.com/Backbone-UTP',
  },
  {
    name: 'instagram',
    url: 'https://www.instagram.com/backboneutp/',
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@backboneutp6202',
  },
];
