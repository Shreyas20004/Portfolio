import React from 'react'

const timeline = [
  {
    title: 'Campus Ambassador',
    org: 'GeeksforGeeks',
    type: 'Internship',
    duration: 'Apr 2024 – Present',
    location: 'Panvel, Maharashtra, India',
    details: 'Conduct events and promote Geeks for Geeks on the campus.',
  },
  {
    title: 'Student Ambassador',
    org: 'LetsUpgrade',
    type: 'Internship',
    duration: 'Jul 2024 – Aug 2024',
    location: 'Remote',
    details: 'Represented LetsUpgrade, managed outreach and engagement.',
  },
  {
    title: 'Content Lead',
    org: 'GDSC-AIKTC',
    type: 'Leadership',
    duration: 'Aug 2023 – Aug 2024',
    location: 'Panvel, India',
    details: 'Managed content, collaborated on GDSC events and workshops.',
  },
  {
    title: 'Python Intern',
    org: 'TechnoHack Edutech',
    type: 'Internship',
    duration: '2024',
    location: 'Remote',
    details: 'Learned Python and basic web development via projects.',
  },
  {
    title: 'Python Intern',
    org: 'CodSoft',
    type: 'Internship',
    duration: '2024',
    location: 'Remote',
    details: 'Worked on Python programming-based project tasks.',
  },
  {
    title: 'B.E. Computer Engineering',
    org: 'AIKTC, New Panvel',
    type: 'Education',
    duration: '2022 – 2026',
    location: 'Panvel, India',
    details: 'CGPA up to Sem 4: 8.75/10',
  },
  {
    title: 'HSC',
    org: 'Fr. Agnel Jr. College',
    type: 'Education',
    duration: '2022',
    location: 'Ambernath, India',
    details: 'Scored 77.17%',
  },
  {
    title: 'SSC',
    org: 'Fatima High School',
    type: 'Education',
    duration: '2020',
    location: 'Ambernath, India',
    details: 'Scored 86.80%',
  },
];

const Timeline = ({ data }) => {
  return (
    <section className="bg-gray-800 text-white py-12 px-4" id ="timeline">
      <h2 className="text-4xl font-bold text-center mb-10">My Journey</h2>
      <div className="relative border-l-4 border-blue-500 pl-6 space-y-10 max-w-4xl mx-auto">
        {data.map((item, idx) => (
          <div key={idx} className="relative group">
            <div className="absolute -left-3 top-1 w-6 h-6 rounded-full bg-blue-500 border-4 border-gray-950 z-10"></div>
            <div className="bg-gray-800 p-5 rounded-lg shadow-md hover:bg-blue-800 transition-all duration-300">
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.org} · {item.type}</p>
              <p className="text-sm text-gray-500 italic">{item.duration} · {item.location}</p>
              <p className="mt-2 text-gray-300">{item.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default function TimelineSection() {
  return <Timeline data={timeline} />;
}