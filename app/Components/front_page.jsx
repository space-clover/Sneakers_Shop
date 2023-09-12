import React from 'react'
import Image from 'next/image'
import { IconName, TfiArrowRight, TfiShiftRight } from "react-icons/tfi";
const Front_page = () => {
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
                <p>EXPLORE</p>
                <div className='border-2 rounded-full border-blacktosummer p-4 group '> 
                <TfiArrowRight className='text-4xl transition duration-300  group-hover:rotate-360    ' /></div>
            </div>
        </section>
    )
}

export default Front_page