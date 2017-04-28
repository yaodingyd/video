/* global gapi */
import _ from 'lodash'

let GoogleAuth = {}
const SCOPE = 'https://www.googleapis.com/auth/youtube.readonly'
const DISCOVERY_DOC = 'https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest'
const API_KEY = 'AIzaSyAe68vsoi6L5dGxOeT51p30SJP7lqafT30'
const CLIENT_ID = '845037502702-gb03qiv44kk40353jpt51qs17c6oi0iu.apps.googleusercontent.com'

let ids = []

export function handleClientLoad (updateSigninStatus) {
  gapi.load('client:auth2', initClient.bind(null, updateSigninStatus))
}

function initClient (updateSigninStatus) {
  gapi.client.init({
    'apiKey': API_KEY,
    'discoveryDocs': [DISCOVERY_DOC],
    'clientId': CLIENT_ID,
    'scope': SCOPE
  }).then(function () {
    GoogleAuth = gapi.auth2.getAuthInstance()
    GoogleAuth.isSignedIn.listen(updateSigninStatus)
    const isAuthorized = GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE)
    updateSigninStatus(isAuthorized)
  })
}

export function handleStatus () {
  if (GoogleAuth.isSignedIn.get()) {
    GoogleAuth.signOut()
  } else {
    GoogleAuth.signIn()
  }
}

export function revokeAccess () {
  GoogleAuth.disconnect()
}

export function getSigninStatus (isSignedIn) {
  return GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE)
}

export function loadPlaylists (cb) {
  gapi.client.youtube.playlists
    .list({ part: 'snippet', mine: 'true' })
    .execute(function (res) {
      ids = _.map(res.items, 'id')
      cb(res)
    })
}

export function loadPlaylistItems (id, cb) {
  gapi.client.youtube.playlistItems
    .list({ part: 'snippet', playlistId: id, maxResults: 5 })
    .execute(function (res) {
      cb(res)
    })
}

export function loadAllPlaylistsItems (cb) {
  let items = []
  let unsuccessful = 0
  ids.forEach((id) => {
    loadPlaylistItems(id, (item) => {
      if (item !== null) {
        items.push(item)
      } else {
        unsuccessful++
      }
      if (items.length >= ids.length - unsuccessful) {
        cb(items)
      }
    })
  })
}
