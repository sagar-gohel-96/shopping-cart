import React from 'react';

const Loader = () => {
  return (
    <div
      className='
      spinner-grow item-middle w-8 h-8 bg-current rounded-full opacity-0
        text-purple-500 flex
      '
      role='status'
    >
      <span className='visually-hidden'>Loading...</span>
    </div>
  );
};

export default Loader;
