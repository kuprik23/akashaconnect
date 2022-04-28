import React, { useState, useEffect } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.png';
import './navbar.css';
import { HashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import useAuth from '../../hooks/useAuth';
import Minting from "../../hooks/Minting";
import { ToastContainer, toast } from "react-toastify";
import Loader from "../../hooks/loader";
import "react-toastify/dist/ReactToastify.css";
import useWeb3 from '../../hooks/useWeb3';
import environment from '../../utils/Environment';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { login, logout } = useAuth();
  const { account, chainId } = useWeb3React();
  const [shownav, setShowNav] = useState(false)
  const [downloadable, setDownloadable] = useState(false)
  console.log('ddddddddddddddddddddddd====', account)
  const [open, Close] = useState(true);
  const [mainLoader, setMainLoader] = useState(false);
  const { userMinting } = Minting();
  const web3 = useWeb3();

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
    console.log("window.innerWidth", window?.innerWidth)
    if (window.innerWidth < 768) {
      setShowNav(false)
    } else {
      setShowNav(true)
    }
  }
  useEffect(() => {
    handleResize();
  }, [])
  const wallletconnect = () => {
    localStorage.setItem('connectorId', 'walletconnect');
    if (account) {
      logout();
      window.$("#exampleModalmerchf").modal('hide');
    } else {
      login('walletconnect');
      window.$("#exampleModalmerchf").modal('hide');
    }
  };
  const connectMetaMask = () => {
    console.log("$$$")
    if (account) {
      logout()
      window.$("#exampleModalmerchf").modal('hide');
    } else {
      login("injected")
      window.$("#exampleModalmerchf").modal('hide');
    }
  }
  const minto = async () => {
    if (account) {
      setMainLoader(true);
      try {
        const res = await userMinting(1);
        setMainLoader(false);
        if (res?.code === 4001) {
          await setMainLoader(false);
          await toast.error("User denied transaction.");
        } else if (res?.code === 4002) {
          await setMainLoader(false);
          await toast.error("Transaction failed.");
        } else {
          toast.success("Minting Successful");
        }
        console.log('res=======', res)

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
    console.log("$$$")
    if (account) {
      const contractAddress = environment.musabContract;
      const contract = SkeletonContract(contractAddress, web3);
      let balance = await contract.methods.balanceOf().call();
      if (balance > 0) {
        setDownloadable(true)
      } else {
        setDownloadable(false)
      }
    } else {
      login("injected")

    }
  }

  useEffect(() => {
    // login("injected");
    checkBalance();
    console.log("chainId", chainId);
    if (chainId != "1") {
      // toast.error("Select Ethereum Network");
    }
  }, [account])
  return (
    <>
      {mainLoader && <Loader />}
      <div className="gpt3__navbar">
        <ToastContainer />

        <div className="gpt3__navbar-links">
          <div className="gpt3__navbar-links_logo">
            <img src={logo} className="logo" />
          </div>
          <div className="gpt3__navbar-links_container">
            <p>
              <a href="#home">Home</a>
            </p>
            <p>
              <a href="#wgpt3">What is Akasha?</a>
            </p>
            <p>
              <button id="bt" className='bg-transparent border-0' onClick={minto}>Minty</button>
            </p>
            <p>
              <a
                href="https://www.keepandshare.com/doc6/38222/akasha-original-white-paper-1-pdf-129k?da=y"
                target="_blank" rel="noreferrer"
                rel="noopener noreferrer"
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
          <button type="button" className={account && 'bg-success'} data-toggle="modal" data-target="#exampleModalmerchf">{account ? "Disconnect Wallet" : "Connect Wallet"}</button>
          {
            downloadable ?
              <button type="button" className={'bg-info'} >Download</button>
              :
              ""
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
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">What is Akasha</a>
                </p>
                <p>
                  <button id="bt" onClick={minto}>Mint</button>
                </p>
                <p>
                  <a href="#features">White Paper</a>
                </p>
                <p>
                  <a href="#blog">Company</a>
                </p>
              </div>
              <div className="gpt3__navbar-menu_container-links-sign">
                <button type="button" data-toggle="modal" className={account && 'bg-success'} data-target="#exampleModalmerchf">{account ? "Disconnect Wallet" : "Connect Wallet"}</button>
              </div>
            </div>
          )}
        </div>
        {/* modal */}

        <div class="modal fade" id="exampleModalmerchf" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-wallet">
            <div class="modal-content">
              <div class="modal-header">
                <h3 class="modal-title text-white text-center text-uppercase w-100" id="exampleModalLabel">{" Wallet"}</h3>
                <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"><img src="assets/errorSign.svg" alt="" /></button>
              </div>
              <div class="modal-body p-5 text-center">
                <button className='w-100 ' type='button' onClick={connectMetaMask}>
                  <div className="row pb-2 pt-1">
                    {account ?
                      <div className='outerdivs-meta' >
                        <div className="col-12 text-end">
                          <img src="/MetaMask_Fox.png" alt="metamasklogo" className='img-fluid' />
                        </div>
                        <div className="col-12 my-auto p-0 text-start">
                          <p>Disconnect Metamask</p>
                        </div>
                      </div>
                      :
                      <div className='outerdivs-meta'>
                        <div className="col-12 text-end">
                          <img src="/MetaMask_Fox.png" alt="metamasklogo" className='img-fluid' />
                        </div>
                        <div className="col-12 my-auto p-0 text-start">
                          <p>Connect Metamask</p>
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
