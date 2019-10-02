import React from "react";
import style from "./Dialogs.module.scss";
import { NavLink } from "react-router-dom";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator,
} from "../../redux/dialogs-reducer";

const DialogItem = props => {
  let path = "/dialogs/" + props.id;
  return (
    <div className={style.dialog + " " + style.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = props => {
  return <div className={style.message}>{props.message}</div>;
};

const Dialogs = props => {
  let state = props.store.getState().dialogPage;

  let dialogsElement = state.dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = state.messages.map(message => (
    <Message message={message.message} />
  ));

  let newMessageBody = state.newMessageBody;

  let onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  let onNewMessageChange = e => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return (
    <div className={style.dialogs}>
      <div className="row">
        <div className="col-4">
          <div className={style.dialogsItems}>{dialogsElement}</div>
        </div>
        <div className="col-8">
          <div className={style.messages}>{messagesElement}</div>
          <div>
            <div>
              <textarea
                placeholder="Enter your message"
                value={newMessageBody}
                onChange={onNewMessageChange}
              ></textarea>
            </div>
            <div>
              <button className="btn btn-primary" onClick={onSendMessageClick}>
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
