import React from 'react';

function CustomButton({ allClasses, textValue, ...otherValues }) {
  return (
    <>
      <button
        className={`w-33 h-12 rounded py-3 border-1 border-solid border-primary-color text-base ${allClasses}`}
        {...otherValues}
      >
        {textValue}
      </button>
    </>
  );
}

export default CustomButton;
