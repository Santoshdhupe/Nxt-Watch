import React from 'react'

const NxtWatchContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTabId: '',
  onclickToggleTheme: () => {},
  addVideo: () => {},
  removeSavedVideo: () => {},
  setActiveTab: () => {},
})

export default NxtWatchContext
