import React from 'react';
import loading from '../images/loader.gif';

function Loading() {
  return (
    <div className="loading">
      <img src={loading} alt="Loading" className='loadinggif'/>
    </div>
  );
}

export default Loading;