import React, { Component } from 'react'
// import { Link } from 'react-router-dom'

import { Background } from '../../components/Background'
import { Container } from '../../components/Container'
import logo from '../../assets/DC_logo_2.png'
import api from '../../services/api'

import {
  Header,
  Logo,
  Form,
  SubmitButton,
  HeroesList,
  HeroInfo,
  HeroInfoList,
} from './styles'

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
      .map(hero => {
        const { fullName, alignment, alterEgos } = hero.biography

        return {
          id: hero.id,
          name: hero.name,
          img: hero.images.md,

          features: [
            { label: 'biography', data: { fullName, alignment, alterEgos } },
            { label: 'appearance', data: hero.appearance },
            { label: 'powerstats', data: hero.powerstats },
          ],
        }
      })

    localStorage.setItem('allHeroes', JSON.stringify(allHeroes))

    this.setState({
      allHeroes,
      loading: false,
    })
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
        <Container>
          <Header>
            <Logo>
              <img src={logo} alt="" />
            </Logo>
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
          </Header>

          <HeroesList>
            {heroes.map(({ features, ...el }) => (
              <li key={`${el.id}-${el.name}`}>
                <img src={el.img} alt="" />
                <h1>{el.name}</h1>
                <HeroInfo>
                  {features.map(({ label, data }) => (
                    <section key={label}>
                      <h2>{label}</h2>
                      {Object.entries(data).map(([key, value], i) => (
                        <HeroInfoList key={`${key}-${i}`}>
                          <li>
                            {key}
                            <span>{value}</span>
                          </li>
                        </HeroInfoList>
                      ))}
                    </section>
                  ))}
                </HeroInfo>
                {/* <Link to={() => this.handleClick(el)}>HERO DETAILS</Link> */}
              </li>
            ))}
          </HeroesList>
        </Container>
      </>
    )
  }
}

export default Main
