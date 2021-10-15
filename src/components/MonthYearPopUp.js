import React from 'react';
import { months } from './../assets/content';
import { RiArrowDropDownLine } from 'react-icons/ri';

const MonthYearPopUp = () => {
  return (
    <div className='flex flex-col rounded h-41 w-61'>
      <div className='text-white w-full bg-primary-color px-3 h-6 flex flex-row rounded-t'>
        <span className='text-white font-medium hover:cursor-pointer flex'>
          2021
          <RiArrowDropDownLine className='text-2xl' />
        </span>
      </div>
      <div className='grid grid-cols-4 grid-rows-3 mx-auto'>
        {months.map((month) => {
          return (
            <span
              key={month.id}
              className='px-2 py-1 m-1.5 text-center text-txt-color hover:text-gray-900 hover:cursor-pointer hover:bg-bg-color-grey'
            >
              {month.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default MonthYearPopUp;
