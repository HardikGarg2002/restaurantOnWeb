import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi';
import {MdOutlineRestaurantMenu} from 'react-icons/md';
import './Navbar.css';
import images from '../../constants/images'

const Navbar = () => (
  <div class='app_navbar'>
    <div className='app_navbar-logo'>
      <img src={images.gericht} />
    </div>
    <ul className='app_navbar-links'>
      <li className='p_opensans'><a href='#home'>Home</a></li>
      <li className='p_opensans'><a href='#About'>About</a></li>
      <li className='p_opensans'><a href='#menu'>Menu</a></li>
      <li className='p_opensans'><a href='#Awards'>Awards</a></li>
    </ul>
    <div className='app_navbar-login'>
        <a href='#login' className='p__opensans'>Log In / Register</a>
    </div>
    <div className='app_navbar-smallscreen'>
      <GiHamburgerMenu color='#fff' fontSize={27} onClick={()=>{}} />
      <div className='app_navbar-smallscreen_overlay flex__center slide-bottom'>
        <MdOutlineRestaurantMenu fontSize={27} className="overlay_close" onClick={()=>{}} />
        <li className='p_opensans'><a href='#home'>Home</a></li>
        <li className='p_opensans'><a href='#About'>About</a></li>
        <li className='p_opensans'><a href='#menu'>Menu</a></li>
        <li className='p_opensans'><a href='#Awards'>Awards</a></li>
      </div>
    </div>
  </div>
);

export default Navbar;
