import { useDispatch } from 'react-redux';
import { CartCardInterface } from '../interface/CartCardInterface';
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from '../features/cart/cartSlice';
import { toast } from 'react-toastify';
const CartCard = (props: CartCardInterface) => {
  const { id, imgurl, title, price, rating, quantity } = props;
  const dispatch = useDispatch();
  return (
    <div
      className='max-h-60 mb-4 rounded overflow-hidden shadow p-4 hover:shadow-lg flex'
      key={id}
    >
      <div className='justify-center '>
        <img className=' rounded w-3/4 h-full' src={imgurl} alt={title} />
      </div>
      <div className='flex justify-around w-full w-5/4'>
        <div className='grid-col flex-1 grid gap-6 text-left px-6 py-4'>
          <div className='font-bold text-xl w-max '>{title}</div>
          <div className='font-bold text-xl'>Price : ₹ {price}</div>
          <div className='font-semibold text-slate-500'>Rating : {rating}</div>
        </div>

        <div className='flex-1 flex flex-col items-center'>
          <button
            onClick={() => dispatch(decrementQuantity(id))}
            className='font-bold text-white p-2 m-2 rounded-sm '
            style={{ background: '#454DA0' }}
          >
            -
          </button>
          <span className='font-bold text-xl text-center'>
            Quantity : {quantity}
          </span>
          <button
            onClick={() => dispatch(incrementQuantity(id))}
            className='font-bold  text-white p-2 m-2 rounded-sm'
            style={{ background: '#454DA0' }}
          >
            +
          </button>
          <button
            onClick={() => {dispatch(removeFromCart(id)),toast("your item has been removed")}}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold p-2  m-2  rounded-sm'
          >
            Remove from cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
