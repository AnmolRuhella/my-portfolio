'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const education = [
  {
    degree: 'Bachelor of Technology (B.Tech)',
    institution: 'Inderprastha Engineering College',
    year: '2019 – 2023',
    description: 'Completed B.Tech with a focus on front-end technologies, problem-solving, and software development.',
  },
  {
    degree: 'Senior Secondary (12th)',
    institution: 'D.H.T Saraswati Vidya Mandir',
    year: '2019',
    description: 'Passed 12th with PCM (Physics, Chemistry, Mathematics), gaining strong analytical and logical reasoning skills.',
  },
  {
    degree: 'High School (10th)',
    institution: 'KDB Public School',
    year: '2016',
    description: 'Completed 10th with a solid foundation in mathematics, science, and computer basics.',
  },
]

const EducationSection = () => {
  return (
    <section
      id="education"
      className="min-h-screen px-4 md:px-12 py-16 bg-white flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-black mb-12 text-center">Education</h2>
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {education.map((item, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="text-xl font-bold text-black">{item.degree}</CardTitle>
              <CardDescription className="text-sm text-gray-600">{item.institution}</CardDescription>
              <span className="text-xs text-gray-500">{item.year}</span>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default EducationSection
