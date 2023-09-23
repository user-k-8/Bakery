import React from 'react'
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
 <nav>
    <ul>
        <li >
            <Link to="/bakery"  className='link-text'>
                Home
            </Link>
        </li>
        <li >
        <Link to="/about"  className='link-text'>
              About
            </Link>
        </li>
        <li >
        <Link to="/menu"  className='link-text'>
               Menu
            </Link>
        </li>
    </ul>
  </nav>
  )
}

export default NavBar