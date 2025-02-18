import React from 'react'
import Navbar from './components/Navbar'
import LandingPage from './components/LandingPage'
import Marquee from './components/Marquee'
import About from './components/About'
import Eye from './components/Eye'
import Featured from './components/Featured'
import Review from './components/Review'
import Cards from './components/Cards'

function App() {
  return (
    <div className='w-full min-h-screen bg-zinc-900 text-white'>
      <Navbar/>
      <LandingPage/>
      <Marquee/>
      <About/>
      <Eye/>
      <Featured/>
      {/* <Review/> */}
      <Cards/>
    </div>
  )
}

export default App