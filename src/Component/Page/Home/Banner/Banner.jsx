import React from 'react';
import ban1 from "../../../../assets/images/banner/1.jpg"
import ban2 from "../../../../assets/images/banner/2.jpg"
import ban3 from "../../../../assets/images/banner/3.jpg"
import ban4 from "../../../../assets/images/banner/4.jpg"

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img src={ban1} className="w-full rounded-xl" />
                <div className="absolute rounded-xl  left-0 top-0 flex h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12  w-1/3'>
                        <h1 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='gap-4 flex'>
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide4" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide2" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img 
                    src={ban2}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12  w-1/2'>
                        <h1 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>Our experienced team carefully inspects every part of your car and provides the necessary care.</p>
                        <div className='gap-4 flex'>
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide1" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide3" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img 
                    src={ban3}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12  w-1/2'>
                        <h1 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>Get your car serviced with us and enjoy exclusive discounts and offers.</p>
                        <div className='gap-4 flex'>
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide2" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide4" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                    src={ban4}
                    className="w-full rounded-xl" />
                <div className="absolute rounded-xl left-0 top-0 flex h-full items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className='text-white space-y-7 pl-12  w-1/2'>
                        <h1 className='text-6xl  font-bold'>Affordable Price For Car Servicing</h1>
                        <p>We provide top-quality car servicing at affordable rates, making your car feel as good as new.</p>
                        <div className='gap-4 flex'>
                            <button className="btn btn-active btn-secondary">Discover More</button>
                            <button className="btn btn-outline btn-secondary">Latest Project</button>
                        </div>
                    </div>
                    <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end">
                        <a href="#slide3" className="btn btn-circle mr-5">❮</a>
                        <a href="#slide1" className="btn btn-circle mr-5">❯</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Banner;