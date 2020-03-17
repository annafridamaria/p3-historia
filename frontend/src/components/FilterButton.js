import React from 'react'
import { Button } from "./Styled"

export const FilterButton = ({title, url}) => {
        return(
        <Button>
        {title}
        {/* // onClick={(event) => setUrl({url})}>{title}
        // onChange={(event) => setName(event.target.value)}/> */}
        </Button>
        )
}