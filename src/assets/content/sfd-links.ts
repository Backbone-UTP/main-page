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
    title: 'Patrocinadores',
    label: 'sponsors',
    url: '/events/software-freedom-day-2024/',
    fragment: 'sponsors',
  },
  {
    title: 'Registro',
    label: 'register',
    url: '/events/software-freedom-day-2024/',
    fragment: 'register',
  },
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
