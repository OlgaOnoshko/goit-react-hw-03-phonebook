import { Component } from "react";
import { nanoid } from "nanoid";
import Form from "../Form/Form";
import RenderContacts from "../Contacts/Contacts";
import Filter from "../Filter/Filter";
import contacts from "../Contacts/contacts.json";

import { Container } from "./App.styled";

class App extends Component {
  state = {
    contacts,
    filter: "",
  };

  formSubmitHandler = (data) => {
    const newContact = data.name.toLowerCase();
    const sameName = this.state.contacts.map(
      (item) => item.name.toLowerCase() === newContact
    );

    if (sameName.includes(true)) {
      alert(`${data.name} is already in contacts`);
    } else {
      const contact = {
        id: nanoid(),
        ...data,
      };

      this.setState(({ contacts }) => ({
        contacts: [...contacts, contact],
      }));
    }
  };

  removeContact = (contactId) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter(
        (contact) => contact.id !== contactId
      ),
    }));
  };

  onFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  componentDidMount() {
    const contacts = localStorage.getItem("contacts");
    const parsedContacts = JSON.parse(contacts);
    this.setState({ contacts: parsedContacts });
  }

  render() {
    const removeContact = this.removeContact;
    const formSubmitHandler = this.formSubmitHandler;
    const onFilter = this.onFilter;
    const filteredContacts = this.getFilteredContacts();

    return (
      <Container>
        <h1>Phonebook</h1>
        <Form onSubmit={formSubmitHandler} />
        <h2>Contacts</h2>
        <Filter onChange={onFilter} />
        <RenderContacts contacts={filteredContacts} onRemove={removeContact} />
      </Container>
    );
  }
}

export default App;
