import { SkillCategory } from '../types';

export const skillsData: SkillCategory[] = [
  {
    name: 'Frontend Development',
    skills: [
      { name: 'JavaScript', level: 95 },
      { name: 'React.js', level: 90 },
      { name: 'TypeScript', level: 85 },
      { name: 'HTML/CSS', level: 95 },
    ],
  },
  {
    name: 'Backend Development',
    skills: [
      { name: 'Node.js', level: 85 },
      { name: 'Express', level: 80 },
      { name: 'MongoDB', level: 75 },
    ],
  },
  {
    name: 'Design',
    skills: [
      { name: 'UI/UX Design', level: 75 },
      { name: 'Figma', level: 85 },
      { name: 'Adobe XD', level: 70 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Responsive Design', level: 95 },
    ],
  },
  {
    name: 'Tools & Technologies',
    skills: [
      { name: 'Git/GitHub', level: 90 },
      { name: 'Docker', level: 75 },
      { name: 'AWS', level: 70 },
      { name: 'CI/CD', level: 80 },
      { name: 'Jest/Testing', level: 75 },
    ],
  },
];
