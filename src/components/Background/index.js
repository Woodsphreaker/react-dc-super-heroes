import styled from 'styled-components'

import Image from '../../assets/lego.jpg'

const Background = styled.div`
  background-image: ${`url(${Image})`};
  background-size: cover;
  background-position: top;
  height: 100%;
  width: 100%;
  opacity: 0.2;
  position: fixed;
  top: 0;
`

export { Background }
