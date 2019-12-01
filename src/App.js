import React from 'react'
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom'

import Home from './main/pages/Home'
import Auth from './users/pages/Auth'
import { Profiles, Profile, AddEducation, AddExperience, EditProfile } from './profiles/pages'
import { Posts, Post } from './posts/pages'
import Menu from './shared/components/Navigation/Menu'

const App = () => (
  <Router>
    <Menu />
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/auth' component={Auth} />
      <Route path='/profiles' exact component={Profiles} />
      <Route path='/profiles/edit' component={EditProfile} />
      <Route path='/profiles/education' component={AddEducation} />
      <Route path='/profiles/experience' component={AddExperience} />
      <Route path='/profiles/:profileId' component={Profile} />
      <Route path='/posts' exact component={Posts} />
      <Route path='/posts/:postId' component={Post} />
      <Redirect to='/' />
    </Switch>
  </Router>
)

export default App
