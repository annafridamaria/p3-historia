import React, { useState, useEffect }from 'react'
import { Wrapper, WrapperRow, Form, Label, Input, Select, TextArea, Button } from './Styled'
import { Checkbox } from './Library/Checkbox'

export const ReviewForm = () => {
    const [episode, setEpisode] = useState("")
    const [review, setReview] = useState("")
    const [user, setUser] = useState("")
    // const [user, setUser] = useState(`${currentUser._id}`)
    const [registred, setRegistered] = useState(false)
    const [episodes, setEpisodes] = useState([])

    const url = "http://localhost:8080/episode";
    const fetchUrl = "http://localhost:8080/episodes";

    const arr = [ "Hanna", "Kodjo", "Linnea"]

    useEffect (() => {
        console.log(fetchUrl)
        fetch(fetchUrl)
        .then(res => res.json())
        .then(json => setEpisodes(json))
      }, [fetchUrl])

    const handleSubmit = event => {
        event.preventDefault()
        // set century to .split(",")
        fetch (url, {
            method: "POST",
            body: JSON.stringify({ episode, review, user }),
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
                <Select>
                {episodes.map((episode) => (
                    <option
                    key={episode._id}
                    value={episode.title}>{episode.title}</option>
                    ))}
                </Select>
                </Label>
                <Label>
                    <TextArea
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Review"
                    onChange={event => setReview(event.target.value)}
                    />
                </Label>
                <Button 
                    type="submit"
                    onClick={handleSubmit}>Post review</Button>
            </Form>
            
        </Wrapper>

    )
}