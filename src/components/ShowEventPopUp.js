import React from 'react';
import PopUp from './PopUp';

function ShowEventPopUp({ theState, theKey, id }) {
  return (
    <>
      <PopUp theState={theState} theKey={theKey} theID={id}>
        <div>This is Show Event</div>
      </PopUp>
    </>
  );
}

export default ShowEventPopUp;
