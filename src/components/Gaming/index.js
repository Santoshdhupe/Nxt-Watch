import {Component} from 'react'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import ErrorRoute from '../Error'
import GamingItem from '../GamingItem'
import {
  GamingVideosBgCont,
  SidebarAndGamingVideosCont,
  GamingVideosContainer,
  GamingVideosBanner,
  GamingVideosLogoContainer,
  GamingVideosHeading,
  GamingVideosListContainer,
  LoadingContainer,
  RetryButton,
  ErrorContainer,
} from './styledComponents'
import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {gamingVideos: [], apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const trendingVideosApi = 'https://apis.ccbp.in/videos/gaming'
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
        viewCount: each.view_count,
      }))
      this.setState({
        gamingVideos: updatedData,
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
            <RetryButton onClick={this.getGamingVideos}>Retry</RetryButton>
          </ErrorContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderLoadingView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        return (
          <LoadingContainer data-testid="loader" bgColor={bgColor}>
            <Loader type="ThreeDots" color="#3b82f6" height="50" width="50" />
          </LoadingContainer>
        )
      }}
    </NxtWatchContext.Consumer>
  )

  renderSuccessView = () => (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const {gamingVideos} = this.state
        const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
        const logoBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'
        const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
        const bannerBgColor = isDarkTheme ? '#181818' : '#ebebeb'
        return (
          <GamingVideosContainer data-testid="gaming" bgColor={bgColor}>
            <GamingVideosBanner
              bannerBgColor={bannerBgColor}
              data-testid="banner"
            >
              <GamingVideosLogoContainer bgColor={logoBgColor}>
                <SiYoutubegaming className="gaming-videos-icon" />
              </GamingVideosLogoContainer>
              <GamingVideosHeading color={headingColor}>
                Gaming
              </GamingVideosHeading>
            </GamingVideosBanner>
            <GamingVideosListContainer>
              {gamingVideos.map(each => (
                <GamingItem key={each.id} gameVideo={each} />
              ))}
            </GamingVideosListContainer>
          </GamingVideosContainer>
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
      <GamingVideosBgCont>
        <Header />
        <SidebarAndGamingVideosCont>
          <SideBar />
          {this.renderFinalView()}
        </SidebarAndGamingVideosCont>
      </GamingVideosBgCont>
    )
  }
}

export default Gaming
