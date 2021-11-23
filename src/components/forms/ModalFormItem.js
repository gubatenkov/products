import React, { useEffect, useState } from 'react';
import { TextField } from '@mui/material';

import { InputBtn } from 'components';

const ModalFormItem = ({
  clearInput,
  name,
  value,
  isFocused,
  error,
  ...props
}) => {
  const [isVisible, setVisible] = useState(false);

  useEffect(() => {
    value && error && !isFocused ? setVisible(true) : setVisible(false);
  }, [value, error, isFocused, name]);

  return (
    <div className='modal-body__item'>
      <TextField {...props} name={name} value={value} error={error} />
      <InputBtn handleClick={() => clearInput(name)} visible={isVisible} />
    </div>
  );
};

export default ModalFormItem;
