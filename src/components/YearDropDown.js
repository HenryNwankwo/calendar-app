import React, { useContext } from 'react';
import { AppContext } from '../App';

const YearDropDown = () => {
  const { year, setYear, isYearClicked, setIsYearClicked } =
    useContext(AppContext);
  return (
    <div
      className='bg-bg-color-white h-96 w-20 overflow-y-scroll absolute shadow-md top-17 left-4 scroll-bar'
      onClick={() => {
        setIsYearClicked(!isYearClicked);
      }}
    >
      <ul className='flex flex-col'>
        {Array.from(new Array(50), (v, i) => {
          return (
            <li
              className='w-full h-9 text-txt-color hover:text-gray-900 text-center p-2 hover:cursor-pointer hover:bg-light-green'
              key={year + i}
              onClick={() => {
                setYear(year + i);
              }}
            >
              {year + i}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default YearDropDown;
