import React, { useContext } from 'react';
import { AppContext } from '../App';

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
      className='w-full pt-18 pl-2 overflow-y-scroll h-full max-h-screen'
      onClick={() => {
        if (isMonthClicked || isYearClicked) {
          setIsMonthClicked(false);
          setIsYearClicked(false);
        }
      }}
    >
      {holidayList.length !== 0 ? (
        <div>There is content</div>
      ) : (
        <div>There is no content</div>
      )}
    </main>
  );
};

export default MainContent;
