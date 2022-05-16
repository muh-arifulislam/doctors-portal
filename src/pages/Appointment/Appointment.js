import React, { createContext, useState } from 'react';
import Calender from './Calender';
import image from '../../images/chair.png';
import AppointmentCards from './AppointmentCards';
const Appointment = () => {
    const [date, setDate] = useState(new Date());
    return (
        <>
            <section className='appointment-section lg:mx-[38px] mx-[27px] lg:bg-chair-background bg:none bg-no-repeat bg-cover bg-center'>
                <div className='appointment-heading flex justify-center items-center lg:flex-row flex-col lg:gap-[121px] gap-[64px] lg:py-[242px]'>
                    <div className='lg:w-auto w-[100%] lg:order-1 order-2 shadow-lg bg-white rounded'>
                        <Calender date={date} setDate={setDate}></Calender>
                    </div>
                    <div className='lg:order-2 order-1'>
                        <img className='lg:w-[100%] w-[95%] lg:max-w-[594px] max-w-[374px] mx-auto' src={image} alt="" />
                    </div>
                </div>
            </section>
            <AppointmentCards date={date} setDate={setDate}>
            </AppointmentCards>
        </>
    );
};

export default Appointment;