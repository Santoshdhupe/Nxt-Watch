import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const SidebarAndMainContainer = styled.div`
  display: flex;
  width: 100%;
`
export const HomeMainContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 220px;
  display: ${props => props.display};
  background-size: cover;
  justify-content: space-between;
  padding: 30px;
  padding-top: 15px;
`
export const BannerLeftSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const BannerWebsiteLogo = styled.img`
  height: 36px;
  width: 130px;
  margin-bottom: 20px;
`
export const BannerDescription = styled.p`
  font-family: Roboto;
  color: #231f20;
  font-size: 18px;
  width: 80%;
`
export const BannerButton = styled.button`
  font-family: Roboto;
  font-size: 15px;
  font-weight: 500;
  border: 1px solid #181818;
  background-color: transparent;
  color: #181818;
  height: 40px;
  width: 120px;
  cursor: pointer;
  outline: none;
`
export const CancelButton = styled.button`
  align-self: flex-start;
  cursor: pointer;
  outline: none;
  background-color: transparent;
  border: none;
`
