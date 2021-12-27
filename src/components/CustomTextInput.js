import React from 'react';

function CustomTextInput({
  otherClasses,
  name,
  id,
  labelComponent,
  inputGroupClasses,
  secondLabel,
  ...otherProps
}) {
  return (
    <div className={`flex items-center ${inputGroupClasses}`}>
      {labelComponent}
      <input
        type='text'
        name={name}
        id={id}
        className={`w-full border-b-2 border-bg-color-grey outline-none px-1 py-1 border-solid ${otherClasses}`}
        {...otherProps}
      />
      {secondLabel && secondLabel}
    </div>
  );
}

export default CustomTextInput;
