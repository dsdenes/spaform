import React from 'react';
import TextField from 'material-ui/TextField';
import './style.css';

const Input = ({type, name, hintText, errorText, onChange}) => (
  <TextField
    type={type}
    name={name}
    hintText={hintText}
    floatingLabelText={hintText}
    errorText={errorText}
    className="input"
    onChange={onChange}
  />
);

export default Input;
