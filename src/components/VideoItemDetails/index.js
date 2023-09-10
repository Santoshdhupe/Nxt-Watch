import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import {
  AiOutlineLike,
  AiOutlineDislike,
  AiFillLike,
  AiFillDislike,
} from 'react-icons/ai'
import {RiPlayListAddFill} from 'react-icons/ri'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import SideBar from '../SideBar'
import Header from '../Header'
import ErrorRoute from '../Error'
import {
  MainContainer,
  SidebarAndVideoContainer,
  VideoDetailsContainer,
  RetryButton,
  LoadingContainer,
  VideoDetailsDescriptionContainer,
  VideoDetailsTitle,
  ViewsAndLikesContainer,
  ViewsAndPublishedTimeCont,
  VideoDetailsViews,
  VideoDetailsPublishedDate,
  LikesContainer,
  EachIconContainer,
  LikeDislikeSaveWords,
  HorizontalLine,
  VideoDetailsBottomContainer,
  VideoDetailsVideoOwnerLogo,
  VideoDetailsOwnerDescriptionCont,
  VideoDetailsOwnerName,
  VideoDetailsSubscribers,
  VideoDetailsDescription,
  ErrorContainer,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}
class VideoItemDetails extends Component {
  state = {
    videoDetails: '',
    apiStatus: apiStatusConstants.initial,
    liked: false,
    disliked: false,
    saved: false,
  }

  componentDidMount() {
    this.getVideoDetails()
  }

  getVideoDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const videoApi = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(videoApi, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        name: data.video_details.channel.name,
        profileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        videoDetails: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderFailureView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        return (
          <ErrorContainer bgColor={bgColor}>
            <ErrorRoute />
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </ErrorContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <LoadingContainer data-testid="loader">
      <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
    </LoadingContainer>
  )

  onclickLikeButton = () => {
    this.setState(prev => ({liked: !prev.liked, disliked: false}))
  }

  onclickDislikeButton = () => {
    this.setState(prev => ({liked: false, disliked: !prev.disliked}))
  }

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, removeSavedVideo, addVideo} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const videoTitleColor = isDarkTheme ? '#ffffff' : ' #181818'
        const {videoDetails, liked, disliked, saved} = this.state
        const likedButtonColor = liked ? '#2563eb' : '#64748b'
        const dislikedButtonColor = disliked ? '#2563eb' : '#64748b'
        const saveButtonColor = saved ? '#2563eb' : '#64748b'
        const addOrRemoveVideo = () => {
          if (saved) {
            removeSavedVideo(videoDetails.id)
          } else {
            addVideo({...videoDetails, saved: true})
          }
        }

        const onclickSaveButton = () => {
          this.setState(prev => ({saved: !prev.saved}), addOrRemoveVideo)
        }

        const likeButton = liked ? (
          <AiFillLike className="Like-dislike-save-icons" />
        ) : (
          <AiOutlineLike className="Like-dislike-save-icons" />
        )
        const dislikeButton = disliked ? (
          <AiFillDislike className="Like-dislike-save-icons" />
        ) : (
          <AiOutlineDislike className="Like-dislike-save-icons" />
        )
        return (
          <MainContainer>
            <Header />
            <SidebarAndVideoContainer>
              <SideBar />
              <VideoDetailsContainer bgColor={bgColor}>
                <ReactPlayer
                  url={videoDetails.videoUrl}
                  controls
                  width="100%"
                  height="450px"
                />
                <VideoDetailsDescriptionContainer>
                  <VideoDetailsTitle color={videoTitleColor}>
                    {videoDetails.title}
                  </VideoDetailsTitle>
                  <ViewsAndLikesContainer>
                    <ViewsAndPublishedTimeCont>
                      <VideoDetailsViews>
                        {videoDetails.viewCount} views
                      </VideoDetailsViews>
                      <VideoDetailsPublishedDate>
                        {formatDistanceToNow(
                          new Date(videoDetails.publishedAt),
                        )}
                      </VideoDetailsPublishedDate>
                    </ViewsAndPublishedTimeCont>
                    <LikesContainer>
                      <EachIconContainer
                        type="button"
                        onClick={this.onclickLikeButton}
                        color={likedButtonColor}
                      >
                        {likeButton}
                        <LikeDislikeSaveWords>Like</LikeDislikeSaveWords>
                      </EachIconContainer>
                      <EachIconContainer
                        type="button"
                        onClick={this.onclickDislikeButton}
                        color={dislikedButtonColor}
                      >
                        {dislikeButton}
                        <LikeDislikeSaveWords>Dislike</LikeDislikeSaveWords>
                      </EachIconContainer>
                      <EachIconContainer
                        type="button"
                        onClick={onclickSaveButton}
                        color={saveButtonColor}
                      >
                        <RiPlayListAddFill className="Like-dislike-save-icons" />
                        <LikeDislikeSaveWords>
                          {saved ? 'Saved' : 'Save'}
                        </LikeDislikeSaveWords>
                      </EachIconContainer>
                    </LikesContainer>
                  </ViewsAndLikesContainer>
                </VideoDetailsDescriptionContainer>
                <HorizontalLine />
                <VideoDetailsBottomContainer>
                  <VideoDetailsVideoOwnerLogo
                    src={videoDetails.profileImageUrl}
                  />
                  <VideoDetailsOwnerDescriptionCont>
                    <VideoDetailsOwnerName color={videoTitleColor}>
                      {videoDetails.name}
                    </VideoDetailsOwnerName>
                    <VideoDetailsSubscribers>
                      {videoDetails.subscriberCount} subscribers
                    </VideoDetailsSubscribers>
                    <VideoDetailsDescription color={videoTitleColor}>
                      {videoDetails.description}
                    </VideoDetailsDescription>
                  </VideoDetailsOwnerDescriptionCont>
                </VideoDetailsBottomContainer>
              </VideoDetailsContainer>
            </SidebarAndVideoContainer>
          </MainContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderFinalView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return <>{this.renderFinalView()}</>
  }
}

export default VideoItemDetails
