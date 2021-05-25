export const toggleResults = (state) => {
  return {
    type: "TOGGLE_RESULTS",
    payload: state,
  };
};

export const inputProduct = (state) => {
  return {
    type: "INPUT_PRODUCT",
    payload: state,
  };
};

export const assignProducts = (state) => {
  return {
    type: "ASSIGN_PRODUCTS",
    payload: state,
  };
};

export const assignPagination = (state) => {
  return {
    type: "ASSIGN_PAGINATION",
    payload: state,
  };
};

export const setActivePage = (state) => {
  return {
    type: "SET_ACTIVE_PAGE",
    payload: state,
  };
};
