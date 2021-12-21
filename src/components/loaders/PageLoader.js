import React from 'react';
import { BeatLoader } from 'react-spinners';

const PageLoader = () => {
  return (
    <div className='h-screen w-screen flex items-center justify-center bg-gray-900'>
      <BeatLoader size={10} color='#00B87C' loading />
    </div>
  );
};

export default PageLoader;
