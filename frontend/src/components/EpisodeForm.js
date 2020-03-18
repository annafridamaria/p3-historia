import React, { useState }from 'react'
import { Wrapper, WrapperRow, Form, Label, Input, TextArea, Button } from './Styled'
import { Checkbox } from './Library/Checkbox'

export const EpisodeForm = () => {
    const [registred, setRegistered] = useState("")
    const [title, setTitle] = useState("")
    const [released, setReleased] = useState("")
    const [century, setCentury] = useState([])
    const [description, setDescription] = useState("")
    const [region, setRegion] = useState("")
    const [country, setCountry] = useState("")
    const [sources, setSources] = useState("")
    const [expert, setExpert] = useState("")
    const [image, setImage] = useState("")
    const [weblink, setWeblink] = useState("")
    const [applink, setApplink] = useState("")
    const [podcastlink, setPodcastlink] = useState("")
    const [kultur, setKultur] = useState(false)
    const [monarki, setMonarki] = useState(false)
    const [politik, setPolitik] = useState(false)
    const [religion, setReligion] = useState(false)
    const [vetenskap, setVetenskap] = useState(false)
    const [tags, setTags] = useState([])


    const url = "http://localhost:8080/episode";

    const splitCentury = (value) => {
        var split = value.split(",");
        var i = 0
        for(i=0; i < split.length; ++i) {
            parseInt(split[i]);
        }
        return split
    }

    const pushTags = event => {
        if (event.target.checked) {
          setTags([...tags, event.target.name]);
        } else {
          let cleandedTags = tags.filter(tag => tag !== event.target.name);
          setTags(cleandedTags);
        }
      };

    

    const handleSubmit = event => {
        event.preventDefault()
        console.log(splitCentury(century))
        splitCentury(century)
        fetch (url, {
            method: "POST",
            body: JSON.stringify({ title, released, century, description, region, country, sources, expert, tags, image, weblink, applink, podcastlink }),
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
                <WrapperRow
                width={"60%"}>
                    <Checkbox 
                        type="checkbox"
                        label="Monarki"
                        name="monarki"
                        checked={monarki}
                        onChange={event => {
                          setMonarki(event.target.checked);
                          pushTags(event);
                        }}/>
                    <Checkbox 
                        type="checkbox"
                        label="Politik"
                        name="politik"
                        checked={politik}
                        onChange={event => {
                          setPolitik(event.target.checked);
                          pushTags(event);
                        }}/>
                    <Checkbox 
                        type="checkbox"
                        label="Religion"
                        name="religion"
                        checked={religion}
                        onChange={event => {
                          setReligion(event.target.checked);
                          pushTags(event);
                        }}/>
                    <Checkbox 
                        type="checkbox"
                        label="Vetenskap"
                        name="vetenskap"
                        checked={vetenskap}
                        onChange={event => {
                          setVetenskap(event.target.checked);
                          pushTags(event);
                        }}/>
                    <Checkbox 
                        type="checkbox"
                        label="Kultur"
                        name="kultur"
                        checked={kultur}
                        onChange={event => {
                            setKultur(event.target.checked);
                            pushTags(event);
                        }}/>
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