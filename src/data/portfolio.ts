import { PersonalInfo, Education, Experience, Skill, CircularSkill, Project, CounterItem, ContactInfo, SocialLink, NavItem } from '@/types'

export const personalInfo: PersonalInfo = {
  name: 'Vangari Bhanu Prakash',
  dateOfBirth: 'June 20, 1997',
  address: 'Hyderabad, India',
  zipCode: '500058',
  email: 'bhanuprakash.vangari@gmail.com',
  phone: '+91-910-059-2918',
}

export const education: Education[] = [
  {
    id: '1',
    date: '2015-2020',
    degree: 'Bachelor of Technology in Computer Science',
    institution: 'Sreyas Institute of Engineering & Technology',
    cgpa: '6.0',
    description: 'This program was an intellectually challenging discipline. This study will provide you with a strong foundation of knowledge in problem-solving and logical thinking. Some of the areas of study are algorithms and data structures, programming languages, software engineering, database systems, operating systems to name a few. A record number of jobs being created in computer science related fields.',
  },
  {
    id: '2',
    date: '2013-2015',
    degree: 'Mathematics, Physics & Chemistry (Junior College)',
    institution: 'Sri Chaitanya Junior College, Kukatpally',
    cgpa: '7.8',
    description: 'This program let understand the basic concepts and fuctionalities of science and mathematics, which intern helped me get a specutaled idea of how technology and art runs around the basics of these.',
  },
  {
    id: '3',
    date: '2003-2013',
    degree: 'Central Board of Secondary Education (CBSE)',
    institution: 'Kendriya Vidyalaya Gachibowli',
    cgpa: '7.8',
    description: 'This was the were my childhood mostly was. Here I learnt the basics of life, this place has a special place in my heart as it defines what I am today, the character, the nature I\'ve build from these years of education. This is the foundation stone for my personality. This was a place of amalgamation of different cultures, and different personalities and the seeding of the idea of equality.',
  },
]

export const experience: Experience[] = [
  {
    id: '1',
    date: '2021-Today',
    position: 'Software Developer II',
    company: 'Accellor Software India PVT LTD [formerly PopcornApps]',
    awards: 'Star Performer of Q3 2023',
    description: 'Build Progressive Web/Mobile application to solve customer problems in various verticals ranging from medical to commercial',
  },
  {
    id: '2',
    date: '2020',
    position: 'Front-end Web Development & Graphic Designer',
    company: 'Quadato',
    description: 'I was given the resposibility of PR Design and Brand Design and Web Development of the clients. I recieved various challenges and pushing my limits and thinking out of the box for this and have great job satisfaction here. Was also introduced to the team management and cooperation of design with the ideology of the moto of the event and getting a perfect rapo with the leads and managers.Also taste the nature of tacling clients.',
  },
  {
    id: '3',
    date: '2018-2021',
    position: 'Graphic Designer & UI/UX Designer',
    company: 'Stupefy Arts',
    description: 'Stupefy Arts was a independent Instagram Account formed by me, which excentuates my deep discovery and invention of myself in the design world. This was a taxing job for me to push my skills and learning now skills to get to know the need of the hour in the market.',
  },
  {
    id: '4',
    date: '2018',
    position: 'Graphic Designer',
    company: 'TEDxSreyasInstitute',
    description: 'I was given the resposibility of PR Design and Brand Design of this Event. I recieved various challenges and pushing my limits and thinking out of the box for this and have great job satisfaction here. Was also introduced to the team management and cooperation of design with the ideology of the moto of the event and getting a perfect rapo with the leads and managers.',
  },
  {
    id: '5',
    date: '2017-2018',
    position: 'Freelance Graphic Designer',
    company: 'Sreyas Model United Nations (SMUN)',
    description: 'This was the place where I discovered my interest of arts, I\'ve experimented my tastes for the design and implimated my skills of Photoshop & Illustration',
  },
]

export const skills: Skill[] = [
  { name: 'JavaScript / TypeScript', percentage: 95, color: 'color-4' },
  { name: 'React JS', percentage: 70, color: 'color-5' },
  { name: 'React Native', percentage: 90, color: 'color-6' },
  { name: 'Android(Kotlin)', percentage: 85, color: 'color-1' },
  { name: 'Next JS', percentage: 90, color: 'color-2' },
  { name: 'GraphQL', percentage: 80, color: 'color-3' },
  { name: 'PostgreSQL', percentage: 70, color: 'color-3' },
  { name: 'Strapi JS', percentage: 90, color: 'color-3' },
  { name: 'Microsoft Azure DevOps - CI/CD', percentage: 80, color: 'color-3' },
  { name: 'Photoshop , Figma & Illustrator', percentage: 80, color: 'color-3' },
]

export const circularSkills: CircularSkill[] = [
  { name: 'JS / TS', value: 95, lastWeek: 80, lastMonth: 90 },
  { name: 'PostgreSQL', value: 70, lastWeek: 18, lastMonth: 70 },
  { name: 'Next JS', value: 90, lastWeek: 80, lastMonth: 60 },
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'Branding & Illustration Design',
    category: 'Graphics & PR Design',
    imageUrl: '/images/work-1.jpg',
  },
  {
    id: '2',
    title: 'Stupefy Arts',
    category: 'Graphics Design & UI/UX Design',
    imageUrl: '/images/work-2.jpg',
    link: 'https://www.instagram.com/stupefyarts',
  },
  {
    id: '3',
    title: 'Banking Reimagined',
    category: 'UI/UX Design',
    imageUrl: '/images/work-3.jpg',
    link: 'https://dribbble.com/shots/13637592-SBI-Banking-Reimagined-UI-Part-1',
  },
  {
    id: '4',
    title: 'Learny',
    category: 'UI/UX Design',
    imageUrl: '/images/work-4.png',
    link: 'https://dribbble.com/shots/13751585-Learny-A-Virtual-University-Companion-For-UG-s-PG-s',
  },
  {
    id: '5',
    title: 'Front-end Web Development',
    category: 'React JS',
    imageUrl: 'https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
    link: 'https://github.com/bhanuprakash-vangari?tab=repositories',
  },
  {
    id: '6',
    title: 'Photographer',
    category: 'Landscape Photography',
    imageUrl: '/images/work-5.jpeg',
    link: 'https://500px.com/bhanuprakashvangari',
  },
]

export const counters: CounterItem[] = [
  { number: 1, label: 'Awards' },
  { number: 69, label: 'Complete Projects' },
  { number: 6, label: 'Happy Customers' },
  { number: 5000, label: 'Cups of coffee' },
]

export const contactInfo: ContactInfo = {
  address: 'Badangpet, Hyderabad, IN',
  phone: '+91 9100592918',
  email: 'bhanuprakash.vangari@gmail.com',
  website: 'http://bhanuprakash-vangari.github.io/',
}

export const socialLinks: SocialLink[] = [
  { platform: 'twitter', url: 'https://www.twitter.com/bhanu6143', icon: 'icon-twitter' },
  { platform: 'facebook', url: 'https://www.facebook.com/superstarbhanu', icon: 'icon-facebook' },
  { platform: 'instagram', url: 'https://www.instagram.com/bhanuprakash_vangari007', icon: 'icon-instagram' },
]

export const navItems: NavItem[] = [
  { id: 'home', label: 'Home', href: '#home-section' },
  { id: 'about', label: 'About', href: '#about-section' },
  { id: 'resume', label: 'Resume', href: '#resume-section' },
  { id: 'projects', label: 'Works', href: '#projects-section' },
  { id: 'contact', label: 'Contact', href: '#contact-section' },
]

export const rotatingTexts = [
  'React js / React Native Developer',
  'Web Designer.',
  'Graphic Designer.',
  'Photographer.',
]
