import styled from 'styled-components';
import { SIZES } from '../../assets/styles/mediaQueries';

export const GreetingSection = styled.section`
  width: 100%;
  margin: 0 auto 32px;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  img {
    width: 350px;
  }
  @media only screen and ${SIZES.tablet} {
    display: flex;
    align-items: start;
    justify-content: space-around;
    flex-direction: row;
    padding: 0 40px 64px;
    margin: 0 auto 350px;
  }
  @media only screen and ${SIZES.laptop} {
    padding: 0 40px 16px;
    img {
      width: 390px;
    }
  }
  @media only screen and ${SIZES.laptopL} {
    img {
      width: 450px;
    }
  }
`;
