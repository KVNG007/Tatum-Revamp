import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom'
import {gsap} from "gsap"
import "./Navbar.scss"
import Lottie from 'lottie-react'
import Twitter from "../../assets/twitter.json"
import Facebook from "../../assets/facebook.json"
import Youtube from "../../assets/youtube.json"
import Linkedin from "../../assets/linkedin.json"
import Linkedin2 from "../../assets/linkedin2.json"

const Navbar = () => {

  const [hover, setHover] = useState(false);

  const tl = useRef();
  const tl2 = useRef();

  const LottieRef = useRef();
  const LottieRef2 = useRef();
  const LottieRef3 = useRef();
  const LottieRef4 = useRef();

  useEffect(() => {

    tl.current = gsap.timeline({
      paused:true
    })

    tl2.current = gsap.timeline({
      paused:true
    })


    //first TL
    tl.current.to(".spa__one", {
      transform: " scale3d(1, 1, 1) ",
      // duration: .3,
      stagger: 0.1
    })
    
    //2nd TL
    tl2.current.to(".spa__two", {
      transform: " scale3d(1, 0, 1)",
      // duration: .35,
      stagger: 0.1 ,
    })


  }, [])


  return (
    <div className="Nav">
      <div className="container">
        <nav className='Nav__cont'>
          <h3 className='logo'>Tatum <span>Games</span></h3>

          <div className="nav__mid">
            <ul>
              <li className='text'><Link to="/">Home</Link></li>
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/support">Support</Link></li>

            </ul>

              <a className='button butt ' onMouseEnter={()=> {
                tl.current.play();
                tl2.current.play();
              }}
              onMouseLeave={()=> {
                tl.current.reverse();
                tl2.current.reverse();
              }}>
              {/* <button className='butt'> */}
                <div className='ska1'>
                  <div className='spa__one'>M</div>
                  <div className='spa__one'>I</div>
                  <div className='spa__one'>K</div>
                  <div className='spa__one'>R</div>
                  <div className='spa__one'>O</div>
                  <div className='spa__one'>S</div>
                </div>

                <div className='ska2'>
                  <div className='spa__two'>M</div>
                  <div className='spa__two'>I</div>
                  <div className='spa__two'>K</div>
                  <div className='spa__two'>R</div>
                  <div className='spa__two'>O</div>
                  <div className='spa__two'>S</div>
                </div>
              </a >
          </div>

          <ul>
            <a>
              <Lottie 
                lottieRef={LottieRef} animationData={Twitter} interactivity={true} loop={true} autoplay={false} 
                onMouseEnter={()=> LottieRef.current.play()} 
                onMouseLeave={()=> LottieRef.current.stop()}/>
            </a>
            <a>
              <Lottie 
                lottieRef={LottieRef2} animationData={Facebook} interactivity={true} loop={true} autoplay={false} 
                onMouseEnter={()=> LottieRef2.current.play()} 
                onMouseLeave={()=> LottieRef2.current.stop()}/>
            </a>

            <a>
              <Lottie 
                lottieRef={LottieRef3} animationData={Youtube} interactivity={true} loop={true} autoplay={false} 
                onMouseEnter={()=> LottieRef3.current.play()} 
                onMouseLeave={()=> LottieRef3.current.stop()}/>
            </a>
            
            <a >
              <Lottie 
                lottieRef={LottieRef4} animationData={Linkedin2} interactivity={true} loop={true} autoplay={false} 
                onMouseEnter={()=> LottieRef4.current.play()} 
                onMouseLeave={()=> LottieRef4.current.stop()}/>
            </a>
          </ul>
        </nav>

      </div>
    </div>
  )
}

export default Navbar