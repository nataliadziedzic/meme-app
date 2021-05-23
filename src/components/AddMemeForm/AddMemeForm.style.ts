import styled from 'styled-components';

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
  h2 {
    color: #000;
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
  .dog {
    position: absolute;
    top: 27px;
    left: 0;
    z-index: -1;
    width: 400px;
    transform: translateY(-100%);
  }
`;
