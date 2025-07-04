import React from 'react'

export default function Navbar() {
  return (
    <div className=" w-full text-white flex justify-between items-center bg-transparent p-6 fixed top-0 z-50 ">
      <div className='font-bold text-2xl '><span className='text-blue-500'>Shreyas</span> Nair</div>
      <div>
        <ul className="flex space-x-4">
          <li><a href="#intro" className="hover:text-blue-500">Intro</a></li>
          <li><a href="#projects" className="hover:text-blue-500">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-500">Skills</a></li>
          <li><a href="#timeline" className="hover:text-blue-500">Timeline</a></li>
          <li><a href="#contact" className="hover:text-blue-500">Contact</a></li>
        </ul>
      </div>
    </div>
  )
}
