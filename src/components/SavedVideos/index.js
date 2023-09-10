import {HiFire} from 'react-icons/hi'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import SideBar from '../SideBar'
import Header from '../Header'
import SavedAndTrendingVideosItem from '../SavedAndTrendingVideosItem'
import {
  SavedVideosBgCont,
  SidebarAndSavedVideosCont,
  SavedVideosContainer,
  SavedVideosBanner,
  SavedVideosLogoContainer,
  SavedVideosHeading,
  SavedVideosListContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosDescription,
} from './styledComponents'
import './index.css'

const SavedVideos = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {savedVideos, isDarkTheme} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const logoBgColor = isDarkTheme ? '#0f0f0f' : '#d7dfe9'
      const headingColor = isDarkTheme ? '#ffffff' : '#1e293b'
      const bannerBgColor = isDarkTheme ? '#181818' : '#ebebeb'
      const descColor = isDarkTheme ? '#ffffff' : '#1e293b'
      return (
        <SavedVideosBgCont data-testid="savedvideos">
          <Header />
          <SidebarAndSavedVideosCont>
            <SideBar />
            {savedVideos.length === 0 ? (
              <SavedVideosContainer bgColor={bgColor}>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading descColor={descColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosDescription descColor={descColor}>
                  You can save your videos while watching them
                </NoSavedVideosDescription>
              </SavedVideosContainer>
            ) : (
              <>
                <SavedVideosContainer bgColor={bgColor}>
                  <SavedVideosBanner bannerBgColor={bannerBgColor}>
                    <SavedVideosLogoContainer logoBgColor={logoBgColor}>
                      <HiFire className="saved-videos-icon" />
                    </SavedVideosLogoContainer>
                    <SavedVideosHeading headingColor={headingColor}>
                      Saved Videos
                    </SavedVideosHeading>
                  </SavedVideosBanner>
                  <SavedVideosListContainer>
                    {savedVideos.map(each => (
                      <SavedAndTrendingVideosItem key={each.id} video={each} />
                    ))}
                  </SavedVideosListContainer>
                </SavedVideosContainer>
              </>
            )}
          </SidebarAndSavedVideosCont>
        </SavedVideosBgCont>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SavedVideos
