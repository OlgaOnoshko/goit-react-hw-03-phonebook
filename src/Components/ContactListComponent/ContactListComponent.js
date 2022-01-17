import React from "react";
import PropTypes from "prop-types";
import { ContactsContainer } from "./ContactListComponent.styled";

const ContactListComponent = ({ id, name, number, children }) => {
  return (
    <ContactsContainer key={id}>
      <p>
        {name}: {number}
      </p>
      {children}
    </ContactsContainer>
  );
};

ContactListComponent.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  children: PropTypes.object,
};

export default ContactListComponent;
