import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import profilePage from "./profile-reducer";
import dialogPage from "./dialogs-reducer";
import usersPage from "./users-reducer";
import sideBar from "./sidebar-reducer";

let rootReducer = combineReducers({
  profilePage,
  dialogPage,
  usersPage,
  sideBar
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleware = composeEnhancer(applyMiddleware(thunk));

let store = createStore(rootReducer, middleware);

export default store;
