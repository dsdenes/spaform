import React from 'react';
import { Provider } from 'react-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

import initialState from './initial-state';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import thunk from 'redux-thunk';

const store = createStore(reducers, initialState, applyMiddleware(thunk));

import Head from './componets/head/index'
import SPAForm from './containers/spa-form'
import Notification from './containers/notification-form';

import './App.css';

const App = ({title}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <div className='container'>
        <Head title={title} />
        <SPAForm/>
        <Notification />
      </div>
    </Provider>
  </MuiThemeProvider>
);

App.defaultProps = {
  title: 'SPA Form'
};

export default App;
