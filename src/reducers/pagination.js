const initinalState = {
  total: 0,
  pages: 1,
  page: 1,
  limit: 20,
};

const assignPagination = (state = initinalState, action) => {
  switch (action.type) {
    case "ASSIGN_PAGINATION":
      return action.payload;
    case "SET_ACTIVE_PAGE":
      return Object.assign({}, state, { page: action.payload });
    default:
      return state;
  }
};

export default assignPagination;
