import * as type from '../actions/types'
import { AnyAction } from 'redux'
import { ThemeType } from '../actions/themeActions'

const initialState: ThemeType = 'light'

const themeReducer = (state: ThemeType= initialState, action: AnyAction) => {
  switch (action.type) {
    case type.SET_THEME:
      return action.theme
    default:
      return state
  } 
}

export default themeReducer
