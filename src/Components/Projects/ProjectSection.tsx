import { Box, Heading } from '@chakra-ui/react';
import { useRef } from 'react';
import { PROJECTS } from '../../constants/projects';
import ProjectList from './ProjectList';
import './projects.css';
import { useScrollPosition } from '../About/useScrollPosition';

const ProjectsSection = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const progress = useScrollPosition(titleRef, 0.6); 

  const fontWeight = 100 + Math.round(700 * progress);

  return (
    <Box id="projects" className="projects-section">
      <Heading         
        ref={titleRef}
        className="projects-title"
        style={{
          fontWeight: fontWeight,
        }}>PROJECTS</Heading>
      <ProjectList projects={PROJECTS} />
    </Box>
  );
};

export default ProjectsSection;
