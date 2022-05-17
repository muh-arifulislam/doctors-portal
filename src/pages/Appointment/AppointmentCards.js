import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import AppointmentCard from './AppointmentCard';
import BookingModal from './BookingModal';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useQuery } from 'react-query';
import Loading from '../shared/Loading/Loading';
const AppointmentCards = ({ date }) => {
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');
    const { isLoading, error, data } = useQuery(['available', formattedDate], () =>
        fetch(`http://localhost:5000/available?date=${formattedDate}`).then(res =>
            res.json()
        )
    )
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState({});
    // useEffect(() => {
    //     fetch(`http://localhost:5000/available?date=${formattedDate}`)
    //         .then(res => res.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <section className='lg:mt-4 mt-[57px] mb-[137px]'>
            <h3 className='text-xl text-center text-primary'>Available Appointments on {
                format(date, 'PPP')
            }</h3>
            <div className='grid lg:grid-cols-3 grid-cols-1 lg:gap-[35px] gap-[50px] lg:mt-[100px] mt-[37px] lg:mx-[48px]'>
                {
                    data.map(service => <AppointmentCard
                        key={service._id}
                        service={service}
                        setTreatment={setTreatment}
                    >
                    </AppointmentCard>)
                }
            </div>
            <BookingModal treatment={treatment} setTreatment={setTreatment} date={date} user={user}></BookingModal>
        </section>
    );
};

export default AppointmentCards;