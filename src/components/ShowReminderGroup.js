import React from 'react';
import { RiNotification2Line } from 'react-icons/ri';
import { AiOutlineClose } from 'react-icons/ai';

function ShowReminderGroup() {
  return (
    <>
      <div className='py-1 text-icon-color'>
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
      </div>
    </>
  );
}

export default ShowReminderGroup;
