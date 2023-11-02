import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import "./Dropdown.scss"
import { gsap } from "gsap"
import Lottie from 'lottie-react'
import Twitter from "../../assets/twitter.json"
import Facebook from "../../assets/facebook.json"
import Youtube from "../../assets/youtube.json"
import Linkedin2 from "../../assets/linkedin2.json"

const Dropdown = ({toggle, toggleShow}) => {

  const tl = useRef();

  useEffect(() => {

    tl.current = gsap.timeline({
      paused:true
    });


    tl.current.to(".shade", {
      backgroundColor: " rgba(0, 0, 0, 0.342)",
      backdropFilter: "blur(3px)",
      zIndex:  2,
      duration: .3,
      onComplete: function() {
        this.targets()[0].style.pointerEvents = "auto";
      },
      ease:'expo.inOut'
    }).to(".Dropdown", {
      right: "30%",
    })



  }, [])

  useEffect(() => {
    toggle ? tl.current.play() : tl.current.reverse();
  }, [toggle]);

  return (
    <>
    <div className="shade" onClick={toggleShow}></div>
    <div className="Dropdown">

      <div className="top">
        <Link className='logo btn'>
          Tatum <span>Games</span>
        </Link>

        <ul >
          <Link to="/home" className='dropdown__link' onClick={toggleShow}>
            Home
          </Link>
          <Link to="/about-us" className='dropdown__link' onClick={toggleShow}>
            About us
          </Link>
          <Link to="/support" className='dropdown__link' onClick={toggleShow}>
            Support
          </Link>
          <Link to="/" className='dropdown__link micros' onClick={toggleShow}>
            MIKROS
          </Link>
        </ul>
      </div>

      <section>
            <a>
              <Lottie 
                animationData={Twitter} interactivity={true} loop={true} autoplay={false} 
              />
            </a>

            <a>
              <Lottie 
                animationData={Facebook} interactivity={true} loop={true} autoplay={false} 
              />
            </a>

            <a>
              <Lottie 
                animationData={Youtube} interactivity={true} loop={true} autoplay={false} 
              />
            </a>
            
            <a >
              <Lottie style={{display: 'flex', alignItems: 'center', placeContent: 'center'}}
                animationData={Linkedin2} interactivity={true} loop={true} autoplay={false} 
              />
            </a>
          </section>
    </div>
        
    </>
  )
}

export default Dropdown