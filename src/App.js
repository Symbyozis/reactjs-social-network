import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import { Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = props => {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <Navbar />
            </div>
            <div className="col-10">
              <Route path="/dialogs" render={() => <DialogsContainer />} />
              <Route path="/profile" render={() => <Profile />} />
              <Route path="/users" render={() => <UsersContainer />} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
