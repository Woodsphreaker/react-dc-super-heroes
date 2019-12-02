import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import { Background } from '../../components/Background'
import { Container } from '../../components/Container'
import logo from '../../assets/DC_logo_2.png'
// import batman from '../../assets/heroes/batman.png'
// import superman from '../../assets/heroes/superman.png'
// import aquaman from '../../assets/heroes/aquaman.png'
// import joker from '../../assets/heroes/joker.png'
// import wonderWoman from '../../assets/heroes/wonderWoman.png'
// import robin from '../../assets/heroes/robin.png'
// import flash from '../../assets/heroes/flash.png'
// import bane from '../../assets/heroes/bane.png'
// import greenLantern from '../../assets/heroes/green-lantern.png'

import api from '../../services/api'

import {
  HeaderContainer,
  Header,
  Form,
  SubmitButton,
  HeroesList,
} from './styles'

// const data = [
//   {
//     name: 'Batman',
//     img: `${batman}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Superman',
//     img: `${superman}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Aquaman',
//     img: `${aquaman}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Joker',
//     img: `${joker}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Wonder Woman',
//     img: `${wonderWoman}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Robin',
//     img: `${robin}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Flash',
//     img: `${flash}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Bane',
//     img: `${bane}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
//   {
//     name: 'Green Lantern',
//     img: `${greenLantern}`,
//     desc:
//       'Batman secret identity is Bruce Wayne, a wealthy American playboy, philanthropist, and owner of Wayne Enterprises. His origin depicts Bruce Wayne as a child, after witnessing the murder of his parents Dr. Thomas Wayne and Martha Wayne, he swore vengeance against criminals, an oath tempered by a sense of justice. Bruce Wayne trains himself physically and intellectually and crafts a bat-inspired persona to fight crime.',
//   },
// ]

class Main extends Component {
  state = {
    searchHero: '',
    allHeroes: [],
    heroes: [],
    loading: false,
  }

  componentDidMount = () => {
    this.setState({
      loading: true,
    })

    const allHeroes = localStorage.getItem('allHeroes')
    const searchedHero = localStorage.getItem('searchedHero') || '{}'

    if (!allHeroes) {
      return this.getHeroesList()
    }

    const { searchHero, heroes } = JSON.parse(searchedHero)

    this.setState({
      allHeroes: JSON.parse(allHeroes),
      searchHero: searchHero || '',
      heroes: heroes || [],
      loading: false,
    })
  }

  getHeroesList = async () => {
    const { data } = await api.get('/all.json')

    const allHeroes = data
      // .filter(
      //   ({ biography }) =>
      //     biography.publisher && biography.publisher.includes('DC Comics')
      // )
      .map(hero => ({
        id: hero.id,
        name: hero.name,
        img: hero.images.md,
        desc: 'Lorem ipsum dolor',
      }))

    localStorage.setItem('allHeroes', JSON.stringify(allHeroes))

    this.setState({
      allHeroes,
      loading: false,
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    // console.log(this.state.heroes)
  }

  handleSubmit = ev => {
    ev.preventDefault()

    const { allHeroes, searchHero } = this.state

    if (!searchHero) {
      localStorage.removeItem('searchedHero')
      return this.setState({
        heroes: [],
      })
    }

    const filteredHeroes = allHeroes.filter(({ name }) =>
      name.toLowerCase().includes(searchHero.toLowerCase())
    )

    localStorage.setItem(
      'searchedHero',
      JSON.stringify({
        searchHero,
        heroes: filteredHeroes,
      })
    )

    this.setState({
      heroes: filteredHeroes,
    })
  }

  handleClick = ({ name }) => {
    return {
      pathname: '/description',
      state: {
        name,
      },
    }
  }

  render() {
    const { searchHero, heroes } = this.state
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
                this.setState({ searchHero: hero.target.value })
              }
              type="text"
              value={searchHero}
            />
            <SubmitButton onClick={this.handleSubmit}>GO</SubmitButton>
          </Form>
        </HeaderContainer>

        <Container>
          <HeroesList>
            {heroes.map(el => (
              <li key={`${el.id}-${el.name}`}>
                <img src={el.img} alt="" />
                <h1>{el.name}</h1>
                <span>{el.desc}</span>
                <Link to={() => this.handleClick(el)}>HERO DETAILS</Link>
              </li>
            ))}
          </HeroesList>
        </Container>
      </>
    )
  }
}

export default Main
