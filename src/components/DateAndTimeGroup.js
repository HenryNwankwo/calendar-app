import React from 'react';
import CustomTextInput from './CustomTextInput';
import CustomInputLabel from './CustomInputLabel';
import CustomCheckbox from './CustomCheckbox';
import { FiEdit, FiCalendar, FiClock } from 'react-icons/fi';
import {
  RiArrowDownSLine,
  RiCloseLine,
  RiCloseCircleLine,
  RiArrowDropDownFill,
} from 'react-icons/ri';

function DateAndTimeGroup() {
  return (
    <>
      {/* date and time group */}
      <div className='mt-6 flex justify-between'>
        {/* date group */}
        <div className='flex relative w-5/12'>
          <CustomTextInput
            name='date'
            id='date'
            placeholder='Date'
            otherClasses='px-6'
            labelComponent={
              <CustomInputLabel
                name='date'
                otherClasses='hover:cursor-pointer'
                labelIcon={<FiCalendar className='text-lg text-icon-color' />}
              />
            }
          />
          <CustomInputLabel
            name='startDate'
            otherClasses='absolute right-0 mt-1 hover:cursor-pointer'
            labelIcon={<RiArrowDownSLine className='text-icon-color text-lg' />}
          />
        </div>

        {/* time group */}

        <div className='flex relative w-5/12'>
          <CustomTextInput
            name='reminderTIme'
            id='reminderTIme'
            placeholder='Time'
            otherClasses='px-6'
            labelComponent={
              <CustomInputLabel
                name='reminderTIme'
                otherClasses='mt-1 hover:cursor-pointer'
                labelIcon={<FiClock className='text-lg text-icon-color' />}
              />
            }
            secondLabel={
              <CustomInputLabel
                name='reminderTIme'
                otherClasses='absolute right-0 mt-1 hover:cursor-pointer'
                labelIcon={
                  <RiArrowDownSLine className='text-icon-color text-lg' />
                }
              />
            }
          />
        </div>
      </div>
    </>
  );
}

export default DateAndTimeGroup;
