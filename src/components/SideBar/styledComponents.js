import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24%;
  min-height: 100vh;
  background-color: ${props => props.sidebarBgColor};
`
export const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15px;
`
export const EachTabContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  padding: 20px;
  padding-top: 0px;
  padding-bottom: 0px;
  width: 100%;
`
export const TabLink = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  font-weight: ${props => props.fontWeight};
  color: ${props => props.color};
`

export const TabTitle = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-weight: ${props => props.fontWeight};
`

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
`
export const BottomDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-weight: 600;
`
export const IconsContainer = styled.div`
  display: flex;
  margin: 10px;
  margin-left: 0px;
  padding-left: 0px;
`
export const Icons = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 35px;
  cursor: pointer;
`
