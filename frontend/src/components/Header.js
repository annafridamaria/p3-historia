import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { fetchProduct } from 'reducers/products'
import '../components/header.css'

// COMPONENTS
import {HeaderSVG} from '../images/HeaderSVG.js'
import {Button} from '../components/Styled'

import MarieA from '../images/marieantoinette.png'

export const Header = () => {
    const [url, setUrl] = useState("http://localhost:8080/episodes")
    const history = useHistory();

    const [query, setQuery] = useState('')
    const dispatch = useDispatch()

    const handleSubmit = (value) => {
      // event.preventDefault()
      console.log(value)
      // dispatch(fetchProduct(barcode))
    }

  return (
      <div className="header">
        <div className="headerObjects">
          <img src={MarieA} alt="Marie Antoinette"/>
          <h1>P3 Historia</h1>
          
        </div>
        <HeaderSVG/>
        <Button
            type="button"
            title="Login"
            onClick={() => {
              history.push('/login')
         }}
            >Login</Button>
           
        <div className="filters">
          <Button 
            onClick = {() => setUrl("http://localhost:8080/century/1500")}> 1500</Button>
          
          <Button
            type="button"
            title="Politik">Politik</Button>
          <Button
            type="button"
            title="Monarki">Monarki</Button>
            <Button
            type="button"
            title="Religion">Religion</Button>
            <Button
            type="button"
            title="Vetenskap">Vetenskap</Button>
        </div>
      </div>
    )
  }
