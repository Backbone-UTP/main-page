import { Icon } from './icons.interface';

export interface Feature {
  heading: string;
  content: string;
  svg: Icon;
}

export interface TimelineEvent {
  name: string;
  time: string;
  description: string;
  talk: string;
  img: string;
  link?: string;  
  aditional?: {name: string, description: string, img: string}[];
}
