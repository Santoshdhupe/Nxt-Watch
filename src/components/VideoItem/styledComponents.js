import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const VideoListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 290px;
  padding: 0px;
  margin-left: 20px;
  margin-right: 15px;
  margin-bottom: 20px;
`
export const VideoImage = styled.img`
  height: 150px;
  margin-bottom: 10px;
`
export const DescriptionAndProfileNameContainer = styled.div`
  display: flex;
  padding: 0px;
`
export const ProfileLogoImage = styled.img`
  height: 35px;
  width: 35px;
  margin-right: 15px;
  border-radius: 15px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const VideoTitle = styled.p`
  font-family: Roboto;
  margin-top: 0px;
  line-height: 1.5;
  color: ${props => props.color};
  font-size: 17px;
`
export const VideoOwnerName = styled(VideoTitle)`
  color: ${props => props.color};
  font-size: 13px;
  font-weight: 400;
  line-height: 0;
`
export const ViewsAndPublishedTimeContainer = styled.div`
  display: flex;
`
export const VideoViews = styled(VideoOwnerName)`
  font-size: 13px;
  margin-top: 10px;
  color: ${props => props.color};
`
export const VideoPublishedTime = styled(VideoViews)`
  margin-left: 15px;
  color: ${props => props.color};
`
export const LinkItem = styled(Link)`
  text-decoration: none;
`
