export function onLogin(name) {
  return (dispatch) => {
    return dispatch({ type: "JOINED", name });
  };
}

export function onLogout() {
  return (dispatch) => {
    return dispatch({ type: "LOGOUT_SUCCESS" });
  };
}
