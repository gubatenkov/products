import React from 'react';
import { Modal } from '@mui/material';

import { Button, ModalForm } from 'components';
import x from 'assets/images/x.svg';

const CustomModal = ({ currentProduct, handleClose, open }) => {
  const category = currentProduct?.category ?? 'Category';
  const title =
    currentProduct?.name?.charAt(0).toUpperCase() +
      currentProduct?.name?.slice(1) ?? 'Name';
  const price = currentProduct?.price?.toFixed(2) ?? 'Price';

  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        padding: '0 1.5rem 0',
        backgroundColor: 'rgba(0, 0, 0, .8)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div className='modal'>
        <Button className='modal-btn__close' onClick={handleClose}>
          <img src={x} alt='close modal' />
        </Button>

        <div className='modal-header'>
          <p className='modal-header__category'>{category}</p>
          <h1 className='modal-header__title'>{title}</h1>
          <p className='modal-header__price'>{price}</p>
        </div>

        <ModalForm onClose={handleClose} />
      </div>
    </Modal>
  );
};

export default CustomModal;
