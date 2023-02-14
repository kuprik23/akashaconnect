import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';
import { HashLink } from 'react-router-hash-link';
import { Link, NavLink } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import useAuth from '../../hooks/useAuth';
import Minting from "../../hooks/Minting";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../hooks/loader";
import "react-toastify/dist/ReactToastify.css";
import useWeb3 from '../../hooks/useWeb3';
import environment from '../../utils/Environment';
import { SkeletonContract } from '../../utils/contractHelpers';

import Web3 from 'web3'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { login, logout } = useAuth();
  const { account, chainId } = useWeb3React();
  const [shownav, setShowNav] = useState(false)
  const [downloadable, setDownloadable] = useState()
  // console.log('ddddddddddddddddddddddd====', account)
  const [open, Close] = useState(true);
  const [mainLoader, setMainLoader] = useState(false);
  const { userMinting } = Minting();
  const web3 = useWeb3();

  const [etaccounts, setetaccounts] = useState(0);

  async function onInit() {
    if (window.ethereum) {
      try {
        const accnts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setetaccounts(accnts.length);
        
        window.ethereum.on('accountsChanged', function (accountss) {
          setetaccounts(accnts.length);
              console.log("accountsanged",accountss[0])
             });
      } catch (error) {
        console.log("accountsanged",error.message);
        if (error.code === 4001) {
          // User rejected request
        }
    
        // setError(error);
      }
    }
}


const disconnectEth = async () => {
  disconnect
  window.ethereum.on('disconnect', function (accountss) {
    setetaccounts(accnts.length);
        console.log("accountsanged",accountss[0])
       });

}

onInit();

  const connectMetamask = () => {
    localStorage.setItem('connectorId', 'injected');
    if (account) {
      logout();
    } else {
      login('injected');
    }
  };


  const showModal = () => {
    window.$("#exampleModal").modal('show');
  }
  const disconnect = () => {
    logout()
  }

  const Disconnect = async () => {
    logout();
    localStorage.setItem('connectorId', '');
  };
  const handleResize = () => {
    // console.log("window.innerWidth", window?.innerWidth)
    if (window.innerWidth < 768) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }


  useEffect(() => {
    handleResize();
  }, [])

  useEffect(() => {
    // login("injected");
    checkBalance();
    // console.log("chainId", chainId);
    if (chainId != "1") {
      // toast.error("Select Ethereum Network");
    }
  }, [account, downloadable])


  const walletconnect = () => {
    localStorage.setItem('connectorId', 'walletconnect');
    if (account) {
      logout();
      window.$("#exampleModalmerchf").modal("hide");
    } else {
      login('walletconnect');
      window.$("#exampleModalmerchf").modal("hide");
    }
  };

  const connectMetaMask = () => {
    try {
      if (etaccounts>0) {
        console.log("$$$", etaccounts)
        logout()
        // window.$("#exampleModalmerchf").modal("hide");
        localStorage.setItem("flag", false);
        checkBalance();
      } else {
        if(window.ethereum){
          
          
          console.log("eth", window.ethereum)
          // console.log("$$$",window.ethereum) 
        }else{
          alert("install metamask extension!!")
        }
       
        // window.$("#exampleModalmerchf").modal("hide");
        localStorage.setItem('connectorId', "injected");
        localStorage.setItem("flag", true);
        login("injected");

      }
    } catch (e) {
      console.log("$$$", e)
    }
  }

  const minto = async () => {
    if (account) {
      setMainLoader(true);
      try {
        // const res = await userMinting(1);
        // setMainLoader(false);
        // if (res?.code === 4001) {
        //   await setMainLoader(false);
        //   await toast.error("User denied transaction.");
        // } else if (res?.code === 4002) {
        //   await setMainLoader(false);
        //   await toast.error("Transaction failed.");
        // } else {
        //   toast.success("Minting Successful");
        // }
        // console.log('res=======', res)
        toast.info("FIND THE PRESALE FORM AND JOIN DISCORD AND TWITTER FOR ANNOUNCEMENTS WHEN MINT");
        setMainLoader(false);
      } catch (error) {
        setMainLoader(false);
        toast.error(error.message);

        console.log('mintoerror====>', error)
      }
    } else {
      toast.warning("Connect Wallet First!");
    }
  }

  const checkBalance = async () => {
    // console.log("$$$")
    try {
      if (account) {
        const contractAddress = environment.mintContract;
        const contract = SkeletonContract(contractAddress, web3);

        let balance = await contract.methods.balanceOf(account).call();

        // let balance = await contract.methods.balanceOf(
        //   "0x4E4fAb3De995F55ADf2e2c99C2b44070aeebd6BC"
        // ).call();
        console.log('balance====>', balance)
        if (balance > 0) {
          setDownloadable(true)
        } else {
          setDownloadable(false)
        }
      } else {
        console.log("balance check your connection");
        // setDownloadable(false)
      }
    } catch (error) {

      console.log('balance====>', error)
    }
  }

  const downloadSDK = async () => {
    // console.log("$$$")
    try {
      toast.warning("Connecting....");
      window.location.href = "https://drive.google.com/file/d/17l7di-fx1ERvu6XHM24Z1a6nu6fwZNIO/view"
    } catch (error) {
      console.log('balance====>', error)
    }
  }


  const toDownloadSDK = async () => {
    // console.log("$$$")
    try {
      toast.warning("Join discord, twitter for announcements. There is a pink list for the presale and the smart contract will be deployed soon.");
    } catch (error) {
      console.log('balance====>', error)
    }
  }

  return (
    <>
      {mainLoader && <Loader />}
      <div className="gpt3__navbar">
        <ToastContainer />

        <div className="gpt3__navbar-links">
         <NavLink to='/'> <div className="gpt3__navbar-links_logo">
            <img src={logo} className="logo" />
          </div></NavLink>
          <div className="gpt3__navbar-links_container">
            <p>
              <NavLink to='/' href="#home">Home</NavLink>
            </p>
            <p>
              <a href="#wgpt3">Why Emersa?</a> 
            </p>
            <p>
              <a target="_blank" rel="noreferrer" href="https://discord.gg/aeeHKD6AR3"> <p id="bt" >Join discord</p> </a>
            </p>
            <p>
              <NavLink to='/mint' id="bt" className='bg-transparent border-0' >Minty</NavLink>
            </p>
            <p>
              <a
                href="https://www.keepandshare.com/doc6/38222/akasha-original-white-paper-1-pdf-129k?da=y"
                target="_blank" rel="noreferrer"
              >
                White Paper
              </a>
            </p>
            <p>
              <a href="#team">Team</a>
            </p>
          </div>
        </div>
        <div className="gpt3__navbar-sign">
      {etaccounts>0 ?(
        <button type="button" className='bg-success' onClick={disconnectEth}>Connected</button>
      ):(
        <button type="button" data-toggle="modal" data-target="#exampleModalmerchf">Connect Wallet</button>

      )
      }
          {/* <button type="button" className={account && 'bg-success'} data-toggle="modal" data-target="#exampleModalmerchf">
            {account ? ("Connected") : ("Connect Wallet")}</button> */}
          {
            downloadable ?
              <button type="button" className={'bg-info'} onClick={downloadSDK}>Access</button>
              :
              <button type="button" className={'bg-info ml-2'} onClick={toDownloadSDK} >No Download  Available</button>
          }
        </div>
        <div className="gpt3__navbar-menu">
          {toggleMenu ? (
            <RiCloseLine
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <RiMenu3Line
              color="#fff"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="gpt3__navbar-menu_container scale-up-center">
              <div className="gpt3__navbar-menu_container-links">
                <p>
                <NavLink to='/'>Home</NavLink>
                </p>
                <p>
                  <a href="#wgpt3">Why Emersa?</a>
                </p>
                <p>
                <NavLink to='/mint'>  <button id="bt">Minty</button> </NavLink>
                </p>
                <p>
                  <a href="#features">White Paper</a>
                </p>
                <p>
                  <a href="#blog">Company</a>
                </p>
                <p>
                  <a target="_blank" rel="noreferrer" href="https://discord.gg/aeeHKD6AR3"> <button id="bt" >Join discord</button> </a>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button" data-toggle="modal" className={account && 'bg-success'} data-target="#exampleModalmerchf">
                  {account ? "Connected" : "Connect wallet"}
                </button>
              </div>
            </div>
          )}
        </div>
        {/* modal */}

        <div class="modal fade" id="exampleModalmerchf" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-wallet modal-dialog-centered">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title text-white text-center text-uppercase w-100" id="exampleModalLabel">{" Wallet"}</h3>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><img src="assets/errorSign.svg" alt="" /></button>
              </div>
              <div class="modal-body p-5 text-center">
                <button className='w-100 ' type='button' >
                  <div className="row pb-2 pt-1">
                    {account ?
                      <div className='outerdivs-meta' onClick={connectMetaMask} >
                        <div className="col-12 text-end">
                          <img src="/MetaMask_Fox.png" alt="metamasklogo" className='img-fluid' />
                        </div>
                        <div className="col-12 my-auto p-0 text-start">
                          <p>Connected</p>
                        </div>
                      </div>
                      :
                      <div>
                        <div className='outerdivs-meta' onClick={connectMetaMask}>
                          <div className="col-12 text-end">
                            <img src="/MetaMask_Fox.png" alt="metamasklogo" className='img-fluid' />
                          </div>
                          <div className="col-12 my-auto p-0 text-start">
                            <p>Connect Metamask</p>
                          </div>
                        </div>

                      </div>
                    }
                  </div>
                </button>
                <button className='w-100 mt-4 ' type='button' >
                  <div className="row pb-2 pt-1">
                    
                     {account ?
                      <div className='outerdivs-meta' onClick={walletconnect}>
                      <div className="col-12 text-end">
                        <img src="/walletconnect.png" alt="metamasklogo" className='img-fluid' />
                      </div>
                      <div className="col-12 my-auto p-0 text-start">
                        <p>Disconnect Connect</p>
                      </div>
                    </div>
                     :
                        <div className='outerdivs-meta' onClick={walletconnect}>
                          <div className="col-12 text-end">
                            <img src="/walletconnect.png" alt="metamasklogo" className='img-fluid' />
                          </div>
                          <div className="col-12 my-auto p-0 text-start">
                            <p>Wallet Connect</p>
                          </div>
                        </div>
}
                      </div>
                </button>
                {/* <button className='w-100 mt-3' type='button' >
                                <div className="row pb-2">
                                    {account ?
                                        <div className='walletconnect d-flex justify-content-center w-100' onClick={wallletconnect}>
                                            <div className="col-12 text-end ">
                                                <img src="\walletconnect.png" className='img-fluid' alt="walletconnect logo" />
                                            </div>
                                            <div className="col-12 my-auto p-0 text-start">
                                                <p>Wallet Disconnect</p>
                                            </div>
                                        </div>
                                        :
                                        <div className='walletconnect' onClick={wallletconnect}>
                                            <div className="col-12 text-end ">
                                                <img src="\walletconnect.png" className='img-fluid' alt="walletconnect logo" />
                                            </div>
                                            <div className="col-12 my-auto p-0 text-start">
                                                <p>WalletConnect</p>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </button> */}
              </div>
            </div>
          </div>
        </div>

        {/* modal */}
      </div>
    </>
  );
};

export default Navbar;