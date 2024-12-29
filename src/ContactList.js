import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from './actions/contactActions';

const ContactList = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();

  return (
    <div>
      {contacts.map((contact) => (
        <div key={contact.id}>
          <p>{contact.name} - {contact.phone}</p>
          <button onClick={() => dispatch(deleteContact(contact.id))}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
