import styled from 'styled-components';
import { SIZES } from '../../../assets/styles/mediaQueries';

export const MemesContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 8px;
  background-color: ${props => props.theme.memesContainer};
  @media only screen and ${SIZES.tablet} {
    padding: 16px 56px;
  }
`;
