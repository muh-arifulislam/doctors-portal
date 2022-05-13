import React, { createContext } from 'react';
import Calender from './Calender';
import image from '../../images/chair.png';
import AppointmentCards from './AppointmentCards';
const Appointment = () => {
    return (
        <>
            <section className='appointment-section lg:mx-[38px] mx-[27px] lg:bg-chair-background bg:none bg-no-repeat bg-cover bg-center'>
                <div className='appointment-heading flex justify-center items-center lg:flex-row flex-col lg:gap-[121px] gap-[64px] lg:py-[242px]'>
                    <div className='lg:w-auto w-[100%] lg:order-1 order-2'>
                        <Calender></Calender>
                    </div>
                    <div className='lg:order-2 order-1'>
                        <img className='lg:w-[100%] w-[95%] lg:max-w-[594px] max-w-[374px] mx-auto' src={image} alt="" />
                    </div>
                </div>
            </section>
            <AppointmentCards><label for="my-modal-6" class="btn btn-primary text-white modal-button">Book Appointment</label></AppointmentCards>
            {/* Modal  */}
            <input type="checkbox" id="my-modal-6" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Cavity Protection</h3>
                    <input type="text" placeholder="Type here" class="input w-full max-w-lg bg-gray-200 mt-[47px]" />
                    <input type="text" placeholder="Type here" class="input w-full max-w-lg bg-gray-200 mt-[12px]" />
                    <input type="text" placeholder="Full Name" class="input input-bordered w-full max-w-lg mt-[23px]" required />
                    <input type="number" placeholder="Phone Number" class="input input-bordered w-full max-w-lg mt-[23px]" required />
                    <input type="email" placeholder="Email" class="input input-bordered w-full max-w-lg mt-[23px]" required />
                    <div class="modal-action flex flex-col">
                        <label for="my-modal-6" class="btn">SUBMIT</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Appointment;