import React from 'react';
import { Link } from 'react-router-dom';
import logo from './img/logo2.png'
import  bars from './img/bars.png'

const Navbar = () => {

  const mobile = window.innerWidth<=768? true: false;
  const [menuOpened, setMenuOpened] = React.useState(false)

  return (
    <div className='nav-container'>
        <div className='logo-container'>
                 <img src={logo} alt=''  className='logo'/>
                 <span className='nav-text'>Homemade Bakery</span>
        </div>
        
        {menuOpened===false && mobile===true?
        ( <div onClick={()=>{setMenuOpened(true)}}>
          <img src={bars} alt='' style={{width:'1.5rem', height:'1.5rem'}} className='bars'/>
        </div>) : (
           <div className='nav-elements'>
              <button 
              className='close-btn' 
              style={{width:'fit-content' , display: window.innerWidth<'769' ? 'block' : 'none'}}
              onClick={()=>{setMenuOpened(false)}}> ✖ Close</button>
              
              <div><Link to="/" className='nav-txt'><span>Home</span></Link></div>
              <div><Link to="/about" className='nav-txt'><span>About</span></Link></div>
              <div><Link to="/menu" className='nav-txt'><span>Menu</span></Link></div>
           </div>)}

    
  </div>
  )
}

export default Navbar