import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Select from '../../components/UI/Select';

import { createControl, validate, validateForm } from '../../form/MainForm';

const StyleСreatingTests = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  flex-grow: 1;
  width: 100%;

  .div {
    width: 100%;
    max-width: 600px;
    padding: 0 20px;
  }
  h1 {
    text-align: center;
    margin-bottom: 30px;
    color: #ffffff;
  }

  form {
    background: #eeeeee61;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 2px rgba(0 0 0 0.5);
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

function createOptionControl(number) {
  return createControl(
    {
      label: `answer ${number}: `,
      errorMessage: 'This value cannot be empty',
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: 'Question:',
        errorMesage: 'Question cannot be empty',
      },
      { required: true }
    ),
    option1: createOptionControl(1),
    option2: createOptionControl(2),
    option3: createOptionControl(3),
  };
}

export default class СreatingTests extends Component {
  state = {
    test: [],
    isFormValid: false,
    rightAnswerId: 1,
    formControls: createFormControls(),
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = (event) => {
    event.preventDefault();

    const test = this.state.test.concat();
    const index = test.length + 1;

    const { question, option1, option2, option3 } = this.state.formControls;

    const questionItem = {
      question: question.value,
      id: index,
      rightAnswerId: this.state.rightAnswerId,
      answers: [
        { text: option1.value, id: option1.id },
        { text: option2.value, id: option2.id },
        { text: option3.value, id: option3.id },
      ],
    };
    test.push(questionItem);

    this.setState({
      test,
      isFormValid: false,
      rightAnswerId: 1,
      formControls: createFormControls(),
    });
  };

  createTestHandler = (event) => {
    event.preventDefault();
    console.log(this.state.test);
  };

  changeHandler = (value, controlName) => {
    const formControls = { ...this.state.formControls };
    const control = { ...formControls[controlName] };

    control.touched = true;
    control.value = value;
    control.valid = validate(control.value, control.validation);

    formControls[controlName] = control;

    this.setState({
      formControls,
      isFormValid: validateForm(formControls),
    });
  };

  renderControls() {
    return Object.keys(this.state.formControls).map((controlName, index) => {
      const control = this.state.formControls[controlName];
      return (
        <div key={controlName + index}>
          <Input
            label={control.label}
            value={control.value}
            valid={control.valid}
            shouldValidate={!!control.validation}
            touched={control.touched}
            errorMessage={control.errorMessage}
            onChange={(event) =>
              this.changeHandler(event.target.value, controlName)
            }
          />
          {index === 0 ? <hr /> : null}
        </div>
      );
    });
  }

  selectChangeHandler = (event) => {
    this.setState({
      rightAnswerId: +event.target.value,
    });
  };

  render() {
    const select = (
      <Select
        label="right answer:"
        value={this.state.rightAnswerId}
        onChange={this.selectChangeHandler}
        options={[
          { text: 1, value: 1 },
          { text: 2, value: 2 },
          { text: 3, value: 3 },
        ]}
      />
    );
    return (
      <StyleСreatingTests>
        <div className="div">
          <h1>Сreating test</h1>
          <form onSubmit={this.submitHandler}>
            {this.renderControls()}
            {select}
            <Button
              type="primary"
              onClick={this.addQuestionHandler}
              disabled={!this.state.isFormValid}
            >
              add question
            </Button>
            <Button
              type="success"
              onClick={this.createTestHandler}
              disabled={this.state.test.length === 0}
            >
              creating test
            </Button>
          </form>
        </div>
      </StyleСreatingTests>
    );
  }
}
