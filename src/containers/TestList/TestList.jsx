import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import axios from '../../axios/axios-test';

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
    font-weight: bold;
    font-size: 1.4em;
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
  state = {
    tests: [],
  };

  renderTests() {
    return this.state.tests.map((test) => {
      return (
        <StyleTestList key={test.id}>
          <li>
            <Link
              style={{ textDecoration: 'none', color: 'white' }}
              to={'/moduletest/' + test.id}
            >
              {test.name}
            </Link>
          </li>
        </StyleTestList>
      );
    });
  }

  async componentDidMount() {
    try {
      const response = await axios.get('/tests.json');
      const tests = [];
      Object.keys(response.data).forEach((key, index) => {
        tests.push({
          id: key,
          name: `Module №${index + 1}`,
        });
      });
      this.setState({
        tests: tests,
      });
    } catch (e) {
      console.log(e);
    }
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
