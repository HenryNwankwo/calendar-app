import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../App';

function PopUp(props) {
  const { clickedEvent } = useContext(AppContext);
  const [showPopUp, setShowPopUp] = useState(clickedEvent);
  //Assigning a reference to the pop up child element
  const popUpRef = useRef();

  useEffect(() => {
    const popUpEventHandler = (e) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setShowPopUp(false);
      }
      e.stopPropagation();
    };

    document.addEventListener('mousedown', popUpEventHandler);

    return () => {
      document.removeEventListener('mousedown', popUpEventHandler);
    };
  });

  return (
    showPopUp && (
      <div
        className='fixed top-0 left-0 bottom-0 right-0 h-screen w-screen flex justify-center items-center bg-black bg-opacity-50'
        key={props.theKey}
      >
        <div
          className={`bg-white md:rounded p-6 shadow-md w-full h-auto md:w-96 ${props.otherClasses}`}
          ref={popUpRef}
        >
          {props.children}
        </div>
      </div>
    )
  );
}

export default PopUp;
