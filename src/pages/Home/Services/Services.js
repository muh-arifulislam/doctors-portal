import React from 'react';
import Service from '../Service/Service';
import serviceImage1 from '../../../images/fluoride.png';
import serviceImage2 from '../../../images/cavity.png';
import serviceImage3 from '../../../images/whitening.png';
const Services = () => {
    const services = [
        {
            id: 1,
            img: serviceImage1,
            name: 'Fluoride Treatment',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 2,
            img: serviceImage2,
            name: 'Cavity Filling',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        },
        {
            id: 3,
            img: serviceImage3,
            name: 'Teeth Whitening',
            description: 'Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the'
        }
    ]
    return (
        <section className='lg:mt-32 mt-20'>
            <p className='text-sm text-center'>OUR SERVICE</p>
            <h2 className='text-4xl text-center lg:mb-16 mb-12'>Services We Provide</h2>
            <div className='grid justify-items-center lg:grid-cols-3 grid-cols-1 gap-9'>
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </div>
        </section>
    );
};

export default Services;