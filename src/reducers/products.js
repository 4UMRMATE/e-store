const products = (state = [], action) => {
  switch (action.type) {
    case "ASSIGN_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};

export default products;
