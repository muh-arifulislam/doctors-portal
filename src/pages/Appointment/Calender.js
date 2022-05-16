import React, { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import './Calender.css';
const Calender = ({ date, setDate }) => {
    return (
        <DayPicker
            mode="single"
            required
            selected={date}
            onSelect={setDate}
        />
    );

};

export default Calender;