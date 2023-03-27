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
        className={` w-6 h-6 rounded border-2 outline-none appearance-none border-bg-gray-400 flex justify-center items-center customCheck ${otherClasses}`}
        {...otherProps}
      />
      {secondLabel && secondLabel}
    </div>
  );
}

export default CustomCheckbox;
