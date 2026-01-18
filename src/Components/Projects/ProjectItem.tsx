import { useRef } from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';
import type { Project } from '../../interfaces/interface';
import { useScrollPosition } from '../About/useScrollPosition';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {

  const itemRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLParagraphElement>(null);

  const progress = useScrollPosition(itemRef, 0.7); 
  const titleProgress = useScrollPosition(titleRef, 0.5);

  const borderRadius = 70 * progress;
  const fontSize = 70 * titleProgress;

  return (
    <Box 
          ref={itemRef}
          className="project-item"         
          style={{
          borderRadius: `${borderRadius}px`,
        }}>
      <Image src={project.image} alt={project.title} className="project-image" />
      
      <Box       
        className="project-text"
      >
        <Text ref={titleRef} className="project-title" style={{ fontSize: `${fontSize}px` }}>{project.title}</Text>
        <Text className="project-description">{project.description}</Text>
        <Link 
          href={project.link} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="project-link"
        >
          View Project
        </Link>
      </Box>
    </Box>
  );
};

export default ProjectItem;
