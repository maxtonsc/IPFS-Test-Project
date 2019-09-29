// ./reducers/index.js

import { ADD_TODO, RENDER_TODO_LIST } from "../actions/index";

const initialState = {
  MessageList: []
};

export default function messageApp(state = initialState, action) {
  switch (action.type) {
    case RENDER_TODO_LIST:
      return {
        ...state,
        MessageList: action.MessageList
      };
    case ADD_TODO:
      let newMessageList = [
        ...state.MessageList,
        {
          ...action.messageItem
        }
      ];
      return {
        ...state,
        MessageList: newMessageList
      };
    default:
      return state;
  }
}
