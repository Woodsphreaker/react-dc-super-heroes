import styled from 'styled-components'

const HeaderContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
<<<<<<< HEAD
  margin: 50px auto;
  padding: 20px;
  background-color: #9a0000;
  border-radius: 4px;
  position: relative;
  opacity: 0.9;
=======
  margin: auto;
>>>>>>> 4d6c3cf83b8a1330bda84b31b718b0fbe72e75de
`

const Header = styled.div`
  margin-bottom: 20px;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
<<<<<<< HEAD
    max-width: 300px;
=======
    max-width: 350px;
>>>>>>> 4d6c3cf83b8a1330bda84b31b718b0fbe72e75de
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
<<<<<<< HEAD
  background-color: #d0a808;
=======
  background-color: #7159c1;
>>>>>>> 4d6c3cf83b8a1330bda84b31b718b0fbe72e75de
  color: #fff;
`

const ListHeroes = styled.div``

export { HeaderContainer, Header, Form, SubmitButton, ListHeroes }
