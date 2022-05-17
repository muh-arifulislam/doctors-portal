import React from 'react';

const TableRow = ({ data, index }) => {
    const { patientName, treatmentName, slot } = data;
    return (
        <tr className={index % 2 !== 0 ? "hover" : undefined}>
            <th>{index + 1}</th>
            <td>{patientName}</td>
            <td>{treatmentName}</td>
            <td>{slot}</td>
        </tr>
    );
};

export default TableRow;