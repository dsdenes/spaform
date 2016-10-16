import React from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import './style.css';

const InputAutoComplete = ({occupations, hintText, name, errorText, onChange}) => (
  <AutoComplete
    dataSource={occupations}
    hintText={hintText}
    floatingLabelText={hintText}
    name={name}
    onNewRequest={onChange}
    onUpdateInput={onChange}
    errorText={errorText}
    className="input-autocomplete"
  />
);

InputAutoComplete.defaultProps = {
  occupations: [
  ]
};

const mapStateToProps = (state, ownProps) => ({
  occupations : state.form.occupations
});

export default connect(
  mapStateToProps
)(InputAutoComplete);
