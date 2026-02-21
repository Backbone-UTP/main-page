import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Event, Member, Project } from '../interfaces/data.models';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // Simulated Data
  private projects: Project[] = [
    // Add simulated projects here if needed, or keep empty for now if none provided in context
    // Using data from previous context if available or generic ones
    {
      imageUrl: 'assets/images/project1.jpg',
      title: 'Backbone Landing',
      tech: 'Angular, NestJS',
      status: 'Publicado',
      description: 'Landing page para Backbone.',
      repoLink: 'https://github.com/example/project-alpha',
      liveLink: 'https://backboneutp.com',
    },
    {
      imageUrl: 'assets/images/project1.jpg',
      title: 'Juez Programación',
      tech: 'Angular, NestJS',
      status: 'Próximamente',
      description: 'Juez Programación para la comunidad.',
      repoLink: 'https://github.com/example/project-alpha',
      liveLink: 'https://backboneutp.com',
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

  private events: Event[] = [
    {
      title: 'FLiSoL 2025',
      description:
        'Tercera edicion en Pereira del evento de instalacion de software libre y código abierto.',
      location: 'UTP - 3 S107',
      date: '2025-09-15T08:00:00', // ISO format for better sorting
      image:
        'https://www.besame.fm/wp-content/uploads/2023/06/Colp_HF122349.jpg',
      absoluteUrl: 'https://flisol.info/',
    },
    {
      title: 'FLiSoL 2024',
      description:
        'Segunda edicion en Pereira del evento de instalacion de software libre y código abierto.',
      location: 'UTP - 3 S107',
      date: '2024-09-15T08:00:00', // ISO format for better sorting
      image:
        'https://www.besame.fm/wp-content/uploads/2023/06/Colp_HF122349.jpg',
      absoluteUrl: 'https://flisol.info/',
    },
    {
      title: 'Taller de Contenedores y Kubernetes',
      description:
        'Aprende las bases de contenedores y Kubernetes en este taller intensivo de 4 horas.',
      location: 'UTP - 3 S107',
      date: '2025-11-25T08:00:00', // Future event
      image:
        'https://ausum.cloud/wp-content/uploads/2025/01/Kubernetes-logo.png',
      relativeUrl: '/events/kubernetes-workshop',
    },
  ];

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
