import React from 'react';

const YearDropDown = () => {
  const currentYear = new Date().getFullYear;
  return (
    <div className='bg-bg-color-white h-96 w-20 overflow-y-scroll absolute'>
      <ul className=''>
        {Array.from(new Array(50), (v, i) => {
          return (
            <li className='w-full h-9 text-center p-2' key={currentYear + i}>
              {currentYear + i}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default YearDropDown;
