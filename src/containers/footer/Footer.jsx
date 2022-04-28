import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Do you want to step in to the future before others</h1>
    </div>

<p>
    <div className="gpt3__footer-btn">
    <a target="_blank" rel="noreferrer" href="https://forms.gle/RmPfXnLzgbuYAqPY6"> <button id="bt" >Get on the WHITE LIST</button> </a>
    </div>
    </p>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <p><br />WEB 3.0</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Twitter</h4>
        <p>Contact</p>
      </div>
      <div className="gpt3__footer-links_div">
        <h4>Get in touch</h4>
        <a target="_blank" rel="noreferrer" href="https://twitter.com/akashaverse"> <button id="bt" >Twitter</button> </a>
        <p>dcl@akasha.gl</p>
      </div>
    </div>

    <div className="gpt3__footer-copyright">
      <p>@2022 Beamport Analytics. All rights reserved. By @En-nasryRida</p>
    </div>
  </div>
);

export default Footer;
