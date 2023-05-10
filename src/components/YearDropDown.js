import React, { useState, useContext, useEffect } from 'react';
import Select from 'react-select';
import { AppContext } from '../App';

const YearDropDown = () => {
  const { setYear, isYearClicked, setIsYearClicked, yearRef, monthRef } =
    useContext(AppContext);
  const [dropDownYear] = useState(new Date().getFullYear());

  //Generating year options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear + i);
  const options = years.map((year) => ({
    value: year,
    label: year,
  }));

  const yearChangeHandler = (e) => {
    setYear(e.value);
  };

  //Closing the year dropdown
  /* const yearClickedHandler = (e) => {
    if (yearRef.current && !yearRef.current.contains(e.target)) {
      setIsYearClicked(false);
    }
    e.stopPropagation();
  };
  useEffect(() => {
    const yearHandler = yearClickedHandler();

    window.addEventListener('mousedown', yearClickedHandler);

    return () => {
      window.removeEventListener('mousedown', yearClickedHandler);
    };
  }); */
  return (
    <>
      <Select
        options={options}
        defaultValue={options[0]}
        className='absolute w-20 mt-15 ml-6 text-sm bg-transparent text-white'
        onChange={yearChangeHandler}
        menuPlacement='auto'
        menuPortalTarget={document.body}
        menuShouldScrollIntoView={true}
        styles={{
          control: (baseStyle) => ({
            border: 0,
            width: '100%',
            height: '10px',
            display: 'flex',
            justifyContent: 'center',
            background: 'none',
            color: 'white',
          }),
          indicatorSeparator: () => ({
            display: 'none',
          }),
          menu: (baseStyle, state) => ({
            ...baseStyle,
            outline: 'none',
            borderRadius: '4px',
            fontSize: '13px',
          }),
          menuList: (baseStyle) => ({
            ...baseStyle,
            '::-webkit-scrollbar': {
              width: '6px',
            },
            '::-webkit-scrollbar-thumb': {
              background: '#00B87C',
              borderRadius: '8px',
            },
            '::-webkit-scrollbar-thumb:hover': {
              background: 'green',
            },
          }),
          option: (baseStyle, state) => ({
            ...baseStyle,
            fontSize: '13px',
            background: state.isSelected ? '#00B87C' : '',
            color: state.isSelected ? '#ffffff' : 'GrayText',
            ':hover': {
              backgroundColor: '#E1FDF4',
              cursor: 'pointer',
              color: state.isSelected ? 'GrayText' : '',
            },
          }),
        }}
      ></Select>
      {/* <div
        className='absolute bg-bg-color-white h-96 w-20 overflow-y-scroll shadow-md mt-18 ml-2 scrollBar scrollBar-border-radius'
        ref={yearRef}
      >
        <ul className='flex flex-col'>
          {Array.from(new Array(50), (v, i) => {
            return (
              <li
                className='w-full h-9 text-txt-color hover:text-gray-900 text-center p-2 hover:cursor-pointer hover:bg-light-green'
                key={dropDownYear + i}
                onClick={() => {
                  setYear(`${dropDownYear + i}`);
                }}
              >
                {dropDownYear + i}
              </li>
            );
          })}
        </ul>
      </div> */}
    </>
  );
};

export default YearDropDown;
