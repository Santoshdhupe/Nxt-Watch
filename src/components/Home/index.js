import {Component} from 'react'
import {IoMdClose} from 'react-icons/io'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import HomeVideos from '../HomeVideos'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContainer,
  SidebarAndMainContainer,
  HomeMainContainer,
  BannerContainer,
  BannerLeftSection,
  BannerWebsiteLogo,
  BannerDescription,
  BannerButton,
  CancelButton,
} from './styledComponents'
import './index.css'

class Home extends Component {
  state = {showBanner: 'flex'}

  onclickCancelButton = () => {
    this.setState({showBanner: 'none'})
  }

  render() {
    const {showBanner} = this.state
    return (
      <NxtWatchContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
          return (
            <MainContainer>
              <Header />
              <SidebarAndMainContainer>
                <SideBar />
                <HomeMainContainer data-testid="home" bgColor={bgColor}>
                  <BannerContainer data-testid="banner" display={showBanner}>
                    <BannerLeftSection>
                      <BannerWebsiteLogo
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="website logo"
                      />
                      <BannerDescription>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerDescription>
                      <BannerButton>GET IT NOW</BannerButton>
                    </BannerLeftSection>
                    <CancelButton
                      type="button"
                      onClick={this.onclickCancelButton}
                    >
                      <IoMdClose className="cancel-icon" />
                    </CancelButton>
                  </BannerContainer>
                  <HomeVideos />
                </HomeMainContainer>
              </SidebarAndMainContainer>
            </MainContainer>
          )
        }}
      </NxtWatchContext.Consumer>
    )
  }
}

export default Home
