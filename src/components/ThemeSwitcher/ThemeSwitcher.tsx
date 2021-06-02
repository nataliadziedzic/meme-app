/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react'
import { useDispatch } from 'react-redux'
import { useAppSelector } from '../../redux/hooks'
import { setTheme, ThemeType } from '../../redux/actions/themeActions'
import { ToggleButton } from '@material-ui/lab'
import WbSunnyIcon from '@material-ui/icons/WbSunny'
import Brightness3Icon from '@material-ui/icons/Brightness3'
import { StyledToggleButtonGroup } from './ThemeSwitcher.style'

const ThemeSwitcher: React.FC = () => {
  const theme = useAppSelector(state => state.themeReducer)
  const dispatch = useDispatch()

  const selectTheme = (
    event: React.MouseEvent<HTMLElement, MouseEvent>,
    newTheme: ThemeType
  ): void => {
    const newThemeValue = newTheme || theme
    if (newThemeValue !== theme) {
      dispatch(setTheme(newThemeValue))
      localStorage.setItem('theme', JSON.stringify(newThemeValue))
    }
  }
  React.useEffect(() => {
    if (localStorage.getItem('theme')) {
      dispatch(setTheme(JSON.parse(localStorage.getItem('theme')!)))
    } else {
      localStorage.setItem('theme', JSON.stringify(theme))
    }
  }, [])

  return (
    <StyledToggleButtonGroup
      value={theme}
      onChange={selectTheme}
      exclusive
      aria-label='theme selection'
      size='small'
    >
      <ToggleButton value='dark'>
        <Brightness3Icon fontSize='small' />
      </ToggleButton>
      <ToggleButton value='light'>
        <WbSunnyIcon fontSize='small' />
      </ToggleButton>
    </StyledToggleButtonGroup>
  )
}

export default ThemeSwitcher
