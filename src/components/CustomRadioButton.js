import React from 'react';

function CustomRadioButton({
  radioName,
  otherInputClass,
  optionalLabel,
  radioID,
  labelText,
  labelClass,
  radioGroupClass,
  radioValue,
  ...otherAttributes
}) {
  return (
    <div
      className={`flex flex-row items-center hover:cursor-pointer relative ${radioGroupClass}`}
    >
      <label
        htmlFor={radioID}
        className={`labelChecked absolute left-5 hover:cursor-pointer ${labelClass}`}
      >
        {labelText}
      </label>
      <input
        type='radio'
        name={radioName}
        id={radioID}
        value={radioValue}
        {...otherAttributes}
        className={`appearance-none w-4 h-4 border-2 border-gray-300 rounded-full flex justify-center items-center hover:cursor-pointer relative ${otherInputClass}`}
      />
      {optionalLabel}
    </div>
  );
}

export default CustomRadioButton;
