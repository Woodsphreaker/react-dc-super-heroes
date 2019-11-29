import styled from 'styled-components'

const HeaderContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
  background-color: #9a0000;
  border-radius: 4px;
  position: relative;
  opacity: 0.8;
`

const Header = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 300px;
  }
`

const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px;
    border-radius: 4px;
  }
`

const SubmitButton = styled.button`
  border: none;
  padding: 10px;
  margin-left: 5px;
  border-radius: 4px;
  background-color: #d0a808;
  color: #fff;
`

const HeroesList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  li {
    display: flex;
    flex-direction: column;
    margin: 0 10px 20px 0;
    padding: 5px 5px;
    min-width: 300px;
    max-width: 300px;
    background-color: #746502;
    border-radius: 4px;

    img {
      width: 100%;
      max-height: 300px;
      min-height: 300px;
      background-color: #142025;
      border-radius: 4px;
      padding: 10px 10px;
    }

    h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 18px;
      padding: 10px;
      margin: 0 5px;
      text-align: center;
      color: #fff;
      border-bottom: 1px solid #866f00;
    }

    span {
      color: #909090;
      font-family: Arial, Helvetica, sans-serif;
      text-align: left;
      margin: 10px 5px;
    }

    a {
      text-decoration: none;
      text-align: center;
      background-color: #142025;
      padding: 10px;
      color: #fff;
      border-radius: 4px;
    }
  }
`

export { HeaderContainer, Header, Form, SubmitButton, HeroesList }
