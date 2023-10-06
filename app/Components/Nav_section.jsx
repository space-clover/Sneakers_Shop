"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Nav_section = () => {
    const [isShopHovered, setIsShopHovered] = useState(false);
    const [isCollectionsHovered, setIsCollectionsHovered] = useState(false);
    const [isAboutHovered, setIsAboutHovered] = useState(false);

    const textanimation = {
        initial: { x: 0 },
        hover: { opacity: 0.5, x: -5, transition: { duration: 0.5 } },
    };

    return (
        <nav className='flex flex-col justify-between text-blacktosummer pt-1 sticky left-6 top-16 w-0 z-0 h-85vh'>
            <h1 className='text-xl font-bold -rotate-90'>SUMMER SPRING</h1>
            <ul className='flex- flex-col text-light text-md '>
                <li className='h-4 bg-cream' />
                <motion.li
                    onMouseEnter={() => setIsShopHovered(true)}
                    onMouseLeave={() => setIsShopHovered(false)}
                    className='z-0 cursor-pointer'
                    initial="initial"
                    animate={isShopHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimation}
                >
                    SHOP
                </motion.li>
                <motion.li
                    onMouseEnter={() => setIsCollectionsHovered(true)}
                    onMouseLeave={() => setIsCollectionsHovered(false)}
                    className='z-0 cursor-pointer'
                    initial="initial"
                    animate={isCollectionsHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimation}
                >
                    COLLECTIONS
                </motion.li>
                <motion.li
                    onMouseEnter={() => setIsAboutHovered(true)}
                    onMouseLeave={() => setIsAboutHovered(false)}
                    className='z-0 cursor-pointer'
                    initial="initial"
                    animate={isAboutHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimation}
                >
                    ABOUT
                </motion.li>
            </ul>
        </nav>
    );
};

export default Nav_section;
