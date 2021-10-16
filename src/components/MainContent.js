import React, { useContext } from 'react';
import { AppContext } from '../App';

const MainContent = () => {
  const { setIsMonthClicked, setIsYearClicked, isMonthClicked, isYearClicked } =
    useContext(AppContext);
  return (
    <main
      onClick={() => {
        if (isMonthClicked || isYearClicked) {
          setIsMonthClicked(false);
          setIsYearClicked(false);
        }
      }}
    >
      This is the main content
    </main>
  );
};

export default MainContent;
