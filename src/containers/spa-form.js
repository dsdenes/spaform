import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import InputAutocomplete from '../componets/input-autocomplete/index';
import Input from '../componets/input/index';
import DatePicker from '../componets/date-picker/index';
import Button from '../componets/button/index';
import './spa-form.css';

class SPAForm extends Component {
  render() {
    const {
      errors,
    } = this.props;

    return (<form
      className="form"
    >
      <Input
        name="name"
        hintText="Name"
        errorText={errors.name}
      />
      <Input
        type="email"
        name="email"
        hintText="E-mail"
        errorText={errors.email}
      />
      <InputAutocomplete
        name="occupation"
        hintText="Occupation"
        errorText={errors.occupation}
      />
      <DatePicker
        name="birthday"
        hintText="Birthday"
        errorText={errors.birthday}
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
});

export default connect(
  mapStateToProps,
)(SPAForm);
