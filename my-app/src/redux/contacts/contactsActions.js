import types from '../types';

export const addAction = item => {
  return {
    type: types.ADD_CONTACT,
    payload: {
      contact: item,
    },
  };
};

export const deleteAction = id => ({
  type: types.DELETE_CONTACT,
  payload: {
    id,
  },
});

export const getItemsFromLocalStorage = items => ({
  type: types.GET_ITEMS,
  payload: {
    items,
  },
});

export const filtrateContacts = filter => ({
  type: types.FILTRATE_CONTACTS,
  payload: {
    filter,
  },
});
