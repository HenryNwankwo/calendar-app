import React, { lazy, useContext } from 'react';
import { AppContext } from '../App';
import EventLoader from './loaders/EventLoader';
import NoHolidays from './NoHolidays';

//Lazy imports
const EventCard = lazy(() => import('./EventCard.js'));

const MainContent = () => {
  const {
    setIsMonthClicked,
    setIsYearClicked,
    isMonthClicked,
    isYearClicked,
    filteredHolidayList,
  } = useContext(AppContext);
  return (
    <main
      className='w-screen max-w-full h-auto min-h-screen pt-24 bg-line-color pb-7'
      onClick={() => {
        if (isMonthClicked || isYearClicked) {
          setIsMonthClicked(false);
          setIsYearClicked(false);
        }
      }}
    >
      {filteredHolidayList.length !== 0 ? (
        <>
          <EventCard theHolidayList={filteredHolidayList} />
        </>
      ) : (
        <>
          <NoHolidays />
        </>
      )}
    </main>
  );
};

export default MainContent;
