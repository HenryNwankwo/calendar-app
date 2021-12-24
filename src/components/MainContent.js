import React, { lazy, useContext } from 'react';
import { AppContext } from '../App';
import AddEvent from './AddEvent';
import EventLoader from './loaders/EventLoader';

//Lazy imports
const EventCard = lazy(() => import('./EventCard.js'));

const MainContent = () => {
  const {
    setIsMonthClicked,
    setIsYearClicked,
    isMonthClicked,
    isYearClicked,
    holidayList,
  } = useContext(AppContext);
  return (
    <main
      className='w-full h-full max-h-screen pt-24 bg-line-color'
      onClick={() => {
        if (isMonthClicked || isYearClicked) {
          setIsMonthClicked(false);
          setIsYearClicked(false);
        }
      }}
    >
      {holidayList.length !== 0 ? (
        <div>
          <EventCard />
        </div>
      ) : (
        <>
          <div>There is no content</div>
          <EventLoader />
        </>
      )}
    </main>
  );
};

export default MainContent;
