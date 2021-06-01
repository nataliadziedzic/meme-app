import * as React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Media from 'react-media'
import logo from '../../assets/images/header-logo.png'
import { StyledHeader, Logo } from './Header.style'
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher'
import { SIZES } from '../../assets/styles/mediaQueries'
import HamburgerMenu from './HamburgerMenu/HamburgerMenu'

export interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  return (
    <StyledHeader id='header'>
      <ThemeSwitcher />
      <nav role='navigation'>
        <Media query={SIZES.laptop}>
          {matches =>
            matches ? (
              <>
                <NavLink className='navText' to='/regular/page/1'>
                  All memes
                </NavLink>
                <Link to='/'>
                  <Logo>
                    <img src={logo} alt='Three dog faces' />
                    <h1 className='appName navText'>bamboozled</h1>
                  </Logo>
                </Link>
                <NavLink className='navText' to='/top/page/1'>
                  Heckin good ones
                </NavLink>
              </>
            ) : (
              <>
                <HamburgerMenu />
                <Link to='/'>
                  <Logo>
                    <img src={logo} alt='Three dog faces' />
                    <h1 className='appName navText'>bamboozled</h1>
                  </Logo>
                </Link>
              </>
            )
          }
        </Media>
      </nav>
    </StyledHeader>
  )
}

export default Header
