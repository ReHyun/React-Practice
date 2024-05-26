import React from 'react';
import { createClobalSytle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body{
    background : #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div>안녕하세용</div>
    </>
  );
}

export default App;
