import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleResults, inputProduct } from "../actions";

const searchProducts = async (product) => {
  let searchResults = [];
  try {
    return await axios
      .get(`https://gorest.co.in/public-api/products?name=${product}`)
      .then((res) => {
        console.log(res, res.data.data.length > 0);
        if (res.data.data.length > 0) {
          for (let i = 0; i < 3; i++) {
            if (res.data.data[i] !== undefined) {
              searchResults.push({
                id: res.data.data[i].id,
                name: res.data.data[i].name,
                image: res.data.data[i].image,
                price: res.data.data[i].price,
              });
            }
          }
        }
        return searchResults;
      });
  } catch (error) {
    console.error(error);
  }
};

export default function SearchBar() {
  // const [productInput, setProductInput] = useState("");
  const [suggestions, setSuggestions] = useState([{ id: 0 }]);
  const [suggestionsDisplay, setSuggestionsDisplay] = useState(false);
  // const [resultsDisplay, setResultsDisplay] = useState(false);

  const resultsDisplay = useSelector((state) => state.toggleResults);
  const productInput = useSelector((state) => state.productInput);

  const searchBarRef = useRef();
  const dispatch = useDispatch();

  const handleInput = (e) => {
    dispatch(inputProduct(e.target.value));
    if (e.target.value) {
      setSuggestionsDisplay(true);

      searchProducts(e.target.value).then((searchResults) => {
        setSuggestions(searchResults);
      });
    } else {
      setSuggestions([]);
      setSuggestionsDisplay(false);
    }
  };

  const handleClickOutside = (e) => {
    if (!searchBarRef.current.contains(e.target)) {
      console.log("outside!");
      dispatch(toggleResults(false));
    }
  };

  const handleClickInside = () => {
    console.log("inside!");
    dispatch(toggleResults(true));
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="SearchBar" ref={searchBarRef}>
      <form className="search-form">
        <input
          id="search-input"
          type="text"
          onChange={handleInput}
          value={productInput}
          autoComplete="off"
          placeholder="Search Here"
          onClick={handleClickInside}
        />
      </form>
      <div
        className="search-results"
        style={resultsDisplay ? { display: "flex" } : { display: "none" }}
      >
        <h2 className="result-title">Suggestions</h2>
        <div
          className="suggestions"
          style={suggestionsDisplay ? { display: "flex" } : { display: "none" }}
        >
          {suggestions.map((suggestion, idx) => {
            return (
              <Link
                className="suggestion"
                to={`/product/${suggestion.id}`}
                key={idx}
                tabIndex="0"
              >
                <img
                  src={suggestion.image}
                  alt="avatar"
                  width="100"
                  height="100"
                ></img>
                <li className="suggestion-name">{suggestion.name}</li>
                <strong>{suggestion.price} $</strong>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
