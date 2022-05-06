import React from 'react';
import styled from 'styled-components';
import Button from '../../../../UI/Button';
import image_cat from '../../../../../images/cat.png';
import { Link } from 'react-router-dom';

const StyleFinishedModuleTest = styled.div`
  max-height: 100vh;
  margin: 30px auto;
  width: 700px;
  padding: 20px;
  color: #ffffff;
  box-sizing: border-box;
  margin: 40px 10px;
  display: flex;
  align-items: center;

  .image {
    width: 170px;
    height: 100px;
    margin-top: 40px 0;
    margin-right: 90px;
  }

  div {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .total-button {
    display: flex;
  }
  .flex {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  p {
    margin-bottom: 20px;
    color: #ffffff;
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
      <img className="image" alt="IT_cat" src={image_cat} />
      <div className="total-button">
        <div className="flex">
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
