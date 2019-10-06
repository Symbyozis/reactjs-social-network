import React from "react";
import style from "./MyPosts.module.scss";
import Post from "./Post";

const MyPosts = props => {
  const { posts, newPostText, addPost, onPostChange } = props;

  let postsElement = posts.map((post, i) => (
    <Post message={post.message} likesCount={post.likesCount} key={i} />
  ));

  let onPostChangeFun = e => {
    let text = e.target.value;
    onPostChange(text);
  };

  return (
    <div>
      <h1>Новости</h1>
      <div className={style.posts}>
        <div className="row">{postsElement}</div>
      </div>

      <div className={style.addPost}>
        <textarea value={newPostText} onChange={onPostChangeFun} />
        <button onClick={addPost}>Добавить новость</button>
      </div>
    </div>
  );
};

export default MyPosts;
