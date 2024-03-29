export default function authReducer(state = [], action) {
  switch (action.type) {
    case "LOGIN_USER":
      return action.payload;

    case "LOGOUT_USER":
      return action.payload;

    case "UPDATE_CART":
      return {
        ...state,
        cart: action.payload
      };

    default:
      return state;
  }
}


//...state merges existing state
//return state to pass the state back if we do not match an action