import React, { useEffect, useState } from 'react';
import Service from './Service';

const Services = () => {
    const [services, setservices] = useState([])
    useEffect(() => {
        fetch('carData.json')
            .then(res => res.json())
            .then(data => {
                setservices(data);
            })
    }, [])
    return (
        <div className='mt-5 space-y-4 text-center'>
            <h1 className='text-orange-700 font-bold text-xl'>Service</h1>
            <h1 className='text-5xl font-extrabold'>Our Service Area</h1>
            <p className=''>The majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. </p>
            <div className='grid lg:grid-cols-3 gap-5'>
                {
                    services.map(copy => <Service key={copy._id} ser={copy}></Service>)
                }
            </div>
            <button className="btn btn-outline btn-secondary text-center">More Services</button>
        </div>
    );
};

export default Services;