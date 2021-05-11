import * as React from 'react'
import { ToggleButton } from '@material-ui/lab'
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Brightness3Icon from '@material-ui/icons/Brightness3';
import { StyledToggleButtonGroup } from './ThemeSwitcher.style';

export interface ThemeSwitcherProps {
    
}
 
const ThemeSwitcher: React.FC<ThemeSwitcherProps> = () => {
  const [theme, setTheme] = React.useState('dark');
  const selectTheme = (event: any, newTheme: React.SetStateAction<string>) => {
    theme !== newTheme && setTheme(newTheme);
  };
    return ( 
        <StyledToggleButtonGroup value={theme} onChange={selectTheme} exclusive aria-label="theme selection" size='small'>
          <ToggleButton value="dark" onChange={() => console.log('toggle')} >
            <Brightness3Icon fontSize="small"/>
          </ToggleButton>
          <ToggleButton value="light" onChange={() => console.log('toggle')} >
            <WbSunnyIcon fontSize="small"/>
          </ToggleButton>
        </StyledToggleButtonGroup>
     );
}
 
export default ThemeSwitcher;