import React from 'react'
import logo from './img/logo2.png'

const Footer = () => {
  return (
    <div>
        <footer>
        <div className='footer-logo-container'>
        <img class="footer-logo" src={logo} alt="Little Lemon logo"/>
        </div>
        <div className='copyright'>
            <hr className='footer-line'/>
            <p>Copyright Homemade Bakery 2023</p>
        </div>
    </footer>
    </div>
  )
}

export default Footer