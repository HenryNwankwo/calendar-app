import React from 'react';

function CustomRadioButton({
  radioName,
  otherInputClass,
  optionalLabel,
  radioID,
  ...otherAttributes
}) {
  return (
    <div>
      <label htmlFor={radioName}></label>
      <input
        type='radio'
        name={radioName}
        id={radioID}
        {...otherAttributes}
        className={`appearance-none w-4 h-4 border-1 border-primary-color rounded-full ${otherInputClass}`}
      />
      {optionalLabel}
    </div>
  );
}

export default CustomRadioButton;
