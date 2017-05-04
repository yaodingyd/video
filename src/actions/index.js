import { browserHistory } from 'react-router'
import _ from 'lodash'
import { handleClientLoad, handleStatus, loadPlaylists, loadAllPlaylistsItems } from '@/api'

export const LOGIN_INIT = 'LOGIN_INIT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const GET_PLAYLISTS = 'GET_PLAYLISTS'
export const GET_PLAYLIST_ITEMS = 'GET_PLAYLIST_ITEMS'
export const GET_CHANNEL_TITLE = 'GET_CHANNEL_TITLE'

export const PLAY_VIDEO = 'PLAY_VIDEO'

const loginInit = () => ({
  type: LOGIN_INIT
})

export const getLoginInit = () => (dispatch) => {
  dispatch(loginInit())
  dispatch(loginRequest())
  handleClientLoad(updateSigninStatus(dispatch))
}

const loginRequest = () => ({
  type: LOGIN_REQUEST
})

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
})

const loginFail = () => ({
  type: LOGIN_FAILURE
})

const logoutRequest = () => ({
  type: LOGOUT_REQUEST
})

const logoutSuccess = () => ({
  type: LOGOUT_SUCCESS
})

export const getLogin = () => (dispatch) => {
  dispatch(loginRequest())
  handleStatus()
  dispatch(loginSuccess())
}

export const getLogout = () => (dispatch) => {
  dispatch(logoutRequest())
  handleStatus()
  browserHistory.push('/')
  dispatch(logoutSuccess())
}

const playlists = (items) => ({
  type: GET_PLAYLISTS,
  items
})

const channelTitle = (title) => ({
  type: GET_CHANNEL_TITLE,
  channelTitle: title
})

export const getPlaylists = () => (dispatch) => {
  loadPlaylists((res) => {
    let lists = _.map(res.items, 'snippet')
    dispatch(playlists(lists))
    dispatch(channelTitle(lists[0].channelTitle))
    loadAllPlaylistsItems((res) => {
      let items = _.map(res, 'items')
      dispatch(playlistItems(items))
    })
  })
}

const playlistItems = (items) => ({
  type: GET_PLAYLIST_ITEMS,
  items
})

const updateSigninStatus = (dispatch) => (isSignedin) => {
  if (isSignedin) {
    dispatch(loginSuccess())
    browserHistory.push('/playlists')
  } else {
    dispatch(loginFail())
    browserHistory.push('/')
  }
}

export const setVideo = (videoId) => ({
  type: PLAY_VIDEO,
  videoId
})

export const playVideo = (videoId) => (dispatch) => {
  dispatch(setVideo(videoId))
  browserHistory.push(`/video/${videoId}`)
}
