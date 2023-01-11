import React, { useContext } from 'react';
import { BiCalendar } from 'react-icons/bi';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { FaBars, FaPlus } from 'react-icons/fa';
import MonthYearPopUp from './MonthYearPopUp';
import { AppContext } from '../App';

const Navbar = () => {
  const {
    month,
    year,
    setIsYearClicked,
    isYearClicked,
    isMonthClicked,
    setIsMonthClicked,
    isAddEventOpen,
    setIsAddEventOpen,
  } = useContext(AppContext);
  return (
    <>
      <header
        className='w-full flex items-center justify-between bg-light-green fixed h-18 max-w-7xl shadow-md'
        onClick={() => {
          if (isMonthClicked || isYearClicked) {
            setIsMonthClicked(false);
            setIsYearClicked(false);
          }
        }}
      >
        <div
          className='text-primary-color font-bold flex flex-row ml-2 hover:cursor-pointer hoverRoundedLightGray '
          onClick={() => setIsMonthClicked(!isMonthClicked)}
        >
          <div className='flex items-center justify-center'>
            <span className=''>
              <BiCalendar className='text-2xl my-auto hidden md:flex' />
            </span>
            <span className='my-auto mr-1 md:hidden'>
              <FaBars className='text-xl' />
            </span>
          </div>
          <div className='flex flex-row my-auto'>
            <span className='mx-0.5 text-lg'>{month}</span>
            <span className='mx-0.5 text-lg'>{year}</span>
          </div>
          <span className='justify-center items-center'>
            <RiArrowDropDownLine className='text-2xl' />
          </span>
        </div>
        <div className='mr-4 flex'>
          <button
            className='hidden md:flex bg-primary-color text-white text-center py-3 px-4.5 rounded hoverOnGreen'
            onClick={() => setIsAddEventOpen(true)}
          >
            Add Event
          </button>
          <div className='text-primary-color font-bold block md:hidden hoverRoundedGray'>
            <FaPlus
              className='text-lg cursor-pointer block md:hidden'
              onClick={() => setIsAddEventOpen(true)}
            />
          </div>
        </div>
      </header>
      {isMonthClicked && <MonthYearPopUp />}
    </>
  );
};

export default Navbar;
