import React from 'react';
import Modal from './Modal';

const TopLevelComponent = ({ open }) => {
  return (
    <div>
      <p>Some top level component info</p>
      {open && <Modal />}
      
    </div>
  );
}

export default TopLevelComponent;
