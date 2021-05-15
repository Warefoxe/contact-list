import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";

function ProtectedRoute({ component: Component, ...restOfProps }) {
  const joined = useSelector(({ login }) => login.joined);

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        joined ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
}

function App() {
  // const joined = useSelector(({ login }) => login.joined);

  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
        </Switch>
      </Router>
      {/* {!joined ? <Login /> : <Home />} */}
    </div>
  );
}

export default App;
