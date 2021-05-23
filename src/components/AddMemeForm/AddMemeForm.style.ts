import styled from 'styled-components';
import { SIZES } from '../../assets/styles/mediaQueries';

export const FormContainer = styled.div`
  position: relative;
  width: 90%;
  max-width: 800px;
  padding: 32px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid black;
  h2 {
    color: #000;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    margin: 0 auto;
    .uploadImageBtn {
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      .MuiSvgIcon-root {
        margin-left: 8px;
      }
    }
  }
  .MuiButton-root {
    min-width: 120px;
    margin: 24px;
  }
  .dog,
  .cloud {
    position: absolute;
    z-index: -1;
    transform: translateY(-100%);
  }
  .cloud {
    left: 90%;
    top: -30px;
    width: 250px;
    left: 60%;
    @media only screen and ${SIZES.laptop} {
      left: 75%;
    }
  }
  .dog {
    width: 280px;
    top: 27px;
    left: 0;
    @media only screen and ${SIZES.tablet} {
      width: 330px;
    }
    @media only screen and ${SIZES.laptop} {
      width: 370px;
    }
    @media only screen and ${SIZES.laptopL} {
      width: 400px;
    }
  }
`;
