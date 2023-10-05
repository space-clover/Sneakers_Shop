"use client"
import React from 'react'
import { motion } from 'framer-motion'

const Nav_section = () => {
    const textanimation = {
        initial: { opacity: 0, x: -12 },
        animate: { opacity: 0.1, x: 0, transition: { duration: 0.6,delay:0.8, } }, 
        exit: { opacity: 0, x: -12, transition: { duration: 0.6} }, 
        
    };
    return (
        <nav className='flex flex-col justify-between text-blacktosummer pt-1 sticky left-3 top-16 w-0 z-10  h-85vh'>
            <h1 className='text-xl font-bold -rotate-90'>SUMMER SPRING</h1>
            <ul className='flex- flex-col text-light text-md'>
                <li>SHOP</li>
                <li>COLECTTIONS</li>
                <li>ABOUT</li>
            </ul>
        </nav>
    )
}

export default Nav_section