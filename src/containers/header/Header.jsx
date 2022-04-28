import React from 'react';
import { Helmet } from 'react-helmet';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';
// import ReactPlayer from 'react-player'

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Akasha Multiverse</h1>
      <div className="wrapper">
        <div className="video-main">
          <div className="promo-video">
            <div className="waves-block">
              <div className="waves wave-1" />
              <div className="waves wave-2" />
              <div className="waves wave-3" />
            </div>
          </div>
          <Helmet>
            <script
              async
              src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.4.1/jquery.min.js"
            />
            <script
              async
              src="https://cdnjs.cloudflare.com/ajax/libs/lity/2.4.0/lity.min.js"
            />
          </Helmet>
          <a
            href="https://youtu.be/vDwgWHw7eWA"
            className="video video-popup mfp-iframe"
            data-lity
          >
            <i className="fa fa-play" />
          </a>
        </div>
      </div>
      <p>
        Connections are evolving and so should we. <br /> Akasha Metaverse is a
        virtual heaven where the possibilities are limitless.
      </p>
      <div className="gpt3__header-content__input">
      <a target="_blank" rel="noreferrer" href="https://discord.gg/aeeHKD6AR3"> <button id="bt" >Join discord</button> </a>
        
      </div>
      <div className="gpt3__header-content__people">
        <p>Support Server & Join Community</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
