import { Project } from 'src/app/shared/interfaces/data.models';

export const PROJECTS: Project[] = [
  {
    imageUrl: 'assets/images/main/judge.webp',
    title: 'Juez Programación',
    tech: 'Angular, Node.js, Express',
    status: 'En Desarrollo',
    description:
      'Juez para competencias de programación. Permite evaluar código en múltiples lenguajes.',
    repositoryLinks: [
      {
        label: 'Frontend',
        url: 'https://github.com/Backbone-UTP/judge-front',
      },
      {
        label: 'Backend',
        url: 'https://github.com/Backbone-UTP/judge-back',
      },
    ],
  },
  {
    imageUrl: 'assets/images/main/backbone.webp',
    title: 'Backbone Page',
    tech: 'Angular',
    status: 'Publicado',
    description:
      'Página principal de Backbone. Junto a sus eventos, proyectos y miembros.',
    repositoryLinks: [
      {
        label: 'Repositorio',
        url: 'https://github.com/Backbone-UTP/main-page',
      },
    ],
    liveUrl: 'https://backboneutp.com',
  },
  {
    imageUrl: 'assets/images/main/hackathon.webp',
    title: 'Open Tech Hackathon',
    tech: 'React, Tailwind',
    status: 'Publicado',
    description:
      'Hackathon de IA y Blockchain. Promoviendo la innovación tecnológica en el eje cafetero.',
    repositoryLinks: [
      {
        label: 'Repositorio',
        url: 'https://github.com/Backbone-UTP/opentech-hackathon-2025-landing',
      },
    ],
    liveUrl: 'https://opentechhackathon.com/',
  },
];
