import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { useEffect, useState } from 'react';

function App() {
  const [showButton,setShowButton]=useState(false)
  useEffect(()=>{
    const handleScrollButtonVisibility= ()=>{
      window.scrollY>300 ? setShowButton(true) : setShowButton(false)
    }
    window.addEventListener('scroll',handleScrollButtonVisibility)
    
    return ()=>{
      window.removeEventListener('scroll',handleScrollButtonVisibility)
    }
  },[])
  const handleScrollToTop = ()=>{
    window.scrollTo({top:0,behavior:'smooth'})
  } 
  
  return (
  <>
  <Routes>
    <Route path=''  element={<Home/>} />
    <Route path='/login'  element={<Login/>} />
    <Route path='/signup'  element={<Signup/>} />
  </Routes>
  {showButton && <div className="scrollToTopContainer">
    <button onClick={handleScrollToTop} className='scrollBtn'>
      <span className="material-symbols-outlined scrollTopIcon">expand_more</span>
    </button>
  </div>}
  </>
  );
}

export default App;
