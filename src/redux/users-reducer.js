let initialState = {
  users: null,
  followed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_USERS":
      return {
        ...state,
        users: action.payload
      };
    default:
      return state;
  }
};

export const setUsers = payload => {
  return {
    type: "SET_USERS",
    payload
  };
};
