"use client"
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Message_secction = () => {
const [isTextDeplaceHovered, setIsTextDeplaceHovered] = useState(false);

useEffect(() => {
    const interval = setInterval(() => {
    setIsTextDeplaceHovered(!isTextDeplaceHovered);
    }, 3000);

    return () => {
    clearInterval(interval);
    };
}, [isTextDeplaceHovered]);

const textanimation = {
    initial: { y: -4, transition: { duration: 0.4, delay: 0.2}},
    hover: { y: 94, transition: { duration: 0.4} },
    
};

const textanimationContrary = {
    initial: { y: -100 ,  transition: { duration: 0.4,   } },
    hover: { y: 0, transition: { duration: 0.4, delay: 0.2 } },
};

return (
    <section className='w-full flex justify-end pr-4 h-60vh '>
    <div className='w-1/2 h-full relative flex justify-around'>
    <Image
        src="/./tapeoutline.svg" 
        alt="Sneaker"
        className=' absolute top-30% z-50 left-0'
        width={150} 
        height={200}/>
        <div className='h-full flex flex-col justify-center w-1/2  '>
            <div className='h-1/3 bg-cream z-20' />
            <div className=' h-16 text-2xl font-bold  z-10 relative '>
                <motion.p
                className=' absolute top-0 left-8 font-semibold text-blacktosummer '
                initial="initial"
                animate={isTextDeplaceHovered ? "hover" : "initial"}
                exit="initial"
                variants={textanimation}
                >
                William Gibson
                </motion.p>
                <motion.p
                className='  absolute top-0 left-8 font-semibold text-blacktosummer '
                initial="initial"
                animate={isTextDeplaceHovered ? "hover" : "initial"}
                exit="initial"
                variants={textanimationContrary}
                >
                Jamie K. Cotten
                </motion.p>
            </div>
            <div className='h-1/3 bg-cream z-10' />
        </div>
        <div className='h-full flex flex-col justify-center w-1/2 '>
            <div className='h-1/3 bg-cream z-20' />
            <div className=' h-24  z-10 relative text-sm'>
                <motion.p
                className=' absolute top-0 left-0 font-semibold text-blacktosummer '
                initial="initial"
                animate={isTextDeplaceHovered ? "hover" : "initial"}
                exit="initial"
                variants={textanimation}
                >
                Deplace Masion is a convicer for anticipacion the urban trekking as never seen before and exceptional product that not hast a equal alongside a great team represent the brand profesonally
                </motion.p>
                <motion.p
                className='  absolute top-0 left-0 font-semibold text-blacktosummer '
                initial="initial"
                animate={isTextDeplaceHovered ? "hover" : "initial"}
                exit="initial"
                variants={textanimationContrary}
                >
                Deplace Masion is a convicer for anticipacion the urban trekking as never seen before and exceptional product that not hast a equal alongside a great team represent the brand profesonally
                </motion.p>
            </div>
            <div className='h-1/3 bg-cream z-10' />
        </div>
    </div>
    </section>
);
}

export default Message_secction;
