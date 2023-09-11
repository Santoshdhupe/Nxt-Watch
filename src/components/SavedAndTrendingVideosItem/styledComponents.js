import styled from 'styled-components'

export const VideoListItem = styled.li`
  display: flex;
  list-style-type: none;
  padding: 50px;
  padding-bottom: 30px;
`

export const VideoImage = styled.img`
  height: 250px;
  width: 450px;
  margin-right: 15px;
`
export const VideoDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const VideoTitle = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 18px;
  line-height: 2.2;
  margin-bottom: 0px;
`

export const VideoDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  margin-bottom: 0px;
`
export const VideoViewsAndPublishedTimeCont = styled.div`
  display: flex;
`

export const VideoPublishedTime = styled(VideoDescription)`
  margin-left: 15px;
  color: ${props => props.color};
`
