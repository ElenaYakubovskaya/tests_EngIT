import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ModuleTest from '../../containers/ModuleTest/ModuleTest';
import Layout from '../../hoc/Layout/Layout';
import TestList from '../../containers/TestList/TestList';
import Auth from '../../containers/Auth/Auth';
import TestCreator from '../../containers/TestCreator/TestCreator';
import FinishedModuleTest from '../ActiveTest/AnswersList/AnswerItem/FinishedModuleTest/FinishedModuleTest';

const RootRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/list" element={<TestList />} />
        <Route path="/test:id/finished" element={<FinishedModuleTest />} />

        <Route path="/auth" element={<Auth />} />
        <Route path="/test:id" element={<ModuleTest />} />
        <Route path="/creator" element={<TestCreator />} />
      </Route>
    </Routes>
  );
};
export default RootRouter;
