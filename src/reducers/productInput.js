const inputProduct = (state = "", action) => {
  switch (action.type) {
    case "INPUT_PRODUCT":
      return action.payload;
    default:
      return state;
  }
};

export default inputProduct;
