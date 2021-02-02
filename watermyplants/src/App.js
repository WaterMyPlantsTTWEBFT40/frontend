import "./App.css";
import React, { useState, useEffect } from "react"
import { Route, Switch } from "react-router-dom";
import Login from "./Components/Login"
import Register from "./Components/Register"
import styled from "styled-components";

const initialFormValues = {
  username: "",
  password: "",
  phoneNumber: "",
};

function App() {
  const [ formValues, setFormValues ] = useState(initialFormValues)

  const inputChange = (name, value) => {
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const pageChangeReset = () => {
    setFormValues(initialFormValues);
  }

  const submit = () => {
    return null;
  }

  return ( 

    
  <div>

      <StyledApp>
        <Switch>
          <Route path="/register">
            <Register value={formValues} change={inputChange} pageChangeReset={pageChangeReset} submit={submit} />
          </Route> 
          <Route path="/" >
            <Login value={formValues} change={inputChange} pageChangeReset={pageChangeReset} submit={submit}/>
          </Route>
        </Switch>
      </StyledApp>
  </div>

        );
}

export default App;

const StyledApp = styled.div`

`
