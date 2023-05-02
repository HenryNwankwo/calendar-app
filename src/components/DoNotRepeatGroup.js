import React, { useContext, useEffect, useRef } from 'react';

import CustomInputLabel from './CustomInputLabel';
import CustomCheckbox from './CustomCheckbox';

import DNRList from './DNRList';
import { AppContext } from '../App';

function DoNotRepeatGroup({
  doNotRepeatGroupClass,
  allDayGroupClass,
  inputLabelClass,
}) {
  const { setDnrOpenState, customRecurrOpen } = useContext(AppContext);
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
      <div className='mt-6 flex flex-col sm:flex-row justify-between'>
        {/* Does not repeat group */}
        <div
          className={`flex relative w-full sm:w-1/2 justify-center ${doNotRepeatGroupClass}`}
          ref={dnrListRef}
        >
          <DNRList></DNRList>
        </div>

        {/* All day group */}
        {!customRecurrOpen && (
          <div
            className={`flex relative sm:w-5/12 mt-4 sm:mt-0 ${allDayGroupClass}`}
          >
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
        )}
      </div>
    </>
  );
}

export default DoNotRepeatGroup;
