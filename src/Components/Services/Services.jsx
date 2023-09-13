import React from 'react'
import './Services.css'
function Services() {
  return (
    <div className="services">
    
    <div className="shippingContainer">
    <span className="material-symbols-outlined shippingIcon">local_shipping</span>
      <div >
        <h5 className='heading'>Free shipping</h5>
        <p className='description'>When you spend $80 or more</p>
      </div>
    </div>
    <div className="shippingContainer">
    <span className="material-symbols-outlined chatIcon">chat_bubble</span>
      <div >
        <h5 className='heading'>We are available 24/7</h5>
        <p className='description'>Need help? Contact us anytime</p>
      </div>
    </div>
    <div className="shippingContainer">
    <span className="material-symbols-outlined replyIcon">replay</span>
      <div >
        <h5 className='heading'>Satisfied or return</h5>
        <p className='description'>Easy 30-day return policy</p>
      </div>
    </div>
    <div className="shippingContainer">
    <span className="material-symbols-outlined creditCardIcon">credit_card</span>
      <div >
        <h5 className='heading'>100% secure payments</h5>
        <p className='description'>Visa, Mastercard, Stripe, PayPal</p>
      </div>
    </div>
   </div>
  )
}

export default Services