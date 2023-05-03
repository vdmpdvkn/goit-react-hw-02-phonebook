import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Form from './Form/Form';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  addContact = object => {
    console.log('object->', object);

    this.setState(({ contacts }) => ({
      contacts: [{ id: nanoid(), ...object }, ...contacts],
    }));
  };
  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  filterContactsOnInput = () => {
    const noramalizedContact = this.state.filter.toLowerCase();
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(noramalizedContact)
    );
  };
  deleteById = id => {
    this.setState({
      contacts: [...this.state.contacts.filter(contact => contact.id !== id)],
    });
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, changeFilter, deleteById, filterContactsOnInput } =
      this;
    return (
      <>
        <Form check={contacts} addContact={addContact} contacts={contacts} />
        <Filter text={filter} changeFilter={changeFilter} />
        <ContactList
          contacts={filterContactsOnInput()}
          deleteById={deleteById}
        />
      </>
    );
  }
}
export default App;
