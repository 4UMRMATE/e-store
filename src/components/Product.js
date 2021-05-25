import { Link } from "react-router-dom";

const Product = (props) => {
  let { id, name, description, image, price, categories } = props;
  return (
    <div className="Product">
      <Link to={`/product/${id}`}>
        <img src={image} alt=""></img>
        <h2>{name}</h2>
        <strong>{price} $</strong>
      </Link>
      {categories
        ? categories.map((category) => {
            return (
              <div key={category.id}>
                <a href={`/category/${category.id}`}>{category.name}</a>
              </div>
            );
          })
        : ""}
    </div>
  );
};

export default Product;
