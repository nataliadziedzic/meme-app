import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { notificationTime } from '../../variables'
import { displayMessage, isCustomEvent } from '../../commonFunctions/handleSnackbars'

const SuccessSnackbar: React.FC = () => {
  const [success, setSuccess] = React.useState(false)
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    const successSnackbar = document.querySelector('.successSnackbar')
    if (successSnackbar) {
      successSnackbar.addEventListener('success', (event: Event) => {
        if (isCustomEvent(event)) {
          displayMessage(event, setSuccess, setMessage)
        }
      })
    }
  }, [])

  return (
    <div className='successSnackbar'>
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
  )
}

export default SuccessSnackbar
