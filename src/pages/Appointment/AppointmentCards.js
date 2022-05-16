import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';
const AppointmentCards = ({ date }) => {
    const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({});
    useEffect(() => {
        fetch('http://localhost:5000/service')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    console.log(treatment)
    return (
        <section className='lg:mt-4 mt-[57px] mb-[137px]'>
            <h3 className='text-xl text-center text-primary'>Available Appointments on {
                format(date, 'PPP')
            }</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-[35px] gap-[50px] lg:mt-[100px] mt-[37px] lg:mx-[48px]'>
                {
                    services.map(service => <AppointmentCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </AppointmentCard>)
                }
            </div>
            <BookingModal treatment={treatment} date={date}></BookingModal>
        </section>
    );
};

export default AppointmentCards;