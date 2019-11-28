import React, { Component } from 'react'

// import { Link } from 'react-router-dom'

import { Background } from '../../components/Background'
import { Container } from '../../components/Container'
<<<<<<< HEAD
import logo from '../../assets/DC_logo.png'
=======
import logo from '../../assets/dc-heroes-logo.png'
>>>>>>> 4d6c3cf83b8a1330bda84b31b718b0fbe72e75de
import {
  HeaderContainer,
  Header,
  Form,
  SubmitButton,
  ListHeroes,
} from './styles'

class Main extends Component {
  state = {
    searchedHero: '',
    heroes: [],
    loading: false,
  }

  componentDidMount = () => {
    const data = Array.from({ length: 10 }, (_, i) => ({
      name: `Hero ${i + 1}`,
    }))

    this.setState({ heroes: data })
  }

  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.state.heroes)
  }

  handleSubmit = ev => {
    ev.preventDefault()
    this.setState({
      searchedHero: '',
    })
  }

  listHeroes = () => {}

  render() {
    const { searchedHero, heroes } = this.state
    return (
      <>
        <Background />
<<<<<<< HEAD
        <HeaderContainer>
          <Header>
            <img src={logo} alt="" />
          </Header>
          <Form>
            <input
              placeholder="search your hero..."
              onChange={hero =>
                this.setState({ searchedHero: hero.target.value })
              }
              type="text"
              value={searchedHero}
            />
            <SubmitButton onClick={this.handleSubmit}>GO</SubmitButton>
          </Form>
        </HeaderContainer>

        <Container>
          {heroes.map(data => (
            <ListHeroes key={data.name}>{data.name}</ListHeroes>
          ))}
        </Container> 
=======
        <Container>
          <HeaderContainer>
            <Header>
              <img src={logo} alt="" />
            </Header>
            <Form>
              <input
                placeholder="search your hero..."
                onChange={hero =>
                  this.setState({ searchedHero: hero.target.value })
                }
                type="text"
                value={searchedHero}
              />
              <SubmitButton onClick={this.handleSubmit}>GO</SubmitButton>
            </Form>
          </HeaderContainer>

          {heroes.map(data => (
            <ListHeroes key={data.name}>{data.name}</ListHeroes>
          ))}
        </Container>
>>>>>>> 4d6c3cf83b8a1330bda84b31b718b0fbe72e75de
      </>
    )
  }
}

export default Main
