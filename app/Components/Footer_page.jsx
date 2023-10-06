"use client"
import React from 'react'
import { useState } from 'react';
import { motion } from 'framer-motion';
import { PiArrowCircleUpThin,  PiEnvelopeSimpleThin } from "react-icons/pi";
const Footer_page = () => {
    const [isFAQHovered, setIsFAQHovered] = useState(false);
    const [isReturnsHovered, setIsReturnsHovered] = useState(false);
    const [isContactHovered, setIsContactHovered] = useState(false);
    const [isTermsHovered, setIsTermsHovered] = useState(false);
    const [isPrivacyHovered, setIsPrivacyHovered] = useState(false);
    const [isCookieHovered, setIsCookieHovered] = useState(false);
    const textanimation = {
        initial: { y: 0 },
        hover: { y: -29, rotate:0,   transition: { duration: 0.15 } },
        exit: {}
    };
    const textanimationsub = {
        initial: { y: 0, opacity:0 },
        hover: { y: 0, opacity:1, rotate:0,  transition: { duration: 0 } },
    };
    const textanimationReturns = {
        initial: { y: 0, },
        hover: { y: -28, zIndex: 0,  rotate:0,  transition: { duration: 0.15 } },
    };
    return (
    <section className='flex justify-around pb-4 h-22vh z-20 bg-cream'>
        <div className='text-md text-blacktosummer flex flex-col justify-between'>
            <div>
                <p>SUSCRIBE TO NEWSLETTER</p>
                <PiEnvelopeSimpleThin className='text-6xl'/>
            </div>
            <div>
                <p className='font-light'>suscribe to our newsletter</p>
                <form>   
                    <div className="relative flex items-center">
                        <input type="search" id="default-search" className="block w-96 p-4 pl-10 text-lg text-gray-900 border-b border-blacktosummer outline-none  bg-cream " placeholder='email address' required />
                        <button type="submit" className="text-blacktosummer absolute right-2.5  font-medium rounded-lg text-sm px-4 py-2">SUBMIT</button>
                    </div>
                </form>
            </div>
        </div>
        <div className='flex flex-col justify-between text-blacktosummer'>
            <ul className='flex flex-col'>
                <p className='text-md font-light bg-cream pb-2 z-20'>INFO</p>
                <motion.li className='text-2xl bg-cream font-semibold relative z-10 py-1'
                        onMouseEnter={() => setIsFAQHovered(true)}
                        onMouseLeave={() => setIsFAQHovered(false)}
                        initial="initial"
                        animate={isFAQHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimation}>FAQ 
                    <motion.p 
                        onMouseEnter={() => setIsFAQHovered(true)}
                        onMouseLeave={() => setIsFAQHovered(false)}
                        className='-z-20 cursor-pointer absolute -bottom-7  left-0'
                        initial="initial"
                        animate={isFAQHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimationsub}>FAQ</motion.p> 
                </motion.li>
                <motion.li className='text-2xl font-semibold z-10 bg-cream py-1'
                    onMouseEnter={() => setIsReturnsHovered(true)}
                    onMouseLeave={() => setIsReturnsHovered(false)}
                    initial="initial"
                    animate={isReturnsHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimationReturns}>RETURNS
                    <motion.p 
                        onMouseEnter={() => setIsReturnsHovered(true)}
                        onMouseLeave={() => setIsReturnsHovered(false)}
                        className='-z-20 cursor-pointer absolute -bottom-7  left-0'
                        initial="initial"
                        animate={isReturnsHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimationsub}>RETURNS</motion.p> 
                    </motion.li>
                    <motion.li className='text-2xl font-semibold z-10 bg-cream py-1'
                    onMouseEnter={() => setIsContactHovered(true)}
                    onMouseLeave={() => setIsContactHovered(false)}
                    initial="initial"
                    animate={isContactHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimationReturns}>CONTACT
                    <motion.p 
                        onMouseEnter={() => setIsContactHovered(true)}
                        onMouseLeave={() => setIsContactHovered(false)}
                        className='-z-20 cursor-pointer absolute -bottom-7  left-0'
                        initial="initial"
                        animate={isContactHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimationsub}>CONTACT</motion.p> 
                    </motion.li>
                    <div className=' h-4vh bg-cream w-full z-20 '/>
            </ul>
        </div>
        <div className='flex flex-col justify-between text-blacktosummer'>
            <ul className='flex flex-col '>
                <p className='text-md font-light bg-cream pb-2 z-20'>POLICY</p>
                <motion.li className='text-2xl bg-cream font-semibold relative z-10 py-1'
                        onMouseEnter={() => setIsTermsHovered(true)}
                        onMouseLeave={() => setIsTermsHovered(false)}
                        initial="initial"
                        animate={isTermsHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimation}>TERMS
                    <motion.p 
                        onMouseEnter={() => setIsTermsHovered(true)}
                        onMouseLeave={() => setIsTermsHovered(false)}
                        className='-z-20 cursor-pointer absolute -bottom-7  left-0'
                        initial="initial"
                        animate={isTermsHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimationsub}>TERMS</motion.p> 
                </motion.li>
                <motion.li className='text-2xl font-semibold z-10 bg-cream py-1'
                    onMouseEnter={() => setIsPrivacyHovered(true)}
                    onMouseLeave={() => setIsPrivacyHovered(false)}
                    initial="initial"
                    animate={isPrivacyHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimationReturns}>PRIVACY
                    <motion.p 
                        onMouseEnter={() => setIsPrivacyHovered(true)}
                        onMouseLeave={() => setIsPrivacyHovered(false)}
                        className='-z-20 cursor-pointer absolute -bottom-7  left-0'
                        initial="initial"
                        animate={isPrivacyHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimationsub}>PRIVACY</motion.p> 
                    </motion.li>
                    <motion.li className='text-2xl font-semibold z-10 bg-cream py-1'
                    onMouseEnter={() => setIsCookieHovered(true)}
                    onMouseLeave={() => setIsCookieHovered(false)}
                    initial="initial"
                    animate={isCookieHovered ? "hover" : "initial"}
                    exit="initial"
                    variants={textanimationReturns}>COOKIES
                    <motion.p 
                        onMouseEnter={() => setIsCookieHovered(true)}
                        onMouseLeave={() => setIsCookieHovered(false)}
                        className='-z-20 cursor-pointer absolute -bottom-7  left-0'
                        initial="initial"
                        animate={isCookieHovered ? "hover" : "initial"}
                        exit="initial"
                        variants={textanimationsub}>COOKIES</motion.p> 
                    </motion.li>
                    <div className=' h-4vh bg-cream w-full z-20 '/>
            </ul>
            <p></p>
        </div>
        <div className='flex flex-col justify-center items-center text-blacktosummer'>
            <PiArrowCircleUpThin className='text-7xl rounded-full transition duration-500 hover:bg-blacktosummer hover:opacity-90 cursor-pointer hover:text-cream '/>
        </div>
    </section>
    )
}

export default Footer_page