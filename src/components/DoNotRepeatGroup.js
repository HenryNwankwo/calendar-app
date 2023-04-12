import React, { useContext, useState, useEffect, useRef } from 'react';
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
import DNRList from './DNRList';
import { AppContext } from '../App';

function DoNotRepeatGroup({
  doNotRepeatGroupClass,
  allDayGroupClass,
  inputLabelClass,
}) {
  const { dnrOpenState, setDnrOpenState } = useContext(AppContext);
  const dnrListRef = useRef();

  /* closing the Do not repeat dropdown on mousedown */
  useEffect(() => {
    const mousedownHandler = (e) => {
      if (dnrListRef.current && !dnrListRef.current.contains(e.target)) {
        setDnrOpenState(false);
      }
    };

    document.addEventListener('mousedown', mousedownHandler);
    return () => document.removeEventListener('mousedown', mousedownHandler);
  });

  return (
    <>
      {/* Does not Repeat group */}
      <div className='mt-6 flex justify-between'>
        {/* Does not repeat group */}
        <div
          className={`flex relative w-1/2 justify-center ${doNotRepeatGroupClass}`}
          ref={dnrListRef}
        >
          <DNRList></DNRList>
        </div>

        {/* All day group */}

        <div className={`flex relative w-5/12 ${allDayGroupClass}`}>
          <CustomCheckbox
            name='allDay'
            id='allDay'
            placeholder='allDay'
            otherClasses='hover:cursor-pointer'
            secondLabel={
              <CustomInputLabel
                name='allDay'
                otherClasses={`absolute left-8 mt-1 text-gray-500 hover:cursor-pointer ${inputLabelClass}`}
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
