import { AiFillCheckCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';
import { RootState } from '../app/store';
import { motion } from 'framer-motion';
import CartConfirmpageCard from '../components/ConfirmpageCard';
import { useLocation } from 'react-router-dom';
import { Key } from 'react';

export const ConfirmPage = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  let totalQuantity = 0;
  let totalPrice = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  const date = new Date().toLocaleDateString();
  const Time = new Date().toLocaleTimeString();
  const state = useLocation();
  const confirmedcartvalue = state.state.confirmedcartvalue;
  
  
  return (
    <div className='px-20 gap-10'>
      <div className='sticky top-0 bg-slate-50'>
        {confirmedcartvalue.length && (
          <div className='text-lime-600 flex justify-center text-2xl font-semibold items-center gap-2'>
            <span>Your order has been placed!</span>
            <AiFillCheckCircle />
          </div>
        )}
        <div className='flex justify-center mt-4 '>
          {totalQuantity > 0 && (
            <div className='flex text-2xl mb-2'>
              <span className='font-bold'>
                Total quantity : {totalQuantity}
              </span>
            </div>
          )}
          {totalPrice > 0 && (
            <div className='flex ml-10 text-2xl'>
              <span className='font-bold'>Total price : ${totalPrice}</span>
            </div>
          )}
        </div>
        <div className='flex justify-center mt-4 '>
          <div className='flex text-2xl mb-2'>
            <span className='font-bold'> Ordered date: {date}</span>
          </div>

          {totalPrice > 0 && (
            <div className='flex ml-10 text-2xl'>
              <span className='font-bold'>Ordered time : {Time}</span>
            </div>
          )}
        </div>
      </div>
      <div className='grid md:grid-cols-2 mt-2 gap-10'>
        {confirmedcartvalue.length &&
          confirmedcartvalue.map((item: { images: string[]; id: number; title: string; price: number; rating: number; }, index: Key | null | undefined) => {
            return (
              <CartConfirmpageCard
                key={index}
                imgurl={item.images[0]}
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
              />
            );
          })}
      </div>
      <motion.div
        className='text-lime-600 flex justify-center text-4xl font-semibold items-center gap-2 mt-10'
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        <span>Thank You !</span>
        <AiFillCheckCircle />
      </motion.div>
    </div>
  );
};
