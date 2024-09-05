import {
  Feature,
  TimelineEvent,
} from 'src/app/shared/interfaces/features.interface';

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
    name: 'Steven Mejia',
    description: 'Economista, ingeniero de sistema, Magister en ingeniería de sistemas, emprendedor de base tecnológica desde el año 2008, CTO de Pulsatrix empresa dedicada a procesos de transformación digital y Software As a Service. Mentor de emprendimiento y aficionado a la fotografía de naturaleza.',
    talk: 'Software libre para una sociedad libre, Vol. 2',
    time: '08:00 - 09:00',
  },
  {
    name: 'Jacques Duflos',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'GODOT4: Creación de vídeojuegos con herramientas libres',
    time: '09:00 - 10:00',
  },
  {
    name: 'Jesús David Mena Rivera',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'Introducción a Rust: Programación con Seguridad y Rendimiento',
    time: '10:00 - 10:30',
  },
  {
    name: 'Nicolás Osorio',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'La versión Open Source de un chatbot de whatsapp.',
    time: '10:30 - 11:00',
  },
  {
    name: 'Sebastián Camilo Cruz',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'Explicación, implementación y calibración de una cámara hiperespectral open source de bajo coste',
    time: '11:00 - 12:00',
  },
  {
    name: 'Break Time',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: '',
    time: '12:00 - 02:00',
  },
  {
    name: 'Ana Beltrán, Cristhian Grajales',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'Open source en la industria del videojuego',
    time: '02:00 - 02:30',
  },
  {
    name: 'Jose Felipe Duarte',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'El Cubo de Rubik y el Open Source: Soluciones Simples para Problemas Complejos',
    time: '02:30 - 03:00',
  },

  {
    name: 'Andrés Prieto',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'Cómo y por qué hacer proyectos Open Source',
    time: '03:00 - 03:30',
  },
  {
    name: 'Carlos Andrés López',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'Software libre e IAs: lo que deberías saber y no te dicen si quieres hacer negocios.',
    time: '04:00 - 05:00',
  },
  {
    name: 'SONAR ISC - Semillero de Investigación',
    description: 'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
    talk: 'El Opensource en los espacios académicos: Conversatorio con líderes de semilleros de investigación',
    time: '05:00 - 06:00',
  },
];
