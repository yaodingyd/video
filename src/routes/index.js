import React from 'react'
import { Route, IndexRoute } from 'react-router'

import AuthedApp from '../apps/authedApp'
import UnauthedApp from '../apps/unauthedApp'

import Welcome from '../containers/welcome'
// import Login from '../containers/login'
import Play from '@/containers/playlists'

const routes = (
  <Route>
    <Route path='/' component={UnauthedApp}>
      <IndexRoute component={Welcome} />
      <Route path='login' component={Welcome} />
    </Route>
    <Route path='/playlists' component={AuthedApp}>
      <IndexRoute component={Play} />
    </Route>
  </Route>
)

export default routes
