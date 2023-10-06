"use client"
import React, {useState} from 'react'
import { motion } from 'framer-motion';

const Top_nav_section = () => {
    const [isDeplaceHovered, setIsDeplaceHovered] = useState(false);
    const [isCartHovered, setIsCartHovered] = useState(false);

    const textanimation = {
        initial: { y: 0 },
        hover: { y: -17, rotate:0, transition: { duration: 0.4 } },
    };
    return (
        <nav className='flex  justify-between  font-bold text-blacktosummer py-1 pr-4 absolute left-1/2 top-3 w-1/2 z-10'>
            <div className='z-10 bg-cream relative flex flex-col '>
                <div className=' h-90% bg-cream w-100% z-20  absolute -top-4  left-0'/>
                <motion.p
                    onMouseEnter={() => setIsDeplaceHovered(true)}
                    onMouseLeave={() => setIsDeplaceHovered(false)}
                    className='z-10 cursor-pointer  bg-beige '
                    initial="initial"
                    animate={isDeplaceHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimation}>DEPLACE</motion.p>
                <div className=' h-90% bg-cream w-100% z-20  absolute -bottom-4  left-0'/>
                <motion.p
                    onMouseEnter={() => setIsDeplaceHovered(true)}
                    onMouseLeave={() => setIsDeplaceHovered(false)}
                    className=' -z-20 cursor-pointer absolute   -bottom-4  left-0 '
                    initial="initial"
                    animate={isDeplaceHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimation}>DEPLACE</motion.p>
                
            </div>
            
            <div className='z-10 bg-cream relative flex flex-col '>
                <div className=' h-90% bg-cream w-100% z-20  absolute -top-4  left-0'/>
                <motion.p
                    onMouseEnter={() => setIsCartHovered(true)}
                    onMouseLeave={() => setIsCartHovered(false)}
                    className='z-10 cursor-pointer'
                    initial="initial"
                    animate={isCartHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimation}>CART</motion.p>
                <div className=' h-90% bg-cream w-100% z-20  absolute -bottom-4  left-0'/>
                <motion.p
                    onMouseEnter={() => setIsCartHovered(true)}
                    onMouseLeave={() => setIsCartHovered(false)}
                    className=' -z-20 cursor-pointer absolute -bottom-4  left-0 '
                    initial="initial"
                    animate={isCartHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimation}>CART</motion.p>
                
            </div>
        </nav>
    )
}

export default Top_nav_section