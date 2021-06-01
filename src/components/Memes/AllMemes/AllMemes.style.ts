import styled from 'styled-components'
import { SIZES } from '../../../assets/styles/mediaQueries'

export const MemesContainer = styled.section`
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 8px;
  .heading {
    font-size: 2rem;
    text-align: center;
    padding: 0 16px;
  }
  @media only screen and ${SIZES.tablet} {
    padding: 16px 56px;
  }
`
