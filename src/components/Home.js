import React from 'react'
import logo from './img/logo2.png'
import banner from './img/h-banner2.jpeg'
import NavBar from "./NavBar";
import {cards} from './AppData'
import Card from './Card';
const Home = () => {
    const cardElements = cards.map((item)=>{
      return(
        <Card element={item}/>
      )
    })
  return (
<>
    <header className='hero-container'>   
       <div className='img-container'>
         <img src={logo} alt=''/>
        </div>
        <div>
          <NavBar/>
        </div>
        <div className='hero-text'>
           Welcome to Homemade Bakery
        </div>
    </header>

    <main>
      <section className='slogan'>
        Homemade bakery - your haven of delicious treats!
      </section>
      <section class="banner">
            <img src={banner} alt="promotional-meal special-banner"/>
        </section>
        <section className='cards'>
            {cardElements}
        </section>
    </main>
  </>
  )
}

export default Home