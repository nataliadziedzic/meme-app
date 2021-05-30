import React from 'react';
import MuiAlert from '@material-ui/lab/Alert';
import { Snackbar } from '@material-ui/core';
import { notificationTime } from '../../variables';

export interface SuccessSnackbarProps {
  message: string;
  success: boolean;
  setSuccess: (arg: boolean) => void;
}

const SuccessSnackbar: React.FC<SuccessSnackbarProps> = ({
  message,
  success,
  setSuccess,
}) => {
  return (
    <div>
      <Snackbar
        open={success}
        autoHideDuration={notificationTime}
        onClose={() => setSuccess(false)}
      >
        <MuiAlert
          onClose={() => setSuccess(false)}
          severity='success'
          elevation={6}
          variant='filled'
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  );
};

export default SuccessSnackbar;
