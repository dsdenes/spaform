import React from 'react';
import { connect } from 'react-redux';
import { Component } from 'react';
import InputAutocomplete from '../componets/input-autocomplete/index';
import { occupationListFetched } from '../actions/form/input';
import './occupation-input.css';

import fetchAPI from '../lib/fetch-api';

export class OccupationInput extends Component {
  componentDidMount() {
    const {
      fetchAPI,
      occupationListFetched
    } = this.props;

    fetchAPI('/api/occupations')
      .then(response => response.json())
      .then(occupationListFetched);
  }

  render() {
    const {
      errorText,
      inputChanged,
    } = this.props;

    return (<InputAutocomplete
      name="occupation"
      hintText="Occupation"
      errorText={errorText}
      onChange={text => inputChanged('occupation', text)}
    />);
  }
}

const mapStateToProps = (state, ownProps) => ({
  errorText: state.form.errors.occupation
});

const mapDispatchToProps = (dispatch) => {
  return {
    occupationListFetched: (occupations) => dispatch(occupationListFetched(occupations)),
    fetchAPI: (path) => dispatch(fetchAPI(path))
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(OccupationInput);
