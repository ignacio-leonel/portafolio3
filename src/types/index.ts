export interface Technology {
  name: string;
  icon: string;
  color: string;
}

export interface Chapter {
  id: number;
  title: string;
  image: string;
  images: string[];
  objective: string;
  description: string;
  technologies: string[];
}

export interface Project {
  id: number;
  title: string;
  objective: string;
  description: string;
  technologies: string[];
  github: string;
  demo?: string;
  image: string;
  images: string[];
  chapters: Chapter[];
}

export interface OtherProject {
  id: number;
  title: string;
  objective: string;
  description: string;
  technologies: string[];
  images: string[];
  github: string;
  demo?: string;
  image: string;
}