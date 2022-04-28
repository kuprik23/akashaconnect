import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData = [
  {
    title: 'Create.',
    text: 'Create your own personalized world, a world you feel the most comfortable and proud at and share it with others.',
  },
  {
    title: 'Explore.',
    text: 'Explore your friends worlds and see the life from their perspectives.',
  },
  {
    title: 'Trade.',
    text: 'Buy and sell digital items, enjoy the experience while making money on the go.',
  },
  {
    title: 'Own.',
    text: 'Own your virtual world  your digital items with the ultra privacy blockchain offers.',
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">The Future is Now and You Just Need to Realize It. Step into Future Today. & Make it Happen.</h1>
      <p>Opening Soon</p>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
