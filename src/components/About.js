import React from 'react'
import logo from './img/logo.png'
import h1 from './img/h1.jpg'
import h2 from './img/h2.jpg'
import NavBar from "./NavBar";
const About = () => {
  return (
<div>
  <header className='hero-container'>
     <div>
      <NavBar/>
     </div>
     <div className='hero-text'>
        About Us
     </div>
 </header>
 <main>
  <h1 className='about-heading'>Homemade Bakery - About Us</h1>
  <section className='about'>
   <div className='about-img-container'>
        <img src={h1} alt=''  className='about-img'/>
    </div>
    <div className='about-us-text'>
         Welcome to Homemade Bakery, where our passion for baking shines through in every delicious bite. Established with love and dedication, we are a family-owned bakery committed to crafting the finest homemade treats. Our story began in a cozy kitchen, where cherished family recipes were perfected over generations, ensuring that every item we bake carries the warmth and comfort of home.
        At Homemade Bakery, quality is our cornerstone. We use only the freshest, locally sourced ingredients to create an irresistible array of pastries, bread, cakes, and more. 
    </div>
  </section>
  <section className='about'>
    <div className='about-us-text'>
           From the moment you step through our door, you'll be greeted by the inviting aroma of freshly baked goods, each one a testament to our commitment to excellence.
           Whether you're seeking a nostalgic taste of childhood or discovering a new favorite, we invite you to experience the genuine flavors and heartfelt hospitality that define Homemade Bakery. Join us on a journey of taste and tradition, where every bite tells a story of family, community, and the joy of sharing homemade goodness.
    </div>
    <div className='about-img-container'>
       <img src={h2} alt='' className='about-img'/>
    </div>
  </section>

 </main>
 </div>
  )
}

export default About