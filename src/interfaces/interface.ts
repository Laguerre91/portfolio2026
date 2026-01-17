export interface Links {
  label: string;
  href: string;
}

export interface LinkListProps {
  title: string;
  links: Links[];
}

export interface AboutSectionProps {
  imageSrc: string;      
  imageAlt?: string;      
  title: string;
  subtitle?: string;
}

