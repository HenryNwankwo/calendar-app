import React, { useState, useContext } from 'react';
import Select from 'react-select';
import { AppContext } from '../App';

const YearDropDown = () => {
  const { setYear, year } = useContext(AppContext);
  const [selectedYear, setSelectedYear] = useState(year);

  //Generating year options
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 50 }, (_, i) => currentYear + i);
  const options = years.map((year) => ({
    value: year,
    label: year,
  }));

  const yearChangeHandler = (e) => {
    setYear(e.value);
    setSelectedYear(e.value);
  };

  return (
    <>
      <Select
        options={options}
        defaultValue={options[0]}
        className='absolute w-24 ml-1 text-sm bg-transparent text-white'
        onChange={yearChangeHandler}
        menuPlacement='auto'
        menuPortalTarget={document.body}
        menuShouldScrollIntoView={true}
        styles={{
          control: (baseStyle) => ({
            border: 0,
            width: '100%',
            height: '15px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: 'none',
            color: 'white',
          }),
          dropdownIndicator: (baseStyle) => ({
            ...baseStyle,
            color: 'white',
            ':hover': {
              color: 'yellow',
            },
          }),
          placeholder: (baseStyle) => ({
            ...baseStyle,
            color: 'white',
          }),
          singleValue: (baseStyle) => ({
            ...baseStyle,
            color: 'white',
            fontSize: '16px',
            ':hover': {
              color: 'yellow',
            },
          }),
          input: (baseStyle) => ({
            ...baseStyle,
            caretColor: 'white',
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
