import React from 'react';
import CustomButton from './CustomButton';
import { RiNotification2Line, RiArrowDownSLine } from 'react-icons/ri';

function NoReminderButton() {
  return (
    <>
      <CustomButton
        allClasses={`bg-primary-color hoverOnGreen text-white flex items-center justify-center border-none outline-none w-full md:w-44 shadow-md`}
        textValue={
          <p className='flex items-center px-1 py-2'>
            <span className='mr-2'>
              <RiNotification2Line className='text-lg text-white'></RiNotification2Line>
            </span>
            Set Reminder
            <span className='ml-2'>
              <RiArrowDownSLine className='text-xl text-white'></RiArrowDownSLine>
            </span>
          </p>
        }
      ></CustomButton>
    </>
  );
}

export default NoReminderButton;
