import React from 'react'
import './Program.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_3 from '../../assets/program-3.png'
import icon_1 from '../../assets/program-icon-1.png'
import icon_2 from '../../assets/program-icon-2.png'
import icon_3 from '../../assets/program-icon-3.png'
import { Link } from 'react-scroll'



const Program = () => {
  return (
    <>
    <Link name='program'>
      <div className="main">
        <p>Our program</p>
        <h2>What We Offer</h2>
        <div className="card-container">
            <div className="card">
                <img src={program_1} alt="" />
                <div className="overlay">
                  <img src={icon_1} alt="" />
                </div>
            </div>
                        <div className="card">
                <img src={program_2} alt="" />
                                <div className="overlay">
                  <img src={icon_2} alt="" />
                </div>
            </div>
                       
                        <div className="card">
                <img src={program_3} alt="" />
                                <div className="overlay">
                  <img src={icon_3} alt="" />
                </div>
            </div>
        </div>
      </div></Link>
    </>
  )
}

export default Program