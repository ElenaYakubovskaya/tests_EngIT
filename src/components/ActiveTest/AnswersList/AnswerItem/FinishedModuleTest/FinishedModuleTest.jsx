import React from 'react';
import styled from 'styled-components';
import Button from '../../../../UI/Button';
import image_cat from '../../../../../images/cat.png';
import { Link } from 'react-router-dom';

const StyleFinishedModuleTest = styled.div`
  max-height: 100vh;
  margin-top: 30px;
  width: 700px;
  padding: 20px;
  color: #ffffff;
  box-sizing: border-box;
  margin: 10px 10px;

  .image {
    margin-left: 180px;
    width: 170px;
    height: 100px;
    margin-bottom: 40px;
  }

  div {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .total-button {
    display: flex;
  }

  p {
    margin-left: -25px;
  }
`;

const FinishedModuleTest = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    console.log('total', total);
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);

  return (
    <StyleFinishedModuleTest>
      <div>
        <img className="image" alt="IT_cat" src={image_cat} />
        <div className="total-button">
          <p>
            Total: {successCount}/{props.test.length}
          </p>
          <Button onClick={props.onRetry} type="primary">
            repeat
          </Button>
          <Link to={'/'}>
            <Button type="success">test list</Button>
          </Link>
        </div>
      </div>
    </StyleFinishedModuleTest>
  );
};

export default FinishedModuleTest;
