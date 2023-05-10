import React, { useState, Suspense, lazy, useRef } from 'react';
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
  const [customRecurrOpen, setCustomRecurrOpen] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());
  const [monthID, setMonthID] = useState();
  const [isEventsEmpty, setIsEventsEmpty] = useState();

  //Setting up the initial state of the events carrying the events of the current month and sorting it too
  const [filteredHolidayList, setFilteredHolidayList] = useState(
    holidayList
      .filter(
        (holiday) =>
          holiday.startDate.getMonth() === new Date().getMonth() &&
          holiday.startDate.getFullYear() === new Date().getFullYear()
      )
      .sort((a, b) => a.startDate - b.startDate)
  );
  const [selectedNewDate, setSelectedNewDate] = useState(new Date());

  //All Refs
  const yearRef = useRef(null);
  const monthRef = useRef(null);

  return (
    <AppContext.Provider
      value={{
        yearRef,
        monthRef,
        selectedNewDate,
        setSelectedNewDate,
        filteredHolidayList,
        setFilteredHolidayList,
        isEventsEmpty,
        setIsEventsEmpty,
        monthID,
        setMonthID,
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
        customRecurrOpen,
        setCustomRecurrOpen,
        calendarDate,
        setCalendarDate,
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
