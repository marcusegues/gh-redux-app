import React from 'react';
import NavigationBar from './navigationBar';

const App = (props) => {
  return (
    <div>
      <NavigationBar />
      {props.children}
    </div>
  );
}

export default App;
