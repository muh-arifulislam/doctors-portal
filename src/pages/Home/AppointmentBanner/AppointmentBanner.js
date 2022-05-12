import React from 'react';
import doctor from '../../../images/doctor-small.png';
import appointment from '../../../images/appointment.png';
const AppointmentBanner = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex items-center lg:mt-[272px] mt-[70px] lg:px-[136px] px-[28px]'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-100px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 lg:my-0 my-[71px]'>
                <h3 className='text-xl text-primary font-bold'>Appointment</h3>
                <h2 className='text-3xl text-white mt-[14px]'>Make an Appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores a impedit, quasi culpa ipsa exercitationem voluptatem eos earum at eum dolor explicabo, cumque, modi dolores nostrum optio blanditiis nulla! Rem.</p>
                <button className='btn btn-primary text-white mt-[22px]'>GET STARTED</button>
            </div>
        </section>
    );
};

export default AppointmentBanner;