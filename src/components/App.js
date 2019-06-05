import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

//App components
import Header from './header/Header';
import Home from './home/Home';
import Contact from './contact/Contact';
import PressKit from './presskit/PressKit';
import Footer from './footer/Footer';

const App = () => {
  return (
    <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presskit" component={PressKit} />
          </Switch>
          <Footer />
        </div>
    </BrowserRouter>
  );
}

export default App;
