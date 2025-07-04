import React from 'react'
const projects = [
  {
    title: 'Women Safety Analytics',
    description: 'A real-time AI system for identifying threats and analyzing public safety.',
    image: '/images/women-safety.jpg',
    link: 'https://yourprojectlink.com/women-safety',
  },
  {
    title: 'Raise Your Issues (RYI)',
    description: 'A civic platform to report and track community issues transparently.',
    image: '/images/ryi.jpg',
    link: 'https://yourprojectlink.com/ryi',
  },
  {
    title: 'Disaster Data Aggregator',
    description: 'Collects and visualizes data from social media/news for emergency response.',
    image: '/images/disaster-aggregator.jpg',
    link: 'https://yourprojectlink.com/disaster',
  },
  
  // Add more projects here
];
export default function Projects() {
  return (
    <div>
      <section className="py-16 bg-gray-900 text-white px-4" id="projects">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group rounded-2xl overflow-hidden shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl"
            >
              <div
                className="h-60 bg-cover bg-center transition-all duration-500 group-hover:brightness-50"
                style={{ backgroundImage: `url(${project.image})` }}
              ></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-black bg-opacity-60 backdrop-blur-md translate-y-full group-hover:translate-y-0 transition-all duration-500">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm text-gray-300">{project.description}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  )
}
