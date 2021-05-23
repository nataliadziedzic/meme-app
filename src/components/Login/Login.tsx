import { Button } from '@material-ui/core';
import * as React from 'react';
import { Box, LoginSection, StyledTextfield } from './Login.style';

export interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const login = () => {
    console.log('LOGIN');
  };

  return (
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
        <span className='forgotPassword'>Forgot password?</span>
        <Button variant='contained' color='primary' onClick={login}>
          Login
        </Button>
        <span className='createAccount'>Create account?</span>
      </LoginSection>
    </Box>
  );
};

export default Login;
