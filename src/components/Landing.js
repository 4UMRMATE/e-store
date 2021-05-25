import axios from "axios";
import { useState, useEffect } from "react";
import Category from "./Category";

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
