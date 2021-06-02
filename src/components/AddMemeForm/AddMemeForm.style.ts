import styled from 'styled-components'
import { SIZES } from '../../assets/styles/mediaQueries'

export const FormContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  padding: 32px;
  margin: 0 auto 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  background-image: linear-gradient(
    to right top,
    #7ca5c9,
    #9bb4d4,
    #b6c4de,
    #cfd4e7,
    #e5e6f1,
    #e7e8f1,
    #e9e9f1,
    #ebebf1,
    #dadde7,
    #c8cfdd,
    #b5c2d2,
    #a1b6c7
  );
  border-radius: 20px;
  border: 3px solid black;
  box-shadow: 0 2px 12px black;
  h2 {
    color: #000;
    text-align: center;
  }
  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 225px;
    margin: 0 auto;
    @media only screen and ${SIZES.mobileS} {
      width: 250px;
    }
  }
  .MuiButton-root {
    min-width: 120px;
    margin: 24px;
  }
  .MuiButton-contained.Mui-disabled {
    background-color: #3f51b58c;
  }
  @media only screen and ${SIZES.tablet} {
    width: 400px;
    height: 600px;
    margin: 0;
  }
  @media only screen and ${SIZES.laptopXL} {
    width: 800px;
    height: auto;
  }
`
export const UploadButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .uploadButton {
    padding: 0;
  }
  .uploadImageLabel,
  .selectedImage {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #000;
    .MuiSvgIcon-root {
      margin-left: 8px;
      fill: #000;
    }
  }
  .uploadImageLabel {
    width: 100%;
    height: 100%;
    padding: 5px 15px;
  }
  .selectedImage {
    font-size: 0.9rem;
    .deleteButton {
      cursor: pointer;
    }
  }
`
