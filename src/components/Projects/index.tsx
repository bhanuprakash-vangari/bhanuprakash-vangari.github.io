import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ProjectCard } from '@/components/ProjectCard'
import { projects } from '@/data/portfolio'
import {
  ProjectsHeader,
  ProjectsTitle,
  ProjectsSubtitle,
  ProjectsDescription,
  ProjectsGrid,
} from './styled.js'

export const Projects = () => {
  return (
    <Section id="projects-section">
      <Container fluid>
        <ProjectsHeader>
          <ProjectsTitle>Projects</ProjectsTitle>
          <ProjectsSubtitle>My Work</ProjectsSubtitle>
          <ProjectsDescription>
            "Risk something or forever sit with your dreams." – Herb Brooks
          </ProjectsDescription>
        </ProjectsHeader>
        
        <ProjectsGrid>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ProjectsGrid>
      </Container>
    </Section>
  )
}

export default Projects
