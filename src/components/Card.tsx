import '../style/headings/heading.css';
import { ProductInterface } from '../interface/ProductInferface';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { useState } from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { BsFillCartCheckFill } from 'react-icons/bs';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from './Rating';
type CardObj = {
  product: ProductInterface;
  imgurl: string;
  title: string;
  price: number;
  rating: number;
};
type CardProps = {
  cardDetails: CardObj;
};
export const Card = (props: CardProps) => {
  const { imgurl, title, price, product, rating } = props.cardDetails;
  const dispatch = useDispatch();
  const [active, setActive] = useState(true);
  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setActive((pre) => !pre);
    toast('Item added to cart!');
    setActive(false);
  };
  return (
    <div className='flex flex-col max-w-sm rounded overflow-hidden shadow h-4/3 p-4 hover:shadow-lg'>
      <div className='flex justify-center'>
        <img className='h-60 rounded' src={imgurl} alt={title} />
      </div>
      <div className=' flex justify-between mt-2 '>
        <div className='mb-2'>
          <div className='font-bold text-xl text-start'> {title}</div>
          <div className='text-start justify-around text-gray-500 font-semibold '>
            $ {price}
            <Rating rating={rating} />
          </div>
        </div>
        <div className='flex items-center '>
          {active ? (
            <FaCartPlus
              className='text-3xl mr-2 cursor-pointer'
              onClick={handleAddToCart}
            />
          ) : (
            <BsFillCartCheckFill
              onClick={() => {
                toast('Your item is already in cart!');
              }}
              className='text-3xl mr-2 cursor-pointer'
            />
          )}
        </div>
      </div>
    </div>
  );
};
