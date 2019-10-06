import { connect } from "react-redux";
import {
  updateNewMessageBodyCreator,
  sendMessageCreator
} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const mapStateToProps = ({ dialogPage }) => ({
  dialogs: dialogPage.dialogs,
  messages: dialogPage.messages,
  newMessageBody: dialogPage.newMessageBody
});

const mapDispatchToProps = dispatch => ({
  onSendMessageClick: () => {
    dispatch(sendMessageCreator());
  },

  onNewMessageChange: body => {
    dispatch(updateNewMessageBodyCreator(body));
  }
});

const DialogsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Dialogs);

export default DialogsContainer;
