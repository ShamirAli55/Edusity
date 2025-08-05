import React from 'react'
import './About.css'
import Title from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import { Link } from 'react-scroll'

function About() {
  return (
    <>
    <Link name='about'>
        <main>
            <div className="about-section">
                <div className="video-sec">
                    <img src={Title} alt="" />
                    <img src={play_icon} id='icon' alt="" />
                </div>
                <div className="ab-right">
                    <h3>ABOUT UNIVERSITY</h3>
                    <h2>Nurturing Tomorrow's <br /> Leaders Today</h2>
                    <p>Embark on a transformative educational journey with our university's <br /> comprehensive education programs. Our cutting-edge curriculum is <br /> designed to empower students with the knowledge, skills, and <br /> experiences needed to excel in the dynamic field of education.</p>
                    <p>With a focus on innovation, hands-on learning, and personalized <br /> mentorship, our programs prepare aspiring educators to make a <br /> meaningful impact in classrooms, schools, and communities.</p>
                    <p>Whether you aspire to become a teacher, administrator, counselor, or <br /> educational leader, our diverse range of programs offers the perfect <br /> pathway to achieve your goals and unlock your full potential in shaping <br /> the future of education.
                    Gallery</p>
                </div>
            </div>
        </main></Link>
    </> 
)
}

export default About