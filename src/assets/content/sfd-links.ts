import { Footer } from 'src/app/shared/interfaces/footer.interface';
import { Header } from 'src/app/shared/interfaces/header.interface';

export const BACKBONE_INSTAGRAM_URL =
  'https://www.instagram.com/backboneutp/';

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
  },
];

export const headerLinks25: Header[] = [
  {
    title: 'Acerca',
    label: 'about',
    url: '/events/software-freedom-day-2025/',
    fragment: 'about',
  },
  {
    title: 'Ponentes',
    label: 'speakers',
    url: '/events/software-freedom-day-2025/',
    fragment: 'speakers',
  },
  {
    title: 'Agenda',
    label: 'agenda',
    url: '/events/software-freedom-day-2025/',
    fragment: 'agenda',
  },
];

export const mainHeaderLinks: Header[] = [
  {
    title: 'Eventos',
    label: 'event',
    url: '/',
    fragment: 'next-event',
  },
  {
    title: 'Proyectos',
    label: 'projects',
    url: '/',
    fragment: 'projects',
  },
  {
    title: 'Miembros',
    label: 'members',
    url: '/',
    fragment: 'members',
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
    url: BACKBONE_INSTAGRAM_URL,
  },
  {
    name: 'youtube',
    url: 'https://www.youtube.com/@backboneutp6202',
  },
];
