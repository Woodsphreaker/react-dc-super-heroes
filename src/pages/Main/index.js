import React, { Component } from 'react'

import { Link } from 'react-router-dom'

import { Background } from '../../components/Background'
import { Container } from '../../components/Container'
import logo from '../../assets/DC_logo.png'
import batman from '../../assets/heroes/batman.png'
import superman from '../../assets/heroes/superman.png'
import aquaman from '../../assets/heroes/aquaman.png'
import joker from '../../assets/heroes/joker.png'
import wonderWoman from '../../assets/heroes/wonderWoman.png'
import robin from '../../assets/heroes/robin.png'
import flash from '../../assets/heroes/flash.png'
import bane from '../../assets/heroes/bane.png'
import greenLantern from '../../assets/heroes/green-lantern.png'

import {
  HeaderContainer,
  Header,
  Form,
  SubmitButton,
  HeroesList,
} from './styles'

class Main extends Component {
  state = {
    searchedHero: '',
    heroes: [
      {
        name: 'Batman',
        img: `${batman}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Superman',
        img: `${superman}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Aquaman',
        img: `${aquaman}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Joker',
        img: `${joker}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Wonder Woman',
        img: `${wonderWoman}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Robin',
        img: `${robin}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Flash',
        img: `${flash}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Bane',
        img: `${bane}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
      {
        name: 'Green Lantern',
        img: `${greenLantern}`,
        desc:
          'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
      },
    ],
    loading: false,
  }

  componentDidMount = () => {
    // this.setState({ heroes: data })
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

  handleClick = ({ name }) => {
    console.log(name)
    return <Link to="/description" />
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
          <HeroesList>
            {heroes.map(el => (
              <li key={el.name}>
                <img src={el.img} alt="" />
                <h1>{el.name}</h1>
                <span>{el.desc}</span>
                <button onClick={() => this.handleClick(el)}>
                  HERO DETAILS
                </button>
              </li>
            ))}
          </HeroesList>
        </Container>
      </>
    )
  }
}

export default Main
