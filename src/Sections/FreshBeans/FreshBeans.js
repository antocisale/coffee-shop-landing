import React from 'react';
import Text2 from '../../Components/Text2/Text2';
import FreshBeansImg from '../../Images/fresh-beans.jpg';
import './FreshBeans.scss';

const FreshBeans = props =>{
    return(
        <section className="freshBeans">
            <Text2 title="FRESH BEANS"
                    paragraph="Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab 
                    illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
                    referencia ="#">
            </Text2>
            <div className="container" style={{ backgroundImage:`url(${FreshBeansImg})`}}>
            </div>      
        </section>
    )
}

export default FreshBeans;