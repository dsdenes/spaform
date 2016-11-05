import React from 'react';
import { connect } from 'react-redux';
import Notification from '../../componets/notification'
import { hideNotification } from '../../actions/notification';
import './style.css';

const NotificationForm = ({successful, open, hideNotification}) => (
  <Notification
    open={open}
    message={successful ? 'Your application has been saved!' : 'Something very bad happened!'}
    onRequestClose={() => hideNotification('form')}
  />
);

const mapStateToProps = (state, ownProps) => ({
  open: state.notification.form.open,
  successful: state.notification.form.successful
});

const mapDispatchToProps = (dispatch) => {
  return {
    hideNotification: (name) => dispatch(hideNotification(name)),
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NotificationForm);
