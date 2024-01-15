import React from 'react';

import {Todo} from './src/todo/todo';
import {Filter} from './src/filter/filter';
import {ThemeApp} from './src/themeApp/themeApp';
import {ThemeProvider} from './src/themeApp/themeContext';

const App = () => {
  return (
    <>
      {/* <Todo /> */}
      {/* <Filter /> */}
      <ThemeProvider>
        <ThemeApp />
      </ThemeProvider>
    </>
  );
};

export default App;
