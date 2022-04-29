import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Button from '../../components/UI/Button';

const StyleAuth = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  padding-top: 100px;
  flex-flow: 1;
  width: 100%;

  div {
    width: 100%;
    max-width: 600px;
    padding: 0 20px;
  }

  form {
    background: #dbc2da;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 5px;
  }

  h1 {
    color: #b0609e;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
  }
  input {
    display: block;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0 auto 20px;
    width: 92%;
    outline: none;
    transition: all 300ms ease-in-out;
    font-size: 1.2rem;
  }
`;

const Auth = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [emailDirty, setEmailDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [emailError, setEmailError] = useState('Email cannot be empty');
  const [passwordError, setPasswordError] = useState(
    'Password cannot be empty'
  );
  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    if (emailError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, passwordError]);

  const emailHandler = (e) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Email incorrect');
    } else {
      setEmailError('');
    }
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 4 || e.target.value.length > 8) {
      setPasswordError('Password must be between 4 and 8 characters ');
      if (!e.target.value) {
        setPasswordError('Password cannot be empty ');
      }
    } else {
      setPasswordError('');
    }
  };

  const blurHandler = (e) => {
    console.log(e.target.name);
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true);
        break;
      case 'password':
        setPasswordDirty(true);
        break;
    }
  };

  return (
    <StyleAuth>
      <div>
        <form>
          <h1>Login</h1>
          {emailDirty && emailError && (
            <p style={{ marginLeft: '22px', color: 'red' }}>{emailError}</p>
          )}
          <input
            value={email}
            name="email"
            placeholder="Email"
            onChange={(e) => emailHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="text"
          />
          {passwordDirty && passwordError && (
            <p style={{ marginLeft: '22px', color: 'red' }}>{passwordError}</p>
          )}
          <input
            name="password"
            value={password}
            placeholder="Password"
            onChange={(e) => passwordHandler(e)}
            onBlur={(e) => blurHandler(e)}
            type="password"
          />

          <Button disabled={!formValid} type="submit">
            Log in
          </Button>
        </form>
      </div>
    </StyleAuth>
  );
};

export default Auth;
