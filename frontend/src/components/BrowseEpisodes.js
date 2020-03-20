import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import queryString from "query-string"
import 'app.css'
// COMPONENTS
import {Episode} from '../components/Episode'

export const BrowseEpisodes = () => {
  const [episodes, setEpisodes] = useState([])
  const location = useLocation()

  useEffect(() => {
    async function fetchEpisodes() {
      const { tags } = queryString.parse(location.search);
      console.log(tags)
      const episodesJson = await fetch("https://p3historia.herokuapp.com/episodes");
      const episodes = await episodesJson.json();

      let filteredEpisodes = episodes;
      if (tags) {
        // should be filter by tags
        filteredEpisodes = episodes.filter(
          episode =>
            !!episode.tags && episode.tags.some(tag => tags.includes(tag))
        );
      }

      setEpisodes(filteredEpisodes);
    }

    fetchEpisodes();
  }, [location.search]);

  return (
      <div className="episodes">
      {episodes.map((episode) => (
          <Episode
          key={episode._id}
          image={episode.image}
          century={episode.century}
          title={episode.title}
          description={episode.description}
          tags={episode.tags}
          reviews={episode.reviews}/>
      ))}
      </div>
    )
  }
