import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

injectTapEventPlugin();

const App = ({title}) => (
  <MuiThemeProvider>
      <div className='container'>
      </div>
  </MuiThemeProvider>
);

App.defaultProps = {
  title: 'SPA Form'
};

export default App;
