import { Feature, TimelineEvent } from 'src/app/interfaces/features.interface';

export const features: Feature[] = [
  {
    heading: 'Desarrollo de Software',
    content:
      'Inmersión profunda en las últimas tecnologías y metodologías de programación, desarrollo ágil y DevOps. Además, talleres prácticos aplicando conocimiento en proyectos reales.',
    svg: 'code',
  },
  {
    heading: 'Comunidad y Filosofía FOSS',
    content:
      'Espacio para explorar el impacto del Software Libre y de Código Abierto en la tecnología moderna. Conoce líderes de proyectos FOSS, cómo contribuir a estos proyectos y discutir el futuro del software libre.',
    svg: 'group',
  },
  {
    heading: 'Investigación e Innovación',
    content:
      'Avances más recientes en tecnología y ciencia. Investigadores de renombre compartirán sus descubrimientos y cómo estos pueden aplicarse para resolver problemas complejos.',
    svg: 'search',
  },
  {
    heading: 'Diseño y Expresión Libre',
    content:
      'Creativos de todas las disciplinas descubrirán nuevas formas de expresión a través de herramientas de diseño de código abierto. Explorando cómo el diseño puede influir en la sociedad y la cultura.',
    svg: 'art',
  },
];

export const agenda: TimelineEvent[] = [
  {
    description: 'Software libre para una sociedad libre, Vol. 2',
    time: '08:00 - 09:00',
    flag: 'Steven Mejia',
  },
  {
    description: 'Desarrollo de video juegos con software libre',
    time: '09:00 - 10:00',
    flag: 'Jacques Duflos',
  },
  {
    description: 'Taller: Cámara hiperespectral open source',
    time: '10:00 - 11:00',
    flag: 'Sebastián Camilo Cruz',
  },
  {
    description: 'Taller: Cómo hacer un bot de whatsapp',
    time: '11:00 - 11:30',
    flag: 'Nicolás Osorio',
  },
  {
    description: 'Presentación proyecto videojuego',
    time: '14:00 - 14:30',
    flag: 'Ana Beltrán, Cristhian Grajales',
  },
  {
    description: 'Cómo y por qué hacer proyectos Open Source',
    time: '15:00 - 15:30',
    flag: 'Andrés Prieto',
  },
];
