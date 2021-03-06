import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import '~/config/ReactotronConfig';

import Routes from '~/routes';
import GlobalStyle from '~/styles/global';

export default function App() {
  return (
    <BrowserRouter>
      <Routes />
      <GlobalStyle />
    </BrowserRouter>
  );
}
