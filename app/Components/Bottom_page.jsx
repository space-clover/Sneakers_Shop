"use client"
import React from 'react'
import Shoes_card from './Shoes_card'
import Image from 'next/image'
import { useState } from 'react';
import { IconName, TfiArrowCircleRight, TfiFaceSmile } from "react-icons/tfi";
import DraggableSlider from './Slider_page';
import { motion } from 'framer-motion';

const items = [
    {
        Name: 'CACTUS',
        image: '/./Sneaker_one.jpeg', 
        price: "$240 USD",
        discount:"$144 USD"
    },
    {
        Name: 'THE EYE',
        image: '/./Sneaker_two.jpeg', 
        price: "$240 USD",
        discount:"$144 USD"
    },
    {
        Name: 'DURAN',
        image: '/./Sneaker_three.jpeg', 
        price: "$240 USD",
        discount:"$144 USD"
    },
    {
        Name: 'THE CODE',
        image: '/./Sneaker_foru.jpeg', 
        price: "$240 USD",
        discount:"$144 USD"
    },
    {
        Name: 'CARNERA',
        image: '/./Sneaker_five.jpeg', 
        price: "$240 USD",
        discount:"$144 USD"
    },
];
const Bottom_page = () => {
    const [isborderHovered, setIsborderHovered] = useState(false);
    const textanimation = {
        initial: { width: "0%" },
        hover: { width: "100%", transition: { duration: 0.4 } },
    };
    return (
        <section >
            <div className='flex flex-col items-end px-10 my-20vh'>
                <p className='text-md mb-1 text-blacktosummer border-b w-full text-left border-blacktosummer'>WHO WE ARE</p>
                <p className='text-4xl text-blacktosummer text-right font-semibold w-8/12 mb-16'>
                An independent brand of urban trekking shoes 
                and accessories that comes <br/>
                from a convergence of arts and personalities</p>
            </div>
            <ul className=' flex justify-around'>
                <DraggableSlider items={items} />
            </ul>
            <a className='flex justify-end mt-2 mb-1  '>
                <p className='flex items-center text-xl justify-around w-1/5 px-4 cursor-pointer text-blacktosummer group  '>
                <div className='flex flex-col justify-end relative '>
                    <p className='px-0.5 m-0'
                        onMouseEnter={() => setIsborderHovered(true)}
                        onMouseLeave={() => setIsborderHovered(false)}>SHOP ALL</p>
                    <motion.div className=' border-t-2 border-blacktosummer w-full absolute bottom-1 ' 
                        initial="initial"
                        animate={isborderHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimation}/>
                </div>
                    <TfiFaceSmile className='text-6xl  rounded-full transition duration-500 group-hover:bg-yellow p-2'/>
                </p>
            </a>

            
        </section>
    )
}

export default Bottom_page