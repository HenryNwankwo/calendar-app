import React from 'react';
import { useState } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import MonthYearPopUp from './MonthYearPopUp';

const Navbar = () => {
  const [isMonthClicked, setIsMonthClicked] = useState(false);
  return (
    <>
      <header className='w-full flex items-center justify-between bg-light-green fixed mx-auto h-18'>
        <div
          className='text-primary-color font-bold flex flex-row ml-2 hover:cursor-pointer'
          onClick={() => setIsMonthClicked(!isMonthClicked)}
        >
          <span>
            <BiCalendar className='text-2xl my-auto' />
          </span>
          <div className='flex flex-row'>
            <span className='mx-0.5 text-lg'>September</span>
            <span className='mx-0.5 text-lg'>2021</span>
          </div>
          <span className='justify-center items-center'>
            <RiArrowDropDownLine className='text-2xl' />
          </span>
        </div>
        <div>
          <button className='bg-primary-color text-white text-center py-3 px-4.5 rounded mr-4'>
            Add Event
          </button>
        </div>
        <MonthYearPopUp />
      </header>
    </>
  );
};

export default Navbar;
