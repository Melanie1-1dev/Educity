import React from 'react'
import Navbar from './compnents/navbar/Navbar'
import Hero from './compnents/Hero/Hero'
import Programs from './compnents/programs/programs'
import Title from './compnents/Title/Title'
import About from './compnents/About/About'
import Campus from './compnents/Campus/Campus'
import Testimonials from './compnents/Testimonials/Testimonials'
import Contacts from './compnents/Contacts/Contacts'
const App = () => {
  return (
    <div>
    <Navbar/> 
    <Hero/>
    <div className="container">
      <Title subTitle='OUR PROGRAM' Title='What we offer'/>
    <Programs/>
    <About/>
      <Title subTitle='Gallery' Title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' Title='What Student Says'/>
    <Testimonials/>
      <Title subTitle='Contact Us' Title='Get in Touch'/>
      <Contacts/>

    </div>
    </div>
  )
}

export default App
