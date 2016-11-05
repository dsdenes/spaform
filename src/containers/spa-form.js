import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import OccupationInput from '../containers/occupation-input'
import Input from '../componets/input/index';
import DatePicker from '../componets/date-picker/index';
import Button from '../componets/button/index';
import './spa-form.css';

import { inputChanged } from '../actions/form/input';
import { validateForm } from '../actions/form/form';

export class SPAForm extends Component {
  render() {
    const {
      errors,
      inputChanged,
      validateForm
    } = this.props;

    return (<form
      className="form"
      onSubmit={validateForm}
    >
      <Input
        name="name"
        hintText="Name"
        errorText={errors.name}
        onChange={event => inputChanged('name', event.target.value)}
      />
      <Input
        type="email"
        name="email"
        hintText="E-mail"
        errorText={errors.email}
        onChange={event => inputChanged('email', event.target.value)}
      />
      <OccupationInput
        inputChanged={inputChanged}
      />
      <DatePicker
        name="birthday"
        hintText="Birthday"
        errorText={errors.birthday}
        onChange={(event, date) => inputChanged('birthday', date)}
      />
      <Button
        text="Send form"
        type="submit"
      />
    </form>);
  }
}

const mapStateToProps = (state, ownProps) => ({
  errors: state.form.errors,
  values: state.form.values
});

const mapDispatchToProps = (dispatch) => {
  return {
    inputChanged: (name, value) => dispatch(inputChanged(name, value)),
    validateForm: event => dispatch(validateForm(event))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SPAForm);
