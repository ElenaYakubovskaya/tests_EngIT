import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from '../../hoc/Layout/Layout';
import TestList from '../../containers/TestList/TestList';
import Auth from '../../containers/Auth/Auth';
import СreatingTests from '../../containers/СreatingTests/СreatingTests';
import WithRouter from '../../hoc/WithRouter';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<TestList />} />
        <Route path="tests/:id" element={<WithRouter />} />
        <Route path="auth" element={<Auth />} />
        <Route path="creating" element={<СreatingTests />} />
      </Route>
    </Routes>
  );
};
export default RootRouter;
