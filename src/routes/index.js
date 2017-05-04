import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AppContainer from '@/containers/appContainer'
import Welcome from '@/containers/welcome'
import Playlists from '@/containers/playlists'
import Player from '@/components/player'

const routes = (
  <Route path='/' component={AppContainer}>
    <IndexRoute component={Welcome} />
    <Route path='/playlists' component={Playlists} />
    <Route path='/video/:videoId' component={Player} />
  </Route>
)

export default routes
