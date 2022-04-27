import React from 'react';
import styled from 'styled-components';
import Button from '../../../../UI/Button';
import image_cat from '../images/cat.png';

const StyleFinishedModuleTest = styled.div`
  max-height: 100vh;
  margin-top: 30px;
  width: 700px;
  padding: 20px;
  color: #ffffff;

  box-sizing: border-box;
  margin: 20px 10px;

  .image {
    margin-left: 170px;
    width: 170px;
    height: 100px;
  }

  div {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .total-button {
    display: flex;
  }

  .icon-clouse {
    margin-left: 10px;
    font-size: 27px;
    color: red;
  }

  .icon-check {
    margin-left: 10px;
    font-size: 25px;
    color: #2dc73f;
  }

  p {
    margin-left: -25px;
  }
`;

const FinishedModuleTest = (props) => {
  const successCount = Object.keys(props.results).reduce((total, key) => {
    if (props.results[key] === 'success') {
      total++;
    }
    return total;
  }, 0);
  return (
    <StyleFinishedModuleTest>
      <div>
        <img className="image" src={image_cat} />
        <div className="total-button">
          <p>
            Total: {successCount}/{props.test.length}
          </p>
          <Button onClick={props.onRetry}>repeat</Button>
        </div>
      </div>
    </StyleFinishedModuleTest>
  );
};

export default FinishedModuleTest;