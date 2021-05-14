const initialState = {
  joined: localStorage.getItem("token") ? true : false,
  loginName: JSON.parse(localStorage.getItem("token")),
};

export default function login(state = initialState, action) {
  switch (action.type) {
    case "JOINED":
      localStorage.setItem("token", JSON.stringify(action.name));
      return {
        ...state,
        joined: true,
        loginName: action.name,
      };
    case "LOGOUT_SUCCESS":
      localStorage.removeItem("token");
      return {
        ...state,
        loginName: null,
        joined: false,
      };

    default:
      return { ...state };
  }
}
