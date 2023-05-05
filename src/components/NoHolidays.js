import React, { useContext } from 'react';
import { AppContext } from '../App';
import Acard from './Acard';

function NoHolidays() {
  const { holidayList, selectedNewDate } = useContext(AppContext);
  const upComingHolidays = holidayList
    .filter((holiday) => holiday.startDate > selectedNewDate)
    .sort((a, b) => a.startDate - b.startDate)
    .slice(0, 3);
  return (
    <div className='w-full h-screen md:h-auto bg-line-color flex flex-col'>
      <div className='flex justify-center items-center h-1/2 md:h-80 lg:h-96 w-full'>
        <p className='text-center font-bold text-gray-400 text-xl'>
          No Holidays this month
        </p>
      </div>

      <div>
        <p className='text-lg mb-3 mx-4 font-bold text-txt-color'>
          Upcoming Holidays
        </p>

        {upComingHolidays.map((holiday) => (
          <span key={holiday.id}>
            <Acard holiday={holiday} />
          </span>
        ))}
      </div>
    </div>
  );
}

export default NoHolidays;
