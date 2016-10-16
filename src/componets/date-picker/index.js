import React from 'react';
import DatePicker from 'material-ui/DatePicker';
import './style.css';

const Input = ({hintText, name, errorText, onChange}) => (
  <DatePicker
    hintText={hintText}
    floatingLabelText={hintText}
    name={name}
    errorText={errorText}
    onChange={onChange}
    className="datePicker"
  />
);

export default Input;
