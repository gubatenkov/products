import React from 'react';
import imgPath from 'assets/images/red-cross.svg';

const InputBtn = ({ handleClick, visible }) => {
  return (
    <button
      className={visible ? 'input-btn' : 'input-btn hide'}
      onClick={handleClick}
      tabIndex='-1'
    >
      <img src={imgPath} alt='clear field' />
    </button>
  );
};

export default InputBtn;
