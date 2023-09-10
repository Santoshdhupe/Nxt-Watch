import styled from 'styled-components'

export const ErrorImage = styled.img`
  height: 300px;
  margin: 15px;
`
export const ErrorHeading = styled.h1`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 28px;
  text-align: center;
`

export const ErrorDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 20px;
  text-align: center;
`
