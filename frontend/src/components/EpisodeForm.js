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
    const [listOfTags, setListOfTags] = useState([])


    const url = "http://localhost:8080/episode";

    const splitCentury = (value) => {
        var split = value.split(",").map(year => {
            const trim = year.trim()
            return parseInt(trim)      
            }
        )
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

      const handleCheckbox = event => {
        if (listOfTags.includes(event.target.value)) {
            setListOfTags(
                listOfTags.filter(option => option !== event.target.value)
            );
        } else {
            setListOfTags([...listOfTags, event.target.value]);
        }
    };

    const handleSubmit = event => {

        event.preventDefault()
        const centuryArray = (splitCentury(century))
        fetch (url, {
            method: "POST",
            body: JSON.stringify({ title, released, century: centuryArray, description, region, country, sources, expert, tags: listOfTags, image, weblink, applink, podcastlink }),
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
                        label="Monarki"
                        value="Monarki"
                        checked={listOfTags.includes("Monarki")}
                        onChange={event => {
                          setMonarki(event.target.checked);
                          handleCheckbox(event);
                        }}/>
                    <Checkbox 
                        label="Politik"
                        value="Politik"
                        checked={listOfTags.includes("Politik")}
                        onChange={event => {
                          setPolitik(event.target.checked);
                          handleCheckbox(event);
                        }}/>
                    <Checkbox 
                        label="Religion"
                        value="Religion"
                        checked={listOfTags.includes("Religion")}
                        onChange={event => {
                          setReligion(event.target.checked);
                          handleCheckbox(event);
                        }}/>
                    <Checkbox 
                        label="Vetenskap"
                        value="Vetenskap"
                        checked={listOfTags.includes("Vetenskap")}
                        onChange={event => {
                          setVetenskap(event.target.checked);
                          handleCheckbox(event);
                        }}/>
                    <Checkbox 
                        label="Kultur"
                        value="Kultur"
                        checked={listOfTags.includes("Kultur")}
                        onChange={event => {
                          setKultur(event.target.checked);
                          handleCheckbox(event);
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