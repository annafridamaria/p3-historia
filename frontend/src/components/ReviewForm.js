import React, { useState }from 'react'
import { Wrapper, WrapperRow, Form, Label, Input, TextArea, Button } from './Styled'
import { Checkbox } from './Library/Checkbox'

export const ReviewForm = () => {
    const [episode, setEpisode] = useState("")
    const [review, setReview] = useState("")
    const [user, setUser] = useState("")
    // const [user, setUser] = useState(`${currentUser._id}`)
    const [registred, setRegistered] = useState(false)

    const url = "http://localhost:8080/episode";

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
                <h1>Episode added!</h1>
            )}
            <Form
            width={"50%"}
            >
                <Label>
                <select id="mySelect">
                    <option>Apple</option>
                    <option>Pear</option>
                    <option>Banana</option>
                    <option>Orange</option>
                </select>
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