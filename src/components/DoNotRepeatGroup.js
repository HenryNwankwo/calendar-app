import React from 'react';
import CustomTextInput from './CustomTextInput';
import CustomInputLabel from './CustomInputLabel';
import CustomCheckbox from './CustomCheckbox';
import { FiEdit, FiCalendar, FiClock } from 'react-icons/fi';
import { AiOutlineSync } from 'react-icons/ai';
import {
  RiArrowDownSLine,
  RiCloseLine,
  RiCloseCircleLine,
  RiArrowDropDownFill,
} from 'react-icons/ri';

function DoNotRepeatGroup({
  doNotRepeatGroupClass,
  allDayGroupClass,
  inputLabelClass,
}) {
  return (
    <>
      {/* Does not Repeat group */}
      <div className='mt-6 flex justify-between'>
        {/* Does not repeat group */}
        <div className={`flex relative w-5/12 ${doNotRepeatGroupClass}`}>
          <CustomTextInput
            name='doNotRepeat'
            id='doNotRepeat'
            placeholder='Do not Repeat'
            otherClasses='px-6 border-none'
            labelComponent={
              <CustomInputLabel
                name='doNotRepeat'
                otherClasses='hover:cursor-pointer'
                labelIcon={
                  <AiOutlineSync className='text-lg text-icon-color' />
                }
              />
            }
          />
          <CustomInputLabel
            name='doNotRepeat'
            otherClasses='absolute right-0 mt-1 hover:cursor-pointer'
            labelIcon={
              <RiArrowDropDownFill className='text-icon-color text-3xl' />
            }
          />
        </div>

        {/* All day group */}

        <div className={`flex relative w-5/12 right ${allDayGroupClass}`}>
          <CustomCheckbox
            name='allDay'
            id='allDay'
            placeholder='allDay'
            otherClasses='hover:cursor-pointer'
            secondLabel={
              <CustomInputLabel
                name='allDay'
                otherClasses={`absolute right-14 mt-1 text-gray-500 hover:cursor-pointer ${inputLabelClass}`}
                labelIcon='All Day'
              />
            }
          />
        </div>
      </div>
    </>
  );
}

export default DoNotRepeatGroup;
