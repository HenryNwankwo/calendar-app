import React, { useState, useContext } from 'react';
import { RiDeleteBinLine, RiNotification2Line } from 'react-icons/ri';
import { FiEdit2 } from 'react-icons/fi';
import { AppContext } from './../App';
import DeleteEvent from './DeleteEvent';
function EventCard() {
  const [deleteEventPopUp, setDeleteEventPopUp] = useState(false);
  const { holidayList } = useContext(AppContext);

  const deleteEventMethod = () => {
    alert('delete this event');
  };
  return (
    <>
      {holidayList.map((holiday) => {
        return (
          <div
            className='flex flex-col bg-bg-color-white mt-1.5 mx-4 md:mx-7 p-4 md:p-6 hover:bg-gray-50 shadow-md select-none'
            style={{ borderLeft: `8px solid ${holiday.color}` }}
            key={holiday.id}
          >
            <div className='flex justify-between mb-2'>
              <span className='flex flex-row w-auto items-center'>
                <h6 className='font-bold text-lg'>{holiday.eventTitle}</h6>
                <span className='hoverRoundedGray ml-4 '>
                  <RiNotification2Line className='text-xl hover:cursor-pointer text-primary-color' />
                </span>
              </span>
              <span className='flex flex-row w-auto items-center'>
                <span className='hoverRoundedGray mr-1'>
                  <FiEdit2 className='text-xl text-primary-color' />
                </span>
                <span className='hoverRoundedGray' onClick={deleteEventMethod}>
                  <RiDeleteBinLine className='text-xl hover:cursor-pointer text-primary-color' />
                </span>
              </span>
            </div>
            <p className='text-sm' style={{ color: holiday.color }}>
              {holiday.allDay
                ? 'All Day'
                : `${holiday.startTime} - ${holiday.endTime}`}
            </p>
            <p className='font-bold text-sm' style={{ color: holiday.color }}>
              {holiday.description}
            </p>
          </div>
        );
      })}

      {/* deleteEventPopUp && (
          <DeleteEvent theEventID={holiday.id}></DeleteEvent>
        ) */}
    </>
  );
}

export default EventCard;
