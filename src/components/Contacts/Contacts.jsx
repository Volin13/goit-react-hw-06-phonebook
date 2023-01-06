import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import css from './Contacts.module.css';

function Contacts({ children }) {
  const dispatch = useDispatch();
  const getContacts = state => state.contacts;
  const { items } = useSelector(getContacts);
  const getFilter = state => state.filter;
  const filter = useSelector(getFilter);
  const filteredContacts = items.filter(({ name }) =>
    name.toLowerCase().includes(filter)
  );
  return (
    <div>
      {children}
      <ul className={css.contactsList}>
        {filteredContacts.map(({ id, name, number }) => (
          <li key={id}>
            {name} {number}{' '}
            <button
              className={css.delete_btn}
              data-id={id}
              onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
