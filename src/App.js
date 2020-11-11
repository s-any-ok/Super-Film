import React from "react";
import StartPage from "./components/Content/StartPage";
import Films from "./components/Content/Films";
import Header from "./components/Header/Header";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <Header />
        </div>
        <div className="content">
          <Switch>
            <Route path="/films" render={() => <Films />} />
            <Route exect path="/" render={() => <StartPage />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
