import styled from 'styled-components';
import React from 'react';
import image_cat from '../../images/cat.png';
const StyleLoader = styled.div`
  font-size: 3rem;
  margin-top: 300px;
`;

const Loader = (props) => {
  return (
    <StyleLoader>
      <img alt="IT_cat" src={image_cat} />
      <p>Loading...</p>
    </StyleLoader>
  );
};

export default Loader;
