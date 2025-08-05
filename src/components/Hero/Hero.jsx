import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-scroll'

function Hero() {
  return (
    <>
    <Link name='home'>
    <div className="container">
        <div className="content">
        <h1>We Ensure better education <br /> for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and <br /> experiences needed to excel in the dynamic field of education</p>
        <button>Explore more <img src={dark_arrow} alt="Arrow Image" /></button>
        </div>
    <div className="overly"></div>
    </div></Link>
    </>
  )
}

export default Hero