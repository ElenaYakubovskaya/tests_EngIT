import React, { Component } from 'react';
import styled from 'styled-components';

const StyleTestList = styled.div`
  margin-left: 500px;
`;

export default class TestList extends Component {
  render() {
    return <StyleTestList>TestList</StyleTestList>;
  }
}
