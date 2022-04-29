import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const StyleTestList = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  flex-grow: 1;
  width: 100%;

  p {
    margin-bottom: 50px;
    padding-top: 130px;
    text-transform: uppercase;
    font-size: 2rem;
    color: #fffdff;
    text-decoration: none;
    font-weight: bold;
    letter-spacing: 0.5rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }

  span {
    text-decoration: none;
    margin-top: 10px;
    color: #ffffff;
    font-weight: bold;
    font-size: 1.7rem;
    &:hover {
      color: #6a016a;
      text-decoration: underline;
    }
  }
`;
export default class TestList extends Component {
  renderTests() {
    return ['1-4', '4-8', '9-12'].map((test, index) => {
      return (
        <StyleTestList>
          <li key={index}>
            <Link style={{ textDecoration: 'none' }} exact to={'test_' + test}>
              <span> Module {test}</span>
            </Link>
          </li>
        </StyleTestList>
      );
    });
  }
  render() {
    return (
      <StyleTestList>
        <p>List of modules</p>

        <ul>{this.renderTests()}</ul>
      </StyleTestList>
    );
  }
}
