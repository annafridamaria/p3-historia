import React from 'react'
import {CheckboxInput, CheckBoxSquare} from 'components/Styled'

export const Checkbox = ({ name, label }) => {
    return (
            <CheckboxInput>
            <CheckBoxSquare
            type="checkbox"
            name={name}
            // checked={isSelected}
            // onChange={onCheckboxChange}
            />
            <p>{label}</p>
        </CheckboxInput>
    )    
}