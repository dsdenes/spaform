import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './style.css';

const Button = ({text, type}) => (
  <RaisedButton
    label={text}
    type={type}
    className="button"
  />
);

export default Button;
