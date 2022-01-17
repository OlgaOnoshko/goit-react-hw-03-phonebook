import React from "react";
import PropTypes from "prop-types";
import { Container, Button } from "./Contacts.styled";
import ContactListComponent from "../ContactListComponent/ContactListComponent";

const RenderContacts = ({ contacts, onRemove }) => (
  <Container>
    {contacts.map(({ id, name, number }) => (
      <ContactListComponent key={id} name={name} number={number}>
        <Button type="button" onClick={() => onRemove(id)}>
          Delete
        </Button>
      </ContactListComponent>
    ))}
  </Container>
);

export default RenderContacts;

RenderContacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  onRemove: PropTypes.func.isRequired,
};
