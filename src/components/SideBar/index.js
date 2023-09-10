import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import {
  SideBarContainer,
  TabsContainer,
  TabLink,
  EachTabContainer,
  TabTitle,
  BottomContainer,
  BottomDescription,
  IconsContainer,
  Icons,
} from './styledComponents'
import './index.css'

const SideBar = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme, activeTabId, setActiveTab} = value
      const sidebarBgColor = isDarkTheme ? '#231f20' : 'transparent'
      const eachBgColor = isDarkTheme ? '#ffffff' : '#000000'
      const textColor = isDarkTheme ? '#f4f4f4' : '#231f20'
      const onclickHomeTab = () => {
        setActiveTab('HOME')
      }
      const onclickTrendingTab = () => {
        setActiveTab('TRENDING')
      }
      const onclickGamingTab = () => {
        setActiveTab('GAMING')
      }
      const onclickSavedVideosTab = () => {
        setActiveTab('SAVEDVIDEOS')
      }
      return (
        <SideBarContainer sidebarBgColor={sidebarBgColor}>
          <TabsContainer>
            <EachTabContainer
              backgroundColor={() => {
                if (activeTabId === 'HOME' && isDarkTheme) {
                  return '#313131'
                }
                if (activeTabId === 'HOME') {
                  return '#f1f5f9'
                }
                return 'transparent'
              }}
              onClick={onclickHomeTab}
            >
              <TabLink
                to="/"
                color={activeTabId === 'HOME' ? '#ff0000' : {eachBgColor}}
              >
                <AiFillHome className="tab-icons" />
                <TabTitle
                  color={textColor}
                  fontWeight={activeTabId === 'HOME' ? 'bold' : 300}
                >
                  Home
                </TabTitle>
              </TabLink>
            </EachTabContainer>
            <EachTabContainer
              backgroundColor={() => {
                if (activeTabId === 'TRENDING' && isDarkTheme) {
                  return '#313131'
                }
                if (activeTabId === 'TRENDING') {
                  return '#f1f5f9'
                }
                return 'transparent'
              }}
              onClick={onclickTrendingTab}
            >
              <TabLink
                to="/trending"
                color={activeTabId === 'TRENDING' ? '#ff0000' : {eachBgColor}}
              >
                <HiFire className="tab-icons" />
                <TabTitle
                  color={textColor}
                  fontWeight={activeTabId === 'TRENDING' ? 'bold' : 300}
                >
                  Trending
                </TabTitle>
              </TabLink>
            </EachTabContainer>
            <EachTabContainer
              backgroundColor={() => {
                if (activeTabId === 'GAMING' && isDarkTheme) {
                  return '#313131'
                }
                if (activeTabId === 'GAMING') {
                  return '#f1f5f9'
                }
                return 'transparent'
              }}
              onClick={onclickGamingTab}
            >
              <TabLink
                to="/gaming"
                color={activeTabId === 'GAMING' ? '#ff0000' : {eachBgColor}}
              >
                <SiYoutubegaming className="tab-icons" />
                <TabTitle
                  color={textColor}
                  fontWeight={activeTabId === 'GAMING' ? 'bold' : 300}
                >
                  Gaming
                </TabTitle>
              </TabLink>
            </EachTabContainer>
            <EachTabContainer
              backgroundColor={() => {
                if (activeTabId === 'SAVEDVIDEOS' && isDarkTheme) {
                  return '#313131'
                }
                if (activeTabId === 'SAVEDVIDEOS') {
                  return '#f1f5f9'
                }
                return 'transparent'
              }}
              onClick={onclickSavedVideosTab}
            >
              <TabLink
                to="/saved-videos"
                color={
                  activeTabId === 'SAVEDVIDEOS' ? '#ff0000' : {eachBgColor}
                }
                fontWeight={activeTabId === 'SAVEDVIDEOS' ? 'bold' : 300}
              >
                <MdPlaylistAdd className="tab-icons" />
                <TabTitle color={textColor}>Saved videos</TabTitle>
              </TabLink>
            </EachTabContainer>
          </TabsContainer>
          <BottomContainer>
            <BottomDescription color={textColor}>CONTACT US</BottomDescription>
            <IconsContainer>
              <Icons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Icons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </IconsContainer>
            <BottomDescription color={textColor}>
              Enjoy! Now to see your channels and recommendations
            </BottomDescription>
          </BottomContainer>
        </SideBarContainer>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default SideBar
