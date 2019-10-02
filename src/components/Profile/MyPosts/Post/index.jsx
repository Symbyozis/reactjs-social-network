import React from "react";
import style from "./Post.module.scss";

const Post = props => {
  return (
    <div className="col-4">
      <div className={style.item}>
        <img
          src={"https://source.unsplash.com/random/" + props.likesCount}
          alt=""
        />
        <h2>{props.message}</h2>
        <span className={style.count}>{props.likesCount}</span>
      </div>
    </div>
  );
};

export default Post;
