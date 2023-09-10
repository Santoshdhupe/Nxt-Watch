import NxtWatchContext from '../../NxtWatchContext/videoContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  MainContainer,
  SidebarAndMainContainer,
  NotFoundContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const notFoundImage = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
      const descHeading = isDarkTheme ? '#ffffff' : '#181818'
      const descColor = isDarkTheme ? '#94a3b8' : '#181818'
      return (
        <MainContainer>
          <Header />
          <SidebarAndMainContainer>
            <SideBar />
            <NotFoundContainer bgColor={bgColor}>
              <NotFoundImage src={notFoundImage} alt="not found" />
              <NotFoundHeading color={descHeading}>
                Page Not Found
              </NotFoundHeading>
              <NotFoundDescription color={descColor}>
                We are sorry, the page you requested could not be found
              </NotFoundDescription>
            </NotFoundContainer>
          </SidebarAndMainContainer>
        </MainContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default NotFound
