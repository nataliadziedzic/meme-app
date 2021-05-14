import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useAppSelector } from '../../redux/hooks';
import { ThemeProvider } from 'styled-components'
import { StylesProvider } from '@material-ui/core'
import { lightTheme, darkTheme } from '../../assets/styles/theme'
import Header from '../Header/Header';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import AllMemes from '../AllMemes/AllMemes';

const App: React.FC = () => {
  const theme = useAppSelector(state => state.themeReducer)

  return (
    <Router>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <div className="App">
            <Header />
            <Switch>
              <Route exact path="/regular" component={AllMemes} />
            </Switch>
          </div>
        </ThemeProvider>
      </StylesProvider>
    </Router>
  );
}

export default App;