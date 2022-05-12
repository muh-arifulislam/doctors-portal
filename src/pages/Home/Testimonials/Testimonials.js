import React from 'react';
import quote from '../../../images/icons/quote.svg';
import Testimonial from '../Testimonial/Testimonial';
const Testimonials = () => {
    return (
        <section className='lg:mt-[84px] mt-[76px]'>
            <div className='flex justify-between lg:mx-[56px] mx-[23px]'>
                <div>
                    <h3 className='text-xl font-bold text-primary'>Testimonial</h3>
                    <h2 className='text-3xl'>What our Patients Says</h2>
                </div>
                <img src={quote} className="lg:w-[192px] w-[98px]" alt="" />
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 justify-items-center lg:gap-[50px] gap-[45px] lg:mx-[85px] mx-[23px] lg:mt-[88px] mt-[75px]'>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
                <Testimonial></Testimonial>
            </div>
        </section>
    );
};

export default Testimonials;