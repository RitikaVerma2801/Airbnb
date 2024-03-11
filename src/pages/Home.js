import React, { useState } from "react";
import Card from "../component/common/Card";
import "./Home.css";
import JSONData from "../constants/data.json";

const cardsPerPage = 10;

const Home = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalCards = JSONData.data.length;
  const totalPages = Math.ceil(totalCards / cardsPerPage);

  const startSlice = (currentPage - 1) * cardsPerPage;
  const endSlice = startSlice + cardsPerPage;
  const visibleCards = JSONData.data.slice(startSlice, endSlice);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  return (
    <div className="content-container">
      <div className="card-container">
        {visibleCards.map((cardData) => (
          <Card key={cardData.id} data={cardData}
            // key={cardData.id}
            // id={cardData.id}
            // imageSrc={cardData.imageSrc}
            // city={cardData.city}
            // state={cardData.state}
            // rating={cardData.rating}
            // price={cardData.price}
          />
        ))}
      </div>
      <div className="button-container">
        {totalPages > 1 && (
          <button
            className={`button-container-btn ${
              currentPage === 1 ? "disabled" : ""
            }`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Prev
          </button>
        )}
        {totalPages > 1 && (
          <button
            className={`button-container-btn ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Home;
