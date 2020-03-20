import React, { useState, useEffect }from 'react'
import { Wrapper, WrapperRow, Form, Label, Input, Select, TextArea, Button } from './Styled'
import { Checkbox } from './Library/Checkbox'

export const ReviewForm = () => {
    const [episodeId, setEpisodeId] = useState(0)
    const [text, setText] = useState("")
    const [user, setUser] = useState("")
    // const [user, setUser] = useState(`${currentUser._id}`)
    const [registred, setRegistered] = useState(false)
    const [episodes, setEpisodes] = useState([])

    const url = "https://p3historia.herokuapp.com/reviews";
    const fetchUrl = "https://p3historia.herokuapp.com/episodes";

    useEffect (() => {
        fetch(fetchUrl)
        .then(res => res.json())
        .then(json => setEpisodes(json))
      }, [fetchUrl])

    const handleSubmit = event => {
        event.preventDefault()
        console.log(episodeId, text)
        fetch (url, {
            method: "POST",
            body: JSON.stringify({ episode: episodeId, text }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => {
            console.log(res)
            if (res.status !== 201) {
                return(
                    res.json().then(json => console.log(json.message))
                )
            } else {
                setRegistered(true)
            }
        })
    }
    return (
        <Wrapper>
            {registred && (
                <h1>Review posted!</h1>
            )}
            <Form
            width={"50%"}
            >
                <Label>
                <Select
                onChange={event => setEpisodeId(event.target.value)}
                >
                {episodes.map((episode) => (
                    <option
                    key={episode._id}
                    value={episode._id}
                    >{episode.title}</option>
                    ))}
                </Select>
                </Label>
                <Label>
                    <TextArea
                    required
                    width={"75%"}
                    height={"150px"}
                    type="text"
                    defaultValue="Review"
                    onChange={event => setText(event.target.value)}
                    />
                </Label>
                <Button 
                    type="submit"
                    onClick={handleSubmit}>Post review</Button>
            </Form>
            
        </Wrapper>

    )
}