import React from 'react';
import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';

function CalendarApp() {
  return (
    <div className='content-area'>
      <Navbar />
      <MainContent />
    </div>
  );
}

export default CalendarApp;
