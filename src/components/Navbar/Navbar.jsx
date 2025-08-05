import React, { useEffect, useState } from 'react'
import './Navbar.css';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  const[Top,setTop] = useState(false);
   
  useEffect(()=>
  {
      window.addEventListener("scroll",()=>{
        window.scrollY > 50 ? setTop(true) : setTop(false);
      })
  },[]);
  
  return (
    <nav className={`${Top ? 'dark-nav' : ' '}`}>
        <img src={Logo} alt="Logo" />
        <div className="tags">
            <a href="#">Home</a>
            <a href="#">Program</a>
            <a href="#">About us</a>
            <a href="#">Campus</a>
            <a href="#">Testimonials</a>
            <a href="#" id="contact">Contact us</a>
        </div>
    </nav>
  )
}

export default Navbar