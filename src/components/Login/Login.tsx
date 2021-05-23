import { Button } from '@material-ui/core';
import * as React from 'react';
import ErrorSnackbar from '../Snackbars/ErrorSnackbar';
import { Box, LoginSection, StyledTextfield } from './Login.style';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [error, setError] = React.useState(false);

  const login = () => {
    console.log('LOGIN');
    setError(true);
  };
  const recoverPassword = () => {
    console.log('FORGOT');
    setError(true);
  };
  const createAccount = () => {
    console.log('CREATE');
    setError(true);
  };

  return (
    <>
      <Box>
        <LoginSection>
          <h2>Login</h2>
          <StyledTextfield
            variant='outlined'
            margin='normal'
            fullWidth
            id='email'
            label='Email/username'
            name='email'
            autoComplete='email'
            autoFocus
            value={user}
            onChange={event => setUser(event.target.value)}
          />
          <StyledTextfield
            variant='outlined'
            margin='normal'
            fullWidth
            name='password'
            label='Password'
            type='password'
            id='password'
            autoComplete='current-password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
          <span className='forgotPassword' onClick={recoverPassword}>
            Forgot password?
          </span>
          <Button variant='contained' color='primary' onClick={login}>
            Login
          </Button>
          <span className='createAccount' onClick={createAccount}>
            Create account?
          </span>
        </LoginSection>
      </Box>
      <ErrorSnackbar
        message="Ups, we're not ready with this yet."
        error={error}
        setError={setError}
      />
    </>
  );
};

export default Login;
