import styled from 'styled-components'
import { SIZES } from '../../../assets/styles/mediaQueries'
import { colors } from '../../../assets/styles/theme'

export const Meme = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 300px;
  margin: 56px auto 0;
  background-color: ${props => props.theme.secondary};
  border-radius: 20px;
  &:first-child {
    margin-top: 0;
  }
  overflow: hiidden;
  .title {
    width: 100%;
    margin: 16px 0;
    padding: 0 16px;
    font-size: 1.8rem;
    font-weight: 400;
    color: #fff;
  }
  @media only screen and ${SIZES.tablet} {
    width: 500px;
  }
`
export const VotesWrapper = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 16px 24px 8px;
  background-color: ${props => props.theme.secondary};
  color: #fff;
  border-radius: 0 0 20px 20px;
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
`
