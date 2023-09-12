import styled from 'styled-components'

export const TrendingVideosBgCont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const SidebarAndTrendingVideosCont = styled.div`
  display: flex;
  width: 100%;
`

export const TrendingVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TrendingVideosBanner = styled.div`
  background-color: ${props => props.bannerBgColor};
  display: flex;
  height: 110px;
  padding: 15px;
  padding-left: 25px;
`

export const TrendingVideosLogoContainer = styled.div`
  background-color: ${props => props.logoBgColor};
  height: 70px;
  width: 70px;
  padding: 10px;
  margin-right: 15px;
  border-radius: 35px;
`

export const TrendingVideosHeading = styled.h1`
  font-family: Roboto;
  color: ${props => props.headingColor};
  font-size: 28px;
`
export const TrendingVideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
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
