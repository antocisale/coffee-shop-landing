import React from 'react';
import './Contact.scss';
import backImage from '../../Images/contact-background.jpg'

const Contact= ()=>{
    let horarios = [
        {
        dia: "WEEKDAYS",
        hora:"08PM - 12 AM"
        }
]
    return(
        <section>
            <div style={{
                backgroundImage: `url(${backImage})`
            }}>
                <h2 className="section-titles white">COME ON IN!</h2>

                <h4>WEEKDAYS</h4>
                <p>08PM - 12 AM</p>
                <h4>WEEKENDS</h4>
                <p>08PM - 12 AM</p>
            </div>
            <div>

            </div>
        </section>
)
}

export default Contact;