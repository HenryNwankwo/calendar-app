import React, { useEffect, useRef, useState } from 'react';

function PopUp(props) {
  const [showPopUp, setShowPopUp] = useState(true);
  //Assigning a reference to the pop up child element
  const popUpRef = useRef();

  useEffect(() => {
    const popUpEventHandler = (e) => {
      if (popUpRef.current && !popUpRef.current.contains(e.target)) {
        setShowPopUp(false);
      }
      e.stopPropagation();
    };

    document.addEventListener('click', popUpEventHandler);

    return () => {
      document.removeEventListener('click', popUpEventHandler);
    };
  });

  return (
    showPopUp && (
      <div
        className='fixed top-0 left-0 bottom-0 right-0 popUpOverlay h-screen w-screen flex justify-center items-center bg-black opacity-40'
        key={props.theKey}
      >
        <div className='bg-white rounded p-6 shadow-md ' ref={popUpRef}>
          {props.children}
        </div>
      </div>
    )
  );
}

export default PopUp;
