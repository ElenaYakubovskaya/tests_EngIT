import React, { Component } from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout';
import TestList from '../../containers/TestList/TestList';
import Auth from '../../containers/Auth/Auth';
import СreatingTests from '../../containers/СreatingTests/СreatingTests';
import { WithRouter } from '../../hoc/WithRouter';
import Logout from '../Logout/Logout';
import { connect } from 'react-redux';
import { autoLogin } from '../../store/actions/auth';
import ModuleTest from '../../containers/ModuleTest/ModuleTest';

class RootRouter extends Component {
  componentDidMount() {
    this.props.autoLogin();
  }

  render() {
    let routes = (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<TestList />} />
          <Route path="test/:id" element={<Auth />} />
          <Route path="auth" element={<Auth />} />
          <Route path="creating" element={<Auth />} />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    );

    if (this.props.isAuthenticated) {
      routes = (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="test/:id" element={<ModuleTest {...this.props} />} />

            <Route path="creating" element={<СreatingTests />} />
            <Route path="logout" element={<Logout />} />
            <Route index element={<TestList />} />
            <Route path="auth" element={<TestList />} />
          </Route>
        </Routes>
      );
    }
    return routes;
  }
}

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.auth.token,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    autoLogin: () => dispatch(autoLogin()),
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WithRouter(RootRouter));
