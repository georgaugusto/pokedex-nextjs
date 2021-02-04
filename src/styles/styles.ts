import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: column;

  background: #fcfcfc;

  @media (max-width: 700px) {
    min-width: 333px;
  }
`
export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  padding: 0px 50px;

  background: #c04c4c;

  .settings {
    width: 25px;
    height: 25px;

    /* cursor: pointer; */
  }

  @media (max-width: 700px) {
    min-width: 333px;
    padding: 0px 10px;
  }
`
export const Content = styled.main`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;

    input {
      background-color: #ffffff;
      width: 400px;
      height: 50px;
      margin: 0 auto;
      color: #787878;
      border-radius: 5px;

      padding: 10px 10px 10px 10px;
      margin: 30px 0px 0px 0px;
      border: 1px solid #f5f5f5;

      &::placeholder {
        color: #787878;
      }
    }

    input[type='submit'] {
      color: #ffffff;
      background-color: #0054d1;
    }
  }

  input:focus {
    transition: 0.5s;
    opacity: 1;
    color: #000000;
    border: 1px solid #787878;
    background-color: #d4e5ec;
  }

  @media (max-width: 700px) {
    min-width: 333px;

    form {
      width: 100%;
      align-items: center;
      justify-content: center;

      input {
        width: 70%;
        height: 50px;

        padding: 10px 10px 10px 10px;
        margin: 30px 0px 0px 0px;
        border: 1px solid #f5f5f5;
      }
    }
  }
`
