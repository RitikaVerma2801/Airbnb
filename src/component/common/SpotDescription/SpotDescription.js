import React from "react";
import "./SpotDescription.css";
import Button from "../Button/Button";
import SpotReviewAndRating from "../SpotReviewAndRating/SpotReviewAndRating";

const SpotDescription = () => {
  const handleClick = () => {
    alert("Feature coming soon...");
  };

  return (
    <>
      <h2>Hosted by Firstname Lastname</h2>
      <div className="spot-desc-container">
        <p className="left-container">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum
          dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. cillum. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
        <div className="right-container">
          <div className="row">
            <span className="f-25">
              $123.45 <label className="f-18">night</label>
            </span>

            <SpotReviewAndRating />
            
          </div>
          <Button
            onClick={handleClick}
            label="Reserve"
            style={{ "background-color": "maroon" }}
          />
        </div>
      </div>
    </>
  );
};

export default SpotDescription;
