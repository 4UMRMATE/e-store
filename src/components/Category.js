import { Link } from "react-router-dom";

const Category = (props) => {
  let { id, name, description } = props;
  return (
    <div className="Category">
      <Link to={`/category/${id}`}>
        <h1>{name}</h1>
        <p>{description}</p>
      </Link>
    </div>
  );
};

export default Category;
