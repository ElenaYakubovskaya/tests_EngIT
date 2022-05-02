import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModuleTest from '../../containers/ModuleTest/ModuleTest';
import Layout from '../../hoc/Layout/Layout';
import TestList from '../../containers/TestList/TestList';
import Auth from '../../containers/Auth/Auth';
import СreatingTests from '../../containers/СreatingTests/СreatingTests';
import FinishedModuleTest from '../ActiveTest/AnswersList/AnswerItem/FinishedModuleTest/FinishedModuleTest';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<TestList />} />
        <Route
          path="/test:id/finished"
          exact
          element={<FinishedModuleTest />}
        />

        <Route path="/auth" element={<Auth />} />
        <Route path="/1-4" element={<ModuleTest />} />
        <Route path="/creating" element={<СreatingTests />} />
      </Route>
    </Routes>
  );
};
export default RootRouter;
