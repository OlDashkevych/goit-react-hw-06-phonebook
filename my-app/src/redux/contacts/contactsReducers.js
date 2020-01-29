import types from '../types';

const initialState = {
  items: [],
  filtratedItems: [],
  contactExist: false,
};

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_CONTACT:
      if (
        state.items.every(
          item =>
            item.name.toLocaleLowerCase() !==
            action.payload.contact.name.toLocaleLowerCase(),
        )
      ) {
        return {
          ...state,
          contactExist: false,
          items: [...state.items, action.payload.contact],
        };
      }
      return { ...state, contactExist: true };

    case types.DELETE_CONTACT:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };

    case types.GET_ITEMS:
      return { ...state, items: [...action.payload.items] };

    case types.FILTRATE_CONTACTS:
      return {
        ...state,
        filtratedItems: state.items.filter(item =>
          item.name.toLowerCase().includes(action.payload.filter.toLowerCase()),
        ),
      };

    default:
      return state;
  }
};

export default contactsReducer;
