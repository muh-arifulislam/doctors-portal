import React from 'react';

const AppointmentCard = () => {
    return (
        <div class="card w-[95%] mx-auto shadow-xl bg-white text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title text-primary">Teeth Orthodontics</h2>
                <p className='mt-[9px]'>8:00 AM - 9:00 AM</p>
                <p className='mt-[12px]'>10 SPACES AVAILABLE</p>
                <div class="mt-[15px]card-actions justify-end">
                    <button class="btn btn-primary text-white">Book Appointment</button>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;