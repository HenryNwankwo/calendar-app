import React, { useContext, useEffect, useRef } from 'react';
import { AppContext } from '../App';

function DNRList() {
  return (
    <>
      <div className='h-auto w-57 rounded shadow-md py-3 absolute bg-white top-7 left-1 z-50'>
        <ul className='text-sm text-txt-color'>
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
        </ul>
      </div>
    </>
  );
}

export default DNRList;
