import { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleResults, inputProduct } from "../actions";

const fetchProduct = async (product_id) => {
  try {
    return await axios
      .get(`https://gorest.co.in/public-api/products?id=${product_id}`)
      .then((res) => {
        return res.data.data[0];
      });
  } catch (error) {
    console.error(error);
  }
};

const ProductMain = ({ match }) => {
  let { product_id } = match.params;
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(toggleResults(false));
    dispatch(inputProduct(""));
    fetchProduct(product_id).then((res) => setProduct(res));
  }, [product_id]);

  return (
    <div className="ProductMain">
      {product ? (
        <>
          <img src={product.image} alt=""></img>
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <strong>{product.price} $</strong>{" "}
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default ProductMain;
