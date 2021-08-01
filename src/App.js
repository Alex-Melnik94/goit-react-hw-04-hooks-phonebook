import { useState, useEffect } from 'react';
import ContactForm from './ContactForm-ui/ContactForm';
import Filter from './Filter-ui/filter';
import ContactList from './ContactList-ui/ContactList';
import styles from './styles.module.css';

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const contactsFromLocal = JSON.parse(localStorage.getItem('contacts'));
    if (contactsFromLocal) {
      setContacts(contactsFromLocal);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const setContact = contact => {
    const sameContact = contacts.find(
      prevContact => prevContact.name === contact.name,
    );

    if (sameContact) {
      alert(`${sameContact.name} is already in contacts`);
      return;
    }

    setContacts(prevState => [contact, ...prevState]);
  };

  const changeFilter = e => {
    setFilter(e.target.value);
  };

  const onDeleteContact = id => {
    const filteredContacts = contacts.filter(contact => contact.id !== id);
    setContacts(filteredContacts);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <div className={styles.container}>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={setContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      <ContactList
        filteredContacts={filteredContacts}
        onDelete={onDeleteContact}
      />
    </div>
  );
}
