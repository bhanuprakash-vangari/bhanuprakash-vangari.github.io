import { Project } from '@/types'
import {
  ProjectCardContainer,
  ProjectCardImage,
  ProjectCardOverlay,
  ProjectCardContent,
  ProjectCardTitle,
  ProjectCardCategory,
} from './styled.js'

export interface ProjectCardProps {
  project: Project
  onClick?: () => void
}

export const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const handleClick = () => {
    if (project.link) {
      window.open(project.link, '_blank', 'noopener,noreferrer')
    } else if (onClick) {
      onClick()
    }
  }

  return (
    <ProjectCardContainer onClick={handleClick} role={project.link ? 'link' : 'button'}>
      <ProjectCardImage $backgroundImage={project.imageUrl}>
        <ProjectCardOverlay />
        <ProjectCardContent>
          <ProjectCardTitle>{project.title}</ProjectCardTitle>
          <ProjectCardCategory>{project.category}</ProjectCardCategory>
        </ProjectCardContent>
      </ProjectCardImage>
    </ProjectCardContainer>
  )
}

export default ProjectCard
