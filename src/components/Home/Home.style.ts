import styled from 'styled-components'
import { SIZES } from '../../assets/styles/mediaQueries'

export const GreetingSection = styled.section`
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  @media only screen and ${SIZES.laptop} {
    flex-direction: row;
    justify-content: space-around;
    padding: 16px 40px;
  }
  @media only screen and ${SIZES.laptopXL} {
    justify-content: space-between;
  }
`
