import React from 'react'
import Image from 'next/image'
import { IconName, TfiShiftRight } from "react-icons/tfi";
const Front_page = () => {
    return (
        <section className='text-blacktosummer flex flex-col items-end pr-36'>
            <h1 className='text-9xl  Font-bold text-right'>
                SPRING,<br/><p className='flex items-baseline'> SUMMER 
                <p className='text-6xl italic '> Coll.<br/> 20 </p></p>   
            </h1>
            <div className='flex justify-around w-9/12 mt-4'>
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
                <TfiShiftRight className='text-2xl'/>
            </div>
        </section>
    )
}

export default Front_page