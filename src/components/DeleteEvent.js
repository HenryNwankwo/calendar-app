import React, { useContext } from 'react';
import { AppContext } from '../App';
import CustomButton from './CustomButton';

function DeleteEvent({ theEventID }) {
  const { deleteEventPopUp, setDeleteEventPopUp } = useContext(AppContext);
  return (
    <div className='bg-black bg-opacity-40 flex justify-center items-center fixed top-0 left-0 w-screen min-h-full'>
      <div
        className='h-auto md:h-41 w-full md:w-96 rounded flex flex-col flex-nowrap bg-white shadow-md px-5 py-9 md:justify-between'
        key={theEventID}
      >
        <div className='w-full'>
          <p className='w-full text-base text-center'>
            Are you sure you want to delete this event?
          </p>
        </div>

        {/*Cancel and Delete Buttons*/}
        <div className='w-full flex flex-col md:flex-row justify-between px-6 mt-3'>
          <CustomButton
            allClasses={
              'border-1 bg-white text-primary-color text-bg-primary-color text-sm px-11 hoverOnGreen-2 hover:border-green-100 shadow-md'
            }
            textValue={'Cancel'}
          ></CustomButton>
          <CustomButton
            allClasses={
              'border-none bg-red-600 text-white text-sm px-11 hover:bg-red-400 hover:border-red-100 shadow-md mt-3 md:mt-0'
            }
            textValue={'Delete'}
          ></CustomButton>
        </div>
      </div>
    </div>
  );
}

export default DeleteEvent;
