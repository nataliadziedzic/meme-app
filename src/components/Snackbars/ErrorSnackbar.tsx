import React from 'react'
import MuiAlert from '@material-ui/lab/Alert'
import { Snackbar } from '@material-ui/core'
import { notificationTime } from '../../variables'
import { displayMessage, isCustomEvent } from '../../commonFunctions/handleSnackbars'

const ErrorSnackbar: React.FC = () => {
  const [error, setError] = React.useState(false)
  const [message, setMessage] = React.useState('')

  React.useEffect(() => {
    const errorSnackbar = document.querySelector('.errorSnackbar')
    if (errorSnackbar) {
      errorSnackbar.addEventListener('error', (event: Event) => {
        if (isCustomEvent(event)) {
          displayMessage(event, setError, setMessage)
        }
      })
    }
  }, [])

  return (
    <div className='errorSnackbar'>
      <Snackbar open={error} autoHideDuration={notificationTime} onClose={() => setError(false)}>
        <MuiAlert onClose={() => setError(false)} severity='error' elevation={6} variant='filled'>
          {message}
        </MuiAlert>
      </Snackbar>
    </div>
  )
}

export default ErrorSnackbar
