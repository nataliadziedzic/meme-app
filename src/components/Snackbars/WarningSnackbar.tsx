import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { notificationTime } from '../../variables'

export interface WarningSnackbarProps {
  message: string
  warning: boolean
  setWarning: (arg: boolean) => void
}

const WarningSnackbar: React.FC<WarningSnackbarProps> = ({
  message,
  warning,
  setWarning,
}) => {
  return (
    <div>
      <Snackbar
        open={warning}
        autoHideDuration={notificationTime}
        onClose={() => setWarning(false)}
      >
        <MuiAlert
          onClose={() => setWarning(false)}
          severity='warning'
          elevation={6}
          variant='filled'
        >
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default WarningSnackbar
