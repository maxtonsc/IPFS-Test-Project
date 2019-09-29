// ./src/containers/MessageListContainer.js

import { connect } from "react-redux";
import MessageList from "../components/MessageList";

const mapStateToProps = state => {
  return {
    MessageList: state.MessageList
  };
};

const MessageListContainer = connect(mapStateToProps)(MessageList);

export default MessageListContainer;
