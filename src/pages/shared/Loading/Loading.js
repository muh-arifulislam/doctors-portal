import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center lg:my-[100px] my-[50px]'>
            <progress className="progress w-56"></progress>
        </div>
    );
};

export default Loading;