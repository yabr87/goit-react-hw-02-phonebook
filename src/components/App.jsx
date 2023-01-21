import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

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
    if (this.checkNameInPhonebook(userName)) {
      this.alertError(userName);
      return;
    }

    this.addContacts(userName, userTel);
    e.currentTarget.reset();
  };

  alertError = userName => {
    alert(`${userName} is already in contacts!`);
  };

  checkNameInPhonebook = userName => {
    const { contacts } = this.state;
    return contacts.some(({ name }) => name.toLowerCase() === userName);
  };

  addContacts = (userName, userTel) => {
    this.setState(prevState => {
      return {
        contacts: [
          {
            id: nanoid(4),
            name: userName,
            number: userTel,
          },
          ...prevState.contacts,
        ],
      };
    });
  };

  deleteContacts = e => {
    const id = e.target.dataset.btnid;
    if (!id) return;
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(contact => contact.id !== id),
      };
    });
  };

  onInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  fiteredContacts = () => {
    // значення фільтру приводимо до нижного регістру та прибираємо пробіли на початку та в кінці
    const normalizeFilter = this.state.filter.toLowerCase().trim();
    //формуємо новий масив контактів з фультру в стейті
    const fiteredContacts = this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter)
    );
    console.log(fiteredContacts.sort((a, b) => a.name.localeCompare(b.name)));
    //соротуємо контакти та повертаемо масив фільтррованих контактів з функції
    return fiteredContacts.sort((a, b) => a.name.localeCompare(b.name));
  };

  render() {
    return (
      <div className="AppWrapper">
        <h1>Phonebook</h1>
        <ContactForm onFormSabmit={this.onFormSabmit} />

        <h2>Contacts</h2>
        <Filter
          filterValue={this.state.filter}
          onFilterInputChange={this.onInputChange}
        />
        <ContactList
          contacts={this.fiteredContacts()}
          deleteContacts={this.deleteContacts}
        />
      </div>
    );
  }
}

export default App;
