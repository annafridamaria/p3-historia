import React, {useState} from 'react'
import { useHistory } from "react-router-dom";
import { Wrapper, Form, Label, Input, Button } from './Styled'

export const LoginForm = () => {
    const url = "http://localhost:8080/login"
    const history = useHistory();
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [authenticated, setAuthenticated] = useState(false)

    const handleLogin = event => {
        event.preventDefault()
        console.log(email, password)
        fetch(url, {
            method: "POST",
            body: JSON.stringify({ email : email, password : password }),
            headers: { "Content-Type": "application/json" }
        })
        .then (res => {
            console.log(res)
            if (!res.ok) {
                throw new Error("Your email and / or password was incorrect")
            } else {
                setAuthenticated(true)
                return res.json();
            }
        })
        .then (({accessToken}) => {
            if (accessToken) {
                window.localStorage.setItem("accessToken", accessToken)
                setAuthenticated(true)
                history.push('/user')
            }
        })
    }


    return (
        <Wrapper>
            <Form
            width={"30%"}
            >
                {authenticated && (
                    <h1>Logged in!</h1>
                )}
                <Label>
                    <Input 
                    required
                    type="text" 
                    // onfocus="this.value=''" 
                    defaultValue="Email"
                    onChange={event => setEmail(event.target.value.toLowerCase())}
                    ></Input>
                </Label>
                <Label>
                    <Input 
                    required
                    type="Password"
                    defaultValue="Password"
                    onChange={event => setPassword(event.target.value)}
                    ></Input>
                </Label>
                <Button 
                onClick={handleLogin}
                >Login</Button>
            </Form>
        </Wrapper>
    )
}