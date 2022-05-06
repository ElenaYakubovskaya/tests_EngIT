import React, { Component } from 'react';
import styled from 'styled-components';
import Loader from '../../components/UI/Loader';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchTests } from '../../store/actions/test';

const StyleTestList = styled.li`
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
class TestList extends Component {
  renderTests() {
    return this.props.tests.map((test) => {
      return (
        <StyleTestList key={test.id}>
          <Link
            style={{ textDecoration: 'none', color: 'white' }}
            to={'/test/' + test.id}
          >
            {test.name}
          </Link>
        </StyleTestList>
      );
    });
  }

  componentDidMount() {
    this.props.fetchTests();
  }

  render() {
    return (
      <StyleTestList>
        <p>List of modules</p>
        {this.props.loading && this.props.tests.length !== 0 ? (
          <Loader />
        ) : (
          <ul>{this.renderTests()}</ul>
        )}
      </StyleTestList>
    );
  }
}

function mapStateToProps(state) {
  return {
    tests: state.test.tests,
    loading: state.test.loading,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchTests: () => dispatch(fetchTests()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(TestList);
