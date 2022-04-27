import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModuleTest from '../../containers/ModuleTest/ModuleTest';
import Layout from '../../hoc/Layout/Layout';
import Burger from '../Navigation/Burger';
import Menu from '../Navigation/Menu';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="moduleTest/" element={<ModuleTest />} />
      </Route>
      <Route path="/" element={<Burger />} />
      <Route path="/" element={<Menu />} />
    </Routes>
  );
};
export default RootRouter;
