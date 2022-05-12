import React from 'react';
import './Home.css';
import Banner from '../Banner/Banner';
import InfoCards from '../InfoCards/InfoCards';
import Services from '../Services/Services';
import BottomBanner from '../BottomBanner/BottomBanner';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
const Home = () => {
    return (
        <>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <BottomBanner></BottomBanner>
            <AppointmentBanner></AppointmentBanner>
        </>
    );
};

export default Home;