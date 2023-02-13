export const ccNFT=(account)=>{
    const ccnftENDPOINT=process.env.REACT_APP_CCNFT_ENDPOINT;
    const activeENDPOINT=process.env.REACT_APP_ACTIVE_ENDPOINT;
    console.log("user address change detected: ",account);
    let digest=localStorage.getItem("digest");

    function isValid(digest) {
        return digest>Date.now();
    }

    if(digest!=null && isValid(digest)){
     return;
    }
    const payload={
        account: account
    }
    fetch(activeENDPOINT+"/partners/status/",{
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((response)=>response.json())
        .then((response)=>{
            console.log(response);
            let callback={
                location: window.location.host,
                address: account
            };
            if(response.status==='success'){

                    window.location.replace(ccnftENDPOINT+"/authorize/"+new Buffer(JSON.stringify(callback)).toString('base64'));
            }else{
                window.location.replace(ccnftENDPOINT+"/start/"+new Buffer(JSON.stringify(callback)).toString('base64'));
            }
        })
        .catch((err)=>{
            console.log(err);
        })
}