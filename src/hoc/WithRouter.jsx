import { useParams } from 'react-router-dom';
import React from 'react';
export function WithRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}
/*import React from 'react';
import { useParams } from 'react-router-dom';
import ModuleTest from '../containers/ModuleTest/ModuleTest';

const withRouter = (WrappedComponent) => (props) => {
  const params = useParams();

  return <WrappedComponent {...props} params={params} />;
};
export default withRouter(ModuleTest);
*/
