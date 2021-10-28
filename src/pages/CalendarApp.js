import React from 'react';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import CreateEvent from '../components/CreateEvent/CreateEvent';

function CalendarApp() {
  return (
    <div className='content-area'>
      <Navbar />
      <MainContent />
      <CreateEvent/>
    </div>
  );
}

export default CalendarApp;
