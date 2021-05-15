import styled from 'styled-components';
import { SIZES } from '../../../assets/styles/mediaQueries';

export const MenuContainer = styled.div`
  justify-self: start;
  border: 1px solid #fff;
  border-radius: 3px;
  padding: 2px 4px;
  @media only screen and ${SIZES.tablet} {
    justify-self: center;
  }
`;
