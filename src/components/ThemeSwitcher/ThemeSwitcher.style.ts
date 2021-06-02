import styled from 'styled-components'
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup'
import { SIZES } from '../../assets/styles/mediaQueries'

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  margin: 0 auto;
  .MuiToggleButton-root {
    background-color: #4646466b;
    border-radius: 50%;
    transition: 0.3s;
    border: none;
    margin-right: 4px;
    &:last-child {
      margin-right: 0;
    }
    &:hover {
      background-color: #515151d1;
    }
    path {
      color: #fff;
    }
  }
  .Mui-selected {
    background-color: #fff;
    cursor: default;
    &:hover {
      background-color: #fff;
    }
    path {
      color: #e09608;
    }
  }
  .MuiToggleButton-sizeSmall {
    padding: 4px;
  }
  @media only screen and ${SIZES.laptop} {
    position: absolute;
    top: 16px;
    right: 16px;
    transform: translateY(0);
  }
`
