export const dispatchError = (message: string) => {
  const errorSnackbar = document.querySelector('.errorSnackbar')
  const errorEvent = new CustomEvent('error', {
    detail: { message },
  })
  return errorSnackbar!.dispatchEvent(errorEvent)
}
export const dispatchSuccess = (message: string) => {
  const successSnackbar = document.querySelector('.successSnackbar')
  const successEvent = new CustomEvent('success', {
    detail: { message },
  })
  return successSnackbar!.dispatchEvent(successEvent)
}
export const dispatchWarning = (message: string) => {
  const warningSnackbar = document.querySelector('.warningSnackbar')
  const warningEvent = new CustomEvent('warning', {
    detail: { message },
  })
  return warningSnackbar!.dispatchEvent(warningEvent)
}

export const displayMessage = (
  event: CustomEvent,
  setState: (arg: boolean) => void,
  setMessage: (arg: string) => void
) => {
  setState(true)
  setMessage(event.detail.message)
}
export const isCustomEvent = (event: Event): event is CustomEvent => {
  return 'detail' in event
}
