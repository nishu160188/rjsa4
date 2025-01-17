export const ADD_CONTACT = 'ADD_CONTACT';
export const DELETE_CONTACT = 'DELETE_CONTACT';

export const addContact = (contact) => {
  return {
    type: ADD_CONTACT,
    payload: contact
  };
};

export const deleteContact = (id) => {
  return {
    type: DELETE_CONTACT,
    payload: id
  };
};
