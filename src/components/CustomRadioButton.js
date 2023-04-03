import React from 'react';

function CustomRadioButton({
  radioName,
  otherInputClass,
  optionalLabel,
  radioID,
  labelText,
  labelClass,
  radioGroupClass,
  ...otherAttributes
}) {
  return (
    <div className={`flex flex-row items-center relative ${radioGroupClass}`}>
      <label htmlFor={radioID} className={`${labelClass}`}>
        {labelText}
      </label>
      <input
        type='radio'
        name={radioName}
        id={radioID}
        {...otherAttributes}
        className={`appearance-none hover:cursor-pointer w-4 h-4 border-1 border-txt-color rounded-full ${otherInputClass}`}
      />
      {optionalLabel}
    </div>
  );
}

export default CustomRadioButton;
