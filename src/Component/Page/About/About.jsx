import React from 'react';
import person from '../../../../src/assets/images/about_us/person.jpg'
import parts from '../../../../src/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero  min-h-screen">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 rounded-lg shadow-2xl absolute top-1/2 border-8 border-white right-5" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h1 className='text-orange-700 font-bold text-3xl'>About Us</h1>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="py-6">
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <p>
                        the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
                    </p>
                    <button className="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default About;