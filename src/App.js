import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Team } from './containers';
import { CTA, Brand, Navbar } from './components';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import './App.scss';
import useEagerConnect from './hooks/useEagerConnect';
import MintAc from './containers/mint/MintAc';
import MintDCL1 from './containers/mint/MintDCL1';
import MintDCL2 from './containers/mint/MintDCL2';
import MintDCL3 from './containers/mint/MintDCL3';
import MintDCL4 from './containers/mint/MintDCL4';
import MintOg from './containers/mint/MintOg';

function App() {
  useEagerConnect();
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'  >
            <div className="gradient__bg">
              <Navbar />
              <Header />
            </div>
            <Brand />
            <WhatGPT3 />
            <Features />
            <Possibility />
            <CTA />
            <Team />
            <Blog />
            <Footer />
          </Route>
          <Route path='/mint'>
            <div className="gradient__bg">
              <Navbar />
              <MintAc />
              <MintDCL1/>
              <MintDCL2/>
              <MintDCL3/>
              <MintDCL4/>
              <MintOg/>
              <Footer />
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App

