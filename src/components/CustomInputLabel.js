import React from 'react';

function CustomInputLabel({ labelIcon, name, otherClasses }) {
  return (
    <>
      <label htmlFor={name} className={`absolute ${otherClasses}`}>
        {labelIcon}
      </label>
    </>
  );
}

export default CustomInputLabel;
