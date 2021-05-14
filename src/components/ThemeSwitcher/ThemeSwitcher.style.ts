import styled from 'styled-components';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)`
  position: absolute;
  top: 16px;
  right: 16px;
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
`;
