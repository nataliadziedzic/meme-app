import styled from 'styled-components';
import { TextField } from '@material-ui/core';
import milkyWay from '../../assets/images/milky-way.png';
import { SIZES } from '../../assets/styles/mediaQueries';

export const Box = styled.div`
  width: 300px;
  height: 600px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 230px 370px;
  margin-top: 16px;
  background-image: url(${milkyWay});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  border-radius: 20px;
  box-shadow: 0 2px 12px black;
  border: 3px solid black;
  h2 {
    color: #006fb1;
    text-align: center;
    font-size: 1.9rem;
    margin: 16px 0;
  }
  @media only screen and ${SIZES.mobileS} {
    width: 320px;
  }
  @media only screen and ${SIZES.mobileM} {
    width: 350px;
  }
  @media only screen and ${SIZES.tablet} {
    margin-top: 100px;
    width: 400px;
    box-shadow: 6px 2px 12px black;
  }
  @media only screen and ${SIZES.laptopL} {
    margin-left: 200px;
  }
`;
export const LoginSection = styled.section`
  grid-row: 2;
  border-radius: 50% 0 0 0;
  background-color: #fff;
  button {
    width: 140px;
    margin: 40px auto 8px;
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
    width: 250px;
    margin: 0 auto;
    text-align: left;
  }
`;
export const StyledTextfield = styled(TextField)`
  width: 250px;
  margin: 16px auto;
  display: block;
  fieldset {
    border: none;
    border-bottom: 1px solid black;
    border-radius: 0;
  }
`;
