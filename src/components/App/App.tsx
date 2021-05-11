import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { StylesProvider } from '@material-ui/core'
import Header from '../Header/Header';
import { GlobalStyle } from '../../assets/styles/globalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <div className="App">
          <Header />
        </div>
      </StylesProvider>
    </Router>
  );
}

export default App;
