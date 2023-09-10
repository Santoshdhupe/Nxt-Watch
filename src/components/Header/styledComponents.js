import styled from 'styled-components'

export const NavHeader = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 12vh;
  background-color: ${props => props.navBgColor};
  padding: 30px;
`
export const WebsiteLogo = styled.img`
  height: 30px;
  width: 120px;
`
export const ContentContainer = styled.ul`
  display: flex;
  flex-direction: row;
  padding: 0px;
  margin-top: 15px;
`
export const ContentList = styled.li`
  list-style-type: none;
  margin-right: 30px;
`
export const ThemeButton = styled.button`
  background-color: transparent;
  outline: none;
  cursor: pointer;
  border: none;
`
export const ProfileLogo = styled.img`
  height: 20px;
  width: 20px;
  margin-top: 5px;
`
export const LogoutButton = styled(ThemeButton)`
  border: 1px solid ${props => props.buttonBorder};
  border-radius: 5px;
  color: ${props => props.buttonColor};
  padding: 6px;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 0px;
  font-family: Roboto;
  font-weight: 500;
`
export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
  height: 160px;
  width: 400px;
  background-color: ${props => props.modalBgColor};
  border-radius: 10px;
`
export const ContentAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ModalDescription = styled.p`
  color: ${props => props.modalDescriptionColor};
  font-family: Roboto;
  font-size: 20px;
  margin: 10px;
  font-weight: 500;
`
export const ModalButtonsContainer = styled.div`
  display: flex;
  margin-top: 25px;
  justify-content: space-around;
`
export const ModalCancelButton = styled.button`
  border: 1px solid ${props => props.modalCancelButtonBorder};
  color: ${props => props.modalCancelButtonColor};
  font-family: Roboto;
  font-weight: 500;
  font-size: 16px;
  background-color: transparent;
  outline: none;
  border-radius: 3px;
  cursor: pointer;
  height: 38px;
  width: 80px;
`
export const ModalConfirmButton = styled(ModalCancelButton)`
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
`
