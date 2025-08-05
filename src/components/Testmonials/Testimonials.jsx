import React, { useState } from 'react';
import './Testimonial.css';
import next_icon from '../../assets/next-icon.png';
import back_icon from '../../assets/back-icon.png';
import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import user3 from '../../assets/user-3.png';
import user4 from '../../assets/user-4.png';
import { Link } from 'react-scroll';

const testimonialsData = [
  {
    name: 'Emily Williams',
    location: 'Edusity, USA',
    image: user1,
    text: "Choosing to pursue my degree at Edusity was one of the best decisions I've ever made."
  },
  {
    name: 'William Jackson',
    location: 'Edusity, USA',
    image: user2,
    text: "The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations."
  },
  {
    name: 'Sophia Brown',
    location: 'Edusity, USA',
    image: user3,
    text: "Edusity has provided me with countless opportunities to learn, grow, and connect with peers from around the world."
  },
  {
    name: 'James Smith',
    location: 'Edusity, USA',
    image: user4,
    text: "The professors at Edusity genuinely care about student success, and the facilities are top-notch."
  }
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const cardsPerView = 2;

  const handleNext = () => {
    if (index < testimonialsData.length - cardsPerView) {
      setIndex(index + 1);
    } else {
      // Loop back only at end
      setIndex(0);
    }
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      // Go to last possible start index
      setIndex(testimonialsData.length - cardsPerView);
    }
  };

  return (
    <Link name='testimonials'>
    <section className="testimonials">
        <p>TESTIMONIALS</p>
        <h2>What Student Says</h2>
      <div className="testimonial-wrapper">
        <button className="arrow-btn" onClick={handlePrev}>
          <img src={back_icon} alt="Previous" />
        </button>

        <div className="slider-container">
          <ul
            className="testimonial-list"
            style={{
              transform: `translateX(-${index * (100 / cardsPerView)}%)`,
              transition: 'transform 0.6s ease-in-out'
            }}
          >
            {testimonialsData.map((t, i) => (
              <li key={i} className="testimonial-card">
                <img src={t.image} alt={t.name} className="testimonial-img" />
                <h3>{t.name}</h3>
                <p className="location">{t.location}</p>
                <p className="testimonial-text">{t.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <button className="arrow-btn" onClick={handleNext}>
          <img src={next_icon} alt="Next" />
        </button>
      </div>
    </section></Link>
  );
};

export default Testimonials;
