import React from 'react';
import CustomTextInput from './CustomTextInput';
import CustomInputLabel from './CustomInputLabel';
import { FiCalendar, FiClock } from 'react-icons/fi';
import { RiArrowDownSLine } from 'react-icons/ri';
import Select from 'react-select';
import { endOfDay, startOfDay, eachMinuteOfInterval, format } from 'date-fns';

function DateAndTimeGroup() {
  const startTime = startOfDay(new Date());
  const endTime = endOfDay(new Date());

  const timeArray = eachMinuteOfInterval(
    {
      start: startTime,
      end: endTime,
    },
    {
      step: 15,
    }
  );

  const options = timeArray.map((time) => ({
    value: format(time, 'HH:mm'),
    label: format(time, 'hh:mm a'),
  }));

  //Custom Dropdown indicator for time
  const CustomIndicator = (props) => {
    const { innerProps, innerRef } = props;
    return (
      <span ref={innerRef} {...innerProps}>
        <FiClock className='text-lg text-icon-color absolute left-0' />
        <RiArrowDownSLine className='text-icon-color text-lg' />
      </span>
    );
  };

  const timeHandler = () => {};
  return (
    <>
      {/* date and time group */}
      <div className='mt-6 flex justify-between'>
        {/* date group */}
        <div className='flex relative w-5/12'>
          <CustomTextInput
            name='date'
            id='date'
            placeholder='Date'
            otherClasses='px-6'
            labelComponent={
              <CustomInputLabel
                name='date'
                otherClasses='hover:cursor-pointer'
                labelIcon={<FiCalendar className='text-lg text-icon-color' />}
              />
            }
          />
          <CustomInputLabel
            name='startDate'
            otherClasses='absolute right-0 mt-1 hover:cursor-pointer'
            labelIcon={<RiArrowDownSLine className='text-icon-color text-lg' />}
          />
        </div>

        {/* time group */}

        <div className='flex relative w-5/12'>
          <Select
            options={options}
            placeholder='Time'
            menuPlacement='auto'
            menuPortalTarget={document.body}
            menuShouldScrollIntoView={true}
            onChange={timeHandler}
            className='customSelect pl-4 flex relative text-icon-color border-b-2 border-solid border-bg-color-grey cursor-pointer w-full'
            components={{ DropdownIndicator: CustomIndicator }}
            dropDownIndicator={false}
            minMenuHeight={'100%'}
            styles={{
              control: (baseStyle, state) => ({
                border: 0,
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                paddingLeft: 0,
              }),
              indicatorSeparator: () => ({
                display: 'none',
              }),
              menu: (baseStyle, state) => ({
                ...baseStyle,
                width: '106px',
                height: '221px',
                outline: 'none',
                borderRadius: '4px',
                overflowY: 'hidden',
                fontSize: '13px',
              }),
              menuList: (base) => ({
                ...base,
                height: '221px',
                '::-webkit-scrollbar': {
                  width: '8px',
                  height: '0px',
                },
                '::-webkit-scrollbar-track': {
                  background: '#E1FDF4',
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
                height: 'auto',
                padding: '5px 16px',
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
        </div>
      </div>
    </>
  );
}

export default DateAndTimeGroup;
