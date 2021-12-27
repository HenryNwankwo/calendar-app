import React from 'react';

function CustomTextInput({ otherClasses, name, id, ...otherProps }) {
  return (
    <>
      <input
        type='text'
        name={name}
        id={id}
        className={`w-full border-b-2 border-bg-color-grey outline-none px-1 border-solid ${otherClasses}`}
        {...otherProps}
      />
    </>
  );
}

export default CustomTextInput;
