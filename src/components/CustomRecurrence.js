import React, { useContext, useState, useEffect, useRef } from 'react';
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';
import Select from 'react-select';
import { format } from 'date-fns';
import CustomRadioButton from './CustomRadioButton';
import { options } from '../assets/customRecurrOptions';
import CustomCalendar from './CustomCalendar';
import { AppContext } from '../App';

function CustomRecurrence() {
  const { calendarDate, setCalendarDate } = useContext(AppContext);
  const [showCalendar, setShowCalendar] = useState(false);
  const [noOfOcurrence, setNoOfOcurrence] = useState(10);
  const dateRef = useRef(null);

  const formattedDate = format(calendarDate, 'MMM d, yyyy');

  /* Handling closing of Calendar menu on windows mouse event */
  const handleWindowClick = (e) => {
    const menuNode = document.querySelector('.calendarMenu');

    if (
      menuNode &&
      !menuNode.contains(e.target) &&
      !dateRef.current.contains(e.target)
    ) {
      setShowCalendar(false);
    }
  };

  /* Closing the calendar menu on outside click */
  useEffect(() => {
    window.addEventListener('click', handleWindowClick);

    return () => {
      window.removeEventListener('click', handleWindowClick);
    };
  });

  /* Handles the increment number of occurrence of custom occurence */
  const handleIncrement = () => {
    if (noOfOcurrence < 10) {
      setNoOfOcurrence(noOfOcurrence + 1);
    }
  };

  /* Handles the decrement number of occurrence of custom occurence */
  const handleDecrement = () => {
    if (noOfOcurrence > 1) {
      setNoOfOcurrence(noOfOcurrence - 1);
    }
  };

  /* Handles the open and close of the calendar component */

  const showCalendarHandler = () => {
    setShowCalendar(!showCalendar);
  };

  return (
    <>
      {/* Custom ocurrence group */}
      <div className='text-sm text-txt-color bg-white w-full'>
        <h6 className='font-bold mt-6 mb-3'>Custom Recurrence</h6>
        {/* Repeat every group */}
        <div className='flex items-center'>
          <p className='w-3/12 py-4'>Repeat every</p>
          <p className='w-20 p-4 ml-6'>1</p>
          <div className='flex items-center justify-center w-23 h-9 rounded bg-gray-100'>
            <Select
              className='ml-2 hover:cursor-pointer w-full'
              options={options}
              defaultValue={options[1]}
              menuPlacement='auto'
              menuPortalTarget={document.body}
              styles={{
                control: (baseStyle, state) => ({
                  border: 0,
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '13px',
                  paddingLeft: 0,
                }),
                dropdownIndicator: (baseStyle) => ({
                  ...baseStyle,
                  paddingRight: '5px',
                }),
                indicatorSeparator: () => ({
                  display: 'none',
                }),
                menu: (baseStyle, state) => ({
                  ...baseStyle,
                  width: '77px',
                  height: '147px',
                  outline: 'none',
                }),
                option: (baseStyle, state) => ({
                  ...baseStyle,
                  height: 'auto',
                  padding: '4px 16px 4px 16px',
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
            {/* <span>Week</span>
            <RiArrowDownSLine className='text-xl ml-2'></RiArrowDownSLine> */}
          </div>
        </div>
        {/* Repeat on group */}
        <div className='flex my-4'>
          <p className='w-3/12'>Repeat on</p>
          <div className='ml-6 flex justify-between w-7/12 font-bold dayCustomStyle'>
            <span className='rounded-full flex items-center justify-center w-5 h-5'>
              S
            </span>
            <span className='rounded-full flex items-center justify-center w-5 h-5'>
              M
            </span>
            <span className='rounded-full flex items-center justify-center w-5 h-5'>
              T
            </span>
            <span className='rounded-full flex items-center justify-center w-5 h-5'>
              W
            </span>
            <span className='rounded-full flex items-center justify-center w-5 h-5'>
              T
            </span>
            <span className='rounded-full flex items-center justify-center w-5 h-5'>
              F
            </span>
            <span className='rounded-full flex items-center justify-center w-5 h-5 '>
              S
            </span>
          </div>
        </div>
        {/* ends group */}
        <div className='flex flex-col w-full'>
          <p className='mb-2'>Ends</p>
          <div className='flex-row'>
            {/* Never Group */}
            <div className='mb-2'>
              <CustomRadioButton
                radioName='ends'
                radioID='never'
                labelText='Never'
                radioGroupClass='w-4/12'
                otherInputClass='radioActiveClass'
              ></CustomRadioButton>
            </div>
            {/* On Group */}
            <div className='flex flex-row mb-2 relative w-full'>
              <CustomRadioButton
                radioName='ends'
                radioID='on'
                labelText='On'
                radioGroupClass='w-4/12'
                otherInputClass='radioActiveClass'
              ></CustomRadioButton>
              <span
                className=' bg-gray-100 p-1 px-2 flex rounded justify-center hover:cursor-pointer'
                onClick={showCalendarHandler}
                ref={dateRef}
              >
                {formattedDate}
              </span>
              {showCalendar && <CustomCalendar />}
            </div>

            {/* After Group */}
            <div className=' flex flex-row'>
              <CustomRadioButton
                radioName='ends'
                radioID='after'
                labelText='After'
                radioGroupClass='w-4/12'
                otherInputClass='radioActiveClass'
              ></CustomRadioButton>
              <span className='flex flex-row items-center py-1 px-2 bg-gray-100 rounded justify-center'>
                {noOfOcurrence}
                <span>
                  <RiArrowUpSLine
                    className='text-xs mx-1 hover:cursor-pointer hover:font-bold '
                    onClick={handleIncrement}
                  ></RiArrowUpSLine>
                  <RiArrowDownSLine
                    className='text-xs mx-1 hover:cursor-pointer hover:font-bold'
                    onClick={handleDecrement}
                  ></RiArrowDownSLine>
                </span>
                Ocurrences
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomRecurrence;
