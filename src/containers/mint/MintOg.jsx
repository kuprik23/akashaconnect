import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './mint.css';
import CheckAcPrice from '../../hooks/dataFetcher/dcl4Price'
import Dcl2Mint from '../../hooks/dataSender/ogMint'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import CheckAcSupply from '../../hooks/dataFetcher/ogSupply'
// import ReactPlayer from 'react-player'
import Loader from '../../hooks/loader';
const MintOg = () => {
  const [load, setLoad] = useState(false)
  const [acPriceState, setAcPriceState] = useState(0);
  const [nTokenInpo, setNTokenInpo] = useState();
  const { account } = useWeb3React();
  const { acPrice } = CheckAcPrice();
  const { mintingAc } = Dcl2Mint();
  const [acSupplyState, setAcSupplyState] = useState(0);
 const { acSupply } = CheckAcSupply();
  const MintAc = async () => {
    if (nTokenInpo > 0) {
      const maxSupply = 3238;
      const aCSupply = acSupplyState;
      const individualTokenAllowed = 51;
      const mintAmount = nTokenInpo * acPriceState;
      if (aCSupply + nTokenInpo < maxSupply) {
        try {
          setLoad(true)
          const res = await mintingAc(mintAmount, nTokenInpo);
          console.log('res of the mint ', res);
          toast.success('Minting Successful');
          setLoad(false)
        } catch (error) {
          toast.error(error.message);
          setLoad(false)
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
  const acSupplyAmount = async () => {
    try {

      const acSupplyRes = await acSupply();
      // const wethAcPrice
      setAcSupplyState(((acSupplyRes) / 10 ** 18));
      // toast.success(`Your AC price is ${acPriceRes}`);
    } catch (error) {
      toast.error(error.message);
    }

  }
  useEffect(() => {
    acSupplyAmount();
    acPriceAmount();
  }, [account]);
  return (
    <>
    {load && <Loader  />}
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
              <input type='number' onChange={(e) => setNTokenInpo(e.target.value)}  value={nTokenInpo < 0 ? 0 : nTokenInpo} placeholder="Enter no of token" />
              <button className='px-5 mt-4' id="bt" onClick={() => MintAc()}>MintOg</button>
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
    </>
  )
}

export default MintOg;
