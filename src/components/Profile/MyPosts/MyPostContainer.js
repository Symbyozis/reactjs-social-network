import {
  addPostActionCreator,
  updateNewPostTextActionCreator
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";
import MyPosts from "./MyPosts";

const mapStateToProps = ({ profilePage }) => ({
  posts: profilePage.posts,
  newPostText: profilePage.newPostText
});

const mapDispatchToProps = dispatch => ({
  addPost: () => {
    dispatch(addPostActionCreator());
  },

  onPostChange: text => {
    dispatch(updateNewPostTextActionCreator(text));
  }
});

const MyPostsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyPosts);

export default MyPostsContainer;
