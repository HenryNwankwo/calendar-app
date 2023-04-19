import { useState, useRef, useEffect } from 'react';
import Calendar from 'react-calendar';

function CustomCalendar() {
  const [isMenuTop, setIsMenuTop] = useState(false);
  const [calendarDate, setCalendarDate] = useState(new Date());
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
      className={`absolute bg-white ${
        isMenuTop ? 'bottom-full mb-2' : 'top-full mt-2'
      } left-0 z-50 w-full sm:w-69`}
      ref={calendarMenuRef}
    >
      <Calendar className='' />
    </div>
  );
}

export default CustomCalendar;
