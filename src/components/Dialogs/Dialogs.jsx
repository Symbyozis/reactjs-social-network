import React from "react";
import style from "./Dialogs.module.scss";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = props => {
  const {
    dialogs,
    messages,
    newMessageBody,
    onSendMessageClick,
    onNewMessageChange
  } = props;

  let dialogsElement = dialogs.map(dialog => (
    <DialogItem name={dialog.name} id={dialog.id} />
  ));
  let messagesElement = messages.map(message => (
    <Message message={message.message} />
  ));

  let onNewMessageChangeFunc = e => {
    let body = e.target.value;
    onNewMessageChange(body);
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
                onChange={onNewMessageChangeFunc}
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
