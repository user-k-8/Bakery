import React from 'react'
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
<div className='home-container'>
  
    <header className='hero-container'>   
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
  </div>
  )
}

export default Home