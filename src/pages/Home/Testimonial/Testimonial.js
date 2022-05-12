import React from 'react';

const Testimonial = () => {
    return (
        <div className="card lg:w-96 w-80 bg-base-100 shadow-xl">
            <div className="card-body">
                <p>It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content</p>
                <div className='flex items-center mt-[38px]'>
                    <div className="avatar">
                        <div className="w-14 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                            <img src="https://api.lorem.space/image/face?hash=3174" />
                        </div>
                    </div>
                    <div className='ml-[14px]'>
                        <p className='font-bold'>Wilson Harry</p>
                        <small>California</small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;