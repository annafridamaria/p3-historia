import React, {useState} from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
// import { fetchProduct } from 'reducers/products'
import '../components/header.css'

// COMPONENTS
import {HeaderSVG} from '../components/HeaderSVG.js'
import {FilterButton} from '../components/FilterButton'

import MarieA from '../images/marieantoinette.png'

export const Header = () => {
    const [url, setUrl] = useState("http://localhost:8080/episodes")
    const history = useHistory();
  
    const reDirect = () => {
      history.push(`/login`);
    };

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

        <button 
                  //  type="submit"
                   value="haj" 
                   onClick={handleSubmit("hajen")}
                   >filter</button>
        <FilterButton 
        // title="Log in" onClick={ReDirect("login")}
        title="Log in" onClick={reDirect}/>
              
        <div className="filters">
          <button 
          onClick = {() => setUrl("http://localhost:8080/century/1500")}> 1500</button>
          <FilterButton
            title="Login" 
            onClick = {reDirect}
            />
          <FilterButton 
            title="Politik"/>
          <FilterButton 
            title="Monarki"
            url=""/>
          <FilterButton 
            title="Kultur"/>
        </div>
      </div>
    )
  }
