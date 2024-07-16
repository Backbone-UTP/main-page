import { Icon } from './icons.interface';

export interface Feature {
  heading: string;
  content: string;
  svg: Icon;
}

export interface TimelineEvent {
  flag: string;
  time: string;
  description: string;
}
