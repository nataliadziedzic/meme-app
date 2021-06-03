import styled from 'styled-components'
import { Menu } from '@material-ui/core'
import { SIZES } from '../../../assets/styles/mediaQueries'

export const MenuContainer = styled.div`
  justify-self: start;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 2px 4px;
  @media only screen and ${SIZES.tablet} {
    justify-self: center;
  }
`
export const StyledMenu = styled(Menu)`
  .MuiPaper-root {
    background-color: ${props => props.theme.secondary};
  }
  .MuiTypography-root {
    color: #fff;
    text-align: center;
  }
  .active {
    li {
      background-color: rgba(242, 239, 239, 0.21);
    }
  }
`
