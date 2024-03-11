import React from "react";
import "./SpotImage.css";

const SpotImage = ({selectedData}) => {
  return (
   
    <>
      <div className="spot-info">
        <h2>{selectedData.city}</h2>
        {/* <span>{selectedData.state}</span> */}
      </div>

      <div className="spot-image">
        <div className="half-image">
          <img src={selectedData.imageSrc} alt="img" className="image"/>
        </div>
        <div className="half-image">
          <div className="top-image">
            <img src={selectedData.img1} alt="img" />
            <img src={selectedData.img2} alt="img"/>
          </div>
          <div className="bottom-image">
          <img src={selectedData.img3} alt="img"/>
          <img src={selectedData.img4} alt="img"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SpotImage;
