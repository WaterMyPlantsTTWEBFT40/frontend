import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import React, { useState /*useEffect*/ } from "react";
import PrivateRoute from "./Util/PrivateRoute";
import Login from "./Components/Login";
import Register from "./Components/Register";
import Home from "./Components/Home";

const initialFormValues = {
  username: "",
  password: "",
  phoneNumber: "",
};
function App() {
  const [formValues, setFormValues] = useState(initialFormValues);

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const pageChangeReset = () => {
    setFormValues(initialFormValues);
  };

  const submit = () => {
    return null;
  };
  return (
    <div className="App">
      <nav>
        {localStorage.getItem("token") ? (
          <Link to="/home">Home</Link>
        ) : (
          <div></div>
        )}
      </nav>
      <Switch>
        <PrivateRoute path="/home">
          <Home />
        </PrivateRoute>
        <Route exact path="/">
          <Login
            value={formValues}
            change={inputChange}
            pageChangeReset={pageChangeReset}
            submit={submit}
          />
        </Route>
        <Route path="/register">
          <Register
            value={formValues}
            change={inputChange}
            pageChangeReset={pageChangeReset}
            submit={submit}
          />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
