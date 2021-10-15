import React from 'react';

const Navbar = () => {
  return (
    <header className='w-full flex items-center justify-between bg-light-green fixed mx-auto h-18'>
      <div className='text-primary-color font-bold flex flex-row ml-2 hover:cursor-pointer'>
        <span></span>
        <div className='flex flex-row'>
          <span className='mx-0.5'>September</span>
          <span className='mx-0.5'>2021</span>
        </div>
        <span></span>
      </div>
      <div>
        <button className='bg-primary-color text-white text-center py-3 px-4.5 rounded mr-4'>
          Add Event
        </button>
      </div>
    </header>
  );
};

export default Navbar;
