// import { useState } from 'react'

import './App.css'
import AboutMe from './components/AboutMe'
import BottomGradient from './components/BottomGradient'
import Card from './components/Card'
import Experience from './components/Experience'
import Project from './components/Project'
import Stacks from './components/Stacks'
import TopGradient from './components/TopGradient'

export default function App() {
  
  return (
    <div className='relative min-h-screen'>
      <TopGradient />

      <div className='flex justify-center'>
        <div className='max-w-[590px] w-full space-y-20'>

          <Card />
          <AboutMe />
          <Experience />
          <Stacks />
          <Project />

        </div>
      </div>
      
      <BottomGradient />
    </div>
  )

}


