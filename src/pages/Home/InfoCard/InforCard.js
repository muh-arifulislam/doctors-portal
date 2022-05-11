import React from 'react';

const InforCard = ({ img, title, description, backgroundColor }) => {
    return (
        <div style={{ background: backgroundColor }} className="card text-white lg:card-side lg:px-6 lg:py-0 py-7 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InforCard;