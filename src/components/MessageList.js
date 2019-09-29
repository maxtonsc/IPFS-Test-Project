// ./src/components/MessageList.js

import React, { useState } from "react";
import PropTypes from "prop-types";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Message from "./Message";
import QRCode from "qrcode.react";

const MessageList = ({ MessageList }) => {
  const [linkValue, setlinkValue] = useState("https://www.google.com");

  //A lot of this is classic code just pure vanilla JS from 4 years ago.
  var defaultWordSpeed = 171;
  var timer;
  var wordSpeed = defaultWordSpeed;
  var counter = 0;
  function display() {
    document.getElementById("formBasicEmail").disabled = "true";
    document.getElementById("Start").disabled = "true";
    var jumbotronText = document.getElementById("topField");
    var result = jumbotronText.innerText;
    var inpt = result.split(/[ \t\n]+/);

    ipfs(jumbotronText.innerText);
    preprocessor();
    timer = setInterval(processor, wordSpeed);
    function preprocessor() {
      for (var i = 0; inpt.length > i; i++) {
        var finalChar = inpt[i].slice(-1);
        var newString = inpt[i].substring(0, inpt[i].length - 1);
        if (
          finalChar === "." ||
          finalChar === "," ||
          finalChar === ";" ||
          finalChar === ":" ||
          finalChar === "?" ||
          finalChar === "!"
        ) {
          inpt[i] = newString;
          inpt.splice(i, 0, newString);
        }
      }
    }

    function processor() {
      jumbotronText.innerText = inpt[counter];
      counter += 1;
      if (counter > inpt.length) {
        jumbotronText.innerText = "";
        clearInterval(timer);
        timer = null;
        document.getElementById("Start").disabled = "";
        document.getElementById("formBasicEmail").disabled = "";
      }
    }
  }
  function ipfs(data) {
    const IPFS = require("ipfs-mini");
    const ipfs = new IPFS({
      host: "ipfs.infura.io",
      port: 5001,
      protocol: "https"
    });

    ipfs.add(data, (err, result) => {
      setlinkValue("https://ipfs.infura.io/ipfs/" + result);
      console.log(err, result);
    });
    unfade(document.getElementById("QRCodeGif"));
  }
  function unfade(element) {
    document.getElementById("QRCode").style.display = "none";
    var op = 0.1; // initial opacity
    element.style.filter = "alpha(opacity=0.1)";
    element.style.display = "block";
    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
        element.style.display = "none";
        document.getElementById("QRCode").style.display = "block";
        document.getElementById("IPFSValue").style.display = "block";
      }
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.01;
    }, 30);
  }

  function clearCart() {
    let cartItems = document.getElementsByClassName("list-group-item");
    let cartItemsLength = cartItems.length;
    for (var i = cartItemsLength - 1; i >= 0; i--) {
      cartItems[i].remove();
    }
  }
  return (
    <div id="topElements">
      <Jumbotron id="topField">
        {MessageList.map((message, index) => (
          <Message key={index} {...message} />
        ))}
      </Jumbotron>
      <Button
        onClick={e => {
          display();
        }}
      >
        Beam the message up
      </Button>

      <Button
        onClick={e => {
          clearCart();
        }}
      >
        Clear your cart
      </Button>

      <div id="QRCodeGif" className="QRCodeObjects"></div>
      <QRCode id="QRCode" className="QRCodeObjects" value={linkValue} />
      <h4 id="IPFSValue" className="IPFSText">
        or the boring html <a href={linkValue}>{linkValue}</a>
      </h4>
    </div>
  );
};

MessageList.propTypes = {
  MessageList: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    }).isRequired
  ).isRequired
};

export default MessageList;
