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

  const CustomDropdownIndicator = (props) => {
    const { innerProps, innerRef } = props;
    return (
      <>
        <AiOutlineSync className='text-lg text-icon-color absolute left-0' />
        <RiArrowDropDownFill
          className='text-icon-color text-3xl'
          ref={innerRef}
          {...innerProps}
        />
      </>
    );
  };

  return (
    <>
      <div className='h-auto w-full rounded hover:cursor-pointer'>
        <Select
          options={options}
          menuPlacement='auto'
          menuPortalTarget={document.body}
          menuShouldScrollIntoView={true}
          defaultValue={options[0]}
          components={{ DropdownIndicator: CustomDropdownIndicator }}
          placeholder='Do not Repeat'
          onChange={setDNRValue}
          className='customSelect pl-4 flex relative text-icon-color w-auto'
          dropDownIndicator={false}
          minMenuHeight={'100%'}
          styles={{
            control: (baseStyle, state) => ({
              border: 0,
              borderBottom: '1px',
              width: '100',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }),
            option: (baseStyle, state) => ({
              ...baseStyle,
              height: 'auto',
              padding: '4px 16px 4px 16px',
              fontSize: '13px',
              color: 'GrayText',
              ':hover': {
                backgroundColor: '#E1FDF4',
                cursor: 'pointer',
              },
              ':selected': {
                background: 'green',
              },
            }),
            menu: (baseStyle) => ({
              ...baseStyle,
              width: '226px',
              height: '229px',
              background: 'white',
              borderRadius: '4px',
              boxShadow: '1px 1px 2px grey',
            }),

            indicatorSeparator: () => ({
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
