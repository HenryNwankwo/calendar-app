import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../App';
import Select from 'react-select';
import { options } from '../assets/dnrOptions';
import { RiArrowDropDownFill } from 'react-icons/ri';
function DNRList() {
  const [dNRValue, setDNRValue] = useState(null);
  return (
    <>
      <div className='h-auto w-56 rounded py-3 absolute bg-white top-7 left-1 z-50'>
        <Select
          options={options}
          menuPlacement='auto'
          defaultValue={options[0]}
          placeholder='Do not Repeat'
          onChange={setDNRValue}
          className='text-sm text-txt-color customSelect'
          styles={{
            control: (baseStyle, state) => ({
              border: 0,
              outlineColor: state.isFocused ? 'red' : 'green',
              width: '176px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              ':before': {
                fontFamily: 'Font Awesome 6 Free',
                content: '"\f2f1"',
              },
            }),
            option: (baseStyle, state) => ({
              width: '100',
              height: 'auto',
              padding: '4px 16px 4px 16px',
              ':hover': {
                backgroundColor: '#E1FDF4',
                cursor: 'pointer',
              },
            }),
          }}
        ></Select>
        {/*  <ul className='text-sm text-txt-color'>
          <li className='px-4 py-1 hover:cursor-pointer hover:text-black hover:bg-light-green'>
            Do not repeat
          </li>
          <li className='px-4 py-1 hover:cursor-pointer hover:text-black hover:bg-light-green'>
            Daily
          </li>
          <li className='px-4 py-1 hover:cursor-pointer hover:text-black hover:bg-light-green'>
            Weekly on Wednesday
          </li>
          <li className='px-4 py-1 hover:cursor-pointer hover:text-black hover:bg-light-green'>
            Monthly
          </li>
          <li className='px-4 py-1 hover:cursor-pointer hover:text-black hover:bg-light-green'>
            Yearly
          </li>
          <li className='px-4 py-1 hover:cursor-pointer hover:text-black hover:bg-light-green'>
            Every Weekday (Monday to Friday)
          </li>
          <li className='px-4 py-1 hover:cursor-pointer hover:text-black hover:bg-light-green'>
            Custom...
          </li>
        </ul> */}
      </div>
    </>
  );
}

export default DNRList;
