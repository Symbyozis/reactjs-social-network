import React from "react";
import style from "./ProfileInfo.module.scss";

const ProfileInfo = () => {
  return (
    <div className={style.wrap}>
      <div>
        <img src="https://source.unsplash.com/random" alt="" />
      </div>
      <div className={style.descr}>Ava + descrt</div>
    </div>
  );
};

export default ProfileInfo;
