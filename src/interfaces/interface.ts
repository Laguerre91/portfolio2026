export interface Links {
  label: string;
  href: string;
}

export interface LinkListProps {
  title: string;
  links: Links[];
}

export interface AboutTextProps {
  title: string;
  subtitle?: string;
}


export interface AboutSectionProps {
  imageSrc: string;      
  imageAlt?: string;      
  title: string;
  subtitle?: string;
}

export interface AboutBackgroundProps {
  src: string;
  alt?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  stack: string[]
  image: string;
  link?: string;
}

