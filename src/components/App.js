import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Header from './header/Header'

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
        </div>
    </BrowserRouter>
  );
}

export default App;
