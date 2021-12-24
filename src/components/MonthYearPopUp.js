import React, { useContext } from 'react';
import { months } from './../assets/content';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AppContext } from './../App';
import YearDropDown from './YearDropDown';

const MonthYearPopUp = () => {
  const { isYearClicked, year, setMonth, setIsYearClicked } =
    useContext(AppContext);

  return (
    <>
      <div
        className='flex flex-col rounded h-41 w-61 absolute bg-bg-color-white top-12 shadow-md ml-2 mt-1'
        onClick={() => {
          if (isYearClicked) {
            setIsYearClicked(false);
          }
        }}
      >
        <div className='text-white w-full bg-primary-color px-3 h-6 flex flex-row rounded-t'>
          <span
            className='text-white font-medium hover:cursor-pointer flex'
            onClick={() => {
              setIsYearClicked(!isYearClicked);
            }}
          >
            {year}
            <RiArrowDropDownLine className='text-2xl' />
          </span>
        </div>
        <div className='grid grid-cols-4 grid-rows-3 mx-auto'>
          {months.map((month) => {
            return (
              <span
                onClick={() => {
                  setMonth(month.id);
                }}
                key={month.id}
                className='px-2 py-1 m-1.5 text-center text-txt-color hover:text-gray-900 hover:cursor-pointer hover:bg-bg-color-grey'
              >
                {month.name}
              </span>
            );
          })}
        </div>
      </div>

      {isYearClicked && <YearDropDown />}
    </>
  );
};

export default MonthYearPopUp;
