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
  {
    name: 'Jose F. Duarte',
    role: 'Est. Ing. Sistemas, GitHub Campus Expert',
    image: '/assets/images/staff_3.jpeg',
    links: [
      {
        name: 'linkedin' as Icon,
        url: 'https://www.linkedin.com/in/josefeldc/',
      },
      { name: 'github' as Icon, url: 'https://github.com/josefdc' },
    ],
  },
];

export const supporters: Logo[] = [
  {
    name: 'SONAR ISC',
    url: 'https://academia.utp.edu.co/sonar-isc/',
    image: './assets/images/support/sonar.png',
    alt: 'Logo de SONAR ISC',
  },
  {
    name: 'SNEIA',
    url: 'https://academia.utp.edu.co/sneia/',
    image: '/assets/images/support/sneia.png',
    alt: 'Logo de SNEIA',
  },
  {
    name: 'SIRIUS',
    url: 'https://sirius.utp.edu.co/ ',
    image: '/assets/images/support/sirius.png',
    alt: 'Logo de SIRIUS',
  },
  {
    name: 'FOREST',
    url: 'https://www.linkedin.com/company/forest-software-community/',
    image: '/assets/images/support/forest.png',
    alt: 'Logo de FOREST',
  },
  {
    name: 'DFF',
    url: 'https://digitalfreedoms.org/en/',
    image: '/assets/images/support/dff.png',
    alt: 'Logo de DFF',
  },
  {
    name: 'Facultad',
    url: 'https://ingenierias.utp.edu.co',
    image: '/assets/images/support/facultad.png',
    alt: 'Logo de Facultad',
  },
  {
    name: 'SIV',
    url: 'https://comunicaciones.utp.edu.co/60517/facultades/fomentando-la-innovacion-y-la-creatividad-semillero-de-desarrollo-de-videojuegos-y-gamificacion/',
    image: '/assets/images/support/siv.jpg',
    alt: 'Logo de SIV',
  },
  {
    name: 'Ubuntu Colombia',
    url: 'https://ubuntu-co.com',
    image: '/assets/images/support/ubuntu.jpg',
    alt: 'Logo de Ubuntu',
  },
];
