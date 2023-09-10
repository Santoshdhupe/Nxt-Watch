import styled from 'styled-components'

export const SavedVideosBgCont = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const SidebarAndSavedVideosCont = styled.div`
  display: flex;
  width: 100%;
`

export const SavedVideosContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const SavedVideosBanner = styled.div`
  background-color: ${props => props.bannerBgColor};
  display: flex;
  height: 110px;
  padding: 15px;
  padding-left: 25px;
`

export const SavedVideosLogoContainer = styled.div`
  background-color: ${props => props.logoBgColor};
  height: 70px;
  width: 70px;
  padding: 10px;
  margin-right: 15px;
  border-radius: 35px;
`

export const SavedVideosHeading = styled.h1`
  font-family: Roboto;
  color: ${props => props.headingColor};
  font-size: 28px;
`
export const SavedVideosListContainer = styled.ul`
  display: flex;
  flex-direction: column;
`

export const NoSavedVideosImage = styled.img`
  height: 400px;
  width: 600px;
  align-self: center;
  margin-top: 15px;
`
export const NoSavedVideosHeading = styled.h1`
  font-family: Roboto;
  font-size: 25px;
  color: ${props => props.descColor};
  align-self: center;
`
export const NoSavedVideosDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.descColor};
  align-self: center;
`
