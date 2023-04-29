import React, { useContext } from 'react';
import { months } from './../assets/content';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { AppContext } from './../App';
import YearDropDown from './YearDropDown';
import { isSameMonth } from 'date-fns';

const MonthYearPopUp = () => {
  const {
    isYearClicked,
    year,
    setMonth,
    setIsYearClicked,
    holidayList,
    setFilteredHolidayList,
  } = useContext(AppContext);

  const handleDate = (id, value) => {
    setMonth(value);
    const newDate = new Date(`${year}-${value}-01`);
    const newEvents = holidayList.filter((holiday) =>
      isSameMonth(holiday.startDate, newDate)
    );
    setFilteredHolidayList(newEvents);
  };

  return (
    <>
      <div
        className='flex flex-col rounded h-41 w-61 fixed bg-bg-color-white top-12 shadow-md ml-2 mt-1'
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
                onClick={() => handleDate(month.id, month.value)}
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
