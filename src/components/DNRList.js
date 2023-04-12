import React, { useContext, useEffect, useRef, useState } from 'react';
import { AppContext } from '../App';
import Select, { components } from 'react-select';
import { options } from '../assets/dnrOptions';
import { RiArrowDropDownFill } from 'react-icons/ri';
import CustomTextInput from './CustomTextInput';
import CustomInputLabel from './CustomInputLabel';
import { AiOutlineSync } from 'react-icons/ai';

function DNRList() {
  const [dNRValue, setDNRValue] = useState(null);
  const { dnrOpenState, setDnrOpenState } = useContext(AppContext);
  const dnrListRef = useRef();

  const customControl = (props) => {
    return (
      <components.Control {...props}>
        <div
          className={`flex relative w-1/2 justify-center ${props.doNotRepeatGroupClass}`}
          ref={props.dnrListRef}
        >
          <CustomTextInput
            name='doNotRepeat'
            id='doNotRepeat'
            placeholder='Do not Repeat'
            otherClasses='px-6 border-none'
            labelComponent={
              <CustomInputLabel
                name='doNotRepeat'
                otherClasses='hover:cursor-pointer'
                labelIcon={
                  <AiOutlineSync className='text-lg text-icon-color' />
                }
              />
            }
            onClick={() => setDnrOpenState(!dnrOpenState)}
          />
          <CustomInputLabel
            name='doNotRepeat'
            otherClasses='absolute right-0 mt-1 hover:cursor-pointer'
            labelIcon={
              <RiArrowDropDownFill className='text-icon-color text-3xl' />
            }
          />
          {/* Do not repeat list dropdown */}
          {dnrOpenState && <DNRList></DNRList>}
        </div>
      </components.Control>
    );
  };

  return (
    <>
      <div className='h-auto w-full rounded'>
        <Select
          options={options}
          menuPlacement='auto'
          menuPortalTarget={document.body}
          menuShouldScrollIntoView={false}
          components={{ customControl }}
          defaultValue={options[0]}
          placeholder='Do not Repeat'
          onChange={setDNRValue}
          className='text-sm text-txt-color customSelect pl-3 block'
          dropDownIndicator={false}
          minMenuHeight={'100%'}
          styles={{
            control: (baseStyle, state) => ({
              border: 0,
              width: '100',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              '::before': {
                fontFamily: 'Font Awesome 6 Free',
                content: '"\f0f1"',
                display: 'block',
              },
              '::after': {
                fontFamily: 'Font Awesome 6 Free',
                content: '"\f0d7"',
                display: 'block',
              },
            }),
            option: (baseStyle, state) => ({
              width: 'auto',
              height: 'auto',
              padding: '4px 16px 4px 16px',
              ':hover': {
                backgroundColor: '#E1FDF4',
                cursor: 'pointer',
              },
            }),

            indicatorSeparator: () => ({
              display: 'none',
            }),
            dropdownIndicator: () => ({
              display: 'none',
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
