import React from 'react';
import './Home.css';
import image1 from '../../../images/chair.png';
const Home = () => {
    return (
        <>
            <section>
                <div class="hero min-h-screen top-banner">
                    <div class="hero-content flex-col lg:flex-row-reverse lg:px-12 px-6 gap-y-16">
                        <img width={594} height={355} src={image1} alt='' />
                        <div>
                            <h1 class="text-5xl font-bold">Your New Smile Starts Here</h1>
                            <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                            <button class="btn btn-primary">Get Started</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;