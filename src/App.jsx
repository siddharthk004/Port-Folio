import React from 'react'
import About from './component/About'
import Home from './component/Home'
import Navbar from './component/Navbar'
import Project1 from './Project/Project1'
import Project2 from './Project/Project2'
import Project3 from './Project/Project3'

function App() {
  return (
    <div className='bg-zinc-800 h-screen'>
      <Navbar />
      <Home />
      <Project1 />
      <Project2 />
      <Project3 />
      <About />
    </div>
  )
}

export default App