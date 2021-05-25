import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
        <h1>E-Store</h1>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
