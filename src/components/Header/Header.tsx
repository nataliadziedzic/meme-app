import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logo from '../../assets/images/header-logo.png';
import { StyledHeader, Logo } from './Header.style';
import ThemeSwitcher from '../ThemeSwitcher/ThemeSwitcher';

export interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( 
        <StyledHeader>
          <ThemeSwitcher />
          <nav role="navigation">
            <NavLink className='navText' to="/regular">All memes</NavLink>
            <Link to="/">
              <Logo>
                <img src={logo} alt="Three dog faces" />
                <h1 className="appName navText">bamboozled</h1>
              </Logo>
            </Link>
            <NavLink className='navText' to="/hot">Heckin good ones</NavLink>
          </nav>
        </StyledHeader>
     );
}
 
export default Header;