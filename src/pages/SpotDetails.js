import React from "react";
import { useParams } from "react-router-dom";
import "./SpotDetails.css";
import SpotImage from "../component/common/SpotImage/SpotImage";
import SpotDescription from "../component/common/SpotDescription/SpotDescription";
import SpotReviews from "../component/common/SpotReviews/SpotReviews";
import JSONData from "../constants/data.json";

const SpotDetails = () => {
  const { id } = useParams();
  const selectedCardData = JSONData.data.find((card) => card.id === Number(id));
  // console.log(selectedCardData,"ritika")

  return (
    <>
      <div className="spot-details-container">
        <SpotImage selectedData={selectedCardData} />
        <SpotDescription />
        <SpotReviews cityName={selectedCardData.city} />
      </div>
    </>
  );
};

export default SpotDetails;
