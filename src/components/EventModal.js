import React, { useState } from 'react';
import { FiClock } from 'react-icons/fi';
import NoReminderButton from './NoReminderButton';
import ShowReminderGroup from './ShowReminderGroup';

function EventModal({ theState }) {
  const [showReminder, setShowReminder] = useState(theState);
  return (
    <div className='flex flex-col justify-between p-6 h-full max-h-screen overflow-y-auto scrollBar scrollBar-border-radius'>
      <h6 className='font-bold py-1'>Company Break</h6>

      {/* Event Image */}
      <div className='my-2 shadow-sm w-full h-32 min-h-32 sm:h-44 sm:min-h-44 overflow-hidden'>
        <img
          src='https://res.cloudinary.com/dxrmhv6fy/image/upload/v1680104623/cld-sample-3.jpg'
          alt='Event Static Pictures'
          width='100%'
          height='100%'
          className='object-cover'
        />
      </div>

      {/* Event Date, Time and Availability */}
      <div className='flex flex-row py-1 justify-between text-sm w-full flex-wrap'>
        <div className='w-1/2 sm:w-1/3'>
          <p className='font-bold'>Date</p>
          <p className='text-icon-color'>1 Sept - 3 Sept</p>
        </div>
        <div className='w-1/2 sm:w-1/4'>
          <p className='font-bold'>Time</p>
          <p className='flex flex-row items-center text-icon-color'>
            <FiClock className='text-lg text-icon-color mr-1' /> All Day
          </p>
        </div>
        <div className='mt-2 sm:mt-0 sm:w-1/3'>
          <p className='font-bold'>Availability</p>
          <p className='text-icon-color'>Busy</p>
        </div>
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
        <>
          <ShowReminderGroup></ShowReminderGroup>
          {/* The No Reminder Button */}

          <NoReminderButton></NoReminderButton>
        </>
      )}
    </div>
  );
}

export default EventModal;
