import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slideshow from '../../Components/SlideShow/Slideshow'
import './Home.css'
import Products from '../../Components/Products/Products'
function Home() {
  return (
    <>
   <header>
    <Navbar/>
   </header>
    
   <Slideshow className="slideShow"/>
   <div className="services">
    
    <div className="shippingContainer">
    <span className="material-symbols-outlined shippingIcon">local_shipping</span>
      <div >
        <h5>Free shipping</h5>
        <p>When you spend $80 or more</p>
      </div>
    </div>
    <div className="shippingContainer">
    <span className="material-symbols-outlined chatIcon">chat_bubble</span>
      <div >
        <h5>We are available 24/7</h5>
        <p>Need help? Contact us anytime</p>
      </div>
    </div>
    <div className="shippingContainer">
    <span className="material-symbols-outlined replyIcon">replay</span>
      <div >
        <h5>Satisfied or return</h5>
        <p>Easy 30-day return policy</p>
      </div>
    </div>
    <div className="shippingContainer">
    <span className="material-symbols-outlined creditCardIcon">credit_card</span>
      <div >
        <h5>100% secure payments</h5>
        <p>Visa, Mastercard, Stripe, PayPal</p>
      </div>
    </div>
   </div>
   <Products />

   </>
  )
}

export default Home