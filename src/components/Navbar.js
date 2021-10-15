import React from 'react';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between'>
      <div className='text-primary-color font-bold'>
        <span></span>
        <div>
          <span>September</span>
          <span>2021</span>
        </div>
        <span></span>
      </div>
      <div>
        <button>Add Event</button>
      </div>
    </div>
  );
};

export default Navbar;
