import React from 'react';
import Snackbar from 'material-ui/Snackbar';
import './style.css';

const Notification = ({message, open, onRequestClose}) => (
  <Snackbar
    open={open}
    message={message}
    autoHideDuration={4000}
    onRequestClose={onRequestClose}
  />
);

export default Notification;
