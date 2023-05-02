import React, { useContext } from 'react';
import { AppContext } from '../App';

function NoHolidays() {
  const { holidayList } = useContext(AppContext);
  return (
    <div className='w-full h-auto bg-line-color flex flex-row'>
      <div className='flex justify-center items-center h-96 w-full'>
        <h5 className='text-txt-color text-center font-bold'>
          No Holidays this month
        </h5>
      </div>

      <div>
        <p className='text-lg mb-3'>Upcoming Holidays</p>
        <div></div>
      </div>
    </div>
  );
}

export default NoHolidays;
