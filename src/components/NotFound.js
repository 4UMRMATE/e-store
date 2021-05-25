import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <Link to="/">
        <h1>Go Back</h1>
      </Link>
    </div>
  );
};

export default NotFound;
