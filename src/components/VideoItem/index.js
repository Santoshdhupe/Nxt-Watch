import {formatDistanceToNow} from 'date-fns'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import {
  VideoListItem,
  VideoImage,
  DescriptionAndProfileNameContainer,
  ProfileLogoImage,
  VideoDescriptionContainer,
  VideoTitle,
  VideoOwnerName,
  ViewsAndPublishedTimeContainer,
  VideoViews,
  VideoPublishedTime,
  LinkItem,
} from './styledComponents'

const VideoItem = props => {
  const {video} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const videoTitleColor = isDarkTheme ? '#ffffff' : ' #181818'
        const videoDescColor = isDarkTheme ? '#94a3b8' : '#1e293b'
        return (
          <LinkItem to={`/videos/${video.id}`}>
            <VideoListItem>
              <VideoImage src={video.thumbnailUrl} alt="video thumbnail" />
              <DescriptionAndProfileNameContainer>
                <ProfileLogoImage
                  src={video.channel.profileImgUrl}
                  alt="channel logo"
                />
                <VideoDescriptionContainer>
                  <VideoTitle color={videoTitleColor}>{video.title}</VideoTitle>
                  <VideoOwnerName color={videoDescColor}>
                    {video.channel.name}
                  </VideoOwnerName>
                  <ViewsAndPublishedTimeContainer>
                    <VideoViews color={videoDescColor}>
                      {video.viewsCount} views
                    </VideoViews>
                    <VideoPublishedTime color={videoDescColor}>
                      {formatDistanceToNow(new Date(video.publishedAt))}
                    </VideoPublishedTime>
                  </ViewsAndPublishedTimeContainer>
                </VideoDescriptionContainer>
              </DescriptionAndProfileNameContainer>
            </VideoListItem>
          </LinkItem>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default VideoItem
