import styled from 'styled-components'

export const Content = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: space-between;

  margin: 45px 50px;

  @media (max-width: 700px) {
    margin: 45px 0;

    align-items: center;
    justify-content: center;

    div p {
      display: none;
    }
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: row;

  align-items: center;
  justify-content: center;

  h1 {
    font-style: normal;
    font-weight: bold;
    font-size: 36px;
    line-height: 41px;
  }

  img {
    height: 35px;

    padding-left: 5px;
  }
`
