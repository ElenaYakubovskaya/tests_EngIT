import React, { Component } from 'react';
import styled from 'styled-components';

const StyleTestCreator = styled.div`
  margin-left: 500px;
`;

export default class TestCreator extends Component {
  render() {
    return <StyleTestCreator>Test Creator</StyleTestCreator>;
  }
}
