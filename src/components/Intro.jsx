import React from 'react'

export default function Intro() {
  return (
    <div className='h-screen flex  justify-center items-center text-center ' id='intro'>
      <div className='w-2/3 h-full'>
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-800 text-white px-4">
          <div className="max-w-3xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Hi, I'm <span className="text-blue-500">Shreyas Nair</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6">
              I'm a passionate programmer skilled in building web applications using modern frameworks and technologies. I specialize in both frontend and backend development.
            </p>
            <p className="text-md md:text-lg text-gray-400">
              <strong>Frontend:</strong> React, Next.js, HTML, CSS, JavaScript, Tailwind CSS<br />
              <strong>Backend:</strong> Python, Django, Flask, FastAPI
            </p>
          </div>
        </section>
      </div>
      <div className='w-1/3 h-3/4 overflow-hidden rounded-full border-4 border-gray-300 '>
        <img src="src\assets\me.jpg" alt="profile" />
      </div>
    </div>
  )
}
