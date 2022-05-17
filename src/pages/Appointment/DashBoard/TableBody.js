import React from 'react';
import TableRow from './TableRow';

const TableBody = ({ myBooking }) => {
    return (
        <tbody>
            {/* <!-- row 1 --> */}
            {
                myBooking.map(bookingItem => <TableRow index={myBooking.indexOf(bookingItem)} data={bookingItem} key={bookingItem._id}></TableRow>)
            }
        </tbody>
    );
};

export default TableBody;