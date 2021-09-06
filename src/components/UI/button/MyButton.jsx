import React from 'react';
import Styles from './MyButton.module.css';

const MyButton = ({ children, ...props }) => {
  return (
    <button {...props} className={Styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
