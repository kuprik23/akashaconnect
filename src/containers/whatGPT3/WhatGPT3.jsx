import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is Akasha" text="Akasha Metaverse is the largest virtual reality social connection in 21 century. The focus is on communication, adventure and education. Built on Unreal Engine and Blockchain with our governance token $ROLAIS, we're aiming to deliver the best most secure social space for you. Join us now." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Virtual Heaven</h1>
      <a target="_blank" rel="noreferrer" href="https://forms.gle/RmPfXnLzgbuYAqPY6"> <button id="bt" >Get on the WHITE LIST</button> </a>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Connection" text="Virtual Reality is the future of connection, the distance will vanish. Connect and share with others in ways you never dreamt off." />
      <Feature title="Adventure" text="Every moment is right at your eyes. Attend international virtual concerts, visit the other half of the world, see it, touch it feel it and much more all from your home." />
      <Feature title="Education" text="We integrate virtual reality with knowledge to bring the best and most effective hands on learning experience. Give your experiments the best integration ever." />
    </div>
  </div>
);

export default WhatGPT3;
