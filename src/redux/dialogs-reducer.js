const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogs: [
    { id: 1, name: "Джон" },
    { id: 2, name: "Петрович" },
    { id: 3, name: "Серега" },
    { id: 4, name: "Вовчик" },
    { id: 5, name: "Альберт" },
    { id: 6, name: "Сара" }
  ],

  messages: [
    { id: 1, message: "Привет" },
    { id: 2, message: "Как дела?" },
    { id: 3, message: "Как жизнь?" }
  ],

  newMessageBody: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };

    case SEND_MESSAGE:
      let body = state.newMessageBody;
      state.newMessageBody = "";
      return {
        ...state,
        messages: [...state.messages, { id: 6, message: body }]
      };
    default:
      return state;
  }
};

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });

export const updateNewMessageBodyCreator = body => {
  return {
    type: UPDATE_NEW_MESSAGE_BODY,
    body: body
  };
};
