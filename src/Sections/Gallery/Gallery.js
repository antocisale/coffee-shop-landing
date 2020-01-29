import React from 'react';
import './Gallery.scss';
import image1 from '../../Images/gallery_coffee_image_1.jpg';
import image2 from '../../Images/gallery_coffee_image_2.jpg';
import image3 from '../../Images/gallery_coffee_image_3.jpg';

const Gallery = () => {
    const imagenes = [{
            foto: image1,
            alt: "coffee macarons"
        },
        {
            foto: image2,
            alt: "coffee beans in a cup"
        },
        {
            foto: image3,
            alt: "coffee beans"
        },
    ];
    return ( <
        section className = "gallery" > {
            imagenes.map(imagen => {
                return <img src = {
                    imagen.foto
                }
                alt = {
                    imagen.alt
                }
                />
            })
        } <
        /section>
    )
}

export default Gallery;