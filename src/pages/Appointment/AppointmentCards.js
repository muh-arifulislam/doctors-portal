import React from 'react';
import AppointmentCard from './AppointmentCard';

const AppointmentCards = () => {
    return (
        <section className='mt-4 mb-[137px]'>
            <h3 className='text-xl text-center text-primary'>Available Appointments on April 30, 2022</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-[35px] gap-[50px] lg:mt-[100px] mt-[37px] lg:mx-[48px]'>
                <AppointmentCard></AppointmentCard>
                <AppointmentCard></AppointmentCard>
                <AppointmentCard></AppointmentCard>
                <AppointmentCard></AppointmentCard>
                <AppointmentCard></AppointmentCard>
                <AppointmentCard></AppointmentCard>
            </div>
        </section>
    );
};

export default AppointmentCards;