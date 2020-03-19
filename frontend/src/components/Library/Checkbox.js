import React from 'react'
import {CheckboxInput, CheckBoxSquare} from 'components/Styled'

export const Checkbox = ({ value, label, checked, onChange }) => {
    return (
            <CheckboxInput>
            <CheckBoxSquare
            type="checkbox"
            value={value}
            checked={checked}
            onChange={onChange}
            />
            <p>{label}</p>
        </CheckboxInput>
    )    
}