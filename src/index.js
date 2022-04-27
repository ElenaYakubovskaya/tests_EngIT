import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const app = (
  <>
    <BrowserRouter>
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </>
);

ReactDOM.render(app, document.getElementById('root'));

export default GlobalStyle;
