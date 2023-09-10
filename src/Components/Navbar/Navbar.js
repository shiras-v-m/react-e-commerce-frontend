import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
import logo from '../../assets/logo.svg'
function Navbar() {
  return (
    <div className='navbar'>
        <div className='topLinksContainer'>
            <span >24/7 Customer service <span className='customerServiceNumber'>1-800-234-5678</span></span>
            <div className='topLinksRight'>
                <Link to="/shippingAndReturn">Shipping & return</Link>
                <Link to="/trackOrder">Track Order</Link>
            </div>
        </div>
        <div className="logoContainer">
            <img className='logo' src={logo} alt="logo" />
            <div className='searchContainer'>
                <input className='searchInput' type="text" placeholder='Search products...'/>
                <button className='searchBtn'><span class="material-symbols-outlined searchIcon">search</span></button>
            </div>
            <div className="cartContainer hideonMobile">
            <span class="material-symbols-outlined cartIcon">garden_cart</span>
                <div className="cartCount">
                    <span className='countTxt'>1</span>
                </div>
            </div>
        </div>
        <div className="bottomLinks">
            <Link className='bottomLink' to="/login">All products</Link>
            <Link  className='bottomLink' to="">Home appliances</Link>
            <Link  className='bottomLink' to="">Audio & Video</Link>
            <Link  className='bottomLink' to="">Refrigerator</Link>
            <Link  className='bottomLink' to="">Today's deal</Link>
            <div className="cartContainer">
            <span class="material-symbols-outlined cartIcon">garden_cart</span>
                <div className="cartCount">
                    <span className='countTxt'>1</span>
                </div>
            </div>
            <Link className='bottomLink' to=''>Log In</Link>
        </div>
    </div>
  )
}


export default Navbar