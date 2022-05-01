import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header, Team } from './containers';
import { CTA, Brand, Navbar } from './components';
import './App.css';
import './App.scss';
import useEagerConnect from './hooks/useEagerConnect';

function App() {
  useEagerConnect();
  return (
    <div className="App">
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
    </div>
  )
}

export default App

