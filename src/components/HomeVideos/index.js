import {Component} from 'react'
import {AiOutlineSearch} from 'react-icons/ai'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import ErrorRoute from '../Error'
import VideoItem from '../VideoItem'
import {
  VideosSearchInputContainer,
  VideoInput,
  SearchButton,
  LoadingContainer,
  RetryButton,
  NoVideosContainer,
  NoVideosImage,
  NoVideosHeading,
  NoVideosDescription,
  VideosContainer,
  AllVideosContainer,
  ErrorContainer,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class HomeVideos extends Component {
  state = {
    searchInput: '',
    searchInputValue: '',
    apiStatus: apiStatusConstants.initial,
    videosList: [],
  }

  componentDidMount() {
    this.getVideos()
  }

  getVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {searchInputValue} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const homeVideosApi = `https://apis.ccbp.in/videos/all?search=${searchInputValue}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(homeVideosApi, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        channel: {
          name: each.channel.name,
          profileImgUrl: each.channel.profile_image_url,
        },
        viewsCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        videosList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onchangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onPressEnterButton = event => {
    if (event.key === 'Enter') {
      this.setState({searchInputValue: event.target.value}, this.getVideos)
    }
  }

  onclickSearchButton = () => {
    const {searchInput} = this.state
    this.setState({searchInputValue: searchInput}, this.getVideos)
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

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {videosList} = this.state
        const descHeadingColor = isDarkTheme ? '#ffffff' : '#181818'
        const descColor = isDarkTheme ? '#616e7c' : '#181818'
        return videosList.length === 0 ? (
          <NoVideosContainer>
            <NoVideosImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <NoVideosHeading color={descHeadingColor}>
              No Search Results Found
            </NoVideosHeading>
            <NoVideosDescription color={descColor}>
              Try different key words or remove search filter
            </NoVideosDescription>
            <RetryButton onClick={this.getVideos}>Retry</RetryButton>
          </NoVideosContainer>
        ) : (
          <>
            <VideosContainer>
              {videosList.map(each => (
                <VideoItem key={each.id} video={each} />
              ))}
            </VideosContainer>
          </>
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
    const {searchInput} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const searchInputContColor = isDarkTheme ? '#383838' : '#e2e8f0'
          const searchInputBgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
          const searchInputColor = isDarkTheme ? '#ffffff' : '#181818'
          return (
            <AllVideosContainer>
              <VideosSearchInputContainer bgColor={searchInputContColor}>
                <VideoInput
                  type="search"
                  placeholder="Search"
                  onChange={this.onchangeSearchInput}
                  onKeyDown={this.onPressEnterButton}
                  value={searchInput}
                  searchInputBgColor={searchInputBgColor}
                  searchInputColor={searchInputColor}
                />
                <SearchButton
                  type="button"
                  onClick={this.onclickSearchButton}
                  data-testid="searchButton"
                >
                  <AiOutlineSearch className="search-icon" />
                </SearchButton>
              </VideosSearchInputContainer>
              {this.renderFinalView()}
            </AllVideosContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default HomeVideos
