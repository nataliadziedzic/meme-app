import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
// import { notificationTime } from '../../variables';

export interface ErrorSnackbarProps {
  message: string;
  error: boolean;
  setError: (arg: boolean) => void;
}

const ErrorSnackbar: React.FC<ErrorSnackbarProps> = ({
  message,
  error,
  setError,
}) => {
  return (
    <div className='successService'>
      <Snackbar
        open={error}
        autoHideDuration={4000}
        onClose={() => setError(false)}
      >
        <MuiAlert
          onClose={() => setError(false)}
          severity='error'
          elevation={6}
          variant='filled'
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default ErrorSnackbar;
