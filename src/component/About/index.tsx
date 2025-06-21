'use client'

const skills = [
  'React', 'Next.js', 'Redux Toolkit', 'Tailwind CSS', 'TypeScript',
  'JavaScript', 'HTML', 'CSS', 'Git', 'GitHub'
]

const About = () => {
  return (
    <section id="about" className="px-4 md:px-12 py-16 bg-white">
      <h2 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        Technical Skills
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:scale-105 transition transform duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}

export default About;
