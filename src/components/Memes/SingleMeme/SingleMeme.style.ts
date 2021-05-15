import styled from 'styled-components';
import { SIZES } from '../../../assets/styles/mediaQueries';

export const Meme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 56px auto 0;
  &:first-child {
    margin-top: 0;
  }
  overflow: hiidden;
  .title {
    width: 100%;
    margin: 16px 0;
    font-size: 1.8rem;
    font-weight: 400;
  }
  @media only screen and ${SIZES.tablet} {
    width: 500px;
  }
`;
export const VotesWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 8px 24px;
  background-color: #173e55;
  color: #fff;
  * {
    color: inherit;
  }
  .text {
    font-size: 1.5rem;
  }
  .button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .votesNumber {
      margin-top: 5px;
    }
  }
`;
