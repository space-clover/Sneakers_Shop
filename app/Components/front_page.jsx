"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { IconName, TfiArrowRight, TfiShiftRight } from "react-icons/tfi";
const Front_page = () => {
    const [isborderHovered, setIsborderHovered] = useState(false);
    const textanimation = {
        initial: { width: "0%" },
        hover: { width: "100%", transition: { duration: 0.4 } },
    };
    return (
        <section className='text-blacktosummer flex flex-col items-end pr-36 mt-5'>
            <div className='text-9xl  font-bold text-right'>
                SPRING,<br/><h2 className='flex items-baseline text-9xl text-blacktosummer 
                font-bold'> SUMMER 
                <p className='text-6xl italic font-normal '> Coll.<br/> 23 </p></h2>   
            </div>
            <div className='flex justify-around w-9/12 mt-4 relative'>
            <div className='absolute top-1/3 '>
                <Image
                    src="/./tape_label.svg" 
                    alt="Sneaker"
                    className='opacity-50'
                    width={150} 
                    height={150} />
            </div>
            <div>
                <Image
                    src="/./Green_sneakers_sample.jpg" 
                    alt="Sneaker"
                    className='border-4 border-blacktosummer'
                    width={400} 
                    height={200} />
                <p>01</p>
            </div>
            <div>
                <Image
                    src="/./White_sneakers_sample.jpg" 
                    alt="Sneaker"
                    className='border-4 border-blacktosummer'
                    width={400} 
                    height={200}/>
                <p>02</p>
            </div>

            </div>
            
            <div className='flex w-2/12 text-lg items-center my-4 text-left justify-around'>
                <div className='flex flex-col justify-end relative '>
                    <p className='px-0.5 m-0'
                        onMouseEnter={() => setIsborderHovered(true)}
                        onMouseLeave={() => setIsborderHovered(false)}>EXPLORE</p>
                    <motion.div className=' border-t-2 border-blacktosummer w-full absolute bottom-1 ' 
                        initial="initial"
                        animate={isborderHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimation}/>
                </div>
                
                <div className='border-2 rounded-full border-blacktosummer p-4 group '> 
                <TfiArrowRight className='text-4xl transition duration-300  group-hover:rotate-360    ' /></div>
            </div>
        </section>
    )
}

export default Front_page