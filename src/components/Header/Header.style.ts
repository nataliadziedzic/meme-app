import styled from 'styled-components'
import { SIZES } from '../../assets/styles/mediaQueries'
import { colors } from '../../assets/styles/theme'

export const StyledHeader = styled.header`
  position: relative;
  width: 100%;
  padding: 16px 24px;
  background-color: ${colors.primary};
  margin-bottom: 24px;
  * {
    color: #fff;
  }
  nav {
    display: grid;
    grid-template-columns: 60px 1fr 60px;
    align-items: center;
    justify-items: center;
    @media only screen and ${SIZES.laptop} {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
  .navText {
    font-size: 1.5rem;
    font-weight: 300;
  }
  a {
    position: relative;
  }
  a:after {
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: '';
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
  }
  a:hover:after {
    width: 100%;
    left: 0;
  }
  .active {
    font-weight: 400;
    :after {
      content: none;
    }
    :before {
      content: '▶';
      position: absolute;
      top: 50%;
      left: -5px;
      transform: translate(-100%, -50%);
    }
  }
`
export const Logo = styled.div`
  overflow: hidden;
  width: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .appName {
    font-size: 13px;
    font-weight: 100;
    font-style: italic;
    text-transform: uppercase;
    letter-spacing: 4px;
    text-shadow: 1px 1px #8a8a8a;
  }
  @media only screen and ${SIZES.mobileL} {
    width: 160px;
  }
  @media only screen and ${SIZES.laptop} {
    width: 220px;
    .appName {
      font-size: 24px;
    }
  }
`
