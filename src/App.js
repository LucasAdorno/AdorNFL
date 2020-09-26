import React from 'react';
import Header from './components/Header';
import Routes from './Routes';
import GlobalStyle from './styles/global'

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Routes />
    </>
  );
}

export default App;
