import React from 'react';

const Contact = () => {
    return (
        <div className='bg-gray-900 p-14 grid lg:grid-cols-3 gap-5 mt-20'>
            <div>
                <div>

                </div>
                <div>
                    <small className='text-white'>We are open monday-friday</small>
                    <h1 className='font-semibold text-white text-2xl'>7:00 am - 9:00 pm</h1>
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <small className='text-white'>Have a question?</small>
                    <h1 className='font-semibold text-white text-2xl'>+2546 251 2658</h1>
                </div>
            </div>
            <div>
                <div></div>
                <div>
                    <small className='text-white'>Need a repair? our address</small>
                    <h1 className='font-semibold text-white text-2xl'>Liza Street, New York</h1>
                </div>
            </div>

        </div>
    );
};

export default Contact;