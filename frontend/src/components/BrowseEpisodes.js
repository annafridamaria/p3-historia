import React, {useEffect, useState} from 'react'
import 'app.css'
// COMPONENTS
import {Episode} from '../components/Episode'



// const store = configureStore({ reducer })

export const BrowseEpisodes = () => {
  const [episodes, setEpisodes] = useState([])
  const url = "http://localhost:8080/episodes"

  useEffect (() => {
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(json => setEpisodes(json))
  }, [url])


  return (
    <>
      <div className="episodes">
      {episodes.map((episode) => (
          <Episode
          key={episode._id}
          image={episode.image}
          century={episode.century}
          title={episode.title}
          description={episode.description}
          tags={episode.tags}/>
      ))}
      </div>
    </>
    )
  }
