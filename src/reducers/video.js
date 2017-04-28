import { GET_PLAYLIST_ITEMS, GET_PLAYLISTS, PLAY_VIDEO } from '../actions'

const video = (state = {
  playlists: [],
  playlistItems: [],
  videoId: ''
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
    default:
      return state
  }
}

export default video
