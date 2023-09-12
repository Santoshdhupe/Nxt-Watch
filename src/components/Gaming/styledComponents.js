import styled from 'styled-components'

export const GamingVideosBgCont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const SidebarAndGamingVideosCont = styled.div`
  display: flex;
  width: 100%;
`

export const GamingVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const GamingVideosBanner = styled.div`
  background-color: ${props => props.bannerBgColor};
  display: flex;
  height: 110px;
  padding: 15px;
  padding-left: 25px;
`

export const GamingVideosLogoContainer = styled.div`
  background-color: ${props => props.bgColor};
  height: 70px;
  width: 70px;
  padding: 10px;
  margin-right: 15px;
  border-radius: 35px;
`

export const GamingVideosHeading = styled.h1`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 28px;
`
export const GamingVideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`
export const RetryButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #4f46e5;
  font-family: Roboto;
  color: #ffffff;
  height: 35px;
  width: 110px;
  margin-bottom: 10px;
`
export const LoadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-self: center;
  padding-left: 400px;
`
export const ErrorContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
