import React from "react";
import useWindowDimensions from "../hooks/getDimensions"

function Loader() {
  const { width } = useWindowDimensions();

  return (
    <>
      <div className="" style={{marginTop: -90}}>
        <div
          className="position-fixed  w-100"
          style={{
            zIndex: 1100,
            marginLeft: width > 992 ? 0 : 0,
            background: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className=" d-flex align-items-center justify-content-center" style={{height:'120vh'}}>
            <div className="d-flex flex-wrap align-items-center justify-content-center">
              <img width={154} className="mt-n5 loading" src={'https://v.fastcdn.co/u/430e104e/57579327-0-Loaders-3.svg'} alt="" style={{filter: 'invert(72%) sepia(74%) saturate(502%) hue-rotate(161deg) brightness(92%) contrast(91%)'}}/>
              <h2
                className="text-white w-100 text-center mt-5"
              >
                Minting is in process
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Loader;
