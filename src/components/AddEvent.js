import React, { useContext, useEffect, useRef, useState } from 'react';
import { FiEdit, FiCalendar, FiClock } from 'react-icons/fi';
import {
  RiArrowDownSLine,
  RiCloseLine,
  RiCloseCircleLine,
} from 'react-icons/ri';
import Modal from 'react-modal';
import { CirclePicker } from 'react-color';
import Select from 'react-select';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { AppContext } from '../App';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import CustomInputLabel from './CustomInputLabel';
import ToggleSwitch from './ToggleSwitch';
import DateAndTimeGroup from './DateAndTimeGroup';
import { EditorState } from 'draft-js';
import DoNotRepeatGroup from './DoNotRepeatGroup';
import { gmtOptions } from './../assets/gmtOptions';

//Setted add event modal oveylay color and app root
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.5)';
Modal.setAppElement('#root');
function AddEvent() {
  const colorPickerRef = useRef(null);
  const [isMenuUp, setIsMenuUp] = useState(false);
  const editorState = EditorState.createEmpty();
  const { isAddEventOpen, setIsAddEventOpen, whichTab, setWhichTab } =
    useContext(AppContext);
  const [color, setColor] = useState('#00B87C');
  const [isColorClicked, setIsColorClicked] = useState(false);
  const [isSelected, setIsSelected] = useState(null);
  const [descriptionState, setDescriptionState] = useState(editorState);

  //onchange funnction for the editor state
  const onEditorStateChange = (editorState) => {
    setDescriptionState(editorState);
  };

  //Custom Indicator for timezone
  const CustomIndicator = (props) => {
    const { innerRef, innerProps } = props;
    return (
      <span ref={innerRef} {...innerProps}>
        <RiArrowDownSLine className='text-icon-color text-lg' />
      </span>
    );
  };
  //Handles the input event of he timezone select menu
  const timeZoneHandler = (e) => {
    console.log(e);
  };

  //Handles the menu placement of the colorPicker
  useEffect(() => {
    if (colorPickerRef.current) {
      const parentRect =
        colorPickerRef.current.parentElement.getBoundingClientRect();
      const colorPickerRect = colorPickerRef.current.getBoundingClientRect();
      const isUp = parentRect.top + colorPickerRect.height > window.innerHeight;

      setIsMenuUp(isUp);
    }
  }, [isMenuUp]);

  //options for color picker
  const colorOptions = [
    '#2573F6',
    '#8CB7FF',
    '#8F3985',
    '#C2185B',
    '#FF9800',
    '#FFEB3B',
    '#00B87C',
    '#D0E888',
    '#454545',
    '#999999',
  ];

  //Handles the events of color Clicked.
  const colorClickedHandler = (theColor) => {
    setIsColorClicked(true);
    setColor(theColor);
    setIsSelected(theColor);
  };
  return (
    <>
      {/* Add event and Reminder modal */}
      <Modal
        isOpen={isAddEventOpen}
        onRequestClose={() => setIsAddEventOpen(false)}
        contentLabel='Add Event'
        className='absolute bottom-auto top-0 right-0 left-0 -translate-x-1/2 -translate-y-1/2 mx-auto bg-white w-screen h-auto max-h-screen md:w-106 outline-none overflow-y-auto scrollBar scrollBar-border-radius'
      >
        <div
          className='flex justify-center items-center w-full h-14 md:bg-primary-color md:text-white px-6'
          onClick={() => setIsColorClicked(false)}
        >
          <span
            className='flex justify-center items-center cursor-pointer md:order-3'
            onClick={() => setIsAddEventOpen(false)}
          >
            <RiCloseLine className='md:hidden text-xl' />
            <RiCloseCircleLine className='hidden md:flex text-xl' />
          </span>
          <p className='justify-self-center mx-auto font-bold text-xl'>
            Add New Event
          </p>
        </div>

        {/* Event and Reminder navigation tabs  group*/}
        <div
          className='flex justify-between px-6 md:mt-3'
          onClick={() => setIsColorClicked(false)}
        >
          <CustomButton
            allClasses={`text-primary-color px-10 ${
              whichTab === 'event' && 'bg-light-green'
            }`}
            onClick={() => setWhichTab('event')}
            textValue='Event'
          />
          <CustomButton
            allClasses={`text-primary-color px-6 ${
              whichTab === 'reminder' && 'bg-light-green'
            }`}
            onClick={() => setWhichTab('reminder')}
            textValue='Reminder'
          />
        </div>

        {whichTab === 'event' && (
          //Create event form groups
          <div
            className='flex px-6 mt-5'
            onClick={() => isColorClicked && setIsColorClicked(false)}
          >
            <form action='' className='w-full'>
              {/*  Add title group */}
              <div className='flex w-full relative'>
                <CustomTextInput
                  placeholder='Add a title'
                  name='title'
                  id='title'
                  labelComponent={
                    <CustomInputLabel
                      name='title'
                      labelIcon={<FiEdit className='text-lg text-icon-color' />}
                    />
                  }
                  otherClasses='pl-6 pr-1'
                  inputGroupClasses='w-full'
                />
              </div>

              {/* Start and end dates group */}
              <div className='mt-6 flex justify-between'>
                {/* Start date group */}
                <div className='flex relative w-5/12'>
                  <CustomTextInput
                    name='startDate'
                    id='startDate'
                    placeholder='Start Date'
                    otherClasses='px-6'
                    labelComponent={
                      <CustomInputLabel
                        name='startDate'
                        labelIcon={
                          <FiCalendar className='text-lg text-icon-color' />
                        }
                      />
                    }
                  />
                  <CustomInputLabel
                    name='startDate'
                    otherClasses='absolute right-0 mt-1'
                    labelIcon={
                      <RiArrowDownSLine className='text-icon-color text-lg' />
                    }
                  />
                </div>

                {/* End date group */}

                <div className='flex relative w-5/12'>
                  <CustomTextInput
                    name='endDate'
                    id='endDate'
                    placeholder='End Date'
                    otherClasses='px-6'
                    labelComponent={
                      <CustomInputLabel
                        name='endDate'
                        otherClasses='mt-1'
                        labelIcon={
                          <FiCalendar className='text-lg text-icon-color' />
                        }
                      />
                    }
                    secondLabel={
                      <CustomInputLabel
                        name='endDate'
                        otherClasses='absolute right-0 mt-1'
                        labelIcon={
                          <RiArrowDownSLine className='text-icon-color text-lg' />
                        }
                      />
                    }
                  />
                </div>
              </div>
              {/* Start Time, End Time and Time zone groups */}
              <div className='mt-2 flex justify-between relative flex-wrap'>
                {/* Start Time group */}
                <div className='flex relative w-5/12 md:w-4/12 mt-3'>
                  <CustomTextInput
                    name='startTime'
                    id='startTime'
                    placeholder='Start Time'
                    otherClasses='px-6'
                    labelComponent={
                      <CustomInputLabel
                        name='startTime'
                        otherClasses='mt-1'
                        labelIcon={
                          <FiClock className='text-lg text-icon-color' />
                        }
                      />
                    }
                    secondLabel={
                      <CustomInputLabel
                        name='startTime'
                        otherClasses='absolute right-0 mt-1'
                        labelIcon={
                          <RiArrowDownSLine className='text-icon-color text-lg' />
                        }
                      />
                    }
                  />
                </div>

                {/* endtime group */}

                <div className='flex relative w-5/12 md:w-4/12 mt-3'>
                  <CustomTextInput
                    name='endTime'
                    id='endTime'
                    placeholder='End Time'
                    otherClasses='px-6'
                    labelComponent={
                      <CustomInputLabel
                        name='endTime'
                        otherClasses='mt-1'
                        labelIcon={
                          <FiClock className='text-lg text-icon-color' />
                        }
                      />
                    }
                    secondLabel={
                      <CustomInputLabel
                        name='endTime'
                        otherClasses='absolute right-0 mt-1'
                        labelIcon={
                          <RiArrowDownSLine className='text-icon-color text-lg' />
                        }
                      />
                    }
                  />
                </div>

                {/* Time zone group */}
                <div className='flex relative mt-6 md:mt-0 w-5/12 md:w-3/12 flex-col'>
                  <p className='text-sm font-semibold text-gray-800 mt-0'>
                    Timezone
                  </p>
                  <Select
                    options={gmtOptions}
                    placeholder='Time'
                    menuPlacement='auto'
                    defaultValue={gmtOptions[12]}
                    menuPortalTarget={document.body}
                    menuShouldScrollIntoView={true}
                    onChange={timeZoneHandler}
                    className='customSelect flex relative text-icon-color border-b-2 border-solid border-bg-color-grey cursor-pointer w-full text-sm h-6'
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
                      }),
                      indicatorSeparator: () => ({
                        display: 'none',
                      }),
                      menu: (baseStyle, state) => ({
                        ...baseStyle,
                        width: '96px',
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
              {/* All day toggle switch */}
              <div className='w-full mt-6'>
                <ToggleSwitch
                  toggleFor='allDaySwitch'
                  toggleName='allDaySwitch'
                  toggleId='allDaySwitch'
                  toggleText='All Day'
                  inputGroupClass='flex'
                  labelClasses='mr-2'
                />
              </div>
              {/* Event Description Group */}
              <div className='mt-6 w-full flex flex-col'>
                <p className='text-txt-color font-solid text-sm'>Description</p>
                <div>
                  <Editor
                    editorState={descriptionState}
                    toolbarClassName='toolbarClassName'
                    wrapperClassName='wrapperClassName'
                    editorClassName='editorClassName'
                    onEditorStateChange={onEditorStateChange}
                    toolbar={{
                      options: ['inline', 'list', 'embedded'],
                      inline: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ['bold', 'italic', 'underline'],
                      },

                      list: {
                        inDropdown: false,
                        className: undefined,
                        component: undefined,
                        dropdownClassName: undefined,
                        options: ['unordered', 'ordered'],
                      },
                      image: {},
                    }}
                    placeholder='Enter text here!'
                  />
                </div>
              </div>
              {/* Event tag and color group */}
              <div className='mt-6 flex flex-col w-full'>
                <p className='text-sm font-solid text-txt-color'>Event Tag</p>
                <div className='flex flex-row w-full'>
                  <CustomTextInput
                    placeholder='Enter the Event Tag'
                    otherClasses='w-8/12'
                  />
                  {/* Color Picker group */}
                  <div
                    className={`relative flex flex-row items-center hover:cursor-pointer ml-2 md:ml-10 w-3/12 `}
                    onClick={() => setIsColorClicked(!isColorClicked)}
                  >
                    <span
                      className='block rounded-full w-6 h-6'
                      style={{ backgroundColor: color }}
                    ></span>
                    <RiArrowDownSLine className='text-icon-color text-lg ml-2' />
                    <div className='absolute top-1 shadow-md flex justify-center items-center flex-wrap rounded py-2 mt-7 w-26 bg-white border-1 border-solid border-red-500'>
                      {colorOptions.map((eachColor) => (
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
                    {/*isColorClicked && (


                      
                      <div
                        className={`absolute bg-white top-0 left-0 shadow-md flex justify-center items-center rounded py-6 pl-5 mt-7 ${
                          isMenuUp ? 'top-full mb-2' : 'bottom-full mt-2'
                        }`}
                      >
                      
                         <CirclePicker
                          className='colorGroup absolute top-0 left-0 bg-white pl-4 pt-4 mt-2 shadow-md rounded'
                          width='118px'
                          color={color}
                          circleSpacing={22}
                          ref={colorPickerRef}
                          colors={colorOptions}
                          onChange={(updatedColor) =>
                            setColor(updatedColor.hex)
                          }
                        /> }
                      </div>
                    )*/}
                  </div>
                </div>
              </div>
              {/* Cancel and create event button groups */}
              <div className='flex justify-between mb-6 mt-10 md:mt-16 flex-col-reverse sm:flex-row '>
                <CustomButton
                  allClasses='border-1 bg-white text-primary-color text-bg-primary-color text-sm px-11 hoverOnGreen-2 hover:border-light-green shadow-md mt-2 sm:mt-0'
                  textValue='Cancel'
                  onClick={() => setIsAddEventOpen(false)}
                />
                <CustomButton
                  allClasses='border-1 bg-primary-color text-white text-sm px-11 hoverOnGreen hover:border-green-100 shadow-md outline-none'
                  textValue='Create'
                />
              </div>
            </form>
          </div>
        )}
        {whichTab === 'reminder' && (
          //Create Reminder form groups
          <div
            className='flex px-6 mt-5'
            onClick={() => isColorClicked && setIsColorClicked(false)}
          >
            <form action='' className='w-full'>
              {/*  Add title group */}
              <div className='flex w-full relative'>
                <CustomTextInput
                  placeholder='Add a title'
                  name='title'
                  id='title'
                  labelComponent={
                    <CustomInputLabel
                      name='title'
                      otherClasses='hover:cursor-pointer'
                      labelIcon={<FiEdit className='text-lg text-icon-color' />}
                    />
                  }
                  otherClasses='pl-6 pr-1'
                  inputGroupClasses='w-full'
                />
              </div>

              {/* date and time group */}
              <DateAndTimeGroup></DateAndTimeGroup>

              {/* Does not Repeat group */}

              <DoNotRepeatGroup inputLabelClass='md:right-17'></DoNotRepeatGroup>
              {/* Save Reminder button group */}
              <div className='flex justify-end mb-6 mt-16'>
                <CustomButton
                  allClasses='border-1 bg-primary-color text-white text-sm px-11 hoverOnGreen hover:border-green-100 shadow-md hover:cursor-pointer'
                  textValue='Save'
                />
              </div>
            </form>
          </div>
        )}
      </Modal>
    </>
  );
}

export default AddEvent;
