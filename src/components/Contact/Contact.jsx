import React from 'react'
import './Contact.css'
import Mail from '../../assets/mail-icon.png'
import Location from '../../assets/location-icon.png'
import Phone from '../../assets/phone-icon.png'
import Message from '../../assets/msg-icon.png'
import white_arrow from '../../assets/white-arrow.png'
import { Link } from 'react-scroll'

function Contact() {

     const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "d8e041f4-cc48-4af0-9a4c-22541d9f74b0");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <><Link name='contactt'>
        <div id="main">
            <p>Contact Us</p>
            <h2>Get in Touch</h2>
            <div className="containr">
                <div className="left">
                    <div className="message">
                        <h3>Send us a message</h3>
                    <img src={Message} alt="Message" />
                    </div>
                    <p>Feel free to reach out through contact form or find our <br /> contact information below. Your feedback, questions, and <br /> suggestions are important to us as we strive to provide <br /> exceptional service to our university community.</p>
                    <div className="info">
                        <img src={Mail} alt="Mail" />
                        <p>Contact@GreatStack.dev</p>
                    </div>
                    <div className="info">
                        <img src={Phone} alt="Phone" />
                        <p>+1 123-456-7890</p>
                    </div>
                    <div className="info">
                        <img src={Location} alt="Location" id='location'/>
                        <p>77 Massachusetts Ave, Cambridge <br /> MA 02139, United States</p>
                    </div>
                </div>
                <div className="right">
                    <form  onSubmit={onSubmit}>
                        <label htmlFor="username">Your name</label>
                        <input type="text" name="username" placeholder='Enter your name' required/>

                        <label htmlFor="number">Phone Number</label>
                        <input type="tel" name="number" placeholder='Enter your Phone number '/>

                        <label htmlFor="mail">Your Email</label>
                        <input type="email" name="mail" placeholder='Enter your email id' required/>

                        <label htmlFor="message">Write your message here</label>
                        <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>

                        <button type="submit" className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
                    </form>
                </div>                
            </div>
            <span id='status'>{result}</span>
        </div></Link>
    </>
  )
}

export default Contact