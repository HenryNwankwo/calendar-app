import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarApp from './pages/CalendarApp';
//Creating an app context using context API
export const AppContext = React.createContext();
function App() {
  const [month, setMonth] = useState(
    new Date().toLocaleString({}, { month: 'long' })
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMonthClicked, setIsMonthClicked] = useState(false);
  const [isYearClicked, setIsYearClicked] = useState(false);
  const [holidayList, setHolidayList] = useState([]);
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
      }}
    >
      <Router>
        <Switch>
          <Route path='/' exact>
            <CalendarApp />
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
