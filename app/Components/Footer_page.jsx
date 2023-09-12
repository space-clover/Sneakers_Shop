import React from 'react'
import { PiArrowCircleUpThin,  PiEnvelopeSimpleThin } from "react-icons/pi";
const Footer_page = () => {
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
                <p className='text-md font-light'>INFO</p>
                <li className='text-2xl font-semibold mt-2'>FAQ</li>
                <li className='text-2xl font-semibold'>RETURNS</li>
                <li className='text-2xl font-semibold'>CONTACT</li>
            </ul>
        </div>
        <div className='flex flex-col justify-between text-blacktosummer'>
            <ul className='flex flex-col '>
                <p className='text-md font-light'>POLICY</p>
                <li className='text-2xl font-semibold mt-2'>TERMS</li>
                <li className='text-2xl font-semibold'>PRIVACY</li>
                <li className='text-2xl font-semibold'>COOKIE</li>
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