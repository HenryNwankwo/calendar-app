import React, { useContext } from 'react';
import { AppContext } from '../App';

import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import AddEvent from '../components/AddEvent';

function CalendarApp() {
  const { isAddEventOpen, setIsAddEventOpen } = useContext(AppContext);
  return (
    <div
      className='content-area font-Lato relative min-h-screen scrollBar'
      id='calendarRoot'
    >
      <Navbar />
      <MainContent />
      {isAddEventOpen && <AddEvent />}
    </div>
  );
}

export default CalendarApp;
