export interface Project {
    imageUrl: string;
    title: string;
    tech: string;
    status: 'En Desarrollo' | 'Publicado' | 'Próximamente';
    description: string;
    repoLink: string;
    liveLink: string; 
}

export interface Member {
    name: string;
    role: string;
    photoUrl: string;
}

export interface Event {
    title: string;
    description: string;
    location: string;
    date: string; // ISO string or specific format, keeping string for now as per existing data
    image: string;
    relativeUrl?: string;
    absoluteUrl?: string;
}
