import React, { useContext } from 'react';
import CustomButton from './CustomButton';
import { RiNotification2Line, RiArrowDownSLine } from 'react-icons/ri';
import { AppContext } from '../App';
import DateAndTimeGroup from './DateAndTimeGroup';
import DoNotRepeatGroup from './DoNotRepeatGroup';
import CustomRadioButton from './CustomRadioButton';
import CustomRecurrence from './CustomRecurrence';

function NoReminderButton() {
  const { reminderState, setReminderState, customRecurrOpen, setShowPopUp } =
    useContext(AppContext);

  const cancelHandler = (e) => {
    e.preventDefault();
    setShowPopUp(false);
  };
  return (
    <>
      <CustomButton
        allClasses={` hoverOnGreen text-white flex items-center justify-center border-none outline-none w-full sm:w-44  ${
          reminderState ? 'bg-green-200' : 'bg-primary-color shadow-md'
        }`}
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
            doNotRepeatGroupClass='w-1/2'
            allDayGroupClass='w-1/2'
          ></DoNotRepeatGroup>

          {customRecurrOpen && <CustomRecurrence></CustomRecurrence>}

          {/* Available and Visibity group */}
          <div className='flex flex-col sm:flex-row w-full my-5 text-sm text-txt-color'>
            <p className='font-bold text-black mb-2 sm:mb-0'>Show Me:</p>
            <span className='sm:ml-8 flex flex-row w-8/12'>
              <CustomRadioButton
                radioName='showMe'
                radioID='busy'
                labelText='Busy'
                radioGroupClass='w-4/12'
                otherInputClass='radioActiveClass'
              ></CustomRadioButton>

              <CustomRadioButton
                radioName='showMe'
                radioID='available'
                labelText='Available'
                radioGroupClass='w-4/12 ml-3 sm:ml-0'
                otherInputClass='radioActiveClass '
              ></CustomRadioButton>
            </span>
          </div>
          {/* Visibilty radio Group */}
          <div className='flex flex-col sm:flex-row w-full my-5 text-sm text-txt-color'>
            <p className='font-bold text-black mb-2 sm:mb-0'>Visibility:</p>
            <span className='sm:ml-8 flex flex-row w-full sm:w-9/12'>
              <CustomRadioButton
                radioName='visibility'
                radioID='default'
                labelText='Default'
                radioGroupClass='w-4/12'
                otherInputClass='radioActiveClass'
              ></CustomRadioButton>
              <CustomRadioButton
                radioName='visibility'
                radioID='private'
                labelText='Private'
                radioGroupClass='w-4/12 ml-3 sm:ml-0'
                otherInputClass='radioActiveClass'
              ></CustomRadioButton>
              <CustomRadioButton
                radioName='visibility'
                radioID='public'
                labelText='Public'
                radioGroupClass='w-4/12 ml-3 sm:ml-0'
                otherInputClass='radioActiveClass'
              ></CustomRadioButton>
            </span>
          </div>

          {/* The reminder button group */}
          <div className='flex flex-col-reverse sm:flex-row justify-between items-center w-full h-auto mt-3'>
            <CustomButton
              allClasses={`border-1 bg-white text-primary-color text-bg-primary-color text-sm px-11 hoverOnGreen-2 hover:border-light-green shadow-md`}
              textValue='Cancel'
              onClick={(e) => cancelHandler(e)}
            ></CustomButton>
            <CustomButton
              allClasses={`border-1 bg-primary-color text-white text-sm px-11 hoverOnGreen hover:border-green-100 shadow-md outline-none  mb-3 sm:mb-0 `}
              textValue='Create'
            ></CustomButton>
          </div>
        </form>
      )}
    </>
  );
}

export default NoReminderButton;
