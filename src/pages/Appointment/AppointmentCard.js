import React from 'react';

const AppointmentCard = ({ setTreatment, service }) => {
    const { name, slots } = service;
    const treatmentStartTime = slots[0].split(' - ')[0];
    const treatmentEndTime = slots[slots.length - 1].split(' - ')[1];
    const time = `${treatmentStartTime} - ${treatmentEndTime}`;
    return (
        <div className="card w-[95%] mx-auto shadow-xl bg-white text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title text-primary">{name}</h2>
                <p className='mt-[9px]'>{time}</p>
                <p className='mt-[12px]'>{slots.length} SPACES AVAILABLE</p>
                <div className="mt-[15px]card-actions justify-end">
                    <label onClick={() => setTreatment(service)} htmlFor="my-modal-6" className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white modal-button" disabled={`${slots.length ? "" : "disabled"}`}>Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentCard;