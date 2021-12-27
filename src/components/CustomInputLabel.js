import React from 'react';

function CustomInputLabel({ labelComponent, name, otherClasses }) {
  return (
    <>
      <label htmlFor={name} className={`absolute ${otherClasses}`}>
        {labelComponent}
      </label>
    </>
  );
}

export default CustomInputLabel;
