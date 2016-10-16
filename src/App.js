import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

const App = ({title}) => (
      <div className='container'>
      </div>
);

App.defaultProps = {
  title: 'SPA Form'
};

export default App;
