import { GET_PLAYLIST_ITEMS, GET_PLAYLISTS, PLAY_VIDEO, GET_CHANNEL_TITLE, LOGOUT_SUCCESS } from '../actions'

const video = (state = {
  playlists: [],
  playlistItems: {},
  channelTitle: ''
}, action) => {
  switch (action.type) {
    case GET_PLAYLISTS:
      return {
        ...state,
        playlists: action.items
      }
    case GET_PLAYLIST_ITEMS:
      return {
        ...state,
        playlistItems: action.items
      }
    case PLAY_VIDEO:
      return {
        ...state,
        videoId: action.videoId
      }
    case GET_CHANNEL_TITLE:
      return {
        ...state,
        channelTitle: action.channelTitle
      }
    case LOGOUT_SUCCESS:
      return {
        playlists: [],
        playlistItems: {},
        channelTitle: ''
      }
    default:
      return state
  }
}

export default video
