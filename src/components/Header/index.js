import {Link, withRouter} from 'react-router-dom'
import {BsMoon} from 'react-icons/bs'
import {FiSun} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import {
  NavHeader,
  WebsiteLogo,
  ContentContainer,
  ContentList,
  ThemeButton,
  ProfileLogo,
  LogoutButton,
  ModalContainer,
  ContentAndButtonsContainer,
  ModalDescription,
  ModalButtonsContainer,
  ModalCancelButton,
  ModalConfirmButton,
} from './styledComponents'
import './index.css'

const Header = props => {
  const onclickConfirm = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme, onclickToggleTheme} = value
        const buttonBorder = isDarkTheme ? '#ffffff' : '#3b82f6'
        const buttonColor = isDarkTheme ? '#ffffff' : '#3b82f6'
        const modalCancelButtonBorder = isDarkTheme ? '#ffffff' : '#181818'
        const modalCancelButtonColor = isDarkTheme ? '#ffffff' : '#94a3b8'
        const navBgColor = isDarkTheme ? '#231f20' : '#ffffff'
        const modalBgColor = isDarkTheme ? '#231f20' : '#ebebeb'
        const modalDescriptionColor = isDarkTheme ? '#ebebeb' : '#0f0f0f'
        const logoImage = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        return (
          <NavHeader navBgColor={navBgColor}>
            <Link to="/" className="linkItem">
              <WebsiteLogo src={logoImage} alt="website logo" />
            </Link>
            <ContentContainer>
              <ContentList>
                <ThemeButton
                  type="button"
                  onClick={onclickToggleTheme}
                  data-testid="theme"
                >
                  {isDarkTheme ? (
                    <FiSun className="themeIcons sunThemeIcon" />
                  ) : (
                    <BsMoon className="themeIcons" />
                  )}
                </ThemeButton>
              </ContentList>
              <ContentList>
                <ProfileLogo
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                  alt="profile"
                />
              </ContentList>
              <ContentList>
                <Popup
                  modal
                  trigger={
                    <LogoutButton
                      type="button"
                      buttonBorder={buttonBorder}
                      buttonColor={buttonColor}
                    >
                      Logout
                    </LogoutButton>
                  }
                  className="popup-content"
                >
                  {close => (
                    <ModalContainer modalBgColor={modalBgColor}>
                      <ContentAndButtonsContainer>
                        <ModalDescription
                          modalDescriptionColor={modalDescriptionColor}
                        >
                          Are you sure, you want to logout?
                        </ModalDescription>
                        <ModalButtonsContainer>
                          <ModalCancelButton
                            type="button"
                            data-testid="closeButton"
                            onClick={() => close()}
                            modalCancelButtonBorder={modalCancelButtonBorder}
                            modalCancelButtonColor={modalCancelButtonColor}
                          >
                            Cancel
                          </ModalCancelButton>
                          <Link to="/login" className="linkItem">
                            <ModalConfirmButton
                              type="button"
                              buttonBorder={buttonBorder}
                              buttonColor={buttonColor}
                              onClick={onclickConfirm}
                            >
                              Confirm
                            </ModalConfirmButton>
                          </Link>
                        </ModalButtonsContainer>
                      </ContentAndButtonsContainer>
                    </ModalContainer>
                  )}
                </Popup>
              </ContentList>
            </ContentContainer>
          </NavHeader>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default withRouter(Header)
