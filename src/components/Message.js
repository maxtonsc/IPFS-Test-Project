// ./src/components/Message.js

import React from "react";
import PropTypes from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

const Message = ({ title }) => <ListGroup.Item>{title}</ListGroup.Item>;

Message.propTypes = {
  title: PropTypes.string.isRequired
};

export default Message;
