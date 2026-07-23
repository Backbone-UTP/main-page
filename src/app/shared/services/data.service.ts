import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, Member, Project } from '../interfaces/data.models';
import { EVENTS } from '../../../assets/content/events';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Simulated Data
  private projects: Project[] = [
    // Add simulated projects here if needed, or keep empty for now if none provided in context
    // Using data from previous context if available or generic ones
    {
      imageUrl: 'assets/images/main/judge.webp',
      title: 'Juez Programación',
      tech: 'Angular, NestJS',
      status: 'En Desarrollo',
      description:
        'Juez para competencias de programación. Permite evaluar código en múltiples lenguajes.',
      repoLink: 'https://github.com/Backbone-UTP/main-page',
      liveLink: 'https://backboneutp.com',
    },
    {
      imageUrl: 'assets/images/main/backbone.webp',
      title: 'Backbone Page',
      tech: 'Angular, NestJS',
      status: 'Publicado',
      description:
        'Página principal de Backbone. Junto a sus eventos, proyectos y miembros.',
      repoLink: 'https://github.com/Backbone-UTP/main-page',
      liveLink: 'https://backboneutp.com',
    },
    {
      imageUrl: 'assets/images/main/hackathon.webp',
      title: 'Open Tech Hackathon',
      tech: 'React, Tailwind',
      status: 'Publicado',
      description:
        'Hackathon de IA y Blockchain. Promoviendo la innovación tecnológica en el eje cafetero.',
      repoLink:
        'https://github.com/Backbone-UTP/opentech-hackathon-2025-landing',
      liveLink: 'https://opentechhackathon.com/',
    },
  ];

  private members: Member[] = [
    {
      name: 'Paula Castro',
      role: 'Project Manager',
      photoUrl: 'assets/images/staff_1.webp',
    },
    {
      name: 'Jhon Gaviria',
      role: 'Lead Backend',
      photoUrl: 'assets/images/staff_2.webp',
    },
    {
      name: 'Sergio Estrella',
      role: 'Lead Frontend',
      photoUrl: 'assets/images/staff_0.webp',
    },
    {
      name: 'Juan D. Alvarez',
      role: 'Frontend Developer',
      photoUrl: 'assets/images/staff_5.webp',
    },
    {
      name: 'Nohora Cardozo',
      role: 'UI/UX Designer',
      photoUrl: 'assets/images/staff_6.webp',
    },
    {
      name: 'Juan Rojas',
      role: 'Backend Developer',
      photoUrl: 'assets/images/staff_8.webp',
    },
  ];

  private events: Event[] = EVENTS;

  getProjects(): Observable<Project[]> {
    return of(this.projects);
  }

  getMembers(): Observable<Member[]> {
    return of(this.members);
  }

  getEvents(): Observable<Event[]> {
    // Sort events by date
    const sortedEvents = [...this.events].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    return of(sortedEvents);
  }

  getNextEvent(): Observable<Event | null> {
    const now = new Date();
    const sortedEvents = [...this.events].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime(),
    );
    const nextEvent = sortedEvents.find((event) => new Date(event.date) > now);
    return of(nextEvent || null);
  }

  getPastEvents(): Observable<Event[]> {
    const now = new Date();
    const sortedEvents = [...this.events].sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    ); // Descending for past
    const pastEvents = sortedEvents.filter(
      (event) => new Date(event.date) <= now,
    );
    return of(pastEvents);
  }
}
