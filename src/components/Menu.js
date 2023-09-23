import React from 'react'
import logo from './img/logo.png'
import NavBar from "./NavBar";
import {recipeItemsList} from './AppData'
import MenuItem from './MenuItem';

const Menu = () => {
  const MenuItems = recipeItemsList.map((item)=>{
    return(
       <MenuItem element={item}/>
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
              Our Menu
         </div>
     </header>
     <main>
      <div className='about-heading-container'>
       <h1 className='about-heading'>Homemade Bakery - Our Menu</h1>
       </div>
       <div>
      {MenuItems}
      </div>
     </main>
 </>
  )
}

export default Menu