import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import 'app.css'
// COMPONENTS
import {Header} from './components/Header.js'
import {BrowseEpisodes} from './components/BrowseEpisodes'
import {LoginForm} from './components/LoginForm'
import {RegisterForm} from './components/RegisterForm'
import {UserPage} from './components/UserPage'
import {EpisodeForm} from './components/EpisodeForm'
import {PlaylistForm} from './components/PlaylistForm'
import {ReviewForm} from './components/ReviewForm'
import {Footer} from './components/Footer.js'

export const App = () => {
  return (
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact>
            <BrowseEpisodes />
          </Route>
          <Route path="/login" exact>
            <LoginForm />
          </Route>
          <Route path="/register" exact>
            <RegisterForm />
          </Route>
          <Route path="/user" exact>
            <UserPage />
          </Route>
          <Route path="/add-episode" exact>
            <EpisodeForm />
          </Route>
          <Route path="/add-playlist" exact>
            <PlaylistForm />
          </Route>
          <Route path="/add-review" exact>
            <ReviewForm />
          </Route>
        </Switch>
        {/* <Footer /> */}
      </BrowserRouter>
    )
  }
