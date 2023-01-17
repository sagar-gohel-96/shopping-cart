import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../index.css';
import { RootState } from '../app/store';
const Navbar = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  let totalQuantity = 0;
  let totalPrice = 0;

  cart.forEach((item) => {
    totalQuantity += item.quantity;
    totalPrice += item.price * item.quantity;
  });
  return (
    <div className=' flex flex-row justify-between bg-slate-200 items-center  sticky top-0'>
      <div className=' flex justify-between navbar bg-base-100'>
        <div className=' mr-10'>
          <a className='btn btn-ghost normal-case text-xl ml-16'>
            <Link to='/'> Shopping-Cart</Link>
          </a>
        </div>
        <div className='flex-none'>
          <div className='dropdown dropdown-end mr-4 z-50'>
            <label tabIndex={0} className='btn btn-ghost btn-circle mr-16'>
              <div className='indicator'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
                  />
                </svg>
                <span className='badge badge-sm indicator-item'>
                  {cart.length}
                </span>
              </div>
            </label>
            <div
              tabIndex={0}
              className='mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow'
            >
              <div className='card-body'>
                <span className='font-bold text-lg'>{totalQuantity}</span>
                <span className='text-info'>$ {totalPrice}</span>
                <div className='card-actions'>
                  <button className='btn btn-primary btn-block'>
                    <Link to='/cart'>Cart</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
