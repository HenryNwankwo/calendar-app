import React, { useState, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PageLoader from './components/loaders/PageLoader';
import { eventList } from './assets/holidayList';

//Lazy loaded imports
const CalendarApp = lazy(() => import('./pages/CalendarApp'));
//const { eventList } = lazy(() => import('./assets/holidayList'));

//Creating an app context using context API
export const AppContext = React.createContext();

function App() {
  const [month, setMonth] = useState(
    new Date().toLocaleString({}, { month: 'long' })
  );
  const [year, setYear] = useState(new Date().getFullYear());
  const [isMonthClicked, setIsMonthClicked] = useState(false);
  const [isYearClicked, setIsYearClicked] = useState(false);
  const [holidayList, setHolidayList] = useState(eventList);
  const [pageIsLoading, setPageIsLoading] = useState(true);
  const [isAddEventOpen, setIsAddEventOpen] = useState(false);
  const [whichTab, setWhichTab] = useState('event');
  const [deleteEventPopUp, setDeleteEventPopUp] = useState(false);
  const [currentEventID, setCurrentEventID] = useState(0);
  const [clickedEvent, setClickedEvent] = useState(false);
  const [showEditEvent, setShowEditEvent] = useState(false);
  const [reminderState, setReminderState] = useState(false);
  const [dnrOpenState, setDnrOpenState] = useState(false);

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
        isAddEventOpen,
        setIsAddEventOpen,
        whichTab,
        setWhichTab,
        deleteEventPopUp,
        setDeleteEventPopUp,
        currentEventID,
        setCurrentEventID,
        clickedEvent,
        setClickedEvent,
        showEditEvent,
        setShowEditEvent,
        reminderState,
        setReminderState,
        dnrOpenState,
        setDnrOpenState,
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
