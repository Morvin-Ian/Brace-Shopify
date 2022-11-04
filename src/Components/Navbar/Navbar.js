import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div className='nav'>
      <ul className='sub-menu1'>
        <li><a href="#">Brace Shopify</a></li>
        <li><a href="#">Home</a></li>
        <li><a href="#">Cart</a></li>
        <li><a href="#">Account</a>

          <ul className='sub-menu2'>
            <li><a href="#">Notifications</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Orders</a></li>
            <li><a href="#">Favourites</a></li>
          </ul>
        
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar