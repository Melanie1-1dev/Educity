import React from 'react'
import Navbar from './compnents/navbar/Navbar'
import Hero from './compnents/Hero/Hero'
import Programs from './compnents/programs/programs'
import Title from './compnents/Title/Title'
import About from './compnents/About/About'
import Campus from './compnents/Campus/Campus'
import Testimonials from './compnents/Testimonials/Testimonials'
import Contacts from './compnents/Contacts/Contacts'
import Footer from './compnents/Footer/Footer'
import VideoPlayer from './compnents/VideoPlayer/Videoplayer'
import { useState } from "react";

const App = () => {

  const [playState, setPlayState] = useState(false);
  return (
    <div>
    <Navbar/> 
    <Hero/>
    <div className="container">
      <Title subTitle='OUR PROGRAM' Title='What we offer'/>
    <Programs/>
    <About setPlayState ={setPlayState}/>
      <Title subTitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' Title='What Student Says'/>
    <Testimonials/>
      <Title subTitle='Contact Us' Title='Get in Touch'/>
      <Contacts/>
      <Footer/>

    </div>
    <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  )
}

export default App
