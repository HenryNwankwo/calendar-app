import React, { useContext } from 'react';
import { FaTimes, FaRegTimesCircle, FaEdit } from 'react-icons/fa';
import Modal from 'react-modal';
import { AppContext } from '../App';
import CustomButton from './CustomButton';
import CustomTextInput from './CustomTextInput';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.5)';
Modal.setAppElement('#root');
function AddEvent() {
  const { isAddEventOpen, setIsAddEventOpen, whichTab, setWhichTab } =
    useContext(AppContext);

  return (
    <>
      <Modal
        isOpen={isAddEventOpen}
        onRequestClose={() => setIsAddEventOpen(false)}
        contentLabel='Add Event'
        className='absolute bottom-auto right-0 left-0 -translate-x-1/2 -translate-y-1/2 mx-auto bg-white w-screen h-screen md:w-106 outline-none'
      >
        <div className='flex justify-center items-center w-full h-18 md:bg-primary-color md:text-white px-6'>
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
          <div className='flex px-6 mt-5'>
            <form action='' className='w-full'>
              <div className='flex w-full relative'>
                <CustomTextInput
                  placeholder='Add a title'
                  name='title'
                  id='title'
                  labelComponent={
                    <FaEdit className='text-xl text-icon-color' />
                  }
                  otherClasses='pl-8'
                />
              </div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </form>
          </div>
        )}
        {whichTab === 'reminder' && (
          <div className=''>This is the reminder trial</div>
        )}
      </Modal>
    </>
  );
}

export default AddEvent;
