import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const SidebarAndMainContainer = styled.div`
  display: flex;
  width: 100%;
`
export const NotFoundContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding-top: 20px;
`

export const NotFoundImage = styled.img`
  height: 300px;
  margin: 15px;
`

export const NotFoundHeading = styled.h1`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 28px;
  text-align: center;
  margin-bottom: 0px;
`

export const NotFoundDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 20px;
  text-align: center;
`
