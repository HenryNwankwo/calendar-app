import React, { useContext} from 'react';
import { startOfMonth, endOfMonth, eachDayOfInterval } from 'date-fns';
import { AppContext } from './../App';
import DeleteEvent from './DeleteEvent';
import EditEvent from './EditEvent';
import ShowEventPopUp from './ShowEventPopUp';
import Acard from './Acard';
function EventCard({ theHolidayList }) {
  const {
    filteredHolidayList,
    currentEventID,    
    deleteEventPopUp,    
    clickedEvent,  
    year,
    month,
  } = useContext(AppContext);

  const pickedDateMonthAndYear = new Date(`${year}-${month}-01`);

  /* Displays Events for a selected month */
  const monthStartDate = startOfMonth(pickedDateMonthAndYear);
  const monthEndDate = endOfMonth(pickedDateMonthAndYear);
  const daysInMonth = eachDayOfInterval({
    start: monthStartDate,
    end: monthEndDate,
  });

  

  return (
    <div className=''>
      {daysInMonth.map((day) => (
        <div key={day}>
          {filteredHolidayList
            .filter((event) => event.startDate.getDate() === day.getDate())
            .map((holiday) => (
              <Acard holiday={holiday} />
            ))}
        </div>
      ))}
      {<EditEvent theEventID={currentEventID} />}
      {clickedEvent && (
        <ShowEventPopUp
          theKey={currentEventID}
          id={currentEventID}
        ></ShowEventPopUp>
      )}
      {
        <DeleteEvent
          theEventID={currentEventID}
          trigger={deleteEventPopUp}
          theKey={currentEventID}
        ></DeleteEvent>
      }
    </div>
  );
}

export default EventCard;
