import React, { useRef, useEffect, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';

function ColorPicker({ colorOptions }) {
  const [isMenuUp, setIsMenuUp] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [color, setColor] = useState('#00B87C');
  const [isColorClicked, setIsColorClicked] = useState(false);
  const colorPickerRef = useRef(null);

  //Handles the menu placement of the colorPicker
  useEffect(() => {
    if (colorPickerRef.current) {
      const parentRect =
        colorPickerRef.current.parentElement.getBoundingClientRect();
      const colorPickerRect = colorPickerRef.current.getBoundingClientRect();
      const isUp =
        parentRect.bottom + colorPickerRect.height > window.innerHeight;

      setIsMenuUp(isUp);
    }
  }, [isMenuUp]);

  //Handles the events of color Clicked.
  const colorClickedHandler = (theColor) => {
    setIsColorClicked(true);
    setColor(theColor);
    setIsSelected(theColor);
  };

  return (
    <>
      <div
        className='flex flex-row hover:cursor-pointer'
        onClick={() => setIsColorClicked(!isColorClicked)}
      >
        <span
          className='block rounded-full w-6 h-6'
          style={{ backgroundColor: color }}
        ></span>
        <RiArrowDownSLine className='text-icon-color text-lg ml-2' />
      </div>
      <div
        className={`absolute top-1 shadow-md flex justify-center items-center flex-wrap rounded py-2 mt-7 w-26 h-auto bg-white ${
          isMenuUp ? 'bottom-full mb-2' : 'top-full mt-2'
        }`}
      >
        {isColorClicked &&
          colorOptions.map((eachColor) => (
            <span
              className={`block w-6 h-6 rounded-full mx-2 my-1 hover:cursor-pointer hover:opacity-70 hover:shadow-md ${
                isSelected === eachColor &&
                'border-2 border-solid border-gray-600 shadow-md'
              }`}
              style={{
                backgroundColor:
                  isSelected === eachColor ? '#ffffff' : eachColor,
              }}
              onClick={() => colorClickedHandler(eachColor)}
              key={eachColor}
            ></span>
          ))}
      </div>
    </>
  );
}

export default ColorPicker;
