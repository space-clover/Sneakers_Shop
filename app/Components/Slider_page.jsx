"use client"
import React, { Component } from 'react'
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class DraggableSlider extends Component {
render() {
    const { items } = this.props;

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 2,
    };

        return (
        <div className=" w-full">
            <Slider {...sliderSettings}>
            {items.map((item, index) => (
                <ul key={index} className="p-6 cursor-grab active:cursor-grabbing">
                    <li className="bg-beige  border-2 border-blacktosummer text-blacktosummer pt-12 justify-around flex flex-col items-center h-50vh w-full">
                        <div className='flex items-end justify-center h-40'>                       
                        <Image
                        src={item.image}
                        className='' 
                        alt="Sneaker"
                        width={400} 
                        height={0} /></div>
                        <Image
                        src="/./Unisex_label.svg" 
                        alt="label_unisex"
                        width={100} 
                        height={0} />
                        <p className='text-md font-light'>SS/20</p>
                        <h1 className='text-7xl font-oswald tracking-tighter  '>{item.Name}</h1>
                        <div className='flex flex-col items-center justify-around mb-5'>
                            <p className='text-sm font-semibold line-through' >{item.price}</p>
                            <p className='text-xl font-semibold'>{item.discount}</p>
                        </div>     
                    </li>
                </ul>
            ))}
            </Slider>
        </div>
        );
    }
}

export default DraggableSlider;
