import React from 'react';

const AppointmentCard = ({ setTreatment, service }) => {
    const { name, slots } = service;
    let time;
    if (slots.length === 10) {
        time = "8:00 AM - 01:00 PM";
    }
    else if (slots.length === 9) {
        time = "8:30 AM - 01:00 PM";
    }
    else if (slots.length === 8) {
        time = "9:00 AM - 01:00 PM";
    }
    else if (slots.length === 7) {
        time = "9:30 AM - 01:00 PM";
    }
    else if (slots.length === 6) {
        time = "10:00 AM - 01:00 PM";
    }
    else if (slots.length === 5) {
        time = "10:30 AM - 01:00 PM";
    }
    else if (slots.length === 4) {
        time = "11:00 AM - 01:00 PM";
    }
    else if (slots.length === 3) {
        time = "11:30 AM - 01:00 PM";
    }
    else if (slots.length === 2) {
        time = "12:00 PM - 01:00 PM";
    }
    else if (slots.length === 1) {
        time = "12:30 PM - 01:00 PM";
    }
    else {
        time = "0:00 AM - 00:00 PM";
    }
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