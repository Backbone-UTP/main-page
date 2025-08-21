import { Icon } from 'src/app/shared/interfaces/icons.interface';
import { Logo } from 'src/app/shared/interfaces/logo.interface';

export const staff = [
  {
    name: 'Paula A. Castro',
    role: 'Líder Organización',
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
    role: 'Coordinación y Desarrollo Web',
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
    role: 'Streaming y Lead Desarrollo Web',
    image: '/assets/images/staff_0.jpeg',
    links: [
      { name: 'linkedin' as Icon, url: 'https://www.linkedin.com/in/djkde' },
      { name: 'github' as Icon, url: 'https://github.com/Djkde01' },
    ],
  },
  {
    name: 'Jose F. Duarte',
    role: 'Promotor',
    image: '/assets/images/staff_3.jpeg',
    links: [
      {
        name: 'linkedin' as Icon,
        url: 'https://www.linkedin.com/in/josefeldc/',
      },
      { name: 'github' as Icon, url: 'https://github.com/josefdc' },
    ],
  },
  {
    name: 'Juan A. Pérez',
    role: 'Logística',
    image: '/assets/images/staff_4.jpeg',
    links: [
      {
        name: 'linkedin' as Icon,
        url: 'https://www.linkedin.com/in/mega-barto',
      },
      { name: 'github' as Icon, url: 'https://github.com/Mega-Barto' },
    ],
  },
  {
    name: 'Juan D. Álvarez',
    role: 'Streaming y Desarrollo Web',
    image: '/assets/images/staff_5.jpeg',
    links: [
      {
        name: 'linkedin' as Icon,
        url: 'https://www.linkedin.com/in/juan-david-alvarez-mej%C3%ADa-070a14294/',
      },
      { name: 'github' as Icon, url: 'https://github.com/seqenenra08' },
    ],
  },
];

export const supporters: Logo[] = [
  {
    name: 'SIRIUS',
    url: 'https://sirius.utp.edu.co/ ',
    image: '/assets/images/support/sirius.png',
    alt: 'Logo de SIRIUS',
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
    name: 'Ubuntu Colombia',
    url: 'https://ubuntu-co.com',
    image: '/assets/images/support/ubuntu.jpg',
    alt: 'Logo de Ubuntu',
  },
];
