import React, { useState, useEffect }from 'react'
import { Wrapper, WrapperRow, Form, Input, ListBox, Button } from './Styled'

export const PlaylistForm = () => {
    const [title, setTitle] = useState("")
    const [user, setUser] = useState("")
    const [playlist, setPlaylist] = useState([])
    const [created, setCreated] = useState(false)
    const url = "http://localhost:8080/users";

    const fetchUrl ="http://localhost:8080/episodes"
    const [episodes, setEpisodes] = useState([])
    // const [url, setUrl] = useState("")

  useEffect (() => {
    fetch(fetchUrl)
    .then(res => res.json())
    .then(json => setEpisodes(json))
  }, [fetchUrl])

  const addToPlaylist = (id) => {
      console.log(id)
      const setUser = "Current user"
    //   setPlaylist([...playlist, {
    //       id: playlist.length,
    //       value: id
    //   }])
    // setPlaylist( playlist => {
    //     playlist.push({
    //         id: playlist.length,
    //         value: Math.floor(Math.random() * 10) + 1
    //     })

    //     return playlist
    // })
}
    const handleSubmit = event => {
        event.preventDefault()
        fetch (url, {
            method: "POST",
            body: JSON.stringify({ title, user, episodes }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => {
            if (res.status !== 201) {
                return(
                    res.json().then(json => console.log(json.messae))
                )
            } else {
                setCreated(true)
            }
        })
    }
    return (
        <WrapperRow>
            <Wrapper
                width={"40%"}>
                {created && (
                    <h1>Playlist added!</h1>)}
                <Form
                width={"90%"}>
                    <p>Add episodes</p>
                    <Wrapper
                        height ={"300px"}
                        width={"90%"}>
                        {episodes.map((episode) => (
                            <>
                                <ListBox
                                    key={episode._id}
                                    title={episode.title}
                                    value={episode._id}
                                    onChange={event => setPlaylist(event.target.value)}
                                    height={"20px"}
                                    width={"auto"}>
                                        <WrapperRow>
                                            {episode.title}
                                            <Button
                                                onClick={addToPlaylist(episode.id)}>
                                                    <b>+</b>
                                            </Button>
                                        </WrapperRow>
                                </ListBox>
                            </>
                        ))}
                    </Wrapper>
                </Form>
            </Wrapper>
            <Wrapper
                width={"40%"}>
                {created && (
                    <h1>Playlist added!</h1>
                )}
                <Form
                width={"90%"}>
                    <label>
                        <Input
                        required
                        type="text"
                        defaultValue="Name your playlist"
                        onChange={event => setTitle(event.target.value)}
                        />
                    </label>
                    <Wrapper
                        height ={"300px"}
                        width={"90%"}>
                        {episodes.map((episode) => (
                            <>
                                <ListBox
                                    key={episode._id}
                                    title={episode.title}
                                    value={episode._id}
                                    onChange={event => setPlaylist(event.target.value)}
                                    height={"20px"}
                                    width={"auto"}>
                                        <WrapperRow>
                                            {episode.title}
                                        </WrapperRow>
                                </ListBox>
                            </>
                        ))}
                    </Wrapper>
                    <Button
                        type="submit">Create playlist</Button>
                </Form>
            </Wrapper>

        </WrapperRow>
            

    )
}