import styled from 'styled-components'

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

export default HeroInfo
