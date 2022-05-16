import { format } from 'date-fns';
import React from 'react';

const BookingModal = ({ treatment, date }) => {
    const { name, slots } = treatment;
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{name}</h3>
                    <input type="text" value={format(date, 'PPP')} className="input w-full max-w-lg bg-gray-200 mt-[47px]" readOnly />
                    <input type="text" value={slots && slots[0]} className="input w-full max-w-lg bg-gray-200 mt-[12px]" readOnly />
                    <input type="text" placeholder="Full Name" className="input input-bordered w-full max-w-lg mt-[23px]" required />
                    <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-lg mt-[23px]" required />
                    <input type="email" placeholder="Email" className="input input-bordered w-full max-w-lg mt-[23px]" required />
                    <div className="modal-action flex flex-col">
                        <label htmlFor="my-modal-6" className="btn btn-accent">SUBMIT</label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BookingModal;