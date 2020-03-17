import React, { useReducer } from 'react'
import { Provider } from 'react-redux'
import { configureStore, combineReducers } from '@reduxjs/toolkit'
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

// REDUCERS
import { createQuery } from 'reducers/queries'

const reducer = combineReducers({
  queries: createQuery.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
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
        </Switch>
      </BrowserRouter>
    </Provider>
    )
  }
