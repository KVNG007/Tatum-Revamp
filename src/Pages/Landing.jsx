/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ChangeCursor from '../cursor/hooks/ChangeCursor'
import { ChangeCursor2 } from '../cursor/hooks/ChangeCursor'

const Landing = () => {
    // ChangeCursor();
    ChangeCursor2();
  
  return (
    <div>
      <Navbar />

      <Footer />
    </div>
  )
}

export default Landing;