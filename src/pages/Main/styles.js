import styled from 'styled-components'

const HeaderContainer = styled.div`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 50px auto;
  padding: 20px;
  // border: 1px solid #403939;
  background-color: #1d2e3d;
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
    width: 300px;
    background-color: #1d2e3d;
    border-radius: 4px;

    img {
      width: 100%;
      max-height: 300px;
      min-height: 300px;
      background-color: #142025;
      border-radius: 4px;
      // padding: 10px 10px;
    }

    h1 {
      font-family: Arial, Helvetica, sans-serif;
      font-size: 20px;
      font-style: italic;
      padding: 15px;
      margin: 0 0 0 0;
      text-align: center;
      color: #fff;
      // border-bottom: 1px solid #866f00;
    }

    a {
      text-decoration: none;
      text-align: center;
      background-color: #142025;
      padding: 10px;
      color: #fff;
      font-weight: bold;
      border-radius: 4px;
    }
  }
`

const HeroInfo = styled.div`
  background-color: #eff1f2;
  border-radius: 4px;
  padding: 10px;

  section {
    margin: 0 0;
    padding: 0 0 10px 0;

    h2 {
      font-family: sans-serif;
      color: #333;
      font-size: 15px;
      padding: 0 0 10px 0;
    }

    & + section {
      padding-top: 10px;
    }
  }
`

const HeroInfoList = styled.ul`
  list-style: none;

  li {
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 13px;
    font-weight: bold;
    color: #ad4c40;

    span {
      font-weight: normal;
    }
  }
`

export {
  HeaderContainer,
  Header,
  Form,
  SubmitButton,
  HeroesList,
  HeroInfo,
  HeroInfoList,
}
