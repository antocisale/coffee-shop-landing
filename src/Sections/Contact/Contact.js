import React from 'react';
import './Contact.scss';
import backImage from '../../Images/contact-background.jpg'

const Contact= ()=>{
    let horarios = [
        {
            dia: "WEEKDAYS",
            hora:"08PM - 12 AM"
        },
        {   
            dia: "WEEKENDS",
            hora: "12PM - 02 AM"
        }
    ];
    let contacto = [
        {
            nombre: "PHONE",
            dato: "+(000) 111 222 333",
        },
        {
            nombre: "MAIL",
            dato: "address@mail.com",
        },
        {
            nombre: "ADDRESS",
            dato: `543 TN, doula street
                    NY, New York`
        },
    ]
    return(
        <footer className="contact">
            <div style={{
                backgroundImage: `url(${backImage})`
            }} className="container contact-hours">
                <h2 className="section-titles white contact-title">COME ON IN!</h2>
                {horarios.map(horario =>{
                    return <div><h4 className="contact-data">{horario.dia}</h4><p>{horario.hora}</p></div>
                })}
            </div>
            <div className="container contact-hours contact-info">
                <h2 className="section-titles white contact-title">CONTACT</h2>
                {contacto.map(contacto =>{
                    return <div><h4 className="contact-data">{contacto.nombre}</h4><p>{contacto.dato}</p></div>
                })}
            </div>
        </footer>
)
}

export default Contact;