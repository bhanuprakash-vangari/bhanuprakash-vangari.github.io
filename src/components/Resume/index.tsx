import { useState } from 'react'
import { Container } from '@/components/Container'
import { Section } from '@/components/Section'
import { ProgressBar } from '@/components/ProgressBar'
import { CircularProgress } from '@/components/CircularProgress'
import { education, experience, skills, circularSkills } from '@/data/portfolio'
import {
  ResumeWrapper,
  ResumeNavigation,
  ResumeNav,
  ResumeNavItem,
  ResumeNavLink,
  ResumeContent,
  ResumeTab,
  ResumeTabTitle,
  ResumeItem,
  ResumeItemContent,
  ResumeItemDate,
  ResumeItemTitle,
  ResumeItemCompany,
  ResumeItemGrade,
  ResumeItemDescription,
  SkillsGrid,
  CircularSkillsGrid,
  ProgressSection,
} from './styled.js'

type TabType = 'education' | 'experience' | 'skills'

export const Resume = () => {
  const [activeTab, setActiveTab] = useState<TabType>('education')

  const handleTabClick = (tab: TabType) => {
    setActiveTab(tab)
  }

  return (
    <Section id="resume-section">
      <Container>
        <ResumeWrapper>
          <ResumeNavigation>
            <ResumeNav>
              <ResumeNavItem>
                <ResumeNavLink
                  href="#education"
                  $isActive={activeTab === 'education'}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick('education')
                  }}
                >
                  Education
                </ResumeNavLink>
              </ResumeNavItem>
              <ResumeNavItem>
                <ResumeNavLink
                  href="#experience"
                  $isActive={activeTab === 'experience'}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick('experience')
                  }}
                >
                  Experience
                </ResumeNavLink>
              </ResumeNavItem>
              <ResumeNavItem>
                <ResumeNavLink
                  href="#skills"
                  $isActive={activeTab === 'skills'}
                  onClick={(e) => {
                    e.preventDefault()
                    handleTabClick('skills')
                  }}
                >
                  Skills
                </ResumeNavLink>
              </ResumeNavItem>
            </ResumeNav>
          </ResumeNavigation>

          <ResumeContent>
            {activeTab === 'education' && (
              <ResumeTab>
                <ResumeTabTitle>Education</ResumeTabTitle>
                {education.map((item) => (
                  <ResumeItem key={item.id}>
                    <ResumeItemContent>
                      <ResumeItemDate>{item.date}</ResumeItemDate>
                      <ResumeItemTitle>{item.degree}</ResumeItemTitle>
                      <ResumeItemCompany>{item.institution}</ResumeItemCompany>
                      <ResumeItemGrade>
                        <strong>CGPA: </strong>{item.cgpa}
                      </ResumeItemGrade>
                      <ResumeItemDescription>{item.description}</ResumeItemDescription>
                    </ResumeItemContent>
                  </ResumeItem>
                ))}
              </ResumeTab>
            )}

            {activeTab === 'experience' && (
              <ResumeTab>
                <ResumeTabTitle>Experience</ResumeTabTitle>
                {experience.map((item) => (
                  <ResumeItem key={item.id}>
                    <ResumeItemContent>
                      <ResumeItemDate>{item.date}</ResumeItemDate>
                      <ResumeItemTitle>{item.position}</ResumeItemTitle>
                      <ResumeItemCompany>{item.company}</ResumeItemCompany>
                      {item.awards && (
                        <ResumeItemGrade>
                          <strong>Awards: </strong>{item.awards}
                        </ResumeItemGrade>
                      )}
                      <ResumeItemDescription>{item.description}</ResumeItemDescription>
                    </ResumeItemContent>
                  </ResumeItem>
                ))}
              </ResumeTab>
            )}

            {activeTab === 'skills' && (
              <ResumeTab>
                <ResumeTabTitle>Skills</ResumeTabTitle>
                
                <CircularSkillsGrid>
                  {circularSkills.map((skill) => (
                    <CircularProgress key={skill.name} skill={skill} />
                  ))}
                </CircularSkillsGrid>

                <ProgressSection>
                  <SkillsGrid>
                    {skills.map((skill) => (
                      <ProgressBar
                        key={skill.name}
                        value={skill.percentage}
                        color={skill.color}
                        label={skill.name}
                        showPercentage
                        animated
                      />
                    ))}
                  </SkillsGrid>
                </ProgressSection>
              </ResumeTab>
            )}
          </ResumeContent>
        </ResumeWrapper>
      </Container>
    </Section>
  )
}

export default Resume
