import React from "react";
import "./App.scss";
import AddMessage from "./containers/AddMessage";
import MessageListContainer from "./containers/MessageListContainer";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class App extends React.Component {
  render() {
    (function() {
      window.onload = function() {
        document.getElementById("medium").onclick = medium;
        document.getElementById("big").onclick = big;
        document.getElementById("bigger").onclick = bigger;
      };

      function medium() {
        var topField = document.querySelector("#topField");
        document.getElementById("medium").checked = true;
        topField.style.fontSize = "36pt";
      }
      function big() {
        var topField = document.querySelector("#topField");
        document.getElementById("big").checked = true;
        topField.style.fontSize = "48pt";
      }

      function bigger() {
        var topField = document.querySelector("#topField");
        document.getElementById("bigger").checked = true;
        topField.style.fontSize = "60pt";
      }
    })();
    return (
      <Container>
        <Row className="row">
          <Col xs={12}>
            <h1>IPFS Project</h1>

            <MessageListContainer />
          </Col>
        </Row>
        <div id="controlContainer">
          <fieldset className="controls">
            <legend>Size of text in prompter above:</legend>
            <label>
              <input type="radio" name="size" defaultChecked id="medium" />
              Medium
            </label>
            <label>
              <input type="radio" name="size" id="big" />
              Big
            </label>
            <label>
              <input type="radio" name="size" id="bigger" />
              Bigger
            </label>
          </fieldset>
        </div>
        <AddMessage />
      </Container>
    );
  }
}

export default App;
