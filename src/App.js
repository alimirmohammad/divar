import React, { useState } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Input from './components/Input/Input';
import Backdrop from './components/Backdrop/Backdrop';
import CitySelector from './components/CitySelector/CitySelector';
import DataDependent from './containers/DataDependent/DataDependent';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Product from './components/Product/Product';

function App() {
  const [citySelector, setCitySelector] = useState(false);

  const selectHandler = () => {
    setCitySelector(true);
  }

  const closeBackdropHandler = () => {
    setCitySelector(false);
  }

  return (
    <>
      {citySelector && <Backdrop onClose={closeBackdropHandler} />}
      {citySelector && <CitySelector onClose={closeBackdropHandler} />}
      <Navbar onSelect={selectHandler} />
      <Switch>
        <Route path="/s/:city" render={() => (
          <div className="App">
            <Sidebar />
            <div className="main">
              <Input />
              <DataDependent />
            </div>
          </div>
        )} />
        <Route path="/v/:id" render={(props) => (
          <div className="product-page">
            <Navigation {...props} />
            <Product />
          </div>
        )} />
        <Redirect to="/s/tehran" />
      </Switch>
    </>
  );
}

export default App;
