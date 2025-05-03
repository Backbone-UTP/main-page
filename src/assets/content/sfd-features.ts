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
    description:
      'Economista, ingeniero de sistema, Magister en ingeniería de sistemas, emprendedor de base tecnológica desde el año 2008, CTO de Pulsatrix empresa dedicada a procesos de transformación digital y Software As a Service. Mentor de emprendimiento y aficionado a la fotografía de naturaleza.',
    talk: 'Software libre para una sociedad libre, Vol. 2',
    time: '08:00 - 09:00',
    img: '/assets/images/speakers/Steven Mejia.png',
  },
  {
    name: 'Jacques Duflos',
    description:
      "Ingeniero mecánico, profesor de tecnología con cuatro años de experiencia, desarrollador de videojuegos en las plataformas Itch.io y Newgrounds. Artista gráfico para el juego Santa's Impossible Mission",
    talk: 'GODOT4: Creación de vídeojuegos con herramientas libres',
    time: '09:00 - 10:00',
    img: '/assets/images/speakers/Jacques Duflos.png',
    link: 'https://www.youtube.com/live/NJoeUs4pkZE?si=eyE-bdPWypoOItpC&t=530',
  },
  {
    name: 'David Mena',
    description:
      'Cuentero, comediante e ingeniero de sistemas apasionado por el arte. Actualmente desarrollador de software full Stack en DailyBot, una empresa dedicada a ofrecer soluciones que faciliten el trabajo remoto en las compañías.',
    talk: 'Introducción a Rust: Programación con Seguridad y Rendimiento',
    time: '10:00 - 10:30',
    img: '/assets/images/speakers/Jesús David Mena Rivera.png',
    link: 'https://www.youtube.com/live/NJoeUs4pkZE?si=M-LHbCAViQtyycGS&t=4310',
  },
  {
    name: 'Nicolás Osorio',
    description:
      'Es estudiante de Ingeniería en Sistemas y freelancer especializado en Backend. Apasionado por el desarrollo y el aprendizaje de nuevas tecnologías, su proyecto más destacado en la actualidad es un gestor de mensajería vía WhatsApp con múltiples instancias. Este sistema forma parte de un proyecto en funcionamiento en varios países de Latinoamérica. Forma parte del semillero y comunidad Backbone.',
    talk: 'La versión Open Source de un chatbot de whatsapp.',
    time: '10:30 - 11:00',
    img: '/assets/images/speakers/Nicolás Osorio.png',
    link: 'https://www.youtube.com/live/NJoeUs4pkZE?si=N2PZuc2of-CfiwAE&t=6227',
  },
  {
    name: 'Sebastián Camilo Cruz',
    description:
      'Es un entusiasta del EdTech y defensor de la realidad aumentada y proyectos de hardware para fomentar la creatividad y el trabajo en equipo. Miembro del semillero de robótica educativa de la USCO, ha impactado a más de 500 niños. Se especializa en videojuegos con Unity, desarrollo web y explora blockchain para soluciones sociales.',
    talk: 'Explicación, implementación y calibración de una cámara hiperespectral open source de bajo coste',
    time: '11:00 - 12:00',
    img: '/assets/images/speakers/Sebastián Camilo Cruz.png',
  },
  {
    name: 'Break Time',
    description: '',
    talk: '',
    time: '12:00 - 02:00',
    img: '',
  },
  {
    name: 'Ana Beltrán, Cristhian Grajales',
    description: '',
    talk: 'Open source en la industria del videojuego',
    time: '02:00 - 02:30',
    img: '',
    link: 'https://www.youtube.com/live/5_qyNXwqpE8?si=QX0E0m1lqrj842na&t=144',
    aditional: [
      {
        name: 'Cristhian Grajales',
        description:
          'Desarrollador de videojuegos con 6 años de experiencia, especializado en crear entornos inmersivas para PC, Realidad Virtual y dispositivos móviles. Instructor de cursos en línea sobre desarrollo con Unity y Unreal Engine 5, compartiendo conocimiento y pasión por la industria.',
        img: '/assets/images/speakers/Cristhian Grajales.png',
      },
      {
        name: 'Ana Beltrán',
        description:
          'Una artista por excelencia con amor por la tecnología; su enfoque es el mundo 3D y la generación de contenidos digitales. Entre sus aficiones están la creación de personajes, motion graphics y edición de vídeo; es miembro del semillero de juegos SIV, FLISoL y Forest Software Community; por profesión es ingeniera de sistemas y diseñadora 3D con participaciones en otras áreas como marketing.',
        img: '/assets/images/speakers/Ana Beltrán.png',
      },
    ],
  },
  {
    name: 'Jose Felipe Duarte',
    description:
      'Entusiasta de las comunidades tecnológicas, participando en eventos como FLISoL Pereira y Pereira Tech Day. GitHub Campus Expert y miembro del semillero SNEIA, se especializa en inteligencia artificial y software de código abierto. Estudiante de Ingeniería en Sistemas, busca impulsar el aprendizaje continuo y el intercambio de conocimientos.',
    talk: 'El Cubo de Rubik y el Open Source: Soluciones Simples para Problemas Complejos',
    time: '02:30 - 03:00',
    img: '/assets/images/speakers/Jose Felipe Duarte.png',
    link: 'https://www.youtube.com/live/5_qyNXwqpE8?si=KjfsKQELvq9gygLx&t=1652',
  },

  {
    name: 'Andrés Prieto',
    description:
      'Es ingeniero en Sistemas y Computación y actualmente cursa una maestría en la misma área. Apasionado por el aprendizaje continuo y la programación, considera esta disciplina como una forma de vida. Es miembro activo de las comunidades FLISoL, Ubuntu Colombia, Arch Linux Project y fundador de Forest Software Community. Se especializa en el campo de la Inteligencia Artificial, ofreciendo soluciones innovadoras a través de la web.',
    talk: 'Cómo y por qué hacer proyectos Open Source',
    time: '03:00 - 03:30',
    img: '/assets/images/speakers/Andrés Prieto.png',
    link: 'https://www.youtube.com/live/5_qyNXwqpE8?si=3i1sZKvItaK0Z3-s&t=2786',
  },
  {
    name: 'Mariana Cortés Rueda',
    description:
      'Es comunicadora de profesión y actualmente se dedica a la documentación técnica (tech writer), después de haber estudiado y ejercido como programadora frontend. Ella se ha propuesto ayudar a crear puentes entre desarrolladores o ingenieros, ejecutivos, y usuarios por medio de comunicaciones efectivas.',
    talk: '10 tips para cambiar tu mundo documentando en Open Source',
    time: '03:30 - 04:00',
    img: '/assets/images/speakers/mariana-cortes.webp',
    link: 'https://www.youtube.com/live/5_qyNXwqpE8?si=wdhu50ry8Exoyzfq&t=5034',
  },
  {
    name: 'Carlos Andrés López',
    description:
      'Ingeniero de Sistemas y Computación, con maestría en ingeniería de sistemas de la UTP, actualmente es Ingeniero de Datos en Subrik. Fue docente en pregrado y posgrado en la UTP, está especializado en ciencia de datos y big data, áreas en las que continúa desarrollándose y aplicando su conocimiento.',
    talk: 'Software libre e IAs: lo que deberías saber y no te dicen si quieres hacer negocios.',
    time: '04:00 - 05:00',
    img: '/assets/images/speakers/Carlos Andrés López.png',
    link: 'https://www.youtube.com/live/5_qyNXwqpE8?si=aOkFaHRVD1KRRq-W&t=7533',
  },
  {
    name: 'SONAR ISC - Semillero de Investigación',
    description:
      'Es un grupo conformado por estudiantes del Programa de Ingeniería de Sistemas y Computación de la Universidad Tecnológica de Pereira que tiene como objetivo el análisis del aseguramiento de calidad durante el proceso de desarrollo de software. Para lograrlo, se enfoca en investigar técnicas, herramientas y principios de las pruebas de software, así como en el aprendizaje de las buenas prácticas y el manejo correcto de la codificación, durante todo el ciclo de vida del software.',
    talk: 'El Opensource en los espacios académicos: Conversatorio con líderes de semilleros de investigación',
    time: '05:00 - 06:00',
    img: '/assets/images/speakers/SONAR ISC.png',
    link: 'https://www.youtube.com/live/5_qyNXwqpE8?si=H32txjRd591tXZyh&t=10235',
  },
];
