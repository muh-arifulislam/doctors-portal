import React from 'react';
import InforCard from '../InfoCard/InforCard';
import infoImage1 from '../../../images/icons/clock.svg';
import infoImage2 from '../../../images/icons/marker.svg';
import infoImage3 from '../../../images/icons/phone.svg';
const InfoCards = () => {
    return (
        <div className='grid gap-6 lg:grid-cols-3 grid-cols-1 lg:mx-5 mx-6'>
            <InforCard
                img={infoImage1}
                title="Opening Hours"
                description="Lorem Ipsum is simply dummy text of the pri"
                backgroundColor="linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)"
            ></InforCard>
            <InforCard
                img={infoImage2}
                title="Visit our location"
                description="Brooklyn, NY 10036, United States"
                backgroundColor="#3A4256"
            ></InforCard>
            <InforCard
                img={infoImage3}
                title="Contact us now"
                description="+000 123 456789"
                backgroundColor="linear-gradient(90deg, #19D3AE -38.67%, #0FCFEC 129.78%)"
            ></InforCard>
        </div>
    );
};

export default InfoCards;