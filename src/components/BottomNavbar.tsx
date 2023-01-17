import { Link } from 'react-router-dom';
const BottomNavbar = () => {
  return (
    <div className='btm-nav'>
      <div className='bg-green-300'>
        <Link to='/'>
          <button className='text-center'>
            <span className='btm-nav-label text-center'>Home</span>
          </button>
        </Link>
      </div>
      <div className='bg-slate-500'>
        <Link to='/cart '>
          <button className=' text-neutral-content'>
            <span className='btm-nav-label'>Cart</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BottomNavbar;
