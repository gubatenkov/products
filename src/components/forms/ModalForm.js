import React from 'react';

import { Button, ModalFormItem } from 'components';
import { useForm } from 'utils/hooks';
import { validate } from 'utils/functions';

const ModalForm = ({ onClose }) => {
  const {
    values,
    errors,
    isFocused,
    onFocus,
    onBlur,
    clearInput,
    handleChange,
    handleSubmit,
  } = useForm(validate, onClose);

  return (
    <form className='modal-body' onSubmit={handleSubmit}>
      <ModalFormItem
        className='modal-input name'
        name='name'
        type='text'
        placeholder='Name'
        variant='outlined'
        onBlur={onBlur}
        onFocus={onFocus}
        value={values.name}
        onChange={handleChange}
        error={!!errors.name}
        helperText={!isFocused.name && errors.name}
        clearInput={clearInput}
        isFocused={isFocused.name}
      />

      <ModalFormItem
        className='modal-input number'
        name='number'
        type='text'
        placeholder='Number'
        variant='outlined'
        onBlur={onBlur}
        onFocus={onFocus}
        value={values.number}
        onChange={handleChange}
        error={!!errors.number}
        helperText={!isFocused.number && errors.number}
        clearInput={clearInput}
        isFocused={isFocused.number}
      />

      <Button className='modal-btn' type='submit'>
        Order
      </Button>
    </form>
  );
};

export default ModalForm;
