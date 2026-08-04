import { LinkItem } from './link-item.interface';

export interface ProjectLink {
  label: string;
  url: string;
}

export interface Project {
  imageUrl: string;
  title: string;
  tech: string;
  status: 'En Desarrollo' | 'Publicado' | 'Próximamente';
  description: string;
  repositoryLinks: ProjectLink[];
  liveUrl?: string;
}

export interface Member {
  name: string;
  role: string;
  photoUrl: string;
  socialLinks: LinkItem[];
}

export interface Event {
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  registrationUrl?: string;
  relativeUrl?: string;
  absoluteUrl?: string;
}
