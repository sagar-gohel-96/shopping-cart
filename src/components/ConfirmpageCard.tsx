import React from 'react';
import { ConfirmCartCardInterface } from '../interface/ConfirmCardInterface';

const ConfirmpageCard = (props: ConfirmCartCardInterface) => {
  const { id, imgurl, title, price, rating } = props;
  return (
    <div
      className='max-h-60 mb-4 rounded overflow-hidden shadow p-4 hover:shadow-lg flex'
      key={id}
    >
      <div className='justify-center '>
        <img className=' rounded w-3/4 h-full' src={imgurl} alt={title} />
      </div>
      <div className='grid grid-cols-2 justify-center w-full w-5/4'>
        <div className='grid-col flex-1 grid gap-6 text-left'>
          <div className='font-bold text-xl w-max '>{title}</div>
          <div className='font-bold text-xl w-fit'>Price : ₹ {price}</div>
          <div className='font-semibold text-slate-500'>Rating : {rating}</div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmpageCard;
