import * as React from 'react';
import { Link } from 'react-router-dom'
import { StyledHeader, Logo } from './Header.style'
import logo from '../../assets/images/header-logo.png'

export interface HeaderProps {
    
}
 
const Header: React.FC<HeaderProps> = () => {
    return ( 
        <StyledHeader>
          <nav role="navigation">
            <Link className='navText' to="/regular">All memes</Link>
            <Link to="/">
              <Logo>
                <img src={logo} alt="Three dog faces" />
                <span className="appName navText">bamboozled</span>
              </Logo>
            </Link>
            <Link className='navText' to="/hot">Heckin good ones</Link>
          </nav>
        </StyledHeader>
     );
}
 
export default Header;