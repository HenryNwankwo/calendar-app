import React, { useContext } from 'react';
import { AppContext } from '../App';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import AddEvent from '../components/AddEvent';

function CalendarApp() {
  const {
    isAddEventOpen,
    isMonthClicked,
    isYearClicked,
    setIsMonthClicked,
    setIsYearClicked,
  } = useContext(AppContext);
  return (
    <div
      className='content-area font-Lato relative min-h-screen scrollBar max-w-7xl'
      id='calendarRoot'
      onScroll={() => {
        if (isMonthClicked || isYearClicked) {
          setIsMonthClicked(false);
          setIsYearClicked(false);
        }
      }}
    >
      <Navbar />
      <MainContent />
      {isAddEventOpen && <AddEvent />}
    </div>
  );
}

export default CalendarApp;
