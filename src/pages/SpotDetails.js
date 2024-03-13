import React, { useState } from "react";
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

  const [numberOfReviews, setNumberOfReviews] = useState(0);
  const [averageStarRating, setAverageStarRating] = useState(0);

  return (
    <>
      <div className="spot-details-container">
        <SpotImage selectedData={selectedCardData} />
        <SpotDescription
          numberOfReviews={numberOfReviews}
          averageStarRating={averageStarRating}
        />
        <SpotReviews
          cityName={selectedCardData.city}
          setNumberOfReviews={setNumberOfReviews}
          setAverageStarRating={setAverageStarRating}
        />
      </div>
    </>
  );
};

export default SpotDetails;
