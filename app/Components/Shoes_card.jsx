import React from 'react';

const Shoes_card = ({ src, forwho, sizes, shoe, price, rprice }) => {
  return (
    <div className=' text-center font-semibold'>
      <div > {src} </div>
      <h3 className='text-lg text-black'>{forwho}</h3>
      <p className='text-md'>{sizes}</p>
      <h1 className='text-3xl font-bold'>{shoe}</h1>
      <h2 className='text-lg'>{price}</h2>
      <h2 className='text-xl'>{rprice}</h2>
    </div>
  );
}

export default Shoes_card;
