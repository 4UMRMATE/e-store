import { useState, useEffect } from "react";
import axios from "axios";

import Product from "./Product";
import NotFound from "./NotFound";
import Navigation from "./Navigation";

import { useDispatch, useSelector } from "react-redux";
import { assignProducts, assignPagination } from "../actions";

const fetchCategoryName = async (category_id) => {
  try {
    return await axios
      .get(`https://gorest.co.in/public-api/categories?id=${category_id}`)
      .then((res) => {
        return res.data.data;
      });
  } catch (error) {
    console.error(error);
  }
};

const fetchProducts = async (category_id, page) => {
  try {
    return await axios
      .get(
        `https://gorest.co.in/public-api/products?categories[]=${category_id}&page=${page}`
      )
      .then((res) => {
        return res.data;
      });
  } catch (error) {
    console.error(error);
  }
};

const CategoryMain = ({ match }) => {
  let { category_id } = match.params;
  // const [products, setProducts] = useState(null);
  const products = useSelector((state) => state.products);
  const pagination = useSelector((state) => state.pagination);
  const [category, setCategory] = useState(null);
  // const [pagination, setPagination] = useState(null);

  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    fetchCategoryName(category_id).then((res) => {
      setCategory(res);
    });
    fetchProducts(category_id, pagination.page).then((res) => {
      // setProducts(res.data);
      dispatch(assignProducts(res.data));
      dispatch(assignPagination(res.meta.pagination));
      // setPagination(res.meta.pagination);
    });
  }, [category_id, pagination.page]);
  return (
    <div className="CategoryMain">
      {category ? <h1 id="cat-title">{category[0].name}</h1> : ""}
      {products && products.length > 0 ? (
        products.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
              price={product.price}
              categories={product.categories}
            />
          );
        })
      ) : (
        <NotFound />
      )}
      {pagination ? <Navigation /> : ""}
    </div>
  );
};

export default CategoryMain;
