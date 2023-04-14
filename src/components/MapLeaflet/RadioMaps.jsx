import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const RadioMaps = ({ value, setValue }) => {
    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Block>
            <FormControl sx={{ width: '100%' }}>
                <FormLabel id="demo-controlled-radio-buttons-group" sx={{ fontWeight: '700', color: '#000' }}>Переключатель тепловой карты</FormLabel>
                <RadioGroup
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="controlled-radio-buttons-group"
                    value={value}
                    onChange={handleChange}
                    sx={{ display: 'flex', flexDirection: 'row', flexWrap: 'nowrap', padding: '5px 10px', }}
                >
                    <FormControlLabel value="2" control={<Radio />} label="Садики" />
                    <FormControlLabel value="3" control={<Radio />} label="Школы" />
                </RadioGroup>
            </FormControl>
        </Block>
    )
}

export default RadioMaps

const Block = styled('div')`
    position: absolute;
    bottom: 20px;
    left: 10%;
    width: 290px;
    z-index: 1000;
    background-color: #fff;
    padding: 10px 10px;
    border: 1px solid blue;
    border-radius: 6px;
`