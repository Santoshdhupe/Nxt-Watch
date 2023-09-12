import styled from 'styled-components'

export const VideosSearchInputContainer = styled.div`
  display: flex;
  border: 1px solid #64748b;
  background-color: ${props => props.bgColor};
  height: 30px;
  width: 420px;
  margin: 30px;
  margin-left: 20px;
`
export const VideoInput = styled.input`
  border: none;
  border-right: 1px solid #64748b;
  outline: none;
  padding: 3px;
  padding-left: 10px;
  width: 100%;
  background-color: ${props => props.searchInputBgColor};
  color: ${props => props.searchInputColor};
`
export const SearchButton = styled.button`
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
`
export const LoadingContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  align-self: center;
  padding-left: 400px;
`
export const RetryButton = styled.button`
  outline: none;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  background-color: #4f46e5;
  font-family: Roboto;
  color: #ffffff;
  height: 35px;
  width: 110px;
  margin-bottom: 10px;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoVideosImage = styled.img`
  width: 300px;
  margin-top: 15px;
  margin-bottom: 20px;
`
export const NoVideosHeading = styled.h1`
  font-family: Roboto;
  color: ${props => props.color};
  font-weight: 400;
  font-size: 25px;
  text-align: center;
`
export const NoVideosDescription = styled.p`
  font-family: Roboto;
  color: ${props => props.color};
  font-size: 18px;
  margin-top: 0px;
  text-align: center;
`
export const VideosContainer = styled.ul`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  padding: 0px;
  margin: 0px;
`
export const AllVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const ErrorContainer = styled.div`
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`
