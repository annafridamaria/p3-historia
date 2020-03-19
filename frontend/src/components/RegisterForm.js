import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
import { Wrapper, Form, Input, Button } from './Styled'

export const RegisterForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [registered, setRegistered] = useState(false)

    const url = "http://localhost:8080/users";
    const history = useHistory()

    const handleSubmit = event => {
        event.preventDefault()
        fetch (url, {
            method: "POST",
            body: JSON.stringify({ name, email, password }),
            headers: { "Content-Type": "application/json" }
        })
        .then(res => {
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
           
            <Form
            width={"30%"}
            onSubmit={handleSubmit}>
                {registered && (
               <h1>Registred!</h1>
           )}
            <label>
                <Input 
                required
                type="text"
                defaultValue="Name"
                onChange={event => setName(event.target.value)}
                ></Input>
            </label>
            <label>
                <Input 
                required
                type="text"
                defaultValue="Email"
                onChange={event => setEmail(event.target.value.toLowerCase())}
                ></Input>
            </label>
            <label>
                <Input 
                required
                type="Password"
                defaultValue="Password"
                onChange={event => setPassword(event.target.value)}
                // value={password}
                ></Input>
            </label>
            <Button 
            type="submit"
            onClick={handleSubmit}>Register</Button>
            <Button
                type="button"
                title="Login"
                onClick={() => {
                history.push('/login')
            }}
                >Already a user?</Button>
        </Form>
       </Wrapper>
    )
}