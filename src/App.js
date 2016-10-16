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

const App = ({title}) => (
  <MuiThemeProvider>
    <Provider store={store}>
      <div className='container'>
      </div>
    </Provider>
  </MuiThemeProvider>
);

App.defaultProps = {
  title: 'SPA Form'
};

export default App;
