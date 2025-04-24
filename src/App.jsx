import React from 'react'
import About from './component/About'
import Certificate from './component/Certificate'
import Discription from './component/Discription'
import Education from './component/Education'
import Home from './component/Home'
import Lan from './component/Lan'
import Navbar from './component/Navbar'
import ProjectLine from './component/ProjectLine'

function App() {
  return (
    <div className='bg-zinc-800'>
      <Navbar />
      <Home />
      <ProjectLine />
      <Certificate />
      <Discription />
      <Education />
      <Lan />
      <About />
    </div>
  )
}

export default App