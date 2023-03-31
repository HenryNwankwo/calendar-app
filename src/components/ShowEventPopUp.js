import React, { useContext } from 'react';
import { AppContext } from '../App';
import EventModal from './EventModal';
import PopUp from './PopUp';

function ShowEventPopUp({ theKey, id }) {
  const { clickedEvent } = useContext(AppContext);
  return (
    <>
      <PopUp
        theState={clickedEvent}
        theKey={theKey}
        theID={id}
        otherClasses={''}
      >
        <EventModal></EventModal>
      </PopUp>
    </>
  );
}

export default ShowEventPopUp;
