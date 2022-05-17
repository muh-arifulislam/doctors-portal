import { format } from 'date-fns';
import React, { useRef, useState } from 'react';
const axios = require('axios').default;
const BookingModal = ({ treatment, date, user }) => {
    const { name, slots, _id } = treatment;
    const slotRef = useRef('');
    const [number, setNumber] = useState(null);
    const handleSubmitBooking = (event) => {
        if (number.length > 10) {
            const bookingData = {
                treatmentId: _id,
                treatmentName: name,
                date: format(date, 'PP'),
                slot: slotRef.current.value,
                patientEmail: user.email,
                patientName: user.displayName,
                phone: number

            }
            axios.post('http://localhost:5000/booking', bookingData)
                .then(function (response) {
                    if (response.data.success) {
                        alert(`Appointment is set, ${format(date, 'PP')} at ${slotRef.current.value}`)
                    }
                    else {
                        alert(`You already have an appointment, ${format(date, 'PP')} at ${slotRef.current.value}`)
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
    return (
        <>
            <input type="checkbox" id="my-modal-6" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <form>
                        <h3 className="font-bold text-lg">{name}</h3>
                        <input type="text" value={format(date, 'PPP')} className="input w-full max-w-lg bg-gray-200 mt-[47px]" readOnly />
                        <select ref={slotRef} className="input input-bordered w-full max-w-lg mt-[47px]">
                            {
                                slots && slots.map(slot => <option>{slot}</option>)
                            }
                        </select>
                        <input type="text" value={user?.displayName} className="input input-bordered w-full max-w-lg mt-[23px]" required readOnly />
                        <input type="email" value={user?.email} className="input input-bordered w-full max-w-lg mt-[23px]" required readOnly />
                        <input onBlur={(event) => setNumber(event.target.value)} type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-lg mt-[23px]" required />
                        <div className="modal-action flex flex-col">
                            <label onClick={handleSubmitBooking} htmlFor={number?.length > 10 ? "my-modal-6" : undefined} className="btn btn-accent">SUBMIT</label>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;