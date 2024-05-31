import React from "react";
import "./SearchResult.css";
import { Base_URL } from "../App";

const SearchResult = ({ data: foods, search, filterType }) => {
  const filteredData = foods.filter((item) => {
    if (filterType === "All") {
      return true;
    } else {
      return item.type === filterType;
    }
  });

  const searchedData = filteredData.filter((item) => {
    return search.toLowerCase() === ""
      ? item
      : item.name.toLowerCase().includes(search.toLowerCase());
  });

  // Debugging logs
  console.log("Filtered Data:", filteredData);
  console.log("Searched Data:", searchedData);

  return (
    <div className="foodcontainer">
      {searchedData.map((item) => (
        <div key={item.name} className="foodcards">
          <div className="food_img">
            <img src={Base_URL + item.image} alt="" />
          </div>
          <div className="food_info">
            <div className="info">
              <h3>{item.name}</h3>
              <p>{item.text}</p>
            </div>
            <button>{"$" + item.price.toFixed(2)}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResult;
