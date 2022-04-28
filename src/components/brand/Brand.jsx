import React from 'react';
import { google, dropbox, shopify } from './imports';
import './brand.css';

const Brand = () => (
  <div className="gpt3__brand section__padding">
    <div>
      <img src={google} className="google" />
    </div>
    <div>
      <img src={dropbox} className="dropbox" />
    </div>
    <div>
      <img src={shopify} className="shopify" />
    </div>
  </div>
);

export default Brand;
