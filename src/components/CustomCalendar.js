import { useState, useRef, useEffect, useContext } from 'react';
import Calendar from 'react-calendar';
import { AppContext } from '../App';

function CustomCalendar() {
  const [isMenuTop, setIsMenuTop] = useState(false);
  const { calendarDate, setCalendarDate } = useContext(AppContext);
  const calendarMenuRef = useRef(null);

  /* Determining if to place calendar top or bottom */
  useEffect(() => {
    if (calendarMenuRef.current) {
      const parentRect =
        calendarMenuRef.current.parentElement.getBoundingClientRect();
      const calendarMenuRect = calendarMenuRef.current.getBoundingClientRect();
      const isTop =
        parentRect.bottom + calendarMenuRect.height > window.innerHeight;

      setIsMenuTop(isTop);
    }
  }, [isMenuTop]);

  return (
    <div
      className={`calendarMenu absolute  ${
        isMenuTop ? 'bottom-full mb-2' : 'top-full mt-2'
      } left-0 z-50 w-full sm:w-69`}
      ref={calendarMenuRef}
    >
      <Calendar
        className={`bg-white`}
        defaultValue={calendarDate}
        onChange={setCalendarDate}
      />
    </div>
  );
}

export default CustomCalendar;
