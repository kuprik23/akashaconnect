import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Early Access Soon</h4>
      <h1 className="gradient__text">The possibilities are <br /> beyond your imagination</h1>
      <p>Akasha builds technologies that help people connect, find communities, and grow businesses. It will let you share immersive experiences with other people even when you can’t be together — and do things together you couldn’t do in the physical world. It’s the next evolution in a long line of social technologies. be part of us.</p>
      <h4>Education & Sustainability is key.</h4>
    </div>
  </div>
);

export default Possibility;
