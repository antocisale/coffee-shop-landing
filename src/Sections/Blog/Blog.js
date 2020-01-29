import React from 'react';
import './Blog.scss';
import Texts from '../../Components/Texts/Texts';
import Card from '../../Components/Cards/Cards';
import CardsInfo from '../../Components/Cards/CardsInfo';

const Blog = ()=>{
    return(
        <section className="blog-section">
            <Texts title="LATEST FROM BLOG"
                subtitle="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo."
                claseTitle="section-titles black"
                claseSubtitle="section-subtitles gray">
            </Texts>
            <div className="blog-gallery">
                {CardsInfo.map(card =>{
                    return <Card CardImg={card.image} ImgAlt={card.alt} CardTitle={card.title} 
                        CardDate={card.date} CardInfo={card.info}> </Card>
                }) 
                }
            </div>
        </section>
    )
}
export default Blog;