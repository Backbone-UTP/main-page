import { Icon } from 'src/app/shared/interfaces/icons.interface';
import { Logo } from 'src/app/shared/interfaces/logo.interface';

export const staff = [
  {
    name: 'Paula A. Castro',
    role: 'Ing. Sistemas, Integrations Developer',
    image: '/assets/images/staff_1.jpeg',
    links: [
      {
        name: 'linkedin' as Icon,
        url: 'https://www.linkedin.com/in/paula-a-castro/',
      },
      { name: 'github' as Icon, url: 'https://github.com/paulacastro1' },
    ],
  },
  {
    name: 'Jhon A. Gaviria',
    role: 'Ing. Sistemas, Backend Developer',
    image: '/assets/images/staff_2.jpeg',
    links: [
      {
        name: 'linkedin' as Icon,
        url: 'https://www.linkedin.com/in/jgaviria0/',
      },
      { name: 'github' as Icon, url: 'https://github.com/JGaviria0' },
    ],
  },
  {
    name: 'Sergio Estrella',
    role: 'Est. Ing. Sistemas, Fullstack Developer',
    image: '/assets/images/staff_0.jpeg',
    links: [
      { name: 'linkedin' as Icon, url: 'https://www.linkedin.com/in/djkde' },
      { name: 'github' as Icon, url: 'https://github.com/Djkde01' },
    ],
  },
];

export const supporters: Logo[] = [
  {
    name: 'SONAR ISC',
    url: 'https://academia.utp.edu.co/sonar-isc/',
    image: '/assets/images/sonar.png',
    alt: 'Logo de SONAR ISC',
  },
  {
    name: 'SNEIA',
    url: 'https://academia.utp.edu.co/sonar-isc/ ',
    image: '/assets/images/sneia.png',
    alt: 'Logo de SNEIA',
  },
  {
    name: 'SIRIUS',
    url: 'https://sirius.utp.edu.co/ ',
    image: '/assets/images/sirius.svg',
    alt: 'Logo de SIRIUS',
  },
  {
    name: 'SAND',
    url: 'https://cidt.utp.edu.co/blog-cidt/sand-semillero-de-investigacion-en-analisis-de-datos/',
    image: '/assets/images/sand.png',
    alt: 'Logo de SAND',
  },
];
