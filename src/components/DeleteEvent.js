import React, { useContext } from 'react';
import { AppContext } from '../App';
import CustomButton from './CustomButton';

function DeleteEvent({ theEventID }) {
  const { deleteEventPopUp, setDeleteEventPopUp } = useContext(AppContext);
  return (
    <>
      <div
        className='h-41 w-96 rounded flex flex-col flex-nowrap bg-white shadow-md px-5 py-9 justify-between absolute right-0 top-3'
        key={theEventID}
      >
        <div className='w-full'>
          <p className='w-full text-base text-center'>
            Are you sure you want to delete this event?
          </p>
        </div>

        {/*Cancel and Delete Buttons*/}
        <div className='w-full flex justify-between px-6'>
          <CustomButton
            allClasses={
              'border-1 bg-white text-primary-color text-bg-primary-color text-sm px-11 hoverOnGreen-2 hover:border-green-100 shadow-md'
            }
            textValue={'Cancel'}
          ></CustomButton>
          <CustomButton
            allClasses={
              'border-none bg-red-600 text-white text-sm px-11 hover:bg-red-400 hover:border-red-100 shadow-md'
            }
            textValue={'Delete'}
          ></CustomButton>
        </div>
      </div>
    </>
  );
}

export default DeleteEvent;
