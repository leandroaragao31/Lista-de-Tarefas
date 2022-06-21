import React from 'react';
import Header from './Components/Header/header.js';
import Main from './Components/Main/main.js';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
body{
  margin:0;
  padding:0;
  box-sizing:border-box;
  list-style:none;
}

`;

export default function ToDo() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Main />
    </>
  );
}
