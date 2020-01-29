import React from 'react';
import './Gallery.scss';
import image1 from '../../Images/gallery_coffee_image_1.jpg';
import image2 from '../../Images/gallery_coffee_image_2.jpg';
import image3 from '../../Images/gallery_coffee_image_3.jpg';

const Gallery = () =>{
    const imagenes=[image1,image2,image3];
    return(
        <section className="gallery">
        {
            imagenes.map(imagen =>{
                return <img src={imagen}/>
            })
        }
        </section>
    )
}

export default Gallery;