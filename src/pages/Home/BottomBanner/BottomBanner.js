import React from 'react';
import bannerImage from '../../../images/treatment.png';
const BottomBanner = () => {
    return (
        <div className="hero min-h-screen lg:mt-40 mt-14">
            <div className="hero-content flex-col lg:flex-row lg:mx-40 mx-7 lg:gap-20 gap-9">
                <img width={458} height={576} className="rounded-lg" src={bannerImage} alt="" />
                <div className=''>
                    <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <button className="btn btn-primary text-white">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default BottomBanner;