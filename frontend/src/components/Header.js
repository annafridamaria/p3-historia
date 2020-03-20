import React, {useState} from 'react'
import { useHistory, useLocation } from 'react-router-dom'
// import { fetchProduct } from 'reducers/products'
import '../components/header.css'

// COMPONENTS
import {HeaderSVG} from '../images/HeaderSVG.js'
import {Button} from '../components/Styled'

import MarieA from '../images/marieantoinette.png'

export const Header = () => {
    const history = useHistory();
    const location = useLocation();
    
    function handleButtonClick(tagName) {
      const searchParams = new URLSearchParams(history.location.search);
      const aldreadyHasTagOnUrl = searchParams.getAll("tags").includes(tagName);
  
      // Removes the query parameter makin button works like a checkbox
      let search;
      if (aldreadyHasTagOnUrl) {
        search = searchParams.toString().replace(`tags=${tagName}`, "");
      } else {
        searchParams.append("tags", tagName);
        search = searchParams.toString();
      }
  
      history.push({ search });
    }

  return (
      <div className="header">
        <div className="headerObjects">
          <img src={MarieA} alt="Marie Antoinette"/>
          <h1>P3 Historia</h1>
          
        </div>
        <HeaderSVG/>
        {/* {location.login && ( */}
          <Button
            type="button"
            title="Login"
            onClick={() => {
              history.push('/login')
         }}>Login</Button>
        {/* )} */}

           
        <div className="filters">
          <Button
            type="button"
            title="Politik"
            onClick={() => handleButtonClick("Politik")}>Politik</Button>
          <Button
            type="button"
            title="Monarki"
            onClick={() => handleButtonClick("Monarki")}>Monarki</Button>
            <Button
            type="button"
            title="Religion"
            onClick={() => handleButtonClick("Religion")}>Religion</Button>
            <Button
            type="button"
            title="Vetenskap"
            onClick={() => handleButtonClick("Vetenskap")}>Vetenskap</Button>
         <Button
         type="button"
         title="Kultur"
         onClick={() => handleButtonClick("Kultur")}>Kultur</Button>
        </div>
      </div>
    )
  }
