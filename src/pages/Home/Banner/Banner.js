import React from 'react';
import chair from '../../../images/chair.png';
const Banner = () => {
    return (
        <div className="hero min-h-screen">
            <div className="hero-content lg:bg-hero-banner md:bg-hero-banner bg-none h-full flex-col lg:flex-row-reverse lg:mx-12 mx-6 px-0 gap-y-16">
                <img width={594} height={355} src={chair} alt='' />
                <div>
                    <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary bg-gradient-to-r text-white from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;