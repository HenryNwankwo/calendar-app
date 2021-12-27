import React, { useContext } from 'react';
import {
  FaTimes,
  FaRegTimesCircle,
  FaRegCalendarAlt,
  FaRegClock,
  FaCaretDown,
} from 'react-icons/fa';
import { FiEdit, FiCalendar } from 'react-icons/fi';
import { RiArrowDownSLine } from 'react-icons/ri';
import Modal from 'react-modal';
import { AppContext } from '../App';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';
import CustomInputLabel from './CustomInputLabel';

//Setted add event modal oveylay color and app root
Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.5)';
Modal.setAppElement('#root');
function AddEvent() {
  const { isAddEventOpen, setIsAddEventOpen, whichTab, setWhichTab } =
    useContext(AppContext);

  return (
    <>
      {/* Add event and Reminder modal */}
      <Modal
        isOpen={isAddEventOpen}
        onRequestClose={() => setIsAddEventOpen(false)}
        contentLabel='Add Event'
        className='absolute bottom-auto right-0 left-0 -translate-x-1/2 -translate-y-1/2 mx-auto bg-white w-screen h-screen md:w-106 outline-none'
      >
        <div className='flex justify-center items-center w-full h-14 md:bg-primary-color md:text-white px-6'>
          <span
            className='flex justify-center items-center cursor-pointer md:order-3'
            onClick={() => setIsAddEventOpen(false)}
          >
            <FaTimes className='md:hidden' />
            <FaRegTimesCircle className='hidden md:flex text-lg' />
          </span>
          <p className='justify-self-center mx-auto font-bold text-lg'>
            Add New Event
          </p>
        </div>

        {/* Event and Reminder navigation tabs  group*/}
        <div className='flex justify-between px-6 md:mt-3'>
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
          <div className='flex px-6 mt-5'>
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
                  otherClasses='px-6'
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
              <div className='mt-6 flex justify-between relative flex-wrap'>
                {/* Start Time group */}
                <div className='flex relative w-5/12 md:w-4/12'>
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
                          <FaRegClock className='text-lg text-icon-color' />
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

                <div className='flex relative w-5/12 md:w-4/12'>
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
                          <FaRegClock className='text-lg text-icon-color' />
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
                <div className='flex relative mt-6 md:mt-0 w-5/12 md:w-3/12'>
                  <CustomTextInput
                    name='timeZone'
                    id='timeZone'
                    placeholder='+0 GMT'
                    otherClasses='pl-1 pr-6'
                    inputGroupClasses='flex flex-col relative'
                    labelComponent={
                      <CustomInputLabel
                        name='timeZone'
                        otherClasses='text-xs font-bold absolute left-0 -top-4'
                        labelIcon='Time Zone'
                      />
                    }
                    secondLabel={
                      <CustomInputLabel
                        name='timeZone'
                        otherClasses='absolute right-0 mt-1'
                        labelIcon={
                          <RiArrowDownSLine className='text-icon-color text-lg' />
                        }
                      />
                    }
                  />
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </form>
          </div>
        )}
        {whichTab === 'reminder' && (
          //Create Reminder form groups
          <div className=''>This is the reminder trial</div>
        )}
      </Modal>
    </>
  );
}

export default AddEvent;
