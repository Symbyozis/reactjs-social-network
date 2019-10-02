const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

let initialState = {
  posts: [
    { id: 1, message: "Lorem, ipsum dolor.", likesCount: "1" },
    { id: 2, message: "Lorem, ipsum dolor.", likesCount: "22" },
    { id: 3, message: "Lorem, ipsum dolor.", likesCount: "3" }
  ],

  newPostText: ""
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0
      };

      state.newPostText = "";
      return {
        ...state,
        posts: [...state.posts, newPost]
      };

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;
      return {
        ...state,
        newPostText: action.newText
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = text => {
  return {
    type: UPDATE_NEW_POST_TEXT,
    newText: text
  };
};

export default profileReducer;
