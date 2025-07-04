import React from 'react'
import { Projects, Navbar, Timeline, Skills, Contact,Intro } from './components'
export default function App() {
  return (
    <div className='bg-gray-800 max-w-screen h-full px-1'>
      <Navbar />
      <Intro />
      <Projects />
      <Skills />
      <Timeline />
      <Contact />
      <footer className='text-center py-4'>
        <p className='text-gray-600'>© 2025 Shreyas Nair. All rights reserved.</p>
      </footer>
    </div>
  )
}
