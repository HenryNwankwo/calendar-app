import React from 'react';

const YearDropDown = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='bg-bg-color-white h-96 w-20 overflow-y-scroll absolute shadow-md top-18 left-4 '>
      <ul className='flex flex-col'>
        {Array.from(new Array(50), (v, i) => {
          return (
            <li
              className='w-full h-9 text-txt-color hover:text-gray-900 text-center p-2 hover:cursor-pointer hover:bg-light-green'
              key={currentYear + i}
            >
              {currentYear + i}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default YearDropDown;
