import React from 'react';
import './OurStory.scss';
import Texts from '../../Components/Texts/Texts';

const OurStory = props =>{
    return(
        <section className="ourStory">
            <Texts title="OUR STORY"
                    subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
                    claseTitle="section-titles white story-title"
                    claseSubtitle="section-subtitles white story-subtitle">
            </Texts>
            <img src={props.image} alt={props.altImg} className="story-image"/>
        </section>
    )
}


export default OurStory;