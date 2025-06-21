'use client'

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'

const companyProjects = [
  {
    title: 'Volza',
    tech: 'ReactJS, .NET, NodeJS, MySQL, JavaScript, DCPL framework',
    details: [
      'Volza is a powerful export-import trade intelligence platform.',
      'Provides 5M+ importer/exporter profiles across 82+ countries.',
      'Contributed to frontend development and designed a clean user interface.',
    ],
  },
  {
    title: 'CoolR',
    tech: 'ReactJS, JavaScript, Bootstrap, Redux, Material UI, Flutter',
    details: [
      'Global marketplace to analyze buyers, suppliers, and market trends.',
      'Built responsive dashboards and streamlined UX for 209+ country data.',
    ],
  },
  {
    title: 'Bibliotheca',
    tech: 'HTML, CSS, JavaScript, Redux, ANTD, Socket.io',
    details: [
      'Library management system used to streamline academic operations.',
      'Cut project delays by 40% and improved on-time delivery by 35%.',
      'Features include task tracking, scheduling, and analytics dashboards.',
    ],
  },
]

const personalProjects = [
  {
    title: 'Pet Basket',
    tech: 'ReactJS, JavaScript, Tailwind CSS, Firebase',
    details: [
      'A user-friendly platform to buy and sell pets online.',
      'Supports secure logins, image uploads, and chat between buyers and sellers.',
      'Focused on simple navigation, category filters, and responsive design.',
    ],
  },
  {
    title: 'Library Management App',
    tech: 'ReactJS, NodeJS, MongoDB, Tailwind CSS',
    details: [
      'Full-stack application to manage book records and track availability.',
      'Users can add, update, and organize books by author or category.',
      'Designed with clean UI and efficient data handling for schools/colleges.',
    ],
  },
]

const ProjectSection = () => {
  return (
    <section
      id="projects"
      className="min-h-screen px-4 md:px-12 py-16 bg-gray-50 flex flex-col justify-center"
    >
      <h2 className="text-3xl font-bold text-black mb-12 text-center">
        Projects
      </h2>

      {/* Company Projects */}
      <div className="mb-10">
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Company Projects</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {companyProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-black">{project.title}</CardTitle>
                <CardDescription className="text-xs text-gray-600">{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {project.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Personal Projects */}
      <div>
        <h3 className="text-2xl font-bold text-black mb-6">Personal Projects</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {personalProjects.map((project, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-xl text-black">{project.title}</CardTitle>
                <CardDescription className="text-xs text-gray-600">{project.tech}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  {project.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectSection
