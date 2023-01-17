import React, { useState } from 'react';
import { AiFillStar } from 'react-icons/ai';

interface Rating {
  rating: number;
}
export const Rating = (props: Rating) => {
  const [rate, setRate] = useState(props.rating);
  return (
    <div className='flex'>
      {[...Array(5)].map((_, index) => (
        <div className='' key={index}>
          <AiFillStar
            width={'1rem'}
            height={'1rem'}
            style={{ color: rate > index ? 'red' : '' }}
          />
        </div>
      ))}
    </div>
  );
};
