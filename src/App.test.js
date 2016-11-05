import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
const mockStore = configureMockStore([thunk]);
import initialState from './initial-state';

import App from './App';
import Head from './componets/head';
import SPAFormComplete, { SPAForm } from './containers/spa-form';
import Input from './componets/input';
import InputAutocomplete from './componets/input-autocomplete';
import DatePicker from './componets/date-picker';
import { validateForm } from './actions/form/form';
import actionNames from './actions/action_names';

describe('App', () => {

  function mountMockApp({validateForm = ()=>{}, inputChanged = ()=>{}}) {
    const store = mockStore(initialState);
    return mount(
      <MuiThemeProvider>
        <Provider store={store}>
          <div className='container'>
            <SPAForm
              validateForm={validateForm}
              errors={initialState.form.errors}
              inputChanged={inputChanged}/>
          </div>
        </Provider>
      </MuiThemeProvider>
    );
  }

  it('renders without crashing', () => {
    const app = shallow(<App />);
    expect(app.find('.container').length).toBe(1);
    expect(app.find(Head).length).toBe(1);
    expect(app.find(SPAFormComplete).length).toBe(1);
  });

  it('has the right elements', () => {
    let app = mount(<App title="testTitle" />);
    expect(app.find('.title').text()).toBe('testTitle');
    expect(app.find(Input).length).toBe(2);
    expect(app.find(InputAutocomplete).length).toBe(1);
    expect(app.find(DatePicker).length).toBe(1);
  });

  it('triggers validateForm on submit', () => {
    const validateForm = jest.fn();
    const app = mountMockApp({validateForm});
    expect(app.find(SPAForm).length).toBe(1);
    expect(app.find(SPAForm).props().validateForm).toBe(validateForm);
    app.find(SPAForm).simulate('submit');
    expect(validateForm).toHaveBeenCalledTimes(1);
  });

  it('triggers inputChange on input change', () => {
    const inputChanged = jest.fn();
    const app = mountMockApp({inputChanged});
    expect(app.find(SPAForm).props().inputChanged).toBe(inputChanged);
    app.find('input').at(0).simulate('change', { target: { value: 'test' }});
    app.find('input').at(1).simulate('change', { target: { value: 'test' }});
    app.find('input').at(2).simulate('change', { target: { value: 'test' }});
    app.find('input').at(3).simulate('change', { target: { value: 'test' }});
    expect(inputChanged).toHaveBeenCalledTimes(4);
  });

  it('validateForm should trigger input checks', () => {
    const expectedActions = [
      {
        name: 'name',
        type: actionNames.INPUT_CHANGED,
        value: false
      }, {
        name: 'email',
        type: actionNames.INPUT_CHANGED,
        value: false
      }, {
        name: 'occupation',
        type: actionNames.INPUT_CHANGED,
        value: false
      }, {
        name: 'birthday',
        type: actionNames.INPUT_CHANGED,
        value: false
      }
    ];

    const store = mockStore(initialState);
    store.dispatch(validateForm());
    expect(store.getActions()).toEqual(expectedActions);
  });
});
