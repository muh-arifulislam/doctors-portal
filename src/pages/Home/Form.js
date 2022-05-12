import React from 'react';
import { useForm } from "react-hook-form";
const Form = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className=' bg-form-background lg:mt-[149px] mt-[129px] bg-slate-400 lg:py-[65px] py-[81px]'>
            <h3 className='text-xl font-bold text-center text-primary'>Contact Us</h3>
            <h2 className='text-3xl text-center text-white'>Stay Connected with Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center mt-[41px]">
                <input {...register("firstName")} type="text" placeholder="Email Address" className="input lg:w-full w-[90%] max-w-sm" />
                <input {...register("firstName")} type="text" placeholder="Subject" className="input lg:w-full w-[90%] max-w-sm mt-[19px]" />
                <textarea {...register("firstName")} className="textarea lg:w-full w-[90%] max-w-sm mt-[19px]" placeholder="Your message"></textarea>
                <input className='btn btn-primary mt-[35px] px-[35px]' type="submit" />
            </form>
        </section>
    );
};

export default Form;