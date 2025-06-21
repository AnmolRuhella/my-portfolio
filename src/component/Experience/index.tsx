'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const experiences = [
  {
    role: 'Frontend Engineer',
    company: 'Rentickle',
    duration: 'April 2025 – Present',
    points: [
      'Managed complex states with Redux, ensuring efficient data flow.',
      'Developed and managed web applications and their features.',
      'Optimized performance, implemented reusable components, and enhanced user experiences.',
      'Collaborated with designers and backend developers to deliver seamless, high-quality applications.',
    ],
  },
  {
    role: 'Software Developer Trainee',
    company: 'Spraxa Solutions Pvt. Ltd.',
    duration: 'Nov 2024 – March 2025',
    points: [
      'Worked closely with product managers and stakeholders to understand feature requirements.',
      'Regularly involved in peer code reviews among 3–5 developers.',
      'Monitored and optimized the code build and deployment process on AWS.',
      'Integrated Redux Toolkit to simplify global state management and avoid prop drilling.',
      'Applied server-side rendering, SEO, and accessibility practices.',
      'Improved code coverage by 11% using Jest and React Testing Library.',
      'Contributed to Agile sprints and internal demos.',
    ],
  },
  {
    role: 'Member Technical Staff',
    company: 'InnoBit Systems Pvt. Ltd.',
    duration: 'May 2023 – July 2024',
    points: [
      'Built responsive web interfaces using ReactJS, Next.js, Bootstrap, and Redux.',
      'Used Redux for state management and ensured efficient data flow.',
      'Created reusable components and optimized performance.',
      'Worked with designers and backend teams to deliver polished apps.',
    ],
  },
]

const ExperienceSection = () => {
  return (
    <div id="experience" className="px-4 md:px-12 py-12 bg-white">
      <h2 className="text-3xl font-bold text-black mb-8 text-center">Work Experience</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {experiences.map((exp, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">{exp.role}</CardTitle>
              <CardDescription className="text-sm">
                {exp.company} &nbsp;|&nbsp; {exp.duration}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                {exp.points.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

export default ExperienceSection
