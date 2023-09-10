import {Component} from 'react'
import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import SavedAndTrendingVideosItem from '../SavedAndTrendingVideosItem'
import Header from '../Header'
import SideBar from '../SideBar'
import ErrorRoute from '../Error'
import {
  TrendingVideosBgCont,
  SidebarAndTrendingVideosCont,
  TrendingVideosContainer,
  TrendingVideosBanner,
  TrendingVideosLogoContainer,
  TrendingVideosHeading,
  TrendingVideosListContainer,
  RetryButton,
  LoadingContainer,
  ErrorContainer,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {trendingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApi = 'https://apis.ccbp.in/videos/trending'
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(trendingVideosApi, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(each => ({
        id: each.id,
        title: each.title,
        thumbnailUrl: each.thumbnail_url,
        name: each.channel.name,
        viewCount: each.view_count,
        publishedAt: each.published_at,
      }))
      this.setState({
        trendingVideos: updatedData,
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

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {trendingVideos} = this.state
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const logoBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'
        const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const bannerBgColor = isDarkTheme ? '#181818' : '#ebebeb'
        return (
          <TrendingVideosContainer data-testid="trending" bgColor={bgColor}>
            <TrendingVideosBanner bannerBgColor={bannerBgColor}>
              <TrendingVideosLogoContainer logoBgColor={logoBgColor}>
                <HiFire className="trending-videos-icon" />
              </TrendingVideosLogoContainer>
              <TrendingVideosHeading headingColor={headingColor}>
                Trending Videos
              </TrendingVideosHeading>
            </TrendingVideosBanner>
            <TrendingVideosListContainer>
              {trendingVideos.map(each => (
                <SavedAndTrendingVideosItem key={each.id} video={each} />
              ))}
            </TrendingVideosListContainer>
          </TrendingVideosContainer>
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
    return (
      <TrendingVideosBgCont>
        <Header />
        <SidebarAndTrendingVideosCont>
          <SideBar />
          {this.renderFinalView()}
        </SidebarAndTrendingVideosCont>
      </TrendingVideosBgCont>
    )
  }
}

export default Trending
