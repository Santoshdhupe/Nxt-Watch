import {Link} from 'react-router-dom'
import NxtWatchContext from '../../NxtWatchContext/videoContext'
import {
  GameListItem,
  GameImage,
  GameTitle,
  GameDescription,
} from './styledComponents'
import './index.css'

const GamingItem = props => {
  const {gameVideo} = props
  return (
    <NxtWatchContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        const gameTitleColor = isDarkTheme ? '#ffffff' : ' #181818'
        const gameDescColor = isDarkTheme ? '#94a3b8' : '#1e293b'
        return (
          <Link to={`/videos/${gameVideo.id}`} className="link-item">
            <GameListItem>
              <GameImage src={gameVideo.thumbnailUrl} alt="video thumbnail" />
              <GameTitle color={gameTitleColor}>{gameVideo.title}</GameTitle>
              <GameDescription color={gameDescColor}>
                {gameVideo.viewCount} Watching Worldwide
              </GameDescription>
            </GameListItem>
          </Link>
        )
      }}
    </NxtWatchContext.Consumer>
  )
}

export default GamingItem
