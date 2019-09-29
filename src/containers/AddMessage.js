// ./src/containers/AddMessage.js

import React from "react";
import { connect } from "react-redux";
import { addMessage } from "../actions/index";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

let AddMessage = ({ dispatch }) => {
  let input;

  return (
    <Form
      onSubmit={e => {
        e.preventDefault();
        if (!input.value.trim()) {
          return;
        }

        dispatch(addMessage(input.value));
        input.value = "";
      }}
    >
      <Form.Group controlId="formBasicEmail">
        <InputGroup>
          <Form.Control
            type="text"
            placeholder="Feel free to clear the cart or type out a new message to send to the IPFS"
            ref={node => {
              input = node;
            }}
          />
          <InputGroup.Append>
            <Button type="submit" id="Start">
              Pass to the Converter
            </Button>
          </InputGroup.Append>
        </InputGroup>
      </Form.Group>
    </Form>
  );
};
AddMessage = connect()(AddMessage);

export default AddMessage;
