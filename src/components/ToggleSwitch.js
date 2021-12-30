import React, { useState } from 'react';

function ToggleSwitch({
  toggleFor,
  toggleName,
  toggleId,
  toggleText,
  inputGroupClass,
  labelClasses,
}) {
  const [toggleState, setToggleState] = useState(false);
  return (
    <span className={inputGroupClass}>
      <label
        htmlFor={toggleFor}
        className={`text-txt-color text-sm ${labelClasses}`}
      >
        {toggleText}
      </label>
      <input
        type='checkbox'
        name={toggleName}
        id={toggleId}
        className='toggleSwitch cursor-pointer w-12 h-6 rounded-full appearance-none bg-gray-200 relative transition duration-200 checked:bg-light-green border-2 border-gray-200 checked:border-light-green flex justify-center items-center'
        onClick={(e) => {
          setToggleState(e.target.value);
        }}
      />
    </span>
  );
}

export default ToggleSwitch;
