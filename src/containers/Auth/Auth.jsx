import React, { Component } from 'react';
import styled from 'styled-components';
import Button from '../../components/UI/Button';
import Input from '../../components/UI/Input';
import is from 'is_js';
import { connect } from 'react-redux';
import image_cat from '../../images/cat.png';
import { auth } from '../../store/actions/auth';

const StyleAuth = styled.div`
  margin-top: 100px;
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

  .buttons {
    display: flex;
    justify-content: center;
  }

  form {
    background: #dbc2da;
    box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 5px;
  }

  h1 {
    color: #6a0b4d;
    text-align: center;
    text-transform: uppercase;
    margin-bottom: 30px;
  }

  button {
    display: inline-block;
    padding: 5px 20px;
    margin-left: 20px;
    margin-right: 10px;
    border-radius: 4px;
    border: 1px solid #8c8c8c;
    color: white;
    margin-right: 15px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 12px;
    background: #b0609e;
  }
  input {
    display: block;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    padding: 7px;
    margin: 0 auto 2px;
    width: 100%;
    outline: none;
    transition: all 300ms ease-in-out;
    font-size: 1.2rem;
  }
`;

class Auth extends Component {
  state = {
    isFormValid: false,
    formControls: {
      email: {
        value: '',
        type: 'email',
        label: 'Email',
        errorMessage: 'Email is incorrect',
        valid: false,
        touched: false,
        validation: {
          required: true,
          email: true,
        },
      },
      password: {
        value: '',
        type: 'password',
        label: 'Password',
        errorMessage: ' Password must contain 6 to 12 characters',
        valid: false,
        touched: false,
        validation: {
          required: true,
          minLength: 6,
        },
      },
    },
  };

  loginHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      true
    );
  };

  registerHandler = () => {
    this.props.auth(
      this.state.formControls.email.value,
      this.state.formControls.password.value,
      false
    );
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  validateControl(value, validation) {
    if (!validation) {
      return true;
    }

    let isValid = true;

    if (validation.required) {
      isValid = value.trim() !== '' && isValid;
    }

    if (validation.email) {
      isValid = is.email(value) && isValid;
    }

    if (validation.minLength) {
      isValid = value.length >= validation.minLength && isValid;
    }

    return isValid;
  }

  onChangeHandler = (event, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.value = event.target.value;
    control.touched = true;
    control.valid = this.validateControl(control.value, control.validation);

    formControls[controlName] = control;

    let isFormValid = true;

    Object.keys(formControls).forEach((name) => {
      isFormValid = formControls[name].valid && isFormValid;
    });

    this.setState({
      formControls,
      isFormValid,
    });
  };

  renderInputs() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <Input
          key={controlName + index}
          type={control.type}
          value={control.value}
          valid={control.valid}
          touched={control.touched}
          label={control.label}
          shouldValidate={!!control.validation}
          errorMessage={control.errorMessage}
          onChange={(event) => this.onChangeHandler(event, controlName)}
        />
      );
    });
  }

  render() {
    return (
      <StyleAuth>
        <div>
          <img alt="IT_cat" src={image_cat} />
          <h1>Login</h1>
          <form onSubmit={this.submitHandler} className="auth">
            {this.renderInputs()}
            <div className="buttons">
              <Button
                disabled={!this.state.isFormValid}
                onClick={this.loginHandler}
              >
                Log in
              </Button>
              <Button
                disabled={!this.state.isFormValid}
                onClick={this.registerHandler}
              >
                Sign in
              </Button>
            </div>
          </form>
        </div>
      </StyleAuth>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    auth: (email, password, isLogin) =>
      dispatch(auth(email, password, isLogin)),
  };
}

export default connect(null, mapDispatchToProps)(Auth);
