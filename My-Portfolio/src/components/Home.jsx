import React from 'react'

import Hero from './Hero'
import About from './About'
import Technologies from './Technologies'
import Experience from './Experience'
import { ContactUs } from './ContactUs'

function Home({togglePopup}) {
  return (
    <div>
      <div>
        <Hero togglePopup={togglePopup}/>
        <About />
        <Experience />
        <Technologies />
      </div>
    </div>

  )
}

export default Home
