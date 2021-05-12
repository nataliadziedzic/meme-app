import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { StylesProvider } from '@material-ui/core'
import Header from '../Header/Header';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import AllMemes from '../AllMemes/AllMemes';

const App: React.FC = () => {
  return (
    <Router>
      <StylesProvider injectFirst>
        <GlobalStyle />
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/regular" component={AllMemes} />
          </Switch>
        </div>
      </StylesProvider>
    </Router>
  );
}

export default App;
