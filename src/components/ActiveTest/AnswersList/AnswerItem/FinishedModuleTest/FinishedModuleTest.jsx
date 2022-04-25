import React from 'react';
import styled from 'styled-components';

const StyleFinishedModuleTest = styled.div`
  margin-top: 30px;
  width: 700px;
  padding: 20px;
  color: #fff;
  border: 2px solid #fff;
  border-radius: 5px;
  box-sizing: border-box;
  margin: 20px 10px;

  img {
    width: 50px;
    height: 50px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
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

  button {
    padding: 2px 6px;
  }
`;

const FinishedModuleTest = (props) => {
  return (
    <StyleFinishedModuleTest>
      <ul>
        <li>
          <strong>1.</strong>
          text
          <i className=" icon-clouse fas fa-times"></i>
        </li>
        <li>
          <strong>2.</strong>
          text
          <i className=" icon-check fas fa-check"></i>
        </li>
        <p>Right 4/20</p>
        <div>
          <button>repeat</button>
        </div>
      </ul>
    </StyleFinishedModuleTest>
  );
};

export default FinishedModuleTest;
