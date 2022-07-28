import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './mint.css';
import CheckAcPrice from '../../hooks/dataFetcher/dcl3Price'
import CheckAcPrice2 from '../../hooks/dataFetcher/dcl3Price2'
import Dcl2Mint from '../../hooks/dataSender/dcl3Mint'
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useWeb3React } from '@web3-react/core';
import CheckAcSupply from '../../hooks/dataFetcher/dcl3Supply'
// import ReactPlayer from 'react-player'

const MintDCL3 = ({ mintLimit, preSale, sale }) => {
  const [acPriceState, setAcPriceState] = useState(0);
  const [acPriceState2, setAcPriceState2] = useState(0);
  const [nTokenInpo, setNTokenInpo] = useState();
  const { account } = useWeb3React();
  const { acPrice } = CheckAcPrice();
  const { acPrice2 } = CheckAcPrice2();
  const { mintingAc } = Dcl2Mint();
  const [acSupplyState, setAcSupplyState] = useState(0);
  const { acSupply } = CheckAcSupply();
  const MintAc = async () => {
    if (preSale == false && sale == false) {
      toast.error('Minting is not Active!')
    } else {
      if (nTokenInpo > 0) {
        const maxSupply = 3238;
        const aCSupply = acSupplyState;
        const individualTokenAllowed = parseInt(mintLimit) ;
        if (nTokenInpo < individualTokenAllowed + 1) {
          let mintAmount;
          if (preSale) {
            mintAmount = nTokenInpo * acPriceState;
          } else if (sale) {
            mintAmount = nTokenInpo * acPriceState2;
          }
          if (aCSupply + nTokenInpo < maxSupply) {
            try {
              const res = await mintingAc(mintAmount, nTokenInpo);
              console.log('res of the mint ', res);
              toast.success('Minting Successful');
            } catch (error) {
              toast.error(error.message);
            }

          } else {
            toast.error('You can not mint more than 3238 tokens');
          }
        } else {
          toast.error(`You can't mint more then ${individualTokenAllowed} tokens`)
        }
      } else {
        toast.error('Please enter a valid amount');
      }
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
  const acPriceAmount2 = async () => {
    try {
      const acPriceRes = await acPrice2();
      // const wethAcPrice
      console.log('tamooe', acPriceRes)
      setAcPriceState2(((acPriceRes) / 10 ** 18));
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
    acPriceAmount2();
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
              <input type='number' onChange={(e) => setNTokenInpo(e.target.value)} value={nTokenInpo < 0 ? 0 : nTokenInpo} placeholder="Enter no of token" />
              <button className='px-5 mt-4' id="bt" onClick={() => MintAc()}>MintDCL3</button>
            </div>
          </div>
        </div>

        <div className="gpt3__header-content__people">

          <p className='pMinted'>Mint price per token <span className='mintedOnes'>{preSale && acPriceState || sale && acPriceState2 || '_'} eth</span> </p>
        </div>
      </div>

      <div className="gpt3__header-image">
        <img src={ai} className='skullImage' />
      </div>
    </div>
  )
}

export default MintDCL3;
