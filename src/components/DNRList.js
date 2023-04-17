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
  const { customRecurrOpen, setCustomRecurrOpen } = useContext(AppContext);
  const [selectedOption, setSelectedOption] = useState(null);

  /* Handling the change in options */

  const handleOptionChange = (selected) => {
    setSelectedOption(selected);
    if (selected.value === 'Custom') {
      setCustomRecurrOpen(true);
      console.log('The option is:', selected.value);
    } else {
      setCustomRecurrOpen(false);
      console.log('The option is:', selected);
    }
  };

  /* Creating a custom dropdown and the sync indicator for the do not repeat box */
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
          defaultValue={selectedOption || options[0]}
          components={{ DropdownIndicator: CustomDropdownIndicator }}
          placeholder='Do not Repeat'
          onChange={handleOptionChange}
          className='customSelect pl-4 flex relative text-icon-color border-b-2 border-solid border-bg-color-grey'
          dropDownIndicator={false}
          minMenuHeight={'100%'}
          styles={{
            control: (baseStyle, state) => ({
              border: 0,
              width: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
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
            menu: (baseStyle) => ({
              ...baseStyle,
              width: '226px',
              height: '229px',
              outline: 'none',
            }),

            indicatorSeparator: () => ({
              display: 'none',
            }),
          }}
        ></Select>
      </div>
    </>
  );
}

export default DNRList;
