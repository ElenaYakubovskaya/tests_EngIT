import React, { Component } from 'react';
import styled from 'styled-components';
import Input from '../../components/UI/Input';
import Button from '../../components/UI/Button';
import Select from '../../components/UI/Select';

import { createControl } from '../../form/MainForm';

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
    color: white;
  }

  form {
    background: #eeeeee61;
    border-radius: 5px;
    padding: 15px;
    box-shadow: 2px 2px 2px rgba(0 0 0 0.5);
  }
`;

function createOptionControl(number) {
  return createControl(
    {
      label: `answer ${number} `,
      errorMesage: 'This value cannot be empty',
      id: number,
    },
    { required: true }
  );
}

function createFormControls() {
  return {
    question: createControl(
      {
        label: 'Question',
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
    rightAnswerId: 1,
    formControls: createFormControls(),
  };

  submitHandler = (event) => {
    event.preventDefault();
  };

  addQuestionHandler = () => {};

  createTestHandler = () => {};

  changeHandler = (value, controlName) => {};

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
        label="right answer"
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
            <Button type="primary" onClick={this.addQuestionHandler}>
              add question
            </Button>
            <Button type="success" onClick={this.createTestHandler}>
              creating test
            </Button>
          </form>
        </div>
      </StyleСreatingTests>
    );
  }
}
