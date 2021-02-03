import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import styled from "styled-components";


const schema = yup.object().shape({
  username: yup.string().required('A username is required').min(4, 'The Username needs to be 4 chars long'),
  password: yup.string().required('A password is required').min(5, 'The password needs to be at least 5 chars long'),
  phoneNumber: yup.string().required('A phone is required').min(10, 'Your phone number needs to be at least 10 chars long'),
})

export default function Login(props) {
  const { value, submit, change, pageChange } = props;
  const [disabled, setDisabled] = useState(true)

  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    schema.isValid(value).then(valid => setDisabled(!valid))
  }, [value])

  const onChange = (evt) => {
    const { name, value } = evt.target;
    change(name, value);
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <StyledLoginContainer>
      <h1> Welcome to Water My Plants Login! </h1>
      <StyledForm className="login-form" onSubmit={onSubmit}>
        <StyledInputs>
        <label>
          Username
          <input
            name="username"
            type="text"
            onChange={onChange}
            value={value.username}
            placeholder="Username"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="pass"
            onChange={onChange}
            value={value.password}
            placeholder="Password"
          />
        </label>
        <label>
          Phone Number
          <input
            name="phoneNumber"
            type="tel"
            onChange={onChange}
            value={value.phoneNumber}
            placeholder="Phone Number"
          />
        </label>
        <button disabled={disabled} className="submit-btn">
          Login
        </button>
        </StyledInputs>
        <div className="errors">
          {/* <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{errors.phoneNumber}</div> */}
        </div>
        <StyledRegisterLink>
          Don't Have An Account?
          <Link to="/register" onClick={pageChange}>
            <br></br>
            Register
          </Link>
          </StyledRegisterLink>
      </StyledForm>
    </StyledLoginContainer>
  );
}

const StyledLoginContainer = styled.div`
  color: black;
  height: auto;
  width: auto;
  //background-color: ;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 1px 1px;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledForm = styled.form`
  height: auto; 
`;

const StyledInputs = styled.div`
  color: black;
  height: auto;
  width: auto;
  //background-color:
  display: flex;
  border: 3px solid slategray;
  box-shadow: 0.8rem 0.8rem gray;
  align-items: center;
  justify-content: space-evenly;
  text-align: match-parent;
  padding: 5% 5% 5% 5%;
  margin: 0% 0% 0% 0%;
  flex-wrap: wrap;
  flex-direction: column;
`;

const StyledRegisterLink = styled.div`
  margin: 10% auto auto auto;
`