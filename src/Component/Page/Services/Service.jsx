import React from 'react';
import { FaArrowRight } from "react-icons/fa";

const Service = ({ ser }) => {
    const { title, img, price } = ser

    return (
        <div>
            <div className="card bg-base-100  shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={img}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="font-bold text-2xl">{title}</h2>
                    <p className='text-orange-500 font-semibold'>Price : ${price}</p>
                    <div className="card-actions ">
                        <button className="btn btn-circle ">
                            <FaArrowRight className='text-orange-600'></FaArrowRight>
                        </button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default Service;