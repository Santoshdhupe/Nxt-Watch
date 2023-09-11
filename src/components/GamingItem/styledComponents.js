import styled from 'styled-components'

export const GameListItem = styled.li`
  list-style-type: none;
  width: 250px;
  margin: 25px;
  margin-bottom: 8px;
`
export const GameImage = styled.img`
  height: 220px;
  width: 100%;
  margin-bottom: 10px;
`
export const GameTitle = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 17px;
  margin-top: 2px;
  margin-bottom: 5px;
`

export const GameDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 14px;
  margin-top: 2px;
  margin-bottom: 5px;
`
