import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


 const skills = [
  {
    name: 'React',
    logo: '/logos/react.png',
    description: 'A JavaScript library for building user interfaces.',
  },
  {
    name: 'Next.js',
    logo: '/logos/nextjs.png',
    description: 'React framework for server-rendered and static websites.',
  },
  {
    name: 'Python',
    logo: '/logos/python.png',
    description: 'High-level programming language used for web, data, AI.',
  },
  {
    name: 'Django',
    logo: '/logos/django.png',
    description: 'Python web framework that follows the MVT pattern.',
  },
  {
    name: 'Tailwind CSS',
    logo: '/logos/tailwind.png',
    description: 'A utility-first CSS framework for custom designs.',
  },
  // Add more skills here
];

export default function Skills() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 },
      },
    ],
  };


  return (
    <div>
      <section className="py-16 bg-gray-950 text-white px-4" id="skills">
      <h2 className="text-4xl font-bold text-center mb-12">My Skills</h2>
      <div className="max-w-6xl mx-auto">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-3">
              <div className="w-full h-72 perspective">
                <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
                  {/* Front */}
                  <div className="absolute inset-0 bg-gray-800 border border-gray-600 rounded-xl flex flex-col items-center justify-center p-4 backface-hidden">
                    <img src={skill.logo} alt={skill.name} className="h-20 mb-4" />
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>
                  {/* Back */}
                  <div className="absolute inset-0 bg-blue-800 border border-gray-600 rounded-xl text-center p-4 backface-hidden rotate-y-180">
                    <p className="text-sm text-gray-200">{skill.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
    </div>
  )
}
