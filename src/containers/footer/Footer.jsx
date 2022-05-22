import React from 'react';
// import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="gpt3__footer section__padding">
    <div className="gpt3__footer-heading">
      <h1 className="gradient__text">Step into the Future</h1>
    </div>

<p>
    <div className="gpt3__footer-btn">
    <a target="_blank" rel="noreferrer" href="https://forms.gle/RmPfXnLzgbuYAqPY6"> <button id="bt" >Presale form</button> </a>
    </div>
    </p>

    <div className="gpt3__footer-links">
      <div className="gpt3__footer-links_logo">
        {/* <img src={gpt3Logo} alt="gpt3_logo" /> */}
        <p><br />Web 3.0 is here.
 To access the Metaverse, connect your Metamask with Akasha NFT.
 To obtain your tokens, go to MINTY and connect in Discord.</p>
      </div>
      <p>
              <a target="_blank" rel="noreferrer" href="https://discord.gg/aeeHKD6AR3"> <button id="bt" >Join discord</button> </a>
            </p>
      <div className="gpt3__footer-links_div">
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
