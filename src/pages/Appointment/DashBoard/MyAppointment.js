import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Calender from '../Calender';
import { useQuery } from 'react-query';
import Loading from '../../shared/Loading/Loading';
import TableBody from './TableBody';
const MyAppointment = () => {
    const [user, loading] = useAuthState(auth);
    const [date, setDate] = useState(new Date());
    const formattedDate = format(date, 'PP');
    const [myBooking, setMyBooking] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/booking/bookingId?date=${formattedDate}&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyBooking(data))
    }, [formattedDate])
    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:mx-[55px] mx-[23px] lg:mt-[50px] mt-[25px]'>
            <div className='flex justify-between items-center'>
                <h2 className='lg:text-3xl text-xl'>My Appointment</h2>
                <div className="dropdown dropdown-end">
                    <label tabIndex="0" className="btn btn-outline m-1">{formattedDate}</label>
                    <div tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box ">
                        <Calender date={date} setDate={setDate}></Calender>
                    </div>
                </div>
            </div>
            <div className="overflow-x-auto lg:mt-[19px] mt-[27px]">
                <table className="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Service</th>
                            <th>Time</th>
                        </tr>
                    </thead>
                    <TableBody myBooking={myBooking}></TableBody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointment;