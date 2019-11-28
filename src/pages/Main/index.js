import React, { Component } from 'react'

// import { Link } from 'react-router-dom'

import { Background } from '../../components/Background'
import { Container } from '../../components/Container'
import logo from '../../assets/DC_logo.png'
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
      </>
    )
  }
}

export default Main
