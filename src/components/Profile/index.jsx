import React from "react";
import style from "./Profile.module.scss";
import MyPostsContainer from "./MyPosts/MyPostContainer";
import ProfileInfo from "./ProfileInfo";

const Profile = props => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
