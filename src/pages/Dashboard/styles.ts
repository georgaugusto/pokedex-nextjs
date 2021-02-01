import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  flex-direction: row;
`

export const Header = styled.header`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;

  padding: 50px 0px;

  background: #c04c4c;

  img {
    height: auto;
    margin: 0 auto;
    padding: 0 0 15px 0;
  }

  p {
    width: 60%;
    margin: 0 auto;
    padding: 0 0 15px 0;
  }

  input {
    width: 60%;
    height: 30px;
    margin: 0 auto;
    color: #787878;
    border-radius: 15px;

    padding: 10px 10px 10px 10px;

    border: none;

    &::placeholder {
      color: #787878;
    }
  }

  hr {
    width: 70%;
    text-align: center;
    margin: 20px auto;
  }

  div {
    display: flex;
    flex-direction: column;
    text-align: start;
    margin-left: 20%;
    overflow-y: scroll;

    span {
      font-size: 20px;
      padding: 10px 0;

      cursor: pointer;
    }

    span:hover {
      font-weight: bold;
      text-decoration: underline;
    }
  }

  div::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #f5f5f5;
  }

  div::-webkit-scrollbar {
    width: 8px;
  }

  div::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #c5c5c5;
  }
`

export const Content = styled.main`
  width: 100%;
  /* display: flex;
  flex-direction: column;

  margin: 0 auto;

  align-content: center;
  justify-content: center; */
`

export const ContentHeader = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: 45px 150px;
`

export const ContentHeaderTitle = styled.div`
  display: flex;
  flex-direction: row;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 41px;
  }

  img {
    height: 35px;
  }
`

export const ContentBody = styled.div`
  display: flex;

  div {
    width: 100%;
  }

  .col {
    margin: 0 50px;
  }

  .hw {
    display: flex;

    div:first-child {
      margin-right: 30px;
    }
  }
`

export const ContentBox = styled.div`
  display: flex;

  color: #000000;
  background-color: #ffffff;
  border-radius: 5px;

  padding: 15px;
  /* margin: 10px; */
  margin-bottom: 30px;

  strong {
    padding-right: 10px;
  }

  .img {
    width: 250px;

    margin: 0 auto;
  }

  .stats {
    strong {
      display: flex;
      flex-direction: column;
    }

    div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;

      padding: 5px 0px;

      span {
        margin: 15px 0px 0px 0px;
        padding: 5px 60px;
        border-radius: 5px;
        background-color: #d2d2d2;
      }
    }
  }
`
