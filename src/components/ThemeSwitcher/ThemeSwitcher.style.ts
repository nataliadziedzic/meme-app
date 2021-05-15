import styled from 'styled-components';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { SIZES } from '../../assets/styles/mediaQueries';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  position: absolute;
  right: 24px;
  top: 50%;
  transform: translateY(-50%);
  .MuiToggleButton-root {
    background-color: #ced1d8;
    transition: 0.3s;
    &:hover {
      background-color: #f4f4f4;
    }
    path {
      color: #e09608;
    }
  }
  .Mui-selected {
    background-color: #6389ff;
    cursor: default;
    &:hover {
      background-color: #6389ff;
    }
    path {
      color: #fff;
    }
  }
  .MuiToggleButton-sizeSmall {
    padding: 3px;
  }
  @media only screen and ${SIZES.mobileS} {
    .MuiToggleButton-sizeSmall {
      padding: 4px;
    }
  }
  @media only screen and ${SIZES.tablet} {
    right: 40px;
    .MuiToggleButton-sizeSmall {
      padding: 6px;
    }
  }
  @media only screen and ${SIZES.laptop} {
    top: 16px;
    right: 16px;
    transform: translateY(0);
  }
  @media only screen and ${SIZES.laptopL} {
    .MuiToggleButton-sizeSmall {
      padding: 7px;
    }
  }
`;
