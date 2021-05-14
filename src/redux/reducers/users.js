const initialState = {
  list: [
    { name: "Vitya", phone: "84847387438" },
    { name: "Katya", phone: "84847387438" },
    { name: "Vitya", phone: "84847387438" },
    { name: "Katya", phone: "84847387438" },
    { name: "Vitya", phone: "84847387438" },
  ],
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case "CREATE_CONTACT":
      return {
        ...state,
        list: [...state.list, { ...action.contact }],
      };
    case "UPDATE_CONTACT":
      return {
        ...state,
        list: state.list.map((contact, index) =>
          index === action.index ? { ...action.contact } : contact
        ),
      };
    default:
      return { ...state };
  }
}
