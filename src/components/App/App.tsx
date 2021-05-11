import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from '../Header/Header';
import { GlobalStyle } from '../../assets/styles/globalStyles';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <div className="App">
        <Header />
      </div>
    </Router>
  );
}

export default App;
