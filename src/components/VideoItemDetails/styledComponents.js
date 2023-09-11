import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const SidebarAndVideoContainer = styled.div`
  display: flex;
  width: 100%;
`

export const VideoDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => props.bgColor};
  min-height: 100vh;
  width: 100%;
  padding: 20px;
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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
export const VideoDetailsDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const VideoDetailsTitle = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 15px;
`
export const ViewsAndLikesContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px;
`
export const ViewsAndPublishedTimeCont = styled.div`
  display: flex;
`
export const VideoDetailsViews = styled.p`
  font-family: Roboto;
  color: #64748b;
  font-size: 15px;
  margin-right: 20px;
`
export const VideoDetailsPublishedDate = styled(VideoDetailsViews)`
  font-size: 15px;
`
export const LikesContainer = styled.div`
  display: flex;
`
export const EachIconContainer = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: ${props => props.color};
  border: 0px;
  background-color: transparent;
  font-family: Roboto;
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
`
export const LikeDislikeSaveWords = styled.p`
  font-family: Roboto;
  font-size: 14px;
  color: ${props => props.color};
  margin-right: 20px;
  font-weight: 500;
`
export const HorizontalLine = styled.hr`
  border: 1px solid #64748b;
  width: 100%;
  margin-top: 10px;
  margin-bottom: 15px;
`
export const VideoDetailsBottomContainer = styled.div`
  display: flex;
  padding: 0px;
`
export const VideoDetailsVideoOwnerLogo = styled.img`
  height: 45px;
  width: 45px;
  border-radius: 25px;
  margin-right: 15px;
`
export const VideoDetailsOwnerDescriptionCont = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
`
export const VideoDetailsOwnerName = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 15px;
  font-weight: 300;
  margin-top: 0px;
  margin-bottom: 15px;
`
export const VideoDetailsSubscribers = styled.p`
  font-family: Roboto;
  color: #64748b;
  font-size: 14px;
  margin-right: 20px;
  margin-top: 0px;
`
export const VideoDetailsDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-weight: 300;
  font-size: 15px;
  margin-top: 0px;
  margin-bottom: 15px;
`
export const ErrorContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
