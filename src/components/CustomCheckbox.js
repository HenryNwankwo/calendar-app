import React from 'react';

function CustomCheckbox({
  labelComponent,
  checkBoxID,
  checkBoxName,
  secondLabel,
  otherClasses,
  groupClasses,
  ...otherProps
}) {
  return (
    <div className={`flex justify-center items-center ${groupClasses}`}>
      {labelComponent}
      <input
        type='checkbox'
        name={checkBoxName}
        id={checkBoxID}
        className={` w-full border-b-2 border-bg-color-grey outline-none px-1 pt-1  ${otherClasses}`}
        {...otherProps}
      />
      {secondLabel && secondLabel}
    </div>
  );
}

export default CustomCheckbox;
