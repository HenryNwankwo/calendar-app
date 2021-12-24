import React, { useContext } from 'react';
import { FaTimes, FaRegTimesCircle } from 'react-icons/fa';
import Modal from 'react-modal';
import { AppContext } from '../App';

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.3)';

function AddEvent() {
  const { isAddEventOpen, setIsAddEventOpen } = useContext(AppContext);

  return (
    <>
      <Modal
        isOpen={() => isAddEventOpen}
        onRequestClose={() => setIsAddEventOpen(false)}
        contentLabel='Add Event'
        className='absolute md:left-1/4 bg-white bottom-auto right-auto -translate-x-1/2 -translate-y-1/2 w-screen -mr-1/2 h-screen md:w-1/2 outline-none'
      >
        <div className='flex justify-center items-center w-full h-18 md:bg-primary-color md:text-white px-6'>
          <span
            className='flex justify-center items-center cursor-pointer md:order-3'
            onClick={() => setIsAddEventOpen(false)}
          >
            <FaTimes className='md:hidden' />
            <FaRegTimesCircle className='hidden md:flex' />
          </span>
          <p className='justify-self-center mx-auto font-bold text-lg'>
            Add New Event
          </p>
        </div>
        <div></div>
        <div></div>
      </Modal>
    </>
  );
}

export default AddEvent;
