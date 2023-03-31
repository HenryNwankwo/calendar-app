import React, { useState } from 'react';
import { FiClock } from 'react-icons/fi';
import { RiNotification2Line, RiArrowDownSLine } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';
import CustomButton from './CustomButton';
import NoReminderButton from './NoReminderButton';

function EventModal({ theState }) {
  const [showReminder, setShowReminder] = useState(theState);
  return (
    <div className='flex flex-col justify-between'>
      <h6 className='font-bold py-1'>Company Break</h6>

      {/* Event Image */}
      <div className='my-2 shadow-sm w-full h-44 overflow-hidden'>
        <img
          src='https://res.cloudinary.com/dxrmhv6fy/image/upload/v1680104623/cld-sample-3.jpg'
          alt='Event Static Pictures'
          width='100%'
          height='100%'
          className='object-cover'
        />
      </div>

      {/* Event Date, Time and Availability */}
      <div className='flex flex-row py-1 justify-between text-sm'>
        <span>
          <p className='font-bold'>Date</p>
          <p className='text-icon-color'>1 Sept - 3 Sept</p>
        </span>
        <span className=''>
          <p className='font-bold'>Time</p>
          <p className='flex flex-row items-center text-icon-color'>
            <FiClock className='text-lg text-icon-color mr-1' /> All Day
          </p>
        </span>
        <span>
          <p className='font-bold'>Availability</p>
          <p className='text-icon-color'>Busy</p>
        </span>
      </div>

      {/* Event Description */}
      <div className='text-sm py-1'>
        <p className='font-bold'>Description</p>
        <p className='py-1 text-icon-color'>
          Company Break Company Break Date Date Time Availability Time 1 Sept -
          3 Sept 1 Sept - 5 Sept All day All day Busy Description Description
          Sapien, mattis tempor mauris nibh facilisi bibendum orci, diam.
        </p>
      </div>

      {/* Event Reminder Time */}
      {showReminder && (
        /* <div className='py-1 text-icon-color'>

          <div className='flex flex-row items-center'>
            <RiNotification2Line className='text-lg hover:cursor-pointer text-primary-color mr-3' />
            <p>
              <span className='mr-3'>Sep 2, 2023</span>
              <span>10:30am +1GMT</span>
            </p>
            <AiOutlineClose className='text-sm text-red-600 ml-3'></AiOutlineClose>
          </div>
          <p className='text-icon-color font-bold text-sm py-1 ml-8'>
            Annually on September 2
          </p>
        </div> */

        /* The No Reminder Button */

        <NoReminderButton></NoReminderButton>
      )}
    </div>
  );
}

export default EventModal;
