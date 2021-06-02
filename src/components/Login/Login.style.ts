import styled from 'styled-components'
import { TextField } from '@material-ui/core'
import milkyWay from '../../assets/images/milky-way.png'
import { SIZES } from '../../assets/styles/mediaQueries'

export const Box = styled.div`
  width: 280px;
  height: 500px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 180px 320px;
  background-image: url(${milkyWay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 2px 12px black;
  border: 3px solid black;
  margin-bottom: 24px;
  h2 {
    color: #006fb1;
    text-align: center;
    font-size: 1.9rem;
    margin: 16px 0;
  }
  @media only screen and ${SIZES.mobileS} {
    width: 320px;
    height: 515px;
    grid-template-rows: 180px 335px;
  }
  @media only screen and ${SIZES.mobileM} {
    grid-template-rows: 230px 330px;
    width: 330px;
    height: 560px;
  }
  @media only screen and ${SIZES.tablet} {
    height: 600px;
    grid-template-rows: 230px 370px;
    width: 380px;
    box-shadow: 6px 2px 12px black;
  }
  @media only screen and ${SIZES.laptop} {
    margin-bottom: 0;
  }
  @media only screen and ${SIZES.laptopL} {
    margin-left: 100px;
  }
`
export const LoginSection = styled.section`
  grid-row: 2;
  border-radius: 50% 0 0 0;
  background-color: #fff;
  button {
    width: 140px;
    margin: 32px auto 8px;
    display: block;
  }
  .createAccount,
  .forgotPassword {
    display: block;
    text-align: center;
    font-size: 12px;
    color: #828282;
    cursor: pointer;
    &:hover {
      color: #000;
    }
  }
  .forgotPassword {
    width: 200px;
    margin: 0 auto;
    text-align: left;
  }
  @media only screen and ${SIZES.mobileM} {
    .forgotPassword {
      width: 250px;
    }
  }
  @media only screen and ${SIZES.mobileL} {
    button {
      margin: 40px auto 8px;
    }
  }
`
export const StyledTextfield = styled(TextField)`
  width: 200px;
  margin: 16px auto;
  display: block;
  fieldset {
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0;
  }
  @media only screen and ${SIZES.mobileM} {
    width: 250px;
  }
`
