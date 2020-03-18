import React, { useState }from 'react'
import { Wrapper, WrapperRow, Form, Label, Input, TextArea, Button } from './Styled'
import { Checkbox } from './Library/Checkbox'

export const EpisodeForm = () => {
    const [registred, setRegistered] = useState("")
    const [title, setTitle] = useState("")
    const [released, setReleased] = useState("")
    const [century, setCentury] = useState("")
    const [description, setDescription] = useState("")
    const [region, setRegion] = useState("")
    const [country, setCountry] = useState("")
    const [sources, setSources] = useState("")
    const [expert, setExpert] = useState("")
    const [tags, setTags] = useState([])
    const [image, setImage] = useState("")
    const [weblink, setWeblink] = useState("")
    const [applink, setApplink] = useState("")
    const [podcastlink, setPodcastlink] = useState("") 

    const url = "http://localhost:8080/episode";

    const splitCentury = (value) => {
        return value.split(", ")
    }

    const pushTags = (value) => {
        setTags = tags.push(value)
        console.log(tags)
    }

    

    const handleSubmit = event => {
        event.preventDefault()
        console.log(splitCentury(century))
        splitCentury(century)
        // set century to .split(",")
        fetch (url, {
            method: "POST",
            body: JSON.stringify({ title, released, century, description, region, country, sources, expert, tags, image, weblink, applink, podcastlink }),
            // body: JSON.stringify({ title, released, century, description, region, country, sources, expert, tags, image, weblink, applink, podcastlink }),
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
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Title"
                    onChange={event => setTitle(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Release date"
                    onChange={event => setReleased(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Century"
                    // value={this.state.value} 
                    // onChange={set(this.value)}
                    onChange={event => setCentury(event.target.value)}
                    // onChange={splitCentury(value)}
                    />
                </Label>
                <Label>
                    <TextArea
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Description"
                    onChange={event => setDescription(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    width={"60%"}
                    type="text"
                    defaultValue="Region"
                    onChange={event => setRegion(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    width={"60%"}
                    type="text"
                    defaultValue="Country"
                    onChange={event => setCountry(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Sources"
                    onChange={event => setSources(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    width={"60%"}
                    type="text"
                    defaultValue="Expert"
                    onChange={event => setExpert(event.target.value)}
                    />
                </Label>
                <p>Tags</p>
                <WrapperRow>
                    <Checkbox 
                        name="Monarki" 
                        label="Monarki"
                        onChange={event => setTags(event.target.value)}/>
                    <Checkbox 
                        name="Politik" 
                        label="Politik"
                        onChange={event => setTags(event.target.value)}/>
                    <Checkbox 
                        name="Kultur" 
                        label="Kultur"
                        onChange={event => setTags(event.target.value)}/>
                    <Checkbox 
                        name="Vetenskap" 
                        label="Vetenskap"
                        value="Vetenskap"
                        onChange={event => setTags(event.target.value)}/>
                </WrapperRow>
                <Label>
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Image url"
                    onChange={event => setImage(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="SR weblink"
                    onChange={event => setWeblink(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="SR app link"
                    onChange={event => setApplink(event.target.value)}
                    />
                </Label>
                <Label>
                    <Input
                    required
                    width={"60%"}
                    type="text"
                    defaultValue="Apple podcast link"
                    onChange={event => setPodcastlink(event.target.value)}
                    />
                </Label>
                <Button 
                    type="submit"
                    onClick={handleSubmit}>Add episode</Button>
            </Form>
            
        </Wrapper>

    )
}