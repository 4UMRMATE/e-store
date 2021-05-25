import axios from "axios";
import { useState, useEffect } from "react";
import Category from "./Category";

import { useDispatch, useSelector } from "react-redux";
import { assignProducts } from "../actions";

const fetchCategories = async () => {
  try {
    return await axios
      .get("https://gorest.co.in/public-api/categories")
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.error(error);
  }
};

const Landing = () => {
  const [categories, setCategories] = useState([]);
  // useSelector((state) => state.categories);

  const dispatch = useDispatch();

  useEffect(() => {
    fetchCategories().then((res) => setCategories(res));
  }, []);
  return (
    <div className="Landing">
      {categories
        ? categories.map((category) => {
            return (
              <Category
                key={category.id}
                id={category.id}
                name={category.name}
                description={category.description}
              />
            );
          })
        : ""}
    </div>
  );
};

export default Landing;
