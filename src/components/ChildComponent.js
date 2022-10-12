import React from 'react';

const ChildComponent = (props) => {
  
  return (
    <div>
      <p>ChildComponent</p>
      {JSON.stringify(props)}
    </div>
  );
}

export default ChildComponent;
        