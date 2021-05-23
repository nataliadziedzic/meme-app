import styled from 'styled-components';
import { SIZES } from '../../assets/styles/mediaQueries';

export const Main = styled.div`
  position: relative;
  .themeIcon {
    position: absolute;
    top: -15px;
    left: 24px;
    width: 60px;
    height: 55px;
    border-radius: 50%;
    background: radial-gradient(
      #ffd600 0%,
      #fee667cc 58.12%,
      rgba(255, 219, 31, 0) 100%
    );
    @media only screen and ${SIZES.tablet} {
      top: 0;
      left: 40px;
      width: 70px;
      height: 65px;
    }
  }
`;
