import React, { useEffect } from 'react';

const Modal = ({modalContent, closeModal, removeItem}) => {
  useEffect(()=>{
    setTimeout(() =>{
      closeModal()
    }, 3000)
  })
  return <div className='modal'>
    <p>{modalContent}</p>
  </div>;
};

export default Modal;
