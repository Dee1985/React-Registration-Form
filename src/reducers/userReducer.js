import uuid from "uuid/v4";

export const userReducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      return [
        ...state,
        {
          userName: action.user.userName,
          email: action.user.email,
          password: action.user.password,
          password2: action.user.password2,
          id: uuid()
        }
      ];
    case "REMOVE_USER":
      return state.filter(user => user.id !== action.id);
    default:
      return state;
  }
};
