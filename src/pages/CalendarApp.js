import React, { useContext, useEffect } from 'react';

import MainContent from '../components/MainContent';
import Navbar from '../components/Navbar';
import PageLoader from '../components/PageLoader';
import { AppContext } from '../App';

function CalendarApp() {
  const { pageIsLoading, setPageIsLoading } = useContext(AppContext);

  useEffect(() => {
    if (document.readyState !== 'loading') {
      setPageIsLoading(false);
    }
  }, [setPageIsLoading]);

  return pageIsLoading !== true ? (
    <div className='content-area'>
      <Navbar />
      <MainContent />
    </div>
  ) : (
    <PageLoader />
  );
}

export default CalendarApp;
