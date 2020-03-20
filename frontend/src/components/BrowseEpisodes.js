import React, {useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom'
import queryString from "query-string"
import 'app.css'
// COMPONENTS
import {Episode} from '../components/Episode'

export const BrowseEpisodes = () => {
  const [episodes, setEpisodes] = useState([])
  // const url = "http://localhost:8080/episodes"
  const location = useLocation()

  // useEffect(() => {
  //   async function upsateEpisodesList() {
  //     const searchParams = new URLSearchParams(location.search);
  //     const episodesJson = await fetch("https://p3historia.herokuapp.com/episodes");
  //     // There are some episodes that doesnt have tags attribute.
  //     // In order to make things easier here I gonna filter them
  //     // but it would be better represent episodes without tags
  //     // giving an empty array as tags' attribute value { tags: [] }
  //     // on backend
  //     const episodes = (await episodesJson.json()).filter(
  //       episode => !!episode.tags
  //     );

  //     let filteredEpisodes = episodes;
  //     if (searchParams.has("tags")) {
  //       // should be filter by tags
  //       filteredEpisodes = episodes.filter(episode => {
  //         // get episodes that has tags combination described on 'searchParams'
  //         let matchAll = !searchParams
  //           .getAll("tags")
  //           .some(tag => !episode.tags.includes(tag));

  //         return matchAll;
  //       });
  //     }

  //     setEpisodes(filteredEpisodes);
  //   }

  //   upsateEpisodesList();
  // }, [location.search]);

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
          tags={episode.tags}/>
      ))}
      </div>
    )
  }
