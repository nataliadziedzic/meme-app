import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';

export const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    justify-content: center;
    margin-top: 32px;
  }
  .MuiPaginationItem-root {
    color: ${props => props.theme.font};
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: ${props => props.theme.paginationButton}
    color: #fff;
  }
`;
