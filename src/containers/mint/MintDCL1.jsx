import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './mint.css';
import CheckAcPrice from '../../hooks/dataFetcher/dcl1Price'
import acMint from '../../hooks/dataSender/acMint'
import dcl1Mint from '../../hooks/dataSender/dcl1Mint'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
// import ReactPlayer from 'react-player'

const MintDCL1 = () => {
  const [acPriceState, setAcPriceState] = useState(0);
  const [nTokenInpo, setNTokenInpo] = useState(0);
  const { account } = useWeb3React();
  const { acPrice } = CheckAcPrice();
  const { mintingDCL1 } = dcl1Mint();
  const MintAc = async () => {
    if (nTokenInpo > 0) {
      const maxSupply = 2560;
      const aCSupply = 0;
      const individualTokenAllowed = 51;
      const mintAmount = nTokenInpo * acPriceState;
      if (aCSupply + nTokenInpo < individualTokenAllowed) {
        try {
          const res = await mintingDCL1(mintAmount, nTokenInpo);
          console.log('res of the mint ', res);
          toast.success('Minting Successful');
        } catch (error) {
          toast.error(error.message);
        }

      } else {
        toast.error('You can not mint more than 51 tokens');
      }
    } else {
      toast.error('Please enter a valid amount');
    }
  }
  const acPriceAmount = async () => {
    try {
      const acPriceRes = await acPrice();
      // const wethAcPrice
      setAcPriceState(((acPriceRes) / 10 ** 18));
      // toast.success(`Your AC price is ${acPriceRes}`);
    } catch (error) {
      toast.error(error.message);
    }

  }
  useEffect(() => {
    acPriceAmount();
  }, [account]);
  return (

    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <h1 className="gradient__text">Akashaverse</h1>
        {/* <div className="wrapper">
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
      </div> */}
        <p>
          Connections are evolving and so should we. <br /> Virtual heaven with limitless possibilities.
        </p>

        <div className="gpt3__header-content__input d-flex flex-column">
          <div className="row">
            <div className="col-md-7">
              <input type='number' onChange={(e) => setNTokenInpo(e.target.value)} placeholder="Enter no of token" />
              <button className='px-5 mt-4' id="bt" onClick={() => MintAc()}>MintDCL1</button>
            </div>
          </div>
        </div>

        <div className="gpt3__header-content__people">

          <p className='pMinted'>Mint price per token <span className='mintedOnes'>{acPriceState} eth</span> </p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} className='skullImage' />
      </div>
    </div>
  )
}

export default MintDCL1;
