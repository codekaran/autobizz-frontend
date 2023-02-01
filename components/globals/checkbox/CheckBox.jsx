import React from 'react';
import './CheckBox.module.scss';

const CheckBox = ({name}) => {
    return (
      <div className='.checkbox'><input className='.check' type="checkbox"/>{name}</div>
    );
}

export default CheckBox;