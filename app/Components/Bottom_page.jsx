import React from 'react'
import Shoes_card from './Shoes_card'
import Image from 'next/image'

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
            <li className='border-2 flex flex-col items-center justify-around w-1/5 border-blacktosummer text-blacktosummer bg-beige'>
                <Image
                src="/./shoe.png"
                alt="Sneaker"
                width={200} 
                height={150}
                />
                <Shoes_card
                forwho='Unisex'
                sizes='ss/20'
                shoe='DURAN'
                price='$50.00'
                rprice='$65.00'
                />
            </li>
            <li className='border-2 flex flex-col items-center justify-around w-1/5 border-blacktosummer text-blacktosummer bg-beige'>
                <Image
                src="/./shoe.png"
                alt="Sneaker"
                width={200} 
                height={150}
                />
                <Shoes_card
                forwho='Unisex'
                sizes='ss/20'
                shoe='DURAN'
                price='$50.00'
                rprice='$65.00'
                />
            </li>
            <li className='border-2 flex flex-col items-center justify-around w-1/5 border-blacktosummer text-blacktosummer bg-beige'>
                <Image
                src="/./shoe.png"
                alt="Sneaker"
                width={200} 
                height={150}
                />
                <Shoes_card
                forwho='Unisex'
                sizes='ss/20'
                shoe='DURAN'
                price='$50.00'
                rprice='$65.00'
                />
            </li>
            <li className='border-2 flex flex-col items-center justify-around w-1/5 border-blacktosummer text-blacktosummer bg-beige'>
                <Image
                src="/./shoe.png"
                alt="Sneaker"
                width={200} 
                height={150}
                />
                <Shoes_card
                forwho='Unisex'
                sizes='ss/20'
                shoe='DURAN'
                price='$50.00'
                rprice='$65.00'
                />
            </li>
            </ul>
        </section>
    )
}

export default Bottom_page