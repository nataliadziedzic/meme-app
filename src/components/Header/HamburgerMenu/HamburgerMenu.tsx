import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItemText, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { MenuContainer, StyledMenu } from './HamburgerMenu.style'
import ThemeSwitcher from '../../ThemeSwitcher/ThemeSwitcher'

export interface HamburgerMenuProps {}

const HamburgerMenu: React.FC<HamburgerMenuProps> = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)
  const links = ['/regular/page/1', '/top/page/1']
  const title = ['All memes', 'Heckin good ones']

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <MenuContainer>
      <div aria-controls='customized-menu' aria-label='Show menu' onClick={handleClick}>
        <MenuIcon />
      </div>
      <StyledMenu
        id='customized-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {links.map((link, index) => (
          <NavLink to={link} key={index}>
            <MenuItem className='listItem'>
              <ListItemText primary={title[index]} />
            </MenuItem>
          </NavLink>
        ))}
        <MenuItem className='listItem'>
          <ThemeSwitcher />
        </MenuItem>
      </StyledMenu>
    </MenuContainer>
  )
}

export default HamburgerMenu
