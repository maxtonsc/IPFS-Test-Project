// ./src/actions/index.js
export const ADD_TODO = "ADD_TODO";
export const LOAD_TODO_LIST = "LOAD_TODO_LIST";
export const RENDER_TODO_LIST = "RENDER_TODO_LIST";

export function addMessage(title) {
  return {
    type: ADD_TODO,
    messageItem: {
      _id: new Date().getTime().toString(),
      title
    }
  };
}
export function loadMessageList() {
  return {
    type: LOAD_TODO_LIST
  };
}
