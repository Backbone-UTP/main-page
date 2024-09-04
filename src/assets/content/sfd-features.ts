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
    description: 'Software libre para una sociedad libre, Vol. 2',
    time: '08:00 - 09:00',
    flag: 'Steven Mejia',
  },
  {
    description: 'Creación de juegos videos con herramientas libres',
    time: '09:00 - 10:00',
    flag: 'Jacques Duflos',
  },
  {
    description: 'Introducción a Rust: Programación con Seguridad y Rendimiento',
    time: '10:00 - 10:30',
    flag: 'Jesús David Mena Rivera',
  },
  {
    description: 'La versión Open Source de un chatbot de whatsapp.',
    time: '10:30 - 11:00',
    flag: 'Nicolás Osorio',
  },
  {
    description: 'Explicación, implementación y calibración de una cámara hiperespectral open source de bajo coste',
    time: '11:00 - 12:00',
    flag: 'Sebastián Camilo Cruz',
  },
  {
    description: '',
    time: '12:00 - 02:00',
    flag: 'Break Time',
  },
  {
    description: 'Open source en la industria del videojuego',
    time: '02:00 - 02:30',
    flag: 'Ana Beltrán, Cristhian Grajales',
  },
  {
    description: 'El Cubo de Rubik y el Open Source: Soluciones Simples para Problemas Complejos',
    time: '02:30 - 03:00',
    flag: 'Jose Felipe Duarte',
  },

  {
    description: 'Cómo y por qué hacer proyectos Open Source',
    time: '03:00 - 03:30',
    flag: 'Andrés Prieto',
  },
  {
    description: 'Software libre e IAs: lo que deberías saber y no te dicen si quieres hacer negocios.',
    time: '04:00 - 05:00',
    flag: 'Carlos Andrés López',
  },
  {
    description: 'El Opensource en los espacios académicos: Conversatorio con líderes de semilleros de investigación',
    time: '05:00 - 06:00',
    flag: 'SONAR ISC - Semillero de Investigación',
  },
];
