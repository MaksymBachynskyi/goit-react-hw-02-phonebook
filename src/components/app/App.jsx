import { Component } from 'react';
import { Filter } from '../filter/filter';
import { ContactList } from '../contactList/contactList.jsx';
import { ContactForm } from '../contactForm/contactForm.jsx';
import { Container } from './Layout';
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
  onAddNumber = newNumber => {
    const isIcluded = this.state.contacts.some(item => {
      return item.name === newNumber.name;
    });
    if (!isIcluded) {
      this.setState(prevSetstate => {
        return {
          contacts: [...prevSetstate.contacts, newNumber],
        };
      });
    } else {
      alert(`${newNumber.name} is alredy in contacts`);
    }
  };
  onDelete = e => {
    this.setState(prevSetstate => {
      return {
        contacts: prevSetstate.contacts.filter(item => {
          return item.name !== e;
        }),
      };
    });
  };
  onFilter = e => {
    this.setState({
      filter: e.target.value,
    });
  };
  render() {
    const filteredList = this.state.contacts.filter(item => {
      const normalize = item.name.toLowerCase();
      const normalizeTarget = this.state.filter.toLowerCase();
      return normalize.includes(normalizeTarget);
    });

    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onAddNumber={this.onAddNumber} />
        <h2>Contacts</h2>
        <Filter onFilter={this.onFilter} />
        <ContactList contacts={filteredList} onDelete={this.onDelete} />
      </Container>
    );
  }
}
