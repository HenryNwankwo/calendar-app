import React from 'react';
import { RiDeleteBinLine, RiNotification2Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';

function EventCard() {
  return (
    <div
      className='flex flex-col bg-bg-color-white mt-1.5 mx-4 md:mx-7 p-4 md:p-6'
      style={{ borderLeft: `8px solid #fb3cde` }}
    >
      <div className='flex justify-between mb-2'>
        <span className='flex flex-row w-auto items-center'>
          <h6 className='font-bold text-lg'>Company Break</h6>
          <span>
            <RiNotification2Line className='ml-4 text-xl hover:cursor-pointer text-primary-color' />
          </span>
        </span>
        <span className='flex flex-row w-auto items-center'>
          <FiEdit2 className='mr-3 text-xl hover:cursor-pointer text-primary-color' />
          <RiDeleteBinLine className='text-xl hover:cursor-pointer text-primary-color' />
        </span>
      </div>
      <p className='text-sm' style={{ color: `#fb3cde` }}>
        All Day
      </p>
      <p className='font-bold text-sm' style={{ color: `#fb3cde` }}>
        Company Break
      </p>
    </div>
  );
}

export default EventCard;
