import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import image_cat from '../../images/cat.png';
import { logout } from '../../store/actions/auth';

const StyledLogout = styled.div`
  padding-top: 50px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-top: 50px;
    font-size: 2em;
    margin-bottom: 50px;
  }

  img {
    width: 15%;
    height: 3%;
    margin-bottom: 50px;
  }
`;
class Logout extends Component {
  componentDidMount() {
    this.props.logout();
  }

  render() {
    return (
      <StyledLogout>
        <p>Thank you, come again.</p>
        <img alt="IT_cat" src={image_cat} />
        <p>&#8592; &nbsp;Sign in</p>
      </StyledLogout>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logout()),
  };
}

export default connect(null, mapDispatchToProps)(Logout);
