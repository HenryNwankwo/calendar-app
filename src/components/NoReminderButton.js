import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import { RiNotification2Line, RiArrowDownSLine } from 'react-icons/ri';
import { AppContext } from '../App';
import DateAndTimeGroup from './DateAndTimeGroup';
import DoNotRepeatGroup from './DoNotRepeatGroup';

function NoReminderButton() {
  const { reminderState, setReminderState } = useContext(AppContext);
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
        onClick={() => setReminderState(!reminderState)}
      ></CustomButton>
      {reminderState && (
        <form>
          {/* The reminder Group */}
          <DateAndTimeGroup></DateAndTimeGroup>
          <DoNotRepeatGroup
            inputLabelClass='md:right-14'
            doNotRepeatGroupClass='w-1/2'
            allDayGroupClass='w-1/2'
          ></DoNotRepeatGroup>
          {/* The reminder button group */}
          <div className='flex justify-between items-center w-full h-auto mt-3'>
            <CustomButton
              allClasses={`border-1 bg-white text-primary-color text-bg-primary-color text-sm px-11 hoverOnGreen-2 hover:border-light-green shadow-md`}
              textValue='Cancel'
            ></CustomButton>
            <CustomButton
              allClasses={`border-1 bg-primary-color text-white text-sm px-11 hoverOnGreen hover:border-green-100 shadow-md outline-none`}
              textValue='Create'
            ></CustomButton>
          </div>
        </form>
      )}
    </>
  );
}

export default NoReminderButton;
