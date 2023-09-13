import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Slideshow from '../../Components/SlideShow/Slideshow'
import './Home.css'
import Products from '../../Components/Products/Products'
import Services from '../../Components/Services/Services'
import Add from '../../Components/Adds/Add'
function Home() {
  return (
    <>
   <header>
    <Navbar/>
   </header>
    
   <Slideshow className="slideShow"/>
    <Services />
   <Products />
   <Add />
   <Products />
   </>
  )
}

export default Home