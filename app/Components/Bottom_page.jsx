import React from 'react'
import Shoes_card from './Shoes_card'
import Image from 'next/image'
import { IconName, TfiArrowCircleRight, TfiFaceSmile } from "react-icons/tfi";
import DraggableSlider from './Slider_page';

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
    return (
        <section >
            <div className='flex flex-col items-end px-10'>
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
                    SHOP ALL
                    <TfiFaceSmile className='text-5xl rounded-full transition duration-500 group-hover:bg-yellow p-2'/>
                </p>
            </a>

            
        </section>
    )
}

export default Bottom_page