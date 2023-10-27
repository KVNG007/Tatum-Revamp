// import from 'react'
import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const img1Ref = useRef();
  const img2Ref = useRef();
  const img3Ref = useRef();
  const img4Ref = useRef();
  const img5Ref = useRef();
  const img6Ref = useRef();
  const img7Ref = useRef();

  const [WindowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight});

  useEffect(() => {

    img1Ref.current.addEventListener("load", () =>{
      console.log("click 1");
    })
    img2Ref.current.addEventListener("load", () =>{
      console.log("click 2");
    })
    img3Ref.current.addEventListener("load", () =>{
      console.log("click 3");
    })
    img4Ref.current.addEventListener("load", () =>{
      console.log("click 4");
    })
    img5Ref.current.addEventListener("load", () =>{
      console.log("click 5");
    })
    img6Ref.current.addEventListener("load", () =>{
      console.log("click 6");
    })
    img7Ref.current.addEventListener("load", () =>{
      console.log("click 7");
    })

  }, []);

  useEffect(() => {
    window.addEventListener("resize", () =>{
      setWindowSize({width: window.innerWidth, height: window.innerHeight});
    })
  }, [])
  
  

  return (
    <>
      <div className='img-holder'>
        <img className={`img_1 ${WindowSize.width > WindowSize.height ? "image" : "image2"}`} src="/assets/1.png" ref={img1Ref} />
      </div>

      <div className='img-holder'>
        <img className={`img_2  ${WindowSize.width > WindowSize.height ? "image" : "image2"}`}  src="/assets/2.png" ref={img2Ref} />
      </div>

      <div className='img-holder'>
        <img className={`img_3  ${WindowSize.width > WindowSize.height ? "image" : "image2"}`} src="/assets/3.png" ref={img3Ref} />
      </div>

      <div className='img-holder'>
        <img className={`img_4  ${WindowSize.width > WindowSize.height ? "image" : "image2"}`} src="/assets/4.png" ref={img4Ref} />
      </div>

      <div className='img-holder'>
        <img className={`img_5  ${WindowSize.width > WindowSize.height ? "image" : "image2"}`} src="/assets/5.png" ref={img5Ref} />
      </div>

      <div className='img-holder'>
        <img className={`img_6  ${WindowSize.width > WindowSize.height ? "image" : "image2"}`} src="/assets/6.png" ref={img6Ref} />
      </div>

      <div className='img-holder'>
        <img className={`img_7  ${WindowSize.width > WindowSize.height ? "image" : "image2"}`} src="/assets/7.png" ref={img7Ref} />
      </div>
    </>
  );
}

export default App
