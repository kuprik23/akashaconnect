import {useParams} from "react-router-dom";
import React, {useEffect} from "react";
import {toast} from "react-toastify";

const CCNFTCallback=(props)=>{
    const ccnft=props.ccnft;

    useEffect(()=>{
        toast.configure();
        verifySignature();
    },[]);
    function showErr(msg) {

        toast(msg, {
            type: "error",
        });
    }
    function showInfo(msg) {
        toast(msg, {
            type: "success"
        });
    }
    function verifySignature(){
        const endpoint=process.env.REACT_APP_ACTIVE_ENDPOINT;
        let body={
            query: "verification",
            signature: ccnft
        };
        fetch(endpoint+"/partners/verify/",{
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type":"application/json"
            }
        })
            .then((response)=>response.json())
            .then((response)=>{
                console.log("response",response);
                if(response.status==='success'){
                    let digest=response.digest;
                    localStorage.setItem("digest",digest);
                    localStorage.setItem("signature",ccnft);
                    showInfo("Authentication completed via cceNFT");
                    setTimeout(()=>{
                        window.location.href='/';
                    },3000);
                }else{
                    showErr("Authentication failed");
                    setTimeout(()=>{
                        window.location.href='/';
                    },3000);
                }
            }).catch((err)=>{console.log(err);});
    }
    return (
        <div><h1 className="text-white">ccNFT</h1></div>
    );
};
export default CCNFTCallback;