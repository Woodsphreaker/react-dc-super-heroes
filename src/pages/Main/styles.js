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
  opacity: 0.9;
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

const ListHeroes = styled.div``

export { HeaderContainer, Header, Form, SubmitButton, ListHeroes }
