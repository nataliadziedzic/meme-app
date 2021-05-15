import { Pagination } from '@material-ui/lab';
import styled from 'styled-components';

export const MemesContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 16px 56px;
  background-color: ${props => props.theme.memesContainer};
`;
export const StyledPagination = styled(Pagination)`
  .MuiPagination-ul {
    justify-content: center;
    margin-top: 32px;
  }
  .MuiPaginationItem-root {
    color: ${props => props.theme.font};
  }
  .MuiPaginationItem-page.Mui-selected {
    background-color: #173e55;
    color: #fff;
  }
`;
