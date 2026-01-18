import { Box, Heading } from '@chakra-ui/react';
import { PROJECTS } from '../../constants/projects';
import ProjectList from './ProjectList';
import './projects.css';

const ProjectsSection = () => {
  return (
    <Box id="projects" className="projects-section">
      <Heading className="projects-title">PROJECTS</Heading>
      <ProjectList projects={PROJECTS} />
    </Box>
  );
};

export default ProjectsSection;
