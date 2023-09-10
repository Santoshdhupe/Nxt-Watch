import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import {
  VideoListItem,
  VideoImage,
  VideoDescriptionContainer,
  VideoTitle,
  VideoDescription,
  VideoViewsAndPublishedTimeCont,
  VideoPublishedTime,
} from './styledComponents'
import './index.css'

const SavedAndTrendingVideosItem = props => {
  const {video} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const videoTitleColor = isDarkTheme ? '#ffffff' : ' #181818'
        const videoDescColor = isDarkTheme ? '#94a3b8' : '#1e293b'
        return (
          <Link to={`/videos/${video.id}`} className="link-item">
            <VideoListItem>
              <VideoImage src={video.thumbnailUrl} alt="video thumbnail" />
              <VideoDescriptionContainer>
                <VideoTitle color={videoTitleColor}>{video.title}</VideoTitle>
                <VideoDescription color={videoDescColor}>
                  {video.name}
                </VideoDescription>
                <VideoViewsAndPublishedTimeCont>
                  <VideoDescription color={videoDescColor}>
                    {video.viewCount} views
                  </VideoDescription>
                  <VideoPublishedTime color={videoDescColor}>
                    {formatDistanceToNow(new Date(video.publishedAt))}
                  </VideoPublishedTime>
                </VideoViewsAndPublishedTimeCont>
              </VideoDescriptionContainer>
            </VideoListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default SavedAndTrendingVideosItem
