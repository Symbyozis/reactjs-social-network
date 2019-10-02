import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
import Dialogs from "./components/Dialogs";
import { Route } from "react-router-dom";

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
              {/* <Route
                path="/dialogs"
                render={() => <Dialogs store={props.store} />}
              /> */}
              <Route path="/profile" render={() => <Profile />} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
