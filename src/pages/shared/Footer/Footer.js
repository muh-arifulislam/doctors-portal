import React from 'react';

const Footer = () => {
    return (
        <footer className='bg-footer-background bg-center lg:p-[70px] p-[36px]'>
            <div className="footer text-neutral-content justify-between">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <p>New York - 101010 Hudson</p>
                </div>
            </div>
            <div>
                <p className='text-center text-black lg:mt-[120px] mt-[60px]'>Copyright © MD. ARIFUL ISLAM | 2022 All Rights Reserved</p>

            </div>
        </footer>
    );
};

export default Footer;