import React, { useContext } from 'react';
import { AppContext } from '../App';
import Acard from './Acard';

function NoHolidays() {
  const { holidayList, selectedNewDate } = useContext(AppContext);
  const upComingHolidays = holidayList.filter(
    (holiday) => holiday.startDate >= selectedNewDate
  );
  return (
    <div className='w-full h-auto bg-line-color flex flex-col'>
      <div className='flex justify-center items-center h-96 w-full'>
        <h5 className='text-txt-color text-center font-bold'>
          No Holidays this month
        </h5>
      </div>

      <div>
        <p className='text-lg mb-3 mx-4'>Upcoming Holidays</p>
        <div className=''>
          {upComingHolidays.map((holiday) => (
            <span key={holiday.id}>
              <Acard holiday={holiday} />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NoHolidays;
