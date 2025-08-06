import React, { useEffect, useState } from 'react'
import './Navbar.css';
import Logo from '../../assets/logo.png';
import Menu from '../../assets/menu-icon.png'
import { Link } from 'react-scroll';
import { MdMenu } from "react-icons/md";

const Navbar = () => {
  const[Top,setTop] = useState(false);
  const[Menu,setMenu] = useState(false);

  const ToggleMenu = ()=>
  {
      Menu ? setMenu(false) : setMenu(true)
  }
  useEffect(()=>
  {
      window.addEventListener("scroll",()=>{
        window.scrollY > 50 ? setTop(true) : setTop(false);
      })
  },[]);
  return (
    <nav className={`${Top ? 'dark-nav' : ' '}`}>
        <img src={Logo} alt="Logo" />
        <div className={`${Menu ? 'tags' : 'hide'}`}>
            <Link to='home' offset={0} smooth={true} duration={500}><a href="#">Home</a></Link>
            <Link to='program'offset={-70}  smooth={true} duration={500}>Program</Link>
            <Link to='about' offset={-150} smooth={true} duration={500}>About us</Link>
            <Link to='campus' offset={0} smooth={true} duration={500}>Campus</Link>
            <Link to='testimonials' offset={-90}  smooth={true} duration={500}>Testimonials</Link>
            <Link to='contactt' offset={-30}  smooth={true} duration={500}  id="contact">Contact us</Link>
        </div>
        <MdMenu  alt="menu" className='menu-icon' onClick={()=>ToggleMenu()}/>
    </nav>
  )
}

export default Navbar