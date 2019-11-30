import React, { Component } from 'react'

import { Container } from '../../components/Container'
import { Background } from '../../components/Background'
import { Title, SubTitle } from './styles'

class Description extends Component {
  render() {
    console.log('ok')
    return (
      <>
        <Background />
        <Container>
          <Title>Descriptions Page</Title>
          <SubTitle>DC-COMICS APP</SubTitle>
        </Container>
      </>
    )
  }
}

export default Description
