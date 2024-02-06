import React, { useState, useEffect, useRef } from 'react';
import { RESTAURANT_FOOD_URL } from '../config';

const Carousel = ({ food }) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const carouselRef = useRef(null);
    const Items = food?.data?.cards[0]?.card?.card?.imageGridCards?.info;

    const handlePrevClick = () => {
        setScrollPosition((prevPosition) => prevPosition - 300);
    };

    const handleNextClick = () => {
        setScrollPosition((prevPosition) => prevPosition + 300);
    };

    useEffect(() => {
        if (carouselRef.current) {
            carouselRef.current.scrollTo({
                left: scrollPosition,
                behavior: 'smooth',
            });
        }
    }, [scrollPosition]);

    return (
        <>
            <div className="container mx-auto overflow-hidden relative">
                <h1 className='pt-11 text-xl font-bold lg:p-10 lg:text-2xl'>What's on your mind?</h1>
                <div
                    ref={carouselRef}
                    className="flex items-center space-x-4 overflow-x-hidden overflow-y-hidden p-4"
                    style={{ scrollSnapType: 'x mandatory' }}
                >
                    {/* Food cards will go here */}
                    {Items.map((item, index) => (
                        <div key={index} className="flex-shrink-0 w-40 h-40 rounded-lg overflow-hidden">
                            <img
                                src={RESTAURANT_FOOD_URL + item.imageId}
                                alt={item.text}
                                className="w-full h-full object-cover rounded-lg"
                            />
                        </div>
                    ))}
                </div>
                <button
                    onClick={handlePrevClick}
                    className="prev-arrow absolute top-5 mr-2 right-0 transform translate-y-1/2 -translate-x-full bg-gray-300 text-white px-4 py-2 rounded-full"
                >
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <button
                    onClick={handleNextClick}
                    className="next-arrow absolute top-5 right-0 transform translate-y-1/2 bg-gray-300 text-white px-4 py-2 rounded-full"
                >
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>
        </>
    );
};

export default Carousel;

