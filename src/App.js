import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLoader from './components/loaders/PageLoader';

//Lazy loaded imports
const CalendarApp = lazy(() => import('./pages/CalendarApp'));
const { eventList } = lazy(() => import('./assets/holidayList'));

//Creating an app context using context API
export const AppContext = React.createContext();

function App() {
  const [month, setMonth] = useState(
    new Date().toLocaleString({}, { month: 'long' })
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMonthClicked, setIsMonthClicked] = useState(false);
  const [isYearClicked, setIsYearClicked] = useState(false);
  const [holidayList, setHolidayList] = useState([eventList]);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  return (
    <AppContext.Provider
      value={{
        year,
        setYear,
        month,
        setMonth,
        isMonthClicked,
        setIsMonthClicked,
        isYearClicked,
        setIsYearClicked,
        holidayList,
        setHolidayList,
        pageIsLoading,
        setPageIsLoading,
      }}
    >
      <Router>
        <Switch>
          <Suspense fallback={<PageLoader />}>
            <Route path='/' exact>
              <CalendarApp />
            </Route>
          </Suspense>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
