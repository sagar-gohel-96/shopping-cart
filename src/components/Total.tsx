import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { toast } from 'react-toastify';
import { GrCheckboxSelected } from 'react-icons/gr';
import { useNavigate } from 'react-router-dom';
import { emptyCart } from '../features/cart/cartSlice';
const Total = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart.value);
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return (
    <div className='p-10 flex  justify-between fixed bottom-0 bg-slate-200 border-solid border-1 border-gray-600'>
      <div className='flex text-2xl mb-2'>
        <span className='font-bold'>Total quantity :</span> {totalQuantity}
      </div>
      <div className='flex ml-10 text-2xl'>
        <span className='font-bold'>Total price : </span> ${totalPrice}
      </div>
      <div className='flex  ml-10 '>
        {cart.length ? (
          <button
            onClick={() => {
              navigate('/confirmpage', {
                state: {
                  confirmedcartvalue: cart,
                },
              }),
                dispatch(emptyCart(null));
            }}
            className='bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
          >
            <GrCheckboxSelected className='mr-2' />
            <span>Confirm Order</span>
          </button>
        ) : (
          <button
            onClick={() => {
              toast('Sorry , Your cart is empty !');
            }}
            className='bg-green-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center'
          >
            <GrCheckboxSelected className='mr-2' />
            <span>Confirm Order</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Total;
