import { useRef } from 'react';
import { Box, Text, Link, Image } from '@chakra-ui/react';
import type { Project } from '../../interfaces/interface';
import { useScrollPosition } from '../About/useScrollPosition';

interface Props {
  project: Project;
}

const ProjectItem = ({ project }: Props) => {

  const itemRef = useRef<HTMLDivElement>(null);

  const progress = useScrollPosition(itemRef, 0.7); 

  const borderRadius = 70 * progress;

  return (
    <Box className="project-item">
      <Image src={project.image} alt={project.title} className="project-image" />
      
      <Box       
        ref={itemRef}
        className="project-text"
        style={{
          borderRadius: `${borderRadius}px`,
        }}
      >
        <Text className="project-title">{project.title}</Text>
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
