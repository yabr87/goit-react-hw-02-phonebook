import React, { Component } from 'react';
import ContactForm from './ContactForm';
import { nanoid } from 'nanoid';

class App extends Component {
  render() {
    return (
      <div className="AppWrapper">
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        {/* <Filter ... /> */}
        {/* <ContactList /> */}
      </div>
    );
  }
}

export default App;
