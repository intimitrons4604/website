import styled from 'styled-components'

export const Parallax = styled.div`
  height: 300px;
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.img});

  @media all and (max-width: 991px) {
    background-attachment: scroll;
  }
`

