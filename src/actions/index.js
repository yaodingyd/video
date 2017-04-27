import { browserHistory } from 'react-router'
import axios from 'axios'
import _ from 'lodash'
import { handleClientLoad, handleStatus, loadPlaylists } from '@/api'

export const LOGIN_INIT = 'LOGIN_INIT'
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const GET_PLAYLISTS = 'GET_PLAYLISTS'
export const GET_PLAYLIST_ITEMS = 'GET_PLAYLIST_ITEMS'

const loginInit = () => ({
  type: LOGIN_INIT
})

export const getLoginInit = () => (dispatch) => {
  dispatch(loginInit())
  handleClientLoad(updateSigninStatus)
}

const loginRequest = () => ({
  type: LOGIN_REQUEST
})

const loginSuccess = () => ({
  type: LOGIN_SUCCESS
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
  dispatch(logoutSuccess())
}

const playlists = (items) => ({
  type: GET_PLAYLISTS,
  items
})

export const getPlaylists = () => (dispatch) => {
  loadPlaylists((res) => {
    const items = _.map(res.items, 'snippet')
    dispatch(playlists(items))
  })
}

export const getPlaylistItems = () => (dispatch) => {
  axios.get('result.json')
    .then((res) => {
      const items = _.map(res.data.items, 'snippet')
      console.log(items)
      dispatch(playlistItems(items))
    })
}

const playlistItems = (items) => ({
  type: GET_PLAYLIST_ITEMS,
  items
})

function updateSigninStatus (isSignedin) {
  if (isSignedin) {
    browserHistory.push('/playlists')
  } else {
    browserHistory.push('/')
  }
}
