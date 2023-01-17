import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import CartCard from '../components/CartCard';
import Total from '../components/Total';
import {TfiFaceSad} from'react-icons/tfi'
export const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  return (
    <>
      <Total />
      <div className=' px-20 gap-10 '>
        <div
          className='flex justify-between bg-slate-800  text-center py-4 mb-4 sticky top-16 lg:px-4'
          role='alert'
        >
          <div className='uppercase px-4 py-3 text-lg font-bold text-white ml-20 flex '>
            item
          </div>
          <div className='uppercase px-4 py-3 text-lg font-bold text-white mr-36 '>
            Details
          </div>
          <div className='uppercase px-4 py-3 text-lg font-bold text-white mr-44 '>
            Quantity
          </div>
        </div>
        {cart.length <= 0 && <div className='text-lime-600 flex justify-center text-2xl font-semibold items-center gap-2 p-4' >
            <span>Cart is empty!</span>
            <TfiFaceSad />
          </div>}
        {cart &&
          cart.map((item, index) => {
            return (
              <CartCard
                key={index}
                quantity={item.quantity}
                imgurl={item.images[0]}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
      </div>
    </>
  );
};
