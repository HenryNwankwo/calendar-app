import React from 'react';
import { RiDeleteBinLine, RiNotification2Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import { AppContext } from './../App';
import { useContext } from 'react/cjs/react.production.min';
import { eventList } from './../assets/holidayList';

function EventCard() {
  return eventList.map((holiday) => {
    return (
      <div
        className='flex flex-col bg-bg-color-white mt-1.5 mx-4 md:mx-7 p-4 md:p-6 hover:bg-gray-50'
        style={{ borderLeft: `8px solid ${holiday.color}` }}
        key={holiday.id}
      >
        <div className='flex justify-between mb-2'>
          <span className='flex flex-row w-auto items-center'>
            <h6 className='font-bold text-lg'>{holiday.eventTitle}</h6>
            <span className='hoverRoundedGray ml-4 '>
              <RiNotification2Line className='text-xl hover:cursor-pointer text-primary-color' />
            </span>
          </span>
          <span className='flex flex-row w-auto items-center'>
            <span className='hoverRoundedGray mr-1'>
              <FiEdit2 className='text-xl text-primary-color' />
            </span>
            <span className='hoverRoundedGray'>
              <RiDeleteBinLine className='text-xl hover:cursor-pointer text-primary-color' />
            </span>
          </span>
        </div>
        <p className='text-sm' style={{ color: holiday.color }}>
          {holiday.allDay
            ? 'All Day'
            : `${holiday.startTime} - ${holiday.endTime}`}
        </p>
        <p className='font-bold text-sm' style={{ color: holiday.color }}>
          {holiday.description}
        </p>
      </div>
    );
  });
}

export default EventCard;
