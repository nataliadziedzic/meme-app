import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { ThemeProvider } from 'styled-components';
import { StylesProvider } from '@material-ui/core';
import { GlobalStyle } from '../../assets/styles/globalStyles';
import { lightTheme, darkTheme } from '../../assets/styles/theme';
import Header from '../Header/Header';
import AllMemes from '../Memes/AllMemes/AllMemes';
import Home from '../Home/Home';
import { Main } from './App.style';

const App: React.FC = () => {
  const theme = useAppSelector(state => state.themeReducer);

  return (
    <Router>
      <StylesProvider injectFirst>
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
          <GlobalStyle />
          <Header />
          <Main>
            <div className='themeIcon' />
            <Switch>
              <Route exact path='/' component={Home} />
              <Route
                exact
                path='/:chosenMemes/page/:pageNumber'
                component={AllMemes}
              />
            </Switch>
          </Main>
        </ThemeProvider>
      </StylesProvider>
    </Router>
  );
};

export default App;
