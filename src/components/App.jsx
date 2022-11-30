import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };


  handleSubmit = data => {
    this.state.contacts.map(contact => contact.name.toLowerCase()).includes(data.name.toLowerCase())
      ? (alert(`${data.name} is already in contacts`))
      : (this.setState((prevState) => { return { contacts: [...prevState.contacts, ...[data]] } }))
  };


  handleChange = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contacts, filter } = this.state;
    const filterToLowerCase = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterToLowerCase))
  };

  deleteContact = e => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== e),
    }))
  };

render() {
const { filter } = this.state;
const visibleContacts = this.getVisibleContacts();
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.handleSubmit} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.handleChange} />
      <ContactList contacts={visibleContacts} filter={filter} onDeleteContact={this.deleteContact} />
    </div>
  );
  };

};
