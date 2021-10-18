import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CalendarApp from './pages/CalendarApp';
<<<<<<< HEAD
import './App.css';
import CreateEvent from './components/CreateEvent/CreateEvent';
=======

//Creating an app context using context API
export const AppContext = React.createContext();
>>>>>>> 9540d948e45d45e936f2e33ef244edadb84081dc

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
            <CreateEvent/>
          </Route>
        </Switch>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
