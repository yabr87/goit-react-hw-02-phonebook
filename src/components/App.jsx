import React, { Component } from 'react';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import { nanoid } from 'nanoid';

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

  onFormSabmit = e => {
    e.preventDefault();
    const userName = e.currentTarget.name.value.toLowerCase();
    const userTel = e.currentTarget.number.value;

    this.addContacts(userName, userTel);
    e.currentTarget.reset();
  };

  addContacts = (userName, userTel) => {
    this.setState(prevState => {
      let test = {
        contacts: [
          {
            id: nanoid(4),
            name: userName,
            number: userTel,
          },
          ...prevState.contacts,
        ],
      };
      console.log(test);
      return test;
    });
  };

  render() {
    return (
      <div className="AppWrapper">
        <h1>Phonebook</h1>
        <ContactForm onFormSabmit={this.onFormSabmit} />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        <ContactList contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
