import React from "react";
import { connect } from "react-redux";
import { setUsers } from "../../redux/users-reducer";
import Axios from "axios";

import Users from "./Users";

class UsersContainer extends React.Component {
  componentDidMount() {
    Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(
      ({ data, totalCount }) => {
        this.props.setUsers(data.items);
      }
    );
  }

  render() {
    return <Users {...this.props} />;
  }
}

const mapStateToProps = ({ usersPage }) => ({
  users: usersPage.users
});

const mapDispatchToProps = dispatch => ({
  setUsers: payload => {
    dispatch(setUsers(payload));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UsersContainer);
