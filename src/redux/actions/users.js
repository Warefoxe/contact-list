export function createContact(contact) {
  return dispatch => {
      return dispatch({ type: "CREATE_CONTACT", contact });
  };
}

export function updateContact(contact, index) {
  return dispatch => {
      return dispatch({ type: "UPDATE_CONTACT", contact, index });
  };
}

