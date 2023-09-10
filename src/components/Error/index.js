import NxtWatchContext from '../../NxtWatchContext/videoContext'
import {ErrorImage, ErrorHeading, ErrorDescription} from './styledComponents'

const ErrorRoute = () => (
  <NxtWatchContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const descHeading = isDarkTheme ? '#ffffff' : '#181818'
      const descColor = isDarkTheme ? '#94a3b8' : '#181818'
      return (
        <>
          <ErrorImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
            alt="failure view"
          />
          <ErrorHeading color={descHeading}>
            Oops! Something Went Wrong
          </ErrorHeading>
          <ErrorDescription color={descColor}>
            We are having some trouble to complete your request. Please try
            again.
          </ErrorDescription>
        </>
      )
    }}
  </NxtWatchContext.Consumer>
)

export default ErrorRoute
