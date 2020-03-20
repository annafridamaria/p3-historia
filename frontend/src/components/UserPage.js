import React, {useState, useEffect} from 'react'
import { useHistory } from 'react-router-dom'
import {WrapperRow, Wrapper, Form, ListBox, Text, Button, Header1, ImageRound, Episode2, Article} from 'components/Styled'

export const UserPage = () => {
    const [playlist, setPlaylist] = useState([])
    const [episodes, setEpisodes] = useState([])
    const history = useHistory()
    const fetchUrl = "https://p3historia.herokuapp.com/episodes";

    useEffect (() => {
        fetch(fetchUrl)
        .then(res => res.json())
        .then(json => setEpisodes(json))
      }, [fetchUrl])
      const addToPlaylist = () => {
          return
      }
    return (
        <>
            <Wrapper>
                <ImageRound src="https://miro.medium.com/fit/c/256/256/2*tVPotzlGdl-5oM4WI2Z4Ug.jpeg" alt="Frida"/>
                <Header1>Frida</Header1>
            </Wrapper>
            <WrapperRow>
                <Button
                    type="button"
                    title="Browse episodes"
                    onClick={() => {
                    history.push('/')
                }}
                    >Browse episodes</Button>
                <Button
                    type="button"
                    title="Review episodes"
                    onClick={() => {
                    history.push('/add-review')
                }}
                    >Review episodes</Button>
                <Button
                    type="button"
                    title="Add episodes"
                    onClick={() => {
                    history.push('/add-episode')
                }}
                    >Add episode</Button>
            </WrapperRow>
            <WrapperRow>
            <Wrapper
                width={"44%"}>
                <Form
                width={"90%"}>
                    <p>Playlists</p>
                    <Wrapper
                        height ={"300px"}
                        width={"90%"}
                        overflow={"scroll"}>
                        {episodes.map((episode) => (
                            <>
                                <ListBox
                                    key={episode._id}
                                    title={episode.title}
                                    value={episode._id}
                                    onChange={event => setPlaylist(event.target.value)}
                                    height={"20px"}
                                    width={"auto"}>
                                        <WrapperRow
                                            width={"400px"}
                                            height={"40px"}
                                        >
                                            <Text fontsize={"12px"}>{episode.title}</Text>
                                            <Button
                                                minwidth={"30px"}
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
                <Episode2>
                    <Header1>Reviews</Header1>
                    <Article>
                        <p><b>Karin Månsdotter – pigan som blev drottning av Sverige</b></p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo 
                         consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse 
                         cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                         non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </Article>
                </Episode2>
            </WrapperRow>
        </>
    ) 
}