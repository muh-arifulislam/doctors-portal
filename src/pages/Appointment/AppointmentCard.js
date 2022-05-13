import React from 'react';

const AppointmentCard = ({ children }) => {
    return (
        <div className="card w-[95%] mx-auto shadow-xl bg-white text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">Teeth Orthodontics</h2>
                <p className='mt-[9px]'>8:00 AM - 9:00 AM</p>
                <p className='mt-[12px]'>10 SPACES AVAILABLE</p>
                <div className="mt-[15px]card-actions justify-end">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;