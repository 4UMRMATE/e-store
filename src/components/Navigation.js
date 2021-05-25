import { useDispatch, useSelector } from "react-redux";
import { setActivePage } from "../actions";

const Navigation = () => {
  const dispatch = useDispatch();
  const pagination = useSelector((state) => state.pagination);

  let pages = [];
  for (let i = 1; i <= pagination.pages; i++) {
    pages.push(i);
  }

  const changePages = (page) => dispatch(setActivePage(page));

  return (
    <div className="Navigation">
      {pages.map((page) => {
        return (
          <button
            key={page}
            className={`page-nav ${
              pagination.page === page ? "active-page-nav" : ""
            }`}
            onClick={() => changePages(page)}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Navigation;
