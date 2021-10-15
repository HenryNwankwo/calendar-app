import React from 'react';
import { content } from './../assets/content';

const MonthYearPopUp = () => {
  return (
    <div>
      <div>
        <span>2021</span>
      </div>
      <div>
        {content.map((id, name) => {
          return <span key={id}>{name}</span>;
        })}
      </div>
    </div>
  );
};

export default MonthYearPopUp;
